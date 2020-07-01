
import {Game} from './game.entity'
import { Entity,BaseEntity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
@Entity('opinion')
export class Opinion extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_opinion:number;
    @Column({type:'mediumtext'})
    opinion:string;
    @Column({nullable:false,type:'tinyint',width:2,unsigned:true})
    punctuation:number;
    @Column({type:"varchar",length:255,nullable:true})
    video_opinion:string;
    @ManyToOne(type=>Game,game=>game.opinions)
    game:Game;

}