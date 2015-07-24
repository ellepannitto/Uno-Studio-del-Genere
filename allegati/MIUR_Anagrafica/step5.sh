#!/bin/bash


query="select nome_completo, ssd, ateneo, sesso, fascia, min(anni.anno), max(anni.anno)
from appoggio join anni on appoggio.anno=anni.id
group by nome_completo, sesso, ssd, ateneo, fascia
order by nome_completo, ateneo, ssd;"

mysql --local-infile -u root --password='mypwd' organico_miur -e "$query" | tail -n +2 > raggruppamento_appoggio.txt

i=0
prec=''

while read riga
do
	anag=$(echo "$riga" | cut -f1-4)
	
	if [ "$anag" != "$prec" ]
	then 
		((i++))
		prec="$anag"
	fi
	echo -e "$i\t$riga"
	
	
done < raggruppamento_appoggio.txt > elenco_organico.txt
