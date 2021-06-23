import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest{
	name: string;
	email: string;
	admin?: boolean
}
class CreateUserService{
	async execute({name, email, admin} : IUserRequest){
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

		const user = usersRepository.create({ //se tiver tudo certo ele cria uma instancia
			name,
			email,
			admin,
		});

		await usersRepository.save(user);

		return user; //e salva o objeto no banco de dados
	}
}

export {CreateUserService}