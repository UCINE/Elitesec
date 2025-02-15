import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { FTAuthGuard } from "../guards/auth.guard";
import { FTStrategy } from "../strategies/42.strategy";
import { UserService } from "src/services/user.service";
import { PrismaService } from "src/services/prisma.service";
import { jwtConstants } from "../auth/constants";
import { GoogleStrategy } from "../strategies/google.strategy";
import { GoogleOauthGuard } from "../guards/google.guard";

@Module({
  imports: [
    PassportModule.register({ session: false }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    FTAuthGuard,
    FTStrategy,
    GoogleStrategy,
    GoogleOauthGuard,
    UserService,
    PrismaService,
  ],
})
export class AuthModule {}
