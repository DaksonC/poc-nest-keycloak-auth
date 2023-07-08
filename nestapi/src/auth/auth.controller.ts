/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'nest-keycloak-connect';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {

  @Get('profile')
  async getProfile() {
    return 'This is the profile page.';
  }
}
