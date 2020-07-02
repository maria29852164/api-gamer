import {MigrationInterface, QueryRunner} from "typeorm";

export class prueba1593654829498 implements MigrationInterface {
    name = 'prueba1593654829498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint(2) UNSIGNED NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint UNSIGNED NOT NULL");
    }

}
