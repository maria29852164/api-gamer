import {UserRole} from "../db/entities/user.entity";
import {CommentDto} from './comment.dto'
import {OpinionDto} from './opinion.dto'

export class UserDto{
   public id_user:number;

    public name_user:string;

    public role:UserRole;

   public dateCreate:Date;

    public comments:CommentDto[];

   public opinion:OpinionDto[];
}