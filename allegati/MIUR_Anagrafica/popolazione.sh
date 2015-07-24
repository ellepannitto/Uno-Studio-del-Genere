#!/bin/bash


temp=uni_popolazione.txt
output=popolazione2.txt

tail -n +5 'popolazione.csv' | tr -d '.' | sed -r 's/Università//g;s/ di / /g;s/ studi / /g;s/ degli / /g;s/ del / /g;s/"//g;s/ dell'\'' / /g;s/ della / /g;' | sed -r 's/\t /\t/g' | sed -r 's/ \t/\t/g' | cut -f2 | sed -r 's/ ?\([^\)]*\) ?//' > $temp
popolazione=$( tail -n +5 'popolazione.csv' | tr -d '.' | sed -r 's/Università//g;s/ di / /g;s/ studi / /g;s/ degli / /g;s/ del / /g;s/"//g;' | sed -r 's/\t /\t/g' | sed -r 's/ \t/\t/g' | cut -f5 )

echo "$popolazione" | paste $temp - > $output
