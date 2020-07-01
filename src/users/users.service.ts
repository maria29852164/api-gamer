import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'

import {UserModel} from '../db/models/user.interface'
import {Repository} from "typeorm";
import {UserRepository} from '../db/repositories/user.repository'
@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserRepository) private readonly userRepository:UserRepository) {
    }
    async saveUser(user:UserModel):Promise<UserModel>{
        await this.userRepository.insert(user)
        return user
    }
    async updateUser(id:number,user:UserModel){
        await this.userRepository.update(id,user);

    }
    async fillAll():Promise<UserModel[]>{
        return await this.userRepository.find()
    }
    async deleteUser(id:number){
        await this.userRepository.delete(id)
    }
    async findUser(id:number):Promise<UserModel>{
        console.log('saving User')
       return  await this.userRepository.findOne(id)
    }

}
