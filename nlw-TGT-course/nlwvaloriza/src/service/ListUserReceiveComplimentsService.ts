import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiveComplimentsService {
	async execute(user_id: string){
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

		const compliments = await complimentsRepositories.find({
			where: {
				user_receiver: user_id
			},
			//relations: ["user_sender", "userReceiver", "tag"] //trás todos as informações do objeto pelo metodo get, em alguns casos é preciso cuidado pois, a busca torna-se pesada
		})
		return compliments
	}
}

export {ListUserReceiveComplimentsService}