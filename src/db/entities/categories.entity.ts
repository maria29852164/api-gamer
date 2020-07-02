import {Game} from './game.entity'
import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import {Category} from './category.enum'
@Entity('categories')
export class Categories extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_category:number;
    @Column({type:'enum',enum:Category,default:Category.ACCION ,nullable:false})
    category:string;
    @ManyToOne(type=>Game,game=>game.categories)
    game:Game;

}
