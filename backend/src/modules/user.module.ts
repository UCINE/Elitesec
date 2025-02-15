import { Module } from "@nestjs/common";

import { UserService } from "../services/user.service";
import { PrismaService } from "src/services/prisma.service";
import { UserResolver } from "src/resolvers/user.resolver";

@Module({
  providers: [UserResolver, UserService, PrismaService],
  controllers: [],
})
export class UserModule {}
