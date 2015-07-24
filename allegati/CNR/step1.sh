#!/bin/bash

mkdir -p step1


for f in cnr/cnr*
do
	output_prova="step1/prova"$( basename $f )
	if ! grep -q 'Dati Richiesti non trovati' $f
	then
		tail -n +10 $f > $output_prova

		output="step1/"$( basename $f )
		
		n=0
		t=0
		
		riga_inizio=$( grep -n 'PERSONALE APPARTENENTE ALLA STRUTTURA  PRESSO ALTRE' $output_prova | cut -d ':' -f1 )
		riga_fine=$( grep -n 'PERSONALE APPARTENENTE AD ALTRE' $output_prova  | head -n1 | cut -d ':' -f1 )
		
		(( riga_inizio-=2 ))
		(( riga_fine+=6 ))
		
		head -n $riga_inizio $output_prova > $output
		tail -n +$riga_fine $output_prova | head -n -4 >> $output
			
		echo "riga inizio: $riga_inizio riga fine: $riga_fine"
		echo 'fine file '$( basename $f )
	fi
	
done

rm step1/prova*
