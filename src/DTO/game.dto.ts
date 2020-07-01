import {OpinionDto} from './opinion.dto'
import {CategoriesDto} from './categories.dto'
export class GameDto{
   public id_game:number;

   public name_game:string;

   public views:number;

   public opinions:OpinionDto[];

   public categories:CategoriesDto[]
}