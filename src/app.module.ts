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
import {User} from './db/entities/user.entity'
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
      entities:[__dirname+ '/../dist/**/*.entity{.ts,.js}'],
      host:getKey('host'),
      //autoLoadEntities:true,
      synchronize:true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection:Connection){}
}
