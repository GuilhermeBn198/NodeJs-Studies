import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624668754543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "compliments",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "user_sender",
						type: "uuid"
					},
					{
						name: "user_receiver",
						type: "uuid"
					},
					{
						name: "tag_id",
						type: "uuid"
					},
					{
						name: "message",
						type: "varchar"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now ()"
					}
				], 
				foreignKeys:[//foreignkeys - para melhor identificação usa-se o padrao FK+NomeDaTabela
					{
						name: "FKUserSenderCompliments",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["user_sender"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					},
					{
						name: "FKUserReceiverCompliments",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["user_receiver"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					},
					{
						name: "FKTagCompliments",
						referencedTableName: "tags",
						referencedColumnNames: ["id"],
						columnNames: ["tag_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					}
				]
			})
		)
		// await queryRunner.createForeignKey(
		// 	"compliments",
		// 	new TableForeignKey({
		// 		name: "FKUserSenderCompliments",
		// 				referencedTableName: "users",
		// 				referencedColumnNames: ["id"],
		// 				columnNames: "user_sender",
		// 				onDelete: "SET NULL",
		// 				onUpdate: "SET NULL" 
		// 	})
		// )
		/**
		 * forma de criação de FKS diferente da atual, sendo essa criada fora de uma migration, sendo nescessário a criação de um método de remoção para remover a migration no método DOWN
		 */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("compliments")
    }

}
