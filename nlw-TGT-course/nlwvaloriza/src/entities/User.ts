import { Entity,PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { Exclude } from "class-transformer";

@Entity("users")
class User {
	@PrimaryColumn()
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	email: string;
	
	@Column()
	admin: boolean;

	@Exclude()
	@Column()
	password: string;
	 
	@CreateDateColumn()
	created_at: Date;
	
	@UpdateDateColumn()
	updated_at: Date;

	constructor(){
		if (!this.id) {
			this.id = uuid();
		}
	} //construtor aqui é basicamente a mesma coisa do java --toda vez q a classe user for chamada ele vai gente rodar/instanciar essa linha de código
}  //entidades são basicamente referenciações como tabelas pode-se dizer q é uma tabela User agr

export { User };

//entidade <-> ORM <-> BD(users)
