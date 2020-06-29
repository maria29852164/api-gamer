import { Controller ,Get} from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import {getKey} from '../config/config.service'

@Controller('users')
export class UsersController {
  constructor(){

  }
  @Get()
  getUser(){
    return 'dfd'


  }
}
