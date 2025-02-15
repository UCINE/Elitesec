import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";

import { User } from "src/entities/user.entity";
import { userIncludes } from "src/includes/user.includes";
import { PrismaService } from "src/services/prisma.service";
import { UserService } from "src/services/user.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(
    configService: ConfigService,
    private readonly userService: UserService,
    private readonly prisma: PrismaService
  ) {
    super({
      clientID: configService.get("GOOGLE_UID"),
      clientSecret: configService.get("GOOGLE_SECRET"),
      callbackURL: configService.get("GOOGLE_CALLBACK_URI"),
      scope: ["profile", "email"],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    _done: VerifyCallback
  ): Promise<User> {
    const { name, emails, photos } = profile;

    let user: User = null;

    try {
      user = await this.prisma.user.findFirst({
        where: {
          connection: {
            provider: "google",
            providerId: profile.id,
          },
        },
        include: userIncludes,
      });
    } catch (e) {}
    try {
      if (!user) {
        user = await this.userService.createUser({
          username: `${name.familyName.toLowerCase()}${name.givenName.toLowerCase()}`,
          email: emails[0].value,
          avatar: photos[0].value,
          provider: "google",
          providerId: profile.id,
        });
      }
    } catch (e) {}

    if (!user)
      throw new InternalServerErrorException("Unable to retrieve user");

    return user;
  }
}
