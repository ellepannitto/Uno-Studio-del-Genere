<?PHP
	
	/**
	 * 
	 *  ricerca_cnr.php
	 * 
	 * esegue la ricerca sul database del CNR.
	 *  L'interrogazione è composta da tre condizioni, e vengono restituiti solo i risultati che le soddisfano tutte.
	 * 
	 *  La prima condizione verifica che la struttura appartenga alla lista di strutture che l'utente ha selezionato
	 *  La seconda condizione verifica che il profilo professionale sia tra quelli selezionati dall'utente
	 *  La terza condizione verifica che l'area disciplinare della struttura sia tra quelle selezionate dall'utente
	 * 
	 * La pagina riceve le scelte dell'utente tramite il metodo POST, in mancanza di uno o più parametri, la condizione corrispondente è considerata sempre verificata e pertanto non restringe il campo della ricerca
	 * La pagina restituisce come risultato il numero di record che soddisfano le condizioni, suddivisi per sesso. 
	 * 
	 * */
	
	header('Content-Type: application/json');
	require('../php/config_cnr.php');
	
	#var dati_cnr={'profilo':[], 'sigla': [], 'atenei': []};
	
	$atenei="TRUE";
	$fasce="TRUE";
	$superaree="TRUE";
		
	if ( isset($_REQUEST["atenei"]))
	{
		$atenei="personale.sede in ('".implode ("','",$_REQUEST["atenei"])."')";
	}
	
		
	if ( isset($_REQUEST["profilo"]))
	{
		$fasce="personale.profilo in ('".implode ("','",$_REQUEST["profilo"])."')";
	}
	
	if ( isset($_REQUEST["sigla"]) /*&& count($_REQUEST["superaree"])>0*/ )
	{
		$superaree="sigle.superarea in ('".implode ("','",$_REQUEST["sigla"])."')";
	}
	
	
	
	$select="SELECT personale.sesso, count(distinct(personale.matricola)) as numero 
			 FROM personale join struttura on personale.sede=struttura.codice join sigle on sigle.sigla=struttura.sigla
			 WHERE ($atenei) and ($fasce) and ($superaree) 
			 GROUP BY personale.sesso";
	
	//debug
	//echo $select;
	
	$r=select($mysqli, $select);

	echo json_encode($r);
		
?>
