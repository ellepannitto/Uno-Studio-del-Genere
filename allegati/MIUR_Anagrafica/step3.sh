#!/bin/bash

#Riduce la granularità della fasciazione

mkdir -p step4

for f in step3/miur*
do
	output="step4/"$( basename $f )
	
	sed -r 's/Assistente[^\t]*/Assistente/g;s/Associato[^\t]*/Associato/g;s/Ordinario[^\t]*/Ordinario/g;s/Ricercatore[^\t]*/Ricercatore/g;s/Straordinario[^\t]*/Straordinario/g' $f > $output

done
