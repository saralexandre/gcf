create database db_previsao;

use db_previsao;

CREATE TABLE  avaliacoes (
	avaliacao_id INT AUTO_INCREMENT NOT NULL,
    consulta_id INT NOT NULL,
	pontuacao INT NOT NULL,
	dt_avaliacao  DATE NOT NULL,
	PRIMARY KEY (avaliacao_id)
);

CREATE UNIQUE INDEX consultas_idx
 ON avaliacoes
 ( consulta_id );

CREATE TABLE  consultas (
	consulta_id INT AUTO_INCREMENT NOT NULL,
    cidade VARCHAR(32) NOT NULL,
    principal VARCHAR(32) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    temperatura FLOAT(2) NOT NULL,
    sensacao FLOAT(2) NOT NULL,
    temp_min FLOAT(2) NOT NULL,
    temp_max FLOAT(2) NOT NULL,
    pressao INT NOT NULL,
    umidade INT NOT NULL,
    dt_consulta  DATE NOT NULL,
    velocidade_vento FLOAT(2) NOT NULL,
	PRIMARY KEY (consulta_id)
);

ALTER TABLE avaliacoes ADD CONSTRAINT avaliacoes_consultas_fk
FOREIGN KEY (consulta_id)
REFERENCES consultas (consulta_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

drop database avaliacoes;