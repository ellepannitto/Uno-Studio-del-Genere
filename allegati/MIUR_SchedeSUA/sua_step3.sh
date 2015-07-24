#!/bin/bash

mkdir -p schedeSUAstep3

for f in schedeSUAstep2/scheda_*
do
	output='schedeSUAstep3/'$( basename $f )
	
	anno=$( sed '1q;d' $f | grep -o -E "[0-9]+/[0-9]+" )
	nome=$( sed '3q;d' $f | cut -d '>' -f7 | cut -d '<' -f1 )
	classe=$( sed '4q;d' $f | cut -d '>' -f7 | cut -d ' ' -f1 )
	
	stringa="\t$anno\t$nome\t$classe"
	
	riga=$( grep -n 'Docenti' $f | cut -d ':' -f1 )
	(( riga+=3 ))
	
	tail -n +"$riga" $f | sed -r 's/^[[:space:]]*//g' | sed -r 's/<td>/\t/g' | sed -r 's/<[^>]*>//g' > $output
	
	
	output2='schedeSUAstep3/_'$( basename $f )
	
	n=$( wc -l $output | cut -d ' ' -f1)
	
	for (( i=0; i<$n; i++ ))
	do
		echo -e "$stringa"  
	done | paste $output - > $output2
	
done
