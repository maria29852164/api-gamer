import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'
@Entity({
    name:'user'
})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id_user:number;
    @Column()
    name_user:string;

}
