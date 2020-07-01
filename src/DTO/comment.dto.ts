import {UserDto} from './user.dto'

export class CommentDto{
   public id_comments:number;

   public comments_content:string;

   public like:boolean;

   public date_comment:Date;

   public user:UserDto;
}