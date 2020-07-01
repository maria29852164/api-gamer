import {MigrationInterface, QueryRunner} from "typeorm";

export class incrementUserComments1593623362309 implements MigrationInterface {
    name = 'incrementUserComments1593623362309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Comments` (`id_comments` int NOT NULL AUTO_INCREMENT, `comments_content` varchar(200) NOT NULL, `like` tinyint NOT NULL, `date_comment` timestamp NOT NULL, `userIdUser` int NULL, PRIMARY KEY (`id_comments`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Comments` ADD CONSTRAINT `FK_6e97c6d8cc82b79f04eb2711908` FOREIGN KEY (`userIdUser`) REFERENCES `User`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Comments` DROP FOREIGN KEY `FK_6e97c6d8cc82b79f04eb2711908`");
        await queryRunner.query("DROP TABLE `Comments`");
    }

}
