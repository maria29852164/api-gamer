import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import {Game} from './game.entity'
export enum Category{
    AVENTURA='aventura',
    ACCION='accion',
    MULTIPLAYER='multiplayer',
    TABLEROS='tableros',
    MUNDOABIERTO='mundoabierto',
    FOOTBALL='football',
    VIOLENTOS='violentos',
    GUERRA='guerra'
}
@Entity('categories')
export class Categories extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_category:number
    @Column({type:'enum',enum:Category,default:Category.ACCION ,nullable:false})
    category:string;
    @ManyToOne(type=>Game,game=>game.categories)
    game:Game;

}