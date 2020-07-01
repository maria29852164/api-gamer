import {Entity,PrimaryGeneratedColumn,Column,BaseEntity,OneToMany,ManyToMany,JoinTable} from 'typeorm'
import { UsersController } from '../../users/users.controller';
import {Opinion} from './opinion.entity'
import {Comments} from './comentarios.entity'
export enum UserRole{
    ADMIN='admin',
    NORMAL='normal',
    EDITOR='editor'
}
@Entity('User')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_user:number;
    @Column({type:"varchar",length:100})
    name_user:string;
    @Column({type:'enum',enum:UserRole,default:UserRole.NORMAL})
    role:UserRole;
    @Column('timestamp')
    dateCreate:Date;
    @OneToMany(type=>Comments,comment=>comment.user)
    comments:Comments[];
    @ManyToMany(type=>Opinion)
    @JoinTable()
    opinion:Opinion[]

}
