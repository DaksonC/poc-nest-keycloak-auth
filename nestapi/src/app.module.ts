/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategyService } from './auth/jwt-strategy.service';
@Module({
  controllers: [AppController],
  providers: [AppService, JwtStrategyService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule
  ],
})
export class AppModule { }
