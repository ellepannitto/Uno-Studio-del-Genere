use organico_miur;

LOAD DATA LOCAL INFILE 'option_ateneo' INTO TABLE atenei 
FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\r\n'  
(id,nome);

LOAD DATA LOCAL INFILE 'elenco_ssd.txt' INTO TABLE ssd 
FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\r\n'  
(sigla, descrizione, area);

LOAD DATA LOCAL INFILE 'elenco_anni.txt' INTO TABLE anni 
FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n'  
(id, anno);
