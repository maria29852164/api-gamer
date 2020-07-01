import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {User} from '../db/entities/user.entity'
import {UserModel} from '../db/models/user.interface'
import {Repository} from "typeorm";
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly UserRepository:Repository<User>) {
    }
    async saveUser(user:UserModel):Promise<UserModel>{
        await this.UserRepository.insert(user)
        return user
    }
    async updateUser(id:number,user:UserModel){
        await this.UserRepository.update(id,user);

    }
    async fillAll():Promise<UserModel[]>{
        return await this.UserRepository.find()
    }
    async deleteUser(id:number){
        await this.UserRepository.delete(id)
    }
    async findUser(id:number):Promise<UserModel>{
        console.log('saving User')
       return  await this.UserRepository.findOne(id)
    }

}
