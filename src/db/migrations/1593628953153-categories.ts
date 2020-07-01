import {MigrationInterface, QueryRunner} from "typeorm";

export class categories1593628953153 implements MigrationInterface {
    name = 'categories1593628953153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `categories` (`id_category` int NOT NULL AUTO_INCREMENT, `category` enum ('aventura', 'accion', 'multiplayer', 'tableros', 'mundoabierto', 'football', 'violentos', 'guerra') NOT NULL DEFAULT 'accion', `gameIdGame` int NULL, PRIMARY KEY (`id_category`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint(2) UNSIGNED NOT NULL");
        await queryRunner.query("ALTER TABLE `categories` ADD CONSTRAINT `FK_9e66d62030c814f8667bdd578f7` FOREIGN KEY (`gameIdGame`) REFERENCES `game`(`id_game`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `categories` DROP FOREIGN KEY `FK_9e66d62030c814f8667bdd578f7`");
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint UNSIGNED NOT NULL");
        await queryRunner.query("DROP TABLE `categories`");
    }

}
