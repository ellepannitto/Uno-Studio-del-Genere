#!/bin/bash

#Lo script considera il contenuto del file dal punto in cui trova il tag '<tbody>' in poi, pulisce l'html secondo lo schema:
# <tr ... > -> \n (cambia record)
# <td ... > -> \t (cambia campo)
# elimina altre marcature html irrilevanti, le righe rimaste bianche e gli spazi multipli
#inserisce in coda a ogni record l'ateneo e l'anno di riferimento, ricavati dal nome del file

mkdir -p step2

for f in step1/miur*
do
	#alcune ricerche potrebbero non aver prodotto risultati (alcuni atenei sono dati più tardi), quindi considero solo i file in cui non è presente la stringa che indica l'assenza di risultati
	
	if ! grep -q 'La ricerca richiesta non ha prodotto risultati validi.' $f
	then
		ateneo=$( basename $f  | cut -d '_' -f2 )
		anno=$( basename $f | cut -d '_' -f3 )
		stringa="\t"$ateneo"\t"$anno
		
		output="step2/"$( basename $f )
		
		sed -n '/<tbody>/,$p' $f | tail -n -1 |	sed 's/<tr[^>]*>/\n/g' | sed 's/<td[^>]*>/\t/g'| LC_ALL=C sed 's/<[^>]*>//g' | sed -r 's/^\t+//g;s/\t+$//g;s/&nbsp;/ /g' | sed '/^\s*$/d' | sed -r 's/( |\t)*$/'$stringa'/g' | sed -r 's/( \t|\t )/\t/g' > $output
		
		echo 'fine file '$( basename $f )
	else
		echo 'file '$( basename $f )' non esaminato'
	fi
done
