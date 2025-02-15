import { Strategy, Profile } from "passport-42";
import { ConfigService } from "@nestjs/config";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import * as crypto from "crypto";

import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";
import { PrismaService } from "src/services/prisma.service";
import { userIncludes } from "src/includes/user.includes";

@Injectable()
export class FTStrategy extends PassportStrategy(Strategy, "42") {
  constructor(
    configService: ConfigService,
    private readonly userService: UserService,
    private readonly prisma: PrismaService
  ) {
    super({
      clientID: configService.get("42_UID"),
      clientSecret: configService.get("42_SECRET"),
      callbackURL: configService.get("42_CALLBACK_URI"),
      Scope: ["profile", "email"],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile
  ): Promise<User> {
    let user: User = null;

    try {
      user = await this.prisma.user.findFirst({
        where: {
          connection: {
            provider: "42",
            providerId: `${profile.id}`,
          },
        },
        include: userIncludes,
      });
    } catch (e) {}
    try {
      if (!user) {
        user = await this.userService.createUser({
          username: profile.username,
          email: profile.emails[0].value,
          avatar: profile._json.image.link,
          provider: "42",
          providerId: `${profile.id}`,
        });
      }
    } catch (e) {}
    try {
      if (!user) {
        user = await this.userService.createUser({
          username: `${profile.username}_${
            crypto.randomBytes(2).readUInt16BE(0) % 10000
          }`,
          email: profile.emails[0].value,
          avatar: profile._json.image.link,
          provider: "42",
          providerId: `${profile.id}`,
        });
      }
    } catch (e) {}

    if (!user)
      throw new InternalServerErrorException("Unable to retrieve user");

    return user;
  }
}
