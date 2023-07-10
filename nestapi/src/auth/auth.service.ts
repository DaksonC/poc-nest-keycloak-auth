/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) { }

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8080/auth/realms/Sidelab/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: '4aaa5aaf-5f4a-43b0-8114-16cacfc615f2',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
