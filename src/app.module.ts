import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./auth/local.strategy";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./app/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { userProviders } from "./app/users/user.providers";
import { JwtStrategy } from "./auth/jwt.strategy";

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), UsersModule, DatabaseModule, PassportModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtStrategy],
})
export class AppModule {}
