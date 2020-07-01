
import {UserRole} from "../entities/user.entity";
import {ComentsModels} from './coments.interface'
import {OpinionModel} from './opinion.interface'
export interface UserModel{
    id_user:number;

    name_user:string;

    role:UserRole;

    dateCreate:Date;

    comments:ComentsModels[];

    opinion:OpinionModel[];
}