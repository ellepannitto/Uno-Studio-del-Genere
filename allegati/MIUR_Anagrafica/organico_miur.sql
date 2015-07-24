drop database organico_miur;
create database organico_miur;

use organico_miur;

create table if not exists ssd
(
	sigla varchar(20) not NULL PRIMARY KEY,
	descrizione varchar(100),
	area varchar(100) not NULL,
	superarea varchar(100) not NULL
);

create table if not exists atenei
(
	id char(2) not NULL PRIMARY KEY,
	nome varchar(50) not NULL,
	latitudine varchar(50),
	longitudine varchar(50),
	dimensione int
);

create table if not exists anni
(
	id int not NULL PRIMARY KEY,
	anno int
);

create table if not exists appoggio
(
	id int not NULL AUTO_INCREMENT PRIMARY KEY,
	fascia varchar(100) not NULL,
	nome_completo varchar(60) not NULL,
	ssd varchar(20),
	ateneo char(2) not NULL,
	anno int not NULL,
	sesso char(1),
	foreign key (ateneo) references atenei(id),
	foreign key (anno) references anni(id)
);

create table if not exists organico
(
	id int not NULL PRIMARY KEY,
	nome_completo varchar(60) not NULL,
	ssd varchar(20),
	ateneo char(2) not NULL,
	sesso char(1),
	foreign key (ateneo) references atenei(id)
);

create table if not exists fascia
(
	id int not NULL,
	fascia varchar(100) not NULL,
	anno_minimo int not NULL,
	anno_massimo int not NULL,
	primary key(id, fascia),
	foreign key(id) references organico(id)
);

create table if not exists docenza_di_riferimento
(
	id int not NULL AUTO_INCREMENT PRIMARY KEY,
	docente int not NULL,
	cdl_nome varchar(50),
	cdl_classe varchar(50),
	aa varchar(30),
	foreign key (docente) references organico(id)
);

create table if not exists docenza_di_riferimento
(
	id int not NULL AUTO_INCREMENT PRIMARY KEY,
	docente int not NULL,
	aa varchar(30),
	cdl_nome varchar(50),
	cdl_classe varchar(50)
);
