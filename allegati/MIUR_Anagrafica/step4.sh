#!/bin/bash

echo 'use organico_miur;' > insert_step4.sql

for file in step4/miur*
do
	load="LOAD DATA LOCAL INFILE '$file' INTO TABLE appoggio FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (fascia, nome_completo, @dummy, ssd, @dummy, @dummy, ateneo, anno, sesso);"
	echo $load >> insert_step4.sql 
done
