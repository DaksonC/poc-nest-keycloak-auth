/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwtGuard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  @UseGuards(JwtGuard)
  @Get('test')
  test(@Req() req) {
    console.log(req.user);
    return req.user;
  }
}
