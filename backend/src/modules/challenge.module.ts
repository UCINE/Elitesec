import { Module } from "@nestjs/common";

import { ChallengeService } from "src/services/challenge.service";
import { ChallengeResolver } from "src/resolvers/challenge.resolver";
import { PrismaService } from "src/services/prisma.service";

@Module({
  providers: [ChallengeResolver, ChallengeService, PrismaService],
  controllers: [],
})
export class ChallengeModule {}
