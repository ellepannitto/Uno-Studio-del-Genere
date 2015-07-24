<?php
	
	function openDB($servername="localhost", $username, $password, $database)
	{
		// Create connection
		$conn = mysqli_connect($servername, $username, $password, $database);
		// Set UTF 8
		mysqli_query($conn, "SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
		// Check connection
		if (!$conn) die("Connection failed: " . mysqli_connect_error());
		return $conn;
	}


	/******************************
	 * Lettura dei records        *
	 ******************************/
	function select($conn,$sql)
	{
		$resultSet = mysqli_query($conn, $sql);	
		// Controllo esito query
		if(!$resultSet){
			print("Select $sql failed: " . mysqli_error($conn));
			return(NULL);
		}	
		// Sposto i records in un array numerico
		$records=array();
		while ($record = mysqli_fetch_assoc($resultSet)) $records[]=$record;
		// liberazione della memoria impegnata dal result set
		mysqli_free_result($resultSet);	
		return $records;
	}
	
	$stdin = fopen('php://stdin', 'r');
	$log = fopen('log_inserimenti.txt', 'w');
	$mysqli = openDB("localhost", "root", "mypwd", "organico_miur");

	$nomi = array ("Torino","Politecnico Torino","Piemonte orientale","Scienze Gastronomiche","Valle d'Aosta","Genova","LIUC","Insubria","e-Campus","Milano","Politecnico Milano","Bocconi Milano","Cattolica Sacro Cuore","IULM","San Raffaele","Milano-Bicocca","Bergamo","Brescia","Pavia","Libera  Bolzano","Trento","Verona","Ca' Foscari Venezia","Iuav Venezia","Padova","Udine","Trieste","Parma","Modena e Reggio Emilia","Bologna","Ferrara","Urbino","Politecnica delle Marche","Macerata","Camerino","Firenze","Pisa","Siena","stranieri Siena","Perugia","stranieri Perugia","Tuscia","Roma La Sapienza","Roma Tor Vergata","LUMSA","Guido Carli","Roma Foro Italico","Roma Tre","Campus Bio-Medico Roma","UNINT","Guglielmo Marconi","Unitelma","Europea Roma","UNINETTUNO","Mercatorum","Cusano","telematica San Raffaele","Link","Cassino","Sannio","Fortunato","Napoli Federico II","Parthenope","L'Orientale Napoli","Suor Orsola Benincasa Napoli","Seconda  Napoli","Pegaso","Salerno","L'Aquila","Teramo","Chieti","Leonardo da Vinci","Molise","Foggia","Bari","Politecnico Bari","Jean Monnet","Salento","Basilicata","Calabria","Catanzaro","Mediterranea Reggio Calabria","stranieri Reggio Calabria","Palermo","Messina","KORE Enna","Catania","Sassari","Cagliari");
	$pop = array (64801,28761,10030,265,1162,32683,1762,8511,6683,60262,40132,13390,36387,4197,2001,31924,14335,14147,21372,2658,16508,21887,19261,4684,58190,15179,16474,25020,19514,77305,15484,13800,15639,9773,6914,49863,45001,15746,1133,23487,1091,7342,105885,30512,6048,7624,2196,35302,1564,1194,14305,1645,871,8709,249,11491,969,1380,8554,6193,538,79314,14774,10302,8124,26718,3968,35010,23926,6628,28461,229,7304,9407,49877,10615,1288,18845,7301,30454,10004,7403,752,43359,26379,6008,49621,13288,27610);
	
	for ($i=0; $i<count($nomi); $i++)
	{
		$n=mysqli_real_escape_string($mysqli,str_replace(" ","%","%".$nomi[$i]."%"));
		
		$querySelect = "select id,nome from atenei where nome like '%$n%'\n";
		
		$a=select ($mysqli, $querySelect);
		//c'è un solo elemento con quel nome: lo inserisco
		if (count($a) >= 1)
		{
			$nome = $a[0]["nome"];
			$querySet = "UPDATE atenei SET dimensione=".$pop[$i]." WHERE id='".$a[0]["id"]."'";
			$msg="$n => $nome\n";
		}
		else if (count($a) == 0)
		{
			$querySet = "";
			$msg="$n non trovato\n";
		}	
		if ($querySet)
		{
			mysqli_query ($mysqli,$querySet);
		}
		fprintf ($log,"%s\n",$msg);
	}
	
?>

