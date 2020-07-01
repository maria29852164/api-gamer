import { Controller ,Get,Body,Param} from '@nestjs/common';

import {UsersService} from './users.service'
import {UserDto} from '../DTO/user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService:UsersService){
  }
  @Post('create')
  createUser(@Body() user:UserDto){
     return this.userService.saveUser(user)
  }
  @Get()
  getUser(){
    return 'dfd'


  }
}
