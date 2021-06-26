import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";

//esse arquivo funciona como um validador que informações do projeto

interface IUserRequest{
	name: string;
	email: string;
	admin?: boolean
	password: string;
}
class CreateUserService{
	async execute({name, email, admin = false, password} : IUserRequest){
		const usersRepository = getCustomRepository(UsersRepositories)

		if (!email) { //verifica se o email ta inserido 
			throw new Error("Email incorrect");
		}
		const userAlreadyExists = await usersRepository.findOne({ //verifica se o usuario ja existe
			email
		});


		if (userAlreadyExists) { //se o usuario não existir ele lança uma exception
			throw new Error("user already exists");
		}


		const passwordHash = await hash(password, 8)

		const user = usersRepository.create({ //se tiver tudo certo ele cria uma instancia
			name,
			email,
			admin,
			password: passwordHash,
		});

		await usersRepository.save(user);

		return user; //e salva o objeto no banco de dados
	}
}

export {CreateUserService}