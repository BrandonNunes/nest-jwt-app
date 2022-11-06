import { Injectable } from '@nestjs/common';
import { UsersService } from "../app/users/users.service";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,  private jwtService: JwtService) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const validPass = await compare(password, user.password)
    if (user && validPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { sub: user.email };
    return {
      ...user,
      access_token: this.jwtService.sign(payload, { secret: process.env.JWT_KEY, expiresIn: '7d' }),
    };
  }
}
