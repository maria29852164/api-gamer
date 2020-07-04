import { Controller ,Get,Body,Param,Post} from '@nestjs/common';

import {UsersService} from './users.service'
import {UserDto} from '../DTO/user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService:UsersService){
  }
  @Post('create')
  async createUser(@Body() user:UserDto){
    
     return this.userService.saveUser(user)

  }
  @Get()
  getUser(){
    return this.userService.fillAll()
  }
}
