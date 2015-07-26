<?PHP
	
	/**
	 * 
	 * parametri_cnr.php
	 * 
	 * Genera gli elementi HTML necessari per eseguire una ricerca sul database del CNR:
	 * 
	 * A seconda dei parametri passati con il metodo POST, restituisce:
	 *  - una checkbox per ogni profilo professionale presente nel db, oppure
	 *  - una checkbox per ogni superarea presente nel db, oppure
	 *  - un array con le latitudini e longitudini di ogni struttura, codificato in formato JSON 
	 *  
	 * 
	 * */
	
	header('Content-Type: application/json');
	require('../php/config_cnr.php');
	
	if ( isset($_REQUEST["id"]) )
	{
		switch($_REQUEST["id"]){
			
			case "profilo":
			{
				$r=select($mysqli, "SELECT distinct profilo FROM personale ORDER BY profilo");
				echo json_encode($r);
				break;
			}
			
			case "sigla":
			{
				$r=select($mysqli, "SELECT distinct superarea FROM sigle");
			
				echo json_encode($r);
				break;
			}
			
			case "latlng":
			{
				$r=select($mysqli, "SELECT codice as id, sigla as nome, latitudine, longitudine FROM struttura");
				
				for($i = 0; $i < count($r); $i++) 
				{
					$r[$i]['latitudine']=floatval($r[$i]['latitudine']);
					$r[$i]['longitudine']=floatval($r[$i]['longitudine']);
				}
				echo json_encode($r);
				break;
			}
		}
	}
?>
