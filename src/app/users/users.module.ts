import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from "../../database/database.module";
import { userProviders } from "./user.providers";
import { AuthService } from "../../auth/auth.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService, AuthService, JwtService],
  exports: [UsersService]
})
export class UsersModule {}
