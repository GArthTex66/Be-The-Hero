const express = require ('express');
const {errors} = require('celebrate');
const cors = require ('cors');
const routes = require ('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports=app;

/**
 * Rota/Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar informação do Back-end
  * POST: Criar um informação no Back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletat uma informação no back-end
  * 
  */

  /**
   * Tipos de parâmetros:
   * 
   * Querry Params:Parâmetros nomeados enviados na rota após "?" (Filtros,paginação)
   * Route Params:Parâmetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */



