use organico_miur;
LOAD DATA LOCAL INFILE 'elenco_organico.txt' INTO TABLE organico FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (id, nome_completo, ssd, ateneo, sesso, @dummy, @dummy, @dummy);
LOAD DATA LOCAL INFILE 'elenco_organico.txt' INTO TABLE fascia FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' (id, @dummy, @dummy, @dummy, @dummy, fascia, anno_minimo, anno_massimo);
