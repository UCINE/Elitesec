import { Module } from "@nestjs/common";

import { EventService } from "src/services/event.service";
import { EventResolver } from "src/resolvers/event.resolver";
import { PrismaService } from "src/services/prisma.service";

@Module({
  providers: [EventResolver, EventService, PrismaService],
  controllers: [],
})
export class EventModule {}
