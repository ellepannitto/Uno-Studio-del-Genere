<?php

	$indirizzi_get=array("PARMA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PARMA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"TORINO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "TORINO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"GENOVA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "GENOVA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"TRENTO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "TRENTO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"ROMA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "ROMA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"NAPOLI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "NAPOLI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PISA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PISA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MILANO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MILANO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PALERMO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PALERMO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SEGRATE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SEGRATE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"CATANZARO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "CATANZARO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PORANO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PORANO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LEGNARO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LEGNARO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MONTELIBRETTI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MONTELIBRETTI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MONTEROTONDO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MONTEROTONDO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LODI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LODI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BARI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BARI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"FIRENZE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "FIRENZE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LIVORNO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LIVORNO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"GROSSETO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "GROSSETO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BOLOGNA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BOLOGNA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SASSARI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SASSARI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"RENDE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "RENDE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"POZZUOLI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "POZZUOLI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"CATANIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "CATANIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PADOVA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PADOVA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"TRIESTE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "TRIESTE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"COMO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "COMO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SESTO FIORENTINO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SESTO FIORENTINO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MESSINA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MESSINA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LECCE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LECCE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MASSA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MASSA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SIENA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SIENA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"REGGIO DI CALABRIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "REGGIO DI CALABRIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PAVIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PAVIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"CHIETI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "CHIETI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"CAGLIARI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "CAGLIARI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"TITO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "TITO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PERUGIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PERUGIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BRINDISI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BRINDISI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"FISCIANO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "FISCIANO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BRUGHERIO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BRUGHERIO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"FAENZA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "FAENZA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LAMEZIA TERME"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LAMEZIA TERME" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"ORISTANO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "ORISTANO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"GRUGLIASCO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "GRUGLIASCO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"AVELLINO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "AVELLINO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"VENEZIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "VENEZIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"ANCONA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "ANCONA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LESINA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LESINA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LERICI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LERICI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MANGONE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MANGONE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"VIGEVANO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "VIGEVANO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"ERCOLANO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "ERCOLANO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"LECCO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "LECCO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"FERRARA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "FERRARA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SAN MICHELE ALL'ADIGE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SAN MICHELE ALL'ADIGE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SAN GIULIANO MILANESE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SAN GIULIANO MILANESE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"L'AQUILA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "L'AQUILA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"VERBANIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "VERBANIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BIELLA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BIELLA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"CASTELLAMMARE DEL GOLFO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "CASTELLAMMARE DEL GOLFO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MAZARA DEL VALLO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MAZARA DEL VALLO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"TARANTO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "TARANTO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"TRAPANI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "TRAPANI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BRESCIA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BRESCIA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"GRENOBLE"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "GRENOBLE" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MODENA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MODENA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"SALERNO"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "SALERNO" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"PORTICI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "PORTICI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"POTENZA"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "POTENZA" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"MONCALIERI"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "MONCALIERI" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE",
"BRUXELLES"=> "https://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode( "BRUXELLES" )."&key=AIzaSyBNbSHpD55qfU-m2WbrhoPEEIAHFEIIKVE");
	
	
	foreach ($indirizzi_get as $citta=>$indirizzo ){
		echo "$citta\tcurl ".$indirizzo."\n";
	};

?>

