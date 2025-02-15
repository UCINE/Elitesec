import { Controller, Get } from "@nestjs/common";

import { Public } from "src/auth/public-metadata";

@Controller("/")
export class AppController {
  constructor() {}

  @Public()
  @Get()
  root(): string {
    return "The Elites' Security API v1.0.0";
  }
}
