import { Module } from "@nestjs/common";

import { TeamService } from "src/services/team.service";
import { TeamResolver } from "src/resolvers/team.resolver";
import { PrismaService } from "src/services/prisma.service";

@Module({
  providers: [TeamResolver, TeamService, PrismaService],
  controllers: [],
})
export class TeamModule {}
