Use ecommerce;

SHOW TABLES;


RENAME TABLE productimages TO productImages;

--25/08/2020
CREATE TABLE
IF NOT EXISTS produtos
(
  id_produto INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR
(45) not null,
  preco FLOAT not null,
  imagem_produto VARCHAR
(500)
);



CREATE TABLE
IF NOT EXISTS pedidos
(
  id_pedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_produto INT NOT NULL,
  quantidade SMALLINT NOT NULL,
  FOREIGN KEY
(id_produto) REFERENCES produtos
(id_produto)
);

CREATE TABLE
IF NOT EXISTS usuarios
(
	id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR
(100) NOT NULL,
    senha VARCHAR
(100)
);

CREATE TABLE
IF NOT EXISTS imagens_produtos
(
  id_imagem INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_produto INT,
  caminho VARCHAR
(255),
  FOREIGN KEY
(id_produto) REFERENCES produtos
(id_produto)
);

CREATE TABLE
IF NOT EXISTS categorias
(
	id_categoria INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR
(100)
);

ALTER TABLE produtos ADD id_categoria  INT NULL;

INSERT INTO categorias
  (nome)
VALUES
  ('Material Escolar');

show tables;
describe orders;
describe pedidos;

SELECT *
FROM CATEGORIAS;

update categorias set nome = 'Material de Construção'
where id_categoria = 2;



UPDATE produtos SET id_categoria = 1
where id_produto = 2;


ALTER TABLE produtos ADD CONSTRAINT fk_produtos_categoria FOREIGN KEY (id_categoria)  REFERENCES categorias(id_categoria);

SELECT *
FROM CATEGORIAS;

update categorias set nome = 'Material de Construção'
where id_categoria = 2;


select *
from produtos;
select *
from categorias;

UPDATE produtos SET id_categoria = 1
where id_produto = 2;

describe produtos;

ALTER TABLE produtos ADD CONSTRAINT fk_produtos_categoria FOREIGN KEY (id_categoria)  REFERENCES categorias(id_categoria);

ALTER TABLE PRODUTOS modify id_categoria int not null;
ALTER TABLE PRODUTOS ADD id_categoria int not null;
alter table produtos drop foreign key fk_produtos_categoria; 

