#!/bin/bash

mkdir -p step2


for f in step1/cnr*
do
	output="step2/"$( basename $f )
	grep -v 'RigaInt' $f | tr -d '\r\n' | sed -r 's/<tr>/\n/g' | sed -r 's/<td[^>]*>/\t/g' | sed -r 's/<[^>]*>//g' | sed -r 's/&nbsp;/ /g' | sed -r '/^\s*$/d' | sed -r 's/ +\t/\t/' | sed -r 's/\t +/\t/' | tr -s '\t' | sed -r 's/^\t//' | sed -r 's/Personale a tempo indeterminato//g' | sed -r 's/Personale a tempo determinato//g'| sed -r 's/\s+$//'   > $output


	echo 'fine file '$( basename $f )

done
