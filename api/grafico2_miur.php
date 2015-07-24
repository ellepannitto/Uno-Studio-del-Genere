<?php

	/**
	 * 
	 * grafico2_miur.php
	 * 
	 * Estrae dal database organico_miur i dati necessari per la visualizzazione del secondo grafico dell'articolo:
	 *  il totale dell'organico di sesso femminile nei vari anni accademici raggruppati per superarea dell'SSD di appartenenza
	 * 
	 * restituisce i dati suddetti codificati in formato JSON
	 * 
	 * */

	header('Content-Type: application/json');
	require('../php/config_miur.php');
	
	$query_anno_minimo_e_massimo = "select max(anno_massimo) as massimo , min(anno_minimo) as minimo from fascia";
	$a = select ($mysqli,$query_anno_minimo_e_massimo );
	
	$query_categorie = "select distinct (superarea) from ssd";
	$array_cat = mysqli_query ($mysqli,$query_categorie ) ;
	$cat=array();
	
	$anno_minimo = $a[0]['minimo'];
	$anno_massimo = $a[0]['massimo'];
	
	$punti=array();
	
	for ($i=$anno_minimo; $i<=$anno_massimo; $i++)
	{
		$query="SELECT s.superarea, count(distinct(o.id)) as num
				FROM organico o join ssd s on o.ssd=s.sigla join fascia f on f.id=o.id 
				WHERE f.anno_minimo<=$i and f.anno_massimo>=$i and o.sesso='F' 
				GROUP BY s.superarea";
		$punti []= array ('dati'=>select ($mysqli, $query),'anno'=>$i);
	}
	
	while ($c=mysqli_fetch_array($array_cat))
	{
		$cat[]=$c[0];
	}
	
	$risultato = array ('punti'=>$punti, 'categorie'=>$cat); 
	
	echo json_encode ($risultato);

?>
