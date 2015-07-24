drop database organico_cnr;
create database organico_cnr;

use organico_cnr;

create table if not exists struttura
(
	sigla varchar(10) not NULL,
	loc varchar(100) not NULL,
	codice char(6) not NULL PRIMARY KEY,
	latitudine varchar(50),
	longitudine varchar(50)	
);

create table if not exists personale
(
	matricola varchar(20) not NULL PRIMARY KEY,
	sesso char(1) not NULL,
	sede char(6) not NULL,
	nome_completo varchar(50) not NULL,
	livello char(2),
	profilo varchar (50),
	rapporto varchar (50),
	foreign key (sede) references struttura(codice)
	
);
