import { 
    MigrationInterface, 
    QueryRunner, 
    Table 
} from "typeorm";

export class CreateTableFone1693666495982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "fones",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                },
                {
                    name: "codigo",
                    type: "varchar",
                },
                {
                    name: "numero",
                    type: "varchar",
                },
                {
                    name: "isCelular",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "pessoa_id",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
                {
                    name: "FonePessoa",
                    columnNames: ["pessoa_id"],
                    referencedTableName: "pessoas",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fones");
    }

}
