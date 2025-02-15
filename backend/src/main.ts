import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as passport from "passport";

import { AppModule } from "./modules/app.module";

export const DEBUG: boolean = process.env.DEBUG === "true" || false;

const bootstrap = async (): Promise<void> => {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.use(passport.initialize());

  await app.listen(process.env.PORT || 3000);
};

bootstrap().catch((err: Error) => console.error(err));
