import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../app/users/users.module";
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from "../app/users/users.service";
import { userProviders } from "../app/users/user.providers";
import { databaseProviders } from "../database/database.providers";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import * as dotenv from "dotenv"
import { ConfigModule, ConfigService } from "@nestjs/config";
import { jwtConstants } from "./constants";
dotenv.config()

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      secretOrPrivateKey: process.env.JWT_KEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService, ...userProviders, ...databaseProviders],
  exports: [AuthService]
})
export class AuthModule {}
