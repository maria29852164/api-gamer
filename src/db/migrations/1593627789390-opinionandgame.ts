import {MigrationInterface, QueryRunner} from "typeorm";

export class opinionandgame1593627789390 implements MigrationInterface {
    name = 'opinionandgame1593627789390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `opinion` (`id_opinion` int NOT NULL AUTO_INCREMENT, `opinion` mediumtext NOT NULL, `punctuation` tinyint(2) UNSIGNED NOT NULL, `video_opinion` varchar(255) NULL, `gameIdGame` int NULL, PRIMARY KEY (`id_opinion`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `game` (`id_game` int NOT NULL AUTO_INCREMENT, `name_game` varchar(150) NOT NULL, `views` int NULL, PRIMARY KEY (`id_game`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Comments` DROP COLUMN `comments_content`");
        await queryRunner.query("ALTER TABLE `Comments` ADD `comments_content` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `opinion` ADD CONSTRAINT `FK_a9d3bdb2ed8b52febffd3bd50e5` FOREIGN KEY (`gameIdGame`) REFERENCES `game`(`id_game`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opinion` DROP FOREIGN KEY `FK_a9d3bdb2ed8b52febffd3bd50e5`");
        await queryRunner.query("ALTER TABLE `Comments` DROP COLUMN `comments_content`");
        await queryRunner.query("ALTER TABLE `Comments` ADD `comments_content` varchar(200) NOT NULL");
        await queryRunner.query("DROP TABLE `game`");
        await queryRunner.query("DROP TABLE `opinion`");
    }

}
