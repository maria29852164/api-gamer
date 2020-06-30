import {MigrationInterface, QueryRunner} from "typeorm";

export class first1593484541058 implements MigrationInterface {
    name = 'first1593484541058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id_user` int NOT NULL AUTO_INCREMENT, `name_user` varchar(255) NOT NULL, PRIMARY KEY (`id_user`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
