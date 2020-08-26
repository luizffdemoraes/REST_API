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
