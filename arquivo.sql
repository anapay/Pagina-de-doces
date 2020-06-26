-- Visualizando bancos do sistema.
SHOW DATABASES;

-- criando banco de dados.
CREATE DATABASE

-- usando um banco especifico para alteracao.
USE

-- visualizando tabelas do banco.
SHOW TABLES


-- criando tabela
CREATE TABLE produtos(
    codigo INT,
    nome VARCHAR(255),
    valor Float
);

-- visualizando estrutua da tabela
DESCRIBE TABELA

-- inserindo na tabela
INSERT INTO produtos(codigo, nome, valor) VALUES(
    1234,
    "brigadeiro",
    8.90
);

INSERT INTO produtos(codigo, nome, valor) VALUES(
    1235,
    "beijinho",
    8.90
);

INSERT INTO produtos(codigo, nome, valor) VALUES(
    1235,
    "bemcasado",
    8.90
);

INSERT INTO produtos(codigo, nome, valor) VALUES(
    1235,
    "strawberry",
    8.90
);
-- para listar todos os dados da tabela
SELECT * FROM Sistemaloja;

-- para especificar uma busca
SELECT * FROM produtos WHERE codigo = 1234;

-- para deletar todos os registros da tabela
DELETE FROM nome da tabela;

-- para deletar um registro especifico
DELETE FROM NOMETABELA WHERE nome = "brigadeiro";

-- atualizando registros 
UPDATE produtos SET valor = 9.85 WHERE nome = "strawberry";
-- atualize a tabela produtos com o campo de nome valor com o novo registro de 9.85 qu eesta na coluna nome com o valor de strawberry