/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'Sidelab',
      clientId: 'nest',
      secret: '4aaa5aaf-5f4a-43b0-8114-16cacfc615f2',
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule { }
