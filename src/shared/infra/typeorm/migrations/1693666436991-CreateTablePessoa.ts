import { 
    MigrationInterface, 
    QueryRunner, 
    Table 
} from "typeorm";

export class CreateTablePessoa1693666436991 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pessoas",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                },
                {
                    name: "nome",
                    type: "varchar",
                },
                {
                    name: "sobrenome",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoas");
    }

}
