#!/bin/bash


#gli array sono stati creati estraendo i valori su cui iterare dagli attributi "values" delle select della pagina di interfaccia al database del MIUR
atenei=( "02" "48" "D1" "38" "51" "03" "C3" "46" "04" "05" "06" "07" "50" "08" "C5" "53" "D5" "D6" "09" "10" "C9" "11" "C7" "55" "13" "14" "15" "C6" "16" "56" "57" "H1" "58" "A9" "17" "39" "18" "49" "41" "42" "59" "19" "20" "21" "22" "23" "99" "C8" "24" "43" "44" "01" "47" "E9" "D7" "C0" "26" "27" "A7" "A0" "61" "B0" "60" "A6" "12" "28" "C4" "29" "30" "97" "D8" "D9" "E2" "D3" "E4" "D0" "E7" "E1" "D4" "E0" "E8" "A8" "31" "32" "62" "33" "45" "35" "34" "63" "D2" "36" "37" "40" "S1" "S0" )
limite=( "0" "15" "14" "13" "12" "11" "10" "9" "8" "7" "1" "2" "3" "4" "5" "6" )


for i in ${atenei[@]}
	do
		for j in ${limite[@]}
		do
			curl http://cercauniversita.cineca.it/php5/docenti/vis_docenti.php -d 'universita='$i'&facolta=00&settore=0000&area=0000&qualifica=**&situazione_al='$j'&radiogroup=P&cognome=&nome=&conferma=2&facolta_st=00&settorec=0000&macro=0000&testuale=1&nomefile=%24nomefile&pagina=%5CA'> miur_${i}_${j}.xls

			#evito nei limiti del possibile che il server rifiuti troppe chiamate di seguito
			#poiché la chiamata è istantanea limito un po' il traffico per ridurre il rischio di perdere risultati
			sleep 1
		done
	done
