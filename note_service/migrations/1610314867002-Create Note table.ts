import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateNoteTable1610314867002 implements MigrationInterface {
    name = 'CreateNoteTable1610314867002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
