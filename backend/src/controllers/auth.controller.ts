import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { User } from "@prisma/client";

import { Public } from "../auth/public-metadata";
import { AuthService } from "../services/auth.service";
import { FTAuthGuard } from "../guards/auth.guard";
import { GoogleOauthGuard } from "../guards/google.guard";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService
  ) {}

  @Public()
  @UseGuards(FTAuthGuard)
  @Get("42")
  auth42() {}

  @Public()
  @UseGuards(FTAuthGuard)
  @Get("42-redirect")
  async auth42Redirect(
    @Req() req: Request & { user: User },
    @Res() res: Response
  ) {
    const token = await this.authService.getJwttoken(req.user);

    res.cookie("token", token, {
      maxAge: 2592000000,
      sameSite: true,
      secure: false,
    });

    res.redirect(`${this.configService.get("CLIENT_URL")}/profile`);
  }

  @Public()
  @UseGuards(GoogleOauthGuard)
  @Get("google")
  authGoogle() {}

  @Public()
  @UseGuards(GoogleOauthGuard)
  @Get("google/callback")
  async authGoogleCallBack(
    @Req() req: Request & { user: User },
    @Res() res: Response
  ) {
    const token = await this.authService.getJwttoken(req.user);

    res.cookie("token", token["access_token"], {
      maxAge: 2592000000,
      sameSite: true,
      secure: false,
    });

    res.redirect(`${this.configService.get("CLIENT_URL")}`);
  }
}
