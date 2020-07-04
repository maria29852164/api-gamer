import {MigrationInterface, QueryRunner} from "typeorm";

export class mailUser1593876028583 implements MigrationInterface {
    name = 'mailUser1593876028583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint(2) UNSIGNED NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint UNSIGNED NOT NULL");
    }

}
