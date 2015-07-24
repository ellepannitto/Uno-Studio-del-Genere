#!/bin/bash

mkdir -p schedeSUAstep2

for f in schedeSUA/scheda_*
do
	output="schedeSUAstep2/"$( basename $f )
	
	prima_riga=$( grep -n 'a\.a' $f | head -n 1 | cut -d ':' -f1 )
	
	riga_inizio=$( grep -n 'strong>Universit' $f | cut -d ':' -f1)
	riga_fine=$( grep -n 'Rappresentanti Studenti' $f | cut -d ':' -f1 )
	(( riga_fine-=3 ))
	
	tail -n +$prima_riga $f | head -n 1 > $output
	
	
	tail -n +$riga_inizio $f | head -n $(( riga_fine - riga_inizio )) >> $output	
	
	echo "riga inizio: $riga_inizio riga fine: $riga_fine"
	echo 'fine file '$( basename $f )
	
	
done
