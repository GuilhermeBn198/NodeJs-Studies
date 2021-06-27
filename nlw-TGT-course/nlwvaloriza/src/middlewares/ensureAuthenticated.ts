import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
	sub:string
}

export function ensureAuthenticated(
	request: Request, 
	response: Response, 
	next: NextFunction
	){

		//receber o token
		const authtoken = request.headers.authorization
		
		//validar se o token está preenchido
		if (!authtoken) {
			return response.status(401).end()		
		}
		//validar se o token é válido
		const [, token] = authtoken.split(" ") //função split separa uma string em um array, determinado pelo caractere q inserirmos em seu parâmetro nesse caso " "
		try {
			const {sub} = verify(token,"ef1b88ba2a7bfd88d9ba97f74c3dff44") as IPayload
			
			//recuperar informações do usuario
			request.user_id = sub
			
		} catch (error) {
			return response.status(401).end()
		}
		
		
		return next()
	}