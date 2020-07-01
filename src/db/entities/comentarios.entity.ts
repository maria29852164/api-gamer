import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn} from 'typeorm'
import {User} from './user.entity'
@Entity('Comments')
export class Comments extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_comments:number;
    @Column({type:"varchar",length:200})
    comments_content:string;
    @Column()
    like:boolean;
    @Column("timestamp")
    date_comment:Date;
    @ManyToOne(type=>User,user=>user.comments)
    user:User;

}