import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";

import { JwtResponse, Payload } from "./types/auth.service";

@Injectable()
export class AuthService {
  /**
   * Creates an instance of the AuthService class.
   *
   * @param {JwtService} jwtService The JWT service.
   */
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Generates a JWT token for the given user.
   *
   * @param {User} user The user to generate the token for.
   * @returns {Promise<JwtResponse>} The JWT token.
   */
  async getJwttoken(user: User): Promise<JwtResponse> {
    const payload: Payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
