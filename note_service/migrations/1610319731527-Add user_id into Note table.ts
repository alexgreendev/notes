import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserIdIntoNoteTable1610319731527 implements MigrationInterface {
    name = 'AddUserIdIntoNoteTable1610319731527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" ADD "user_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "user_id"`);
    }

}
