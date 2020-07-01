import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { UsersModule } from './users/users.module';
import configuration from './config/config.configuration'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigService} from '@nestjs/config'
import {getKey} from './config/config.service'
import {Connection} from 'typeorm'
@Module({
  imports: [
    ConfigModule.forRoot({
      load:[configuration],
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
     type:getKey('type'),
      port:getKey('port'),
      database:getKey('database'),
      username:'root',//getKey('user'),
      password:getKey('password'),
     // entities:[getKey('entitiesDir')],
      entities:[__dirname+'/src/**/**/*.entity.ts'],
      host:getKey('host'),
      synchronize:true
    /*  type:'mysql',
      port:3306,
      database:'gamer',
      username:'root',
      password:'123456',
      entities:[],
      host:'localhost',
      synchronize:true*/

    }),


    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection:Connection){}
}
