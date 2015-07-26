<?PHP
	/**
	 * 
	 * grafico1_miur.php
	 * 
	 * Estrae dal database organico_miur i dati necessari per la visualizzazione del primo grafico dell'articolo:
	 *  il totale dell'organico nei vari anni accademici raggruppati per sesso
	 * 
	 * restituisce i dati suddetti codificati in formato JSON
	 * 
	 * */
	header('Content-Type: application/json');
	require('../php/config_miur.php');
	
	$risultato=array();
	
	/*se il parametro anno è stato passato dal js allora*/
	if ( isset($_REQUEST["anno"]))
	{
           /*per ogni anno fa 1 query che aggiunge all'array e passa il risultato in json al js a cui serve per generare il grafico*/ 
 		foreach($_REQUEST["anno"] as $k=>$v)
		{
			$v=intval($v);
			$query="SELECT organico.sesso, count(*) as num FROM organico join fascia on organico.id=fascia.id WHERE fascia.anno_minimo<=$v and fascia.anno_massimo>=$v GROUP BY organico.sesso";
			$r=select($mysqli, $query);
			$risultato[]=$r;
		}
	}
	
	
	echo json_encode($risultato);
	
?>
