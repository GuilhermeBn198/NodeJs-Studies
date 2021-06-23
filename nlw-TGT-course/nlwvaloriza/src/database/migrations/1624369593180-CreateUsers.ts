import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624369593180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { //metodo up cria uma tabela no migrations
		await queryRunner.createTable(
			new Table({
				name: "users",
				columns:[
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
					},
					{
						name: "name",
						type: "varchar",
					},
					{
						name: "email",
						type: "varchar",
					},
					{
						name: "admin",
						type: "varchar",
						default: false,
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()",
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> { //metodo down remove uma tabela do migrations
		await queryRunner.dropTable("users");
    }

}
