import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateRequest {
	email: string
	password: string
}

class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const usersRepositories = getCustomRepository(UsersRepositories)
		//verificar se o email exist
		const user = await usersRepositories.findOne({
			email
		})
		if (!user) {
			throw new Error("Email/Password incorrect")
		}
		//verificar se senha está correta
		const passwordMatch = await compare(password, user.password)

		if (!passwordMatch) {
			throw new Error("Email/Password incorrect");

		}
		//(senha) <-> hash(senha)

		//gerar token
		const token = sign({
			email: user.email
		}, "ef1b88ba2a7bfd88d9ba97f74c3dff44", {
			subject: user.id,
			expiresIn: "1d"
		})
		return token
	}
}

export { AuthenticateUserService }