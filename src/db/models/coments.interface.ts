import {UserModel} from './user.interface'

export interface ComentsModels {

    id_comments:number;

    comments_content:string;

    like:boolean;

    date_comment:Date;

    user:UserModel;

}