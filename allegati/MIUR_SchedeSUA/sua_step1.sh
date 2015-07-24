#!/bin/bash

mkdir -p schedeSUA


for f in SUA/scheda_*
do
	n=$( basename $f | cut -d '_' -f2 ) 
	#output='schedeSUA/'"$n"
	if grep -q 'Docente di <br>riferimento per corso</th>' $f
	then
		cp $f schedeSUA
	fi
	
	echo "$n ok" 
done
