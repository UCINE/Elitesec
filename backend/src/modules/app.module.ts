import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

import { AppController } from "../controllers/app.controller";
import { AuthModule } from "./auth.module";
import { UserModule } from "./user.module";
import { PrismaService } from "../services/prisma.service";
import { JwtGuard } from "src/guards/jwt.guard";
import { EventModule } from "./event.module";
import { ChallengeModule } from "./challenge.module";
import { SubmissionModule } from "./submission.module";
import { TeamModule } from "./team.module";

@Module({
  imports: [
    // Configure ConfigModule with environment variables
    ConfigModule.forRoot({ isGlobal: true }),

    // Configure GraphQLModule with Apollo Server
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Use Apollo Server
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: true, // Enable GraphQL Playground
      sortSchema: true, // Sort schema alphabetically
      includeStacktraceInErrorResponses: false, // Disable stacktraces
    }),

    AuthModule,
    UserModule,
    EventModule,
    ChallengeModule,
    SubmissionModule,
    TeamModule,
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
