import { HttpException, Injectable } from "@nestjs/common";

import { User } from "src/entities/user.entity";
import { Team } from "src/entities/team.entity";
import { Challenge } from "src/entities/challenge.entity";
import { PrismaService } from "./prisma.service";
import { Submission } from "src/entities/submission.entity";
import { submissionIncludes } from "src/includes/submission.includes";
import { CreateSubmissionInput } from "./dto/create-submission.input";

@Injectable()
export class SubmissionService {
  constructor(private readonly prisma: PrismaService) {}

  getAllSubmissions(): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      include: submissionIncludes,
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  getSubmissionById(id: string): Promise<Submission> {
    return this.prisma.submission.findUnique({
      where: {
        id,
      },
      include: submissionIncludes,
    });
  }

  populateSubmissionIds(submissions: string[]): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: {
        id: {
          in: submissions,
        },
      },
      include: submissionIncludes,
    });
  }

  getSubmissionsByEventId(eventId: string): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: {
        eventId,
      },
      include: submissionIncludes,
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  getSubmissionsByChallengeId(challengeId: string): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: {
        challengeId,
      },
      include: submissionIncludes,
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  getSubmissionsByUserId(userId: string): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: {
        userId,
      },
      include: submissionIncludes,
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async createSubmission(
    createSubmissionInput: CreateSubmissionInput
  ): Promise<Submission> {
    const team: Team = await this.prisma.team.findUnique({
      where: {
        id: createSubmissionInput.teamId,
      },
      include: {
        members: true,
      },
    });

    if (
      !team.members.some(
        (member: User) => member.id === createSubmissionInput.userId
      )
    )
      throw new HttpException("User is not a member of this team", 400);

    if (team.event.id !== createSubmissionInput.eventId)
      throw new HttpException("Team does not belong to this event", 400);

    if (team.isBanned) throw new HttpException("Team is banned", 400);

    if (team.event.startAt > new Date())
      throw new HttpException("Event has not started", 400);

    if (team.event.endAt < new Date())
      throw new HttpException("Event has ended", 400);

    if (!team.event.isPublished)
      throw new HttpException("Event is not published", 400);

    const submissions: Submission[] = await this.prisma.submission.findMany({
      where: {
        teamId: createSubmissionInput.teamId,
        challengeId: createSubmissionInput.challengeId,
      },
      include: submissionIncludes,
    });
    if (submissions.length > 0)
      throw new HttpException("Submission already exists", 400);

    const challenge: Challenge = await this.prisma.challenge.findUnique({
      where: {
        id: createSubmissionInput.challengeId,
      },
      include: {
        event: true,
      },
    });
    if (!challenge) throw new HttpException("Challenge not found", 404);

    if (challenge.eventId !== createSubmissionInput.eventId)
      throw new HttpException("Challenge does not belong to this event", 400);

    if (!challenge.isPublished)
      throw new HttpException("Challenge is not published", 400);

    return this.prisma.submission.create({
      data: {
        userId: createSubmissionInput.userId,
        teamId: createSubmissionInput.teamId,
        eventId: createSubmissionInput.eventId,
        challengeId: createSubmissionInput.challengeId,
        score: challenge.score,
      },
      include: submissionIncludes,
    });
  }

  async updateSubmission(
    id: string,
    createSubmissionInput: CreateSubmissionInput
  ): Promise<Submission> {
    return this.prisma.submission.update({
      where: {
        id,
      },
      data: {
        ...createSubmissionInput,
      },
      include: submissionIncludes,
    });
  }

  async deleteSubmission(id: string): Promise<Submission> {
    return this.prisma.submission.delete({
      where: {
        id,
      },
      include: submissionIncludes,
    });
  }
}
