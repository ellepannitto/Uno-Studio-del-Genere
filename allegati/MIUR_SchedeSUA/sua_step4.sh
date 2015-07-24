#!/bin/bash

echo "use organico_miur;" > load_sua.sql

for f in schedeSUAstep3/_scheda_*
do
	echo "load data local infile '$f' into table docenza_di_riferimento FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (@d, @d, @nome, @cognome, @d, @d, @d, @d, @d, aa, cdl_nome, cdl_classe ) set docente=(select max(id) from organico where nome_completo like concat('%',@nome,' ',@cognome, '%'));" >> load_sua.sql 
	
	echo "fine file "$( basename $f )
done
