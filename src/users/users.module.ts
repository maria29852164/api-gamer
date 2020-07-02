import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {UserRepository} from '../db/repositories/user.repository'
import {User} from '../db/entities/user.entity'
//import {Connection} from 'typeorm'

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  constructor(){}
}
