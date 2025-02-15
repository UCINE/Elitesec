import { Injectable } from "@nestjs/common";

import { Challenge } from "src/entities/challenge.entity";
import { PrismaService } from "./prisma.service";
import { CreateChallengeInput } from "./dto/create-challenge.input";
import { challengeIncludes } from "src/includes/challenge.includes";

@Injectable()
export class ChallengeService {
  /**
   * Creates an instance of the ChallengeService class.
   *
   * @param {PrismaService} prisma - The Prisma service for database interactions.
   */
  constructor(private readonly prisma: PrismaService) {}

  getAllChallenges(): Promise<Challenge[]> {
    return this.prisma.challenge.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  getPublishedChallenges(): Promise<Challenge[]> {
    return this.prisma.challenge.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  getChallengeById(id: string): Promise<Challenge> {
    return this.prisma.challenge.findUnique({
      where: {
        id,
      },
    });
  }

  populateChallengeIds(challenges: string[]): Promise<Challenge[]> {
    return this.prisma.challenge.findMany({
      where: {
        id: {
          in: challenges,
        },
      },
      include: challengeIncludes,
    });
  }

  getChallengesByEventId(eventId: string): Promise<Challenge[]> {
    return this.prisma.challenge.findMany({
      where: {
        eventId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async createChallenge(
    createChallengeInput: CreateChallengeInput
  ): Promise<Challenge> {
    return this.prisma.challenge.create({
      data: {
        title: createChallengeInput.title,
        description: createChallengeInput.description,
        image: createChallengeInput.image,
        score: createChallengeInput.score,
        flag: createChallengeInput.flag,
        event: {
          connect: {
            id: createChallengeInput.eventId,
          },
        },
      },
      include: challengeIncludes,
    });
  }

  async updateChallenge(
    id: string,
    createChallengeInput: CreateChallengeInput
  ): Promise<Challenge> {
    return this.prisma.challenge.update({
      where: {
        id,
      },
      data: {
        title: createChallengeInput.title,
        description: createChallengeInput.description,
        image: createChallengeInput.image,
        score: createChallengeInput.score,
        flag: createChallengeInput.flag,
        event: createChallengeInput.eventId && {
          connect: {
            id: createChallengeInput.eventId,
          },
        },
      },
      include: challengeIncludes,
    });
  }

  async publishChallenge(id: string): Promise<Challenge> {
    return this.prisma.challenge.update({
      where: {
        id,
      },
      data: {
        isPublished: true,
      },
    });
  }

  async hideChallenge(id: string): Promise<Challenge> {
    return this.prisma.challenge.update({
      where: {
        id,
      },
      data: {
        isPublished: false,
      },
    });
  }

  async giveFirstBlood(id: string, userId: string): Promise<Challenge> {
    return this.prisma.challenge.update({
      where: {
        id,
      },
      data: {
        firstBlood: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async deleteChallenge(id: string): Promise<Challenge> {
    return this.prisma.challenge.delete({
      where: {
        id,
      },
    });
  }
}
