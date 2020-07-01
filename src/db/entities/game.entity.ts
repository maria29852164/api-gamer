import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import {Opinion} from './opinion.entity'
@Entity('game')
export class Game extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_game:number;
    @Column({type:"varchar",length:150,nullable:false})
    name_game:string;
    @Column({type:'int',nullable:true})
    views:number;
    @OneToMany(type=>Opinion,opinion=>opinion.game)
    opinion:Opinion[]
}