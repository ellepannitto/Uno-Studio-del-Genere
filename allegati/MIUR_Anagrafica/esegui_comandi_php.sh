#!/bin/bash

mkdir -p google_geolocate

while read r
do

	comando=$( echo "$r" |  cut -f2 )
	id=$( echo "$r" |  cut -f1 )
	
	output='google_geolocate/locate_'"$id"
	
	$comando > $output
	
done < lista_comandi_php.txt
