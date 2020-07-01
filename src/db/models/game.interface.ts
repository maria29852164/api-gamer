
import {OpinionModel} from './opinion.interface'
import {CategoriesModel} from './categories.interface'

export interface GameModel{

    id_game:number;

    name_game:string;

    views:number;

    opinions:OpinionModel[];

    categories:CategoriesModel[]
}