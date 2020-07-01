import {MigrationInterface, QueryRunner} from "typeorm";

export class commentsandUser1593623289213 implements MigrationInterface {
    name = 'commentsandUser1593623289213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `User` (`id_user` int NOT NULL AUTO_INCREMENT, `name_user` varchar(100) NOT NULL, `role` enum ('admin', 'normal', 'editor') NOT NULL DEFAULT 'normal', `dateCreate` timestamp NOT NULL, PRIMARY KEY (`id_user`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `comments` (`id_comments` int NOT NULL AUTO_INCREMENT, `comments_content` varchar(200) NOT NULL, `like` tinyint NOT NULL, `date_comment` timestamp NOT NULL, `userIdUser` int NULL, PRIMARY KEY (`id_comments`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_453ca0eac2135b5cd7ddafe0b44` FOREIGN KEY (`userIdUser`) REFERENCES `User`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_453ca0eac2135b5cd7ddafe0b44`");
        await queryRunner.query("DROP TABLE `comments`");
        await queryRunner.query("DROP TABLE `User`");
    }

}
