#Cria database: dasa
create database dasa;

#Criar tabela: usuario
create table usuario (
id INT(15) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
login VARCHAR(20) NOT null UNIQUE,
nome VARCHAR(50) NOT null,
senha VARCHAR(50) NOT null,
admin int(1) DEFAULT 0,
data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP, 
data_edicao DATETIME ON UPDATE CURRENT_TIMESTAMP
);

#Insere registro: usuario
insert into usuario values (null, 'admin', 'admin', '@admin2020', 1, now(), null);

#########################

#Cria tabela: localizacao
create table localizacao (
id INT(15) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(20) NOT null,
latitude decimal(9,6) NOT null,
longitude decimal(9,6) not null
);

#Insere registros: localizacao
insert into localizacao values (null, 'Gothan', 22.9137531, 43.5860654);
insert into localizacao values (null, 'Asgard', 23.6815315, 46.8754814);
insert into localizacao values (null, 'Whiterun', 33.4979426, 40.6080862);

#########################

#Cria tabela: heroi
create table heroi (
id INT(15) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(20) NOT null UNIQUE,
descricao VARCHAR(100),
localizacao int(15),
distancia_em_km int(20),
data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP, 
data_edicao DATETIME ON UPDATE CURRENT_TIMESTAMP
);

#Insere registro: heroi
insert into heroi values (null, 'Batman', 'The dark knight', 1, 5, now(), null);

#########################

#Criar tabela: log de criação, edição e remoção
create table log_registro (
id INT(15) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
id_usuario INT(15) NOT null,
id_tabela INT(15) NOT null,
tabela VARCHAR(20) not null,
tipo_acao VARCHAR(20) not null,
data_criacao date not null
);

