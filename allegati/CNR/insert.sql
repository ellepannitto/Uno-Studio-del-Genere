use organico_cnr;

LOAD DATA LOCAL INFILE 'codici_cnr' INTO TABLE struttura 
FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n'  
(sigla, loc, codice);
