import "reflect-metadata";
import express,{Request, Response, NextFunction} from "express"; 
import "express-async-errors";

import { router } from "./Routes";
import "./database"

const app = express();
app.use(express.json());
app.use(router);

app.use((err:Error, request:Request, response:Response, next:NextFunction) =>{ //esse aqui é um middleware //err verifica se tem erros, request é o pedido de resquest do callback normal, response eh o q ele manda de volta e o next serve para autenticação de outros parametros
	if(err instanceof Error){
		return response.status(400).json({
			error: err.message
		})
	}
	return response.status(500).json({
		satus: "error",
		message: "Internal Server Error"
	})
})

//http://localhost:3000
app.listen(3000,() => console.log("server is running at port 3000"));


//middlewares são interceptadores que tem dentro de uma requisição, podendo interromper ela por completo ou adicionar mais coisas a requisição

/**
 * get		=> Buscar uma informação
 * post		=> Inserir(criar) uma informação
 * put		=> Alterar uma informação
 * delete	=> Remover um dado
 * patch	=> Alterar uma informação específica
 */

/**
 * Tipos de parametros
 * Routes Params => http://localhost:3000/produtos/1283091283790127
 * Query Params  => http://localhost:3000/produtos?name=teclado&description=tecladobom&etcetcetc
 * 
 * Body Params 	 => {
 * "name": "teclado",
 * "description": "teclado bom"
 * }
 */
//ORM = object relational map -> frameworks que ajudam no mapeamento entre a entidade e o objeto