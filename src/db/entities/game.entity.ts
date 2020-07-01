import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import {Opinion} from './opinion.entity'
import {Categories} from "./categories.entity";
@Entity('game')
export class Game extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_game:number;
    @Column({type:"varchar",length:150,nullable:false})
    name_game:string;
    @Column({type:'int',nullable:true})
    views:number;
    @OneToMany(type=>Opinion,opinion=>opinion.game)
    opinions:Opinion[];
    @OneToMany(type=>Categories,categories=>categories.game)
    categories:Categories[]
}