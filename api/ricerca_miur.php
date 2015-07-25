<?PHP
	
	/**
	 * 
	 *  ricerca_miur.php
	 * 
	 * esegue la ricerca sul database del miur.
	 *  L'interrogazione è composta da cinque condizioni, e vengono restituiti solo i risultati che le soddisfano tutte.
	 * 
	 *  La prima condizione verifica che l'ateneo appartenga alla lista di atenei che l'utente ha selezionato
	 *  La seconda condizione verifica che la fascia di abilitazione sia tra quelle selezionate dall'utente
	 *  La terza condizione verifica che l'area disciplinare sia tra quelle selezionate dall'utente
	 *  La quarta condizione verifica che il professore abbia insegnato nel periodo selezionati dall'utente
	 *  La quinta condizione verifica che il docente sia stato scelto come referente per un corso di laurea o laurea magistrale a seconda della scelta dell'utente
	 * 
	 * La pagina riceve le scelte dell'utente tramite il metodo POST, in mancanza di uno o più parametri, la condizione corrispondente è considerata sempre verificata e pertanto non restringe il campo della ricerca
	 * La pagina restituisce come risultato il numero di record che soddisfano le condizioni, suddivisi per sesso. 
	 * 
	 * */
	
	header('Content-Type: application/json');
	require('../php/config_miur.php');
	
	#var dati={'superaree':[], 'fasce': [], 'atenei': [], 'anni': [], 'cdl':[]}
	
	

	
	$atenei="TRUE";
	$fasce="TRUE";
	$superaree="TRUE";
	$anno="TRUE";
	$cdl="TRUE";
	
	if ( isset($_REQUEST["atenei"]) /*&& count($_REQUEST["atenei"])>0*/ )
	{
		$atenei="organico.ateneo in ('".implode ("','",$_REQUEST["atenei"])."')";
	}
	
	if ( isset($_REQUEST["fasce"]) /*&& count($_REQUEST["fasce"])>0*/ )
	{
		$fasce="fascia.fascia in ('".implode ("','",$_REQUEST["fasce"])."')";
	}
	
	if ( isset($_REQUEST["superaree"]) /*&& count($_REQUEST["superaree"])>0*/ )
	{
		$superaree="ssd.superarea in ('".implode ("','",$_REQUEST["superaree"])."')";
	}
	
	if ( isset($_REQUEST["anni"]) )
	{
		$annomin=$_REQUEST["anni"][0];
		$annomax=$_REQUEST["anni"][1];
	
		$anno="(fascia.anno_minimo<=$annomax and fascia.anno_massimo>=$annomin)";
	
	//not(fascia.anno_minimo>$annomax or fascia.anno_massimo<$annomin)
	//fascia.anno_minimo<=$annomax and fascia.anno_massimo>=$annomin
	
	}
	
	//se $_REQUEST["cdl"] ha 2 elementi, l'utente vuole sapere i dati relativi a L ed LM. Quindi la condizione $cdl rimane TRUE per includere tutti i risultati
	// altrimenti, la condizione $cdl diventa tale da includere solo i risultati relativi a L oppure LM
	if ( isset($_REQUEST["cdl"]) && count($_REQUEST["cdl"])==1 )
	{
		$cdl="docenza_di_riferimento.cdl_classe not like 'LM%'";
		if ($_REQUEST["cdl"][0]==="LM_check")
		{
			$cdl="docenza_di_riferimento.cdl_classe like 'LM%'";
		}
	}
	
	
	$select1="SELECT organico.sesso, count(distinct(organico.id)) as numero 
			 FROM organico join ssd on organico.ssd=ssd.sigla join fascia on fascia.id=organico.id join docenza_di_riferimento on docenza_di_riferimento.docente=organico.id
			 WHERE ($atenei) and ($fasce) and ($superaree) and ($anno) and ($cdl) 
			 GROUP BY organico.sesso";
	
	
	$select2="SELECT organico.sesso, count(distinct(organico.id)) as numero 
			 FROM organico join ssd on organico.ssd=ssd.sigla join fascia on fascia.id=organico.id
			 WHERE ($atenei) and ($fasce) and ($superaree) and ($anno) 
			 GROUP BY organico.sesso";
	//debug
	//echo $select;
	if( isset($_REQUEST["cdl"]) && count($_REQUEST["cdl"])>0 )
	{
		$r=select($mysqli, $select1);
	}
	else
	{
		$r=select($mysqli, $select2);
	}
	
	if(count($r)>0)
	{
		echo json_encode($r);
	}
	else
	{
		echo json_encode(array(array('sesso'=>'M', 'numero'=>0), array('sesso'=>'F', 'numero'=>0)));
	}
	
	
?>
