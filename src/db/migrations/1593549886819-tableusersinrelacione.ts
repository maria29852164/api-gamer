import {MigrationInterface, QueryRunner} from "typeorm";

export class tableusersinrelacione1593549886819 implements MigrationInterface {
    name = 'tableusersinrelacione1593549886819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `role` enum ('admin', 'normal', 'editor') NOT NULL DEFAULT 'normal'");
        await queryRunner.query("ALTER TABLE `user` ADD `dateCreate` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name_user`");
        await queryRunner.query("ALTER TABLE `user` ADD `name_user` varchar(80) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name_user`");
        await queryRunner.query("ALTER TABLE `user` ADD `name_user` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `dateCreate`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `role`");
    }

}
