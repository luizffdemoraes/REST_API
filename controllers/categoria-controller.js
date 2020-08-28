const mysql = require('../mysql');


// Refatorado
exports.getCategoria = async (req, res, next) => {
    try {
      const result = await mysql.execute("SELECT * FROM categorias;")
      const response = {
        quantidade: result.length,
        categorias: result.map(category => {
          return {
            id_categoria: category.id_categoria,
            nome: category.nome
          }
        })
      }
      return res.status(200).send(response);
  
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  };
  

  exports.postCategoria= async (req, res, next) => {
    try {
      const query = 'INSERT INTO categorias (nome) VALUES (?)';
      const result = await mysql.execute(query, [req.body.nome]);

      const response = {
        message: 'Categoria inserida com sucesso',
        createdCategory: {
          id_categoria: result.insertId,
          nome: req.body.nome,
          request: {
            type: 'GET',
            description: 'Retorna todos os categorias',
            url: process.env.URL_API + 'categorias'
          }
        }
      }
      return res.status(201).send(response);
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  };


