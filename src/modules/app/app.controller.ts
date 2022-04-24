import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AuthService } from 'modules/auth/auth.service';
import { JwtAuthGuard } from 'modules/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'modules/auth/local-auth.guard';
import { User } from 'common/types';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: Request) {
    return await this.authService.login(req.user as User);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
