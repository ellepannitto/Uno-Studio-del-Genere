#!/bin/bash

echo 'use organico_cnr;' > insert_step4.sql

mkdir -p step3

for f in step2/cnr*
do
	temp='step3/'"$( basename $f )"

	nomi=$( cut -f2 $f |  awk '{print $NF}' )
	genere=$( echo "$nomi" | sed -r 's/'\''/\\'\''/g' | xargs ./gender )

	st=$( basename $f  | cut -d '_' -f2 )
	
	echo "$genere" | paste $f - | sed 's/$/\t'"$st"'/g'> $temp

	load="LOAD DATA LOCAL INFILE '$temp' INTO TABLE personale FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (matricola, nome_completo, @dummy, livello, profilo, rapporto, sesso, sede);"
	
	echo $load >> insert_step4.sql 
	
	echo "fine file $( basename $f )"
done
