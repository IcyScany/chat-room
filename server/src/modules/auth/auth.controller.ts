import { Controller, Get, Post, Query, Request, UseGuards, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
// import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  // @UseGuards(AuthGuard('local'))
  @Post('/register')
  async register(@Body() req: any) {
    return this.authService.register(req.user)
  }
}

