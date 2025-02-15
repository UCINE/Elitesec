import { Module } from "@nestjs/common";

import { SubmissionResolver } from "src/resolvers/submission.resolver";
import { SubmissionService } from "src/services/submission.service";
import { PrismaService } from "src/services/prisma.service";

@Module({
  providers: [SubmissionResolver, SubmissionService, PrismaService],
  controllers: [],
})
export class SubmissionModule {}
