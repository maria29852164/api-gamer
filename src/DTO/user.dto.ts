import {UserRole} from "../db/entities/user.entity";
import {CommentDto} from './comment.dto'
import {OpinionDto} from './opinion.dto'
import {IsEmpty,IsNotEmpty,} from 'class-validator'

export class UserDto{
    @IsNotEmpty()
   public id_user:number;

    public name_user:string;

    public role:UserRole;

   public dateCreate:Date;
    @IsEmpty()
    public comments:CommentDto[];
    @IsEmpty()
   public opinion:OpinionDto[];
}