#!/bin/bash

#Lo script estrae i nomi da etichettare ed aggiunge ordinatamente le etichette ad ogni record

mkdir -p step3

for f in step2/miur*
do
	output="step3/"$( basename $f )
	
	cut -f2 $f | sed -r 's/([A-Z][^a-z]*[A-Z]'\''? )+//g' | tr -s ' ' | cut -d ' ' -f1 | sed 's/'\''/\\'\''/g' |  xargs ./gender | paste $f - | head -c -1 > $output
	
	echo 'fine file '$( basename $f )
done
