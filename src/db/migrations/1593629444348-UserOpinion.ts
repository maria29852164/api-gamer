import {MigrationInterface, QueryRunner} from "typeorm";

export class UserOpinion1593629444348 implements MigrationInterface {
    name = 'UserOpinion1593629444348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user_opinion_opinion` (`userIdUser` int NOT NULL, `opinionIdOpinion` int NOT NULL, INDEX `IDX_16f5e374914c0f6cd2e383e451` (`userIdUser`), INDEX `IDX_7a6f2d3f3b0825b3733e7ff5fd` (`opinionIdOpinion`), PRIMARY KEY (`userIdUser`, `opinionIdOpinion`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint(2) UNSIGNED NOT NULL");
        await queryRunner.query("ALTER TABLE `user_opinion_opinion` ADD CONSTRAINT `FK_16f5e374914c0f6cd2e383e451f` FOREIGN KEY (`userIdUser`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_opinion_opinion` ADD CONSTRAINT `FK_7a6f2d3f3b0825b3733e7ff5fd1` FOREIGN KEY (`opinionIdOpinion`) REFERENCES `opinion`(`id_opinion`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_opinion_opinion` DROP FOREIGN KEY `FK_7a6f2d3f3b0825b3733e7ff5fd1`");
        await queryRunner.query("ALTER TABLE `user_opinion_opinion` DROP FOREIGN KEY `FK_16f5e374914c0f6cd2e383e451f`");
        await queryRunner.query("ALTER TABLE `opinion` CHANGE `punctuation` `punctuation` tinyint UNSIGNED NOT NULL");
        await queryRunner.query("DROP INDEX `IDX_7a6f2d3f3b0825b3733e7ff5fd` ON `user_opinion_opinion`");
        await queryRunner.query("DROP INDEX `IDX_16f5e374914c0f6cd2e383e451` ON `user_opinion_opinion`");
        await queryRunner.query("DROP TABLE `user_opinion_opinion`");
    }

}
