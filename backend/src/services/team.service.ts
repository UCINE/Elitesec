import { HttpException, Injectable } from "@nestjs/common";

import { User } from "src/entities/user.entity";
import { Team } from "src/entities/team.entity";
import { PrismaService } from "./prisma.service";
import { CreateTeamInput } from "./dto/create-team.input";
import { teamIncludes } from "src/includes/team.includes";
import { TeamWithScore, TeamIdAndScore } from "./types/team.service";

@Injectable()
export class TeamService {
  /**
   * Creates an instance of the TeamService class.
   *
   * @param {PrismaService} prisma - The Prisma service for database interactions.
   */
  constructor(private readonly prisma: PrismaService) {}

  getAllTeams(): Promise<Team[]> {
    return this.prisma.team.findMany({
      include: teamIncludes,
      orderBy: {
        name: "asc",
      },
    });
  }

  getTeamById(id: string): Promise<Team> {
    return this.prisma.team.findUnique({
      where: {
        id,
      },
      include: teamIncludes,
    });
  }

  getTeamsByUserId(userId: string): Promise<Team[]> {
    return this.prisma.team.findMany({
      where: {
        members: {
          some: {
            id: userId,
          },
        },
      },
      include: teamIncludes,
      orderBy: {
        name: "asc",
      },
    });
  }

  getTeamsByEventId(eventId: string): Promise<Team[]> {
    return this.prisma.team.findMany({
      where: {
        eventId,
      },
      include: teamIncludes,
      orderBy: {
        name: "asc",
      },
    });
  }

  async getEventLeaderboard(eventId: string): Promise<TeamWithScore[]> {
    const groupTeamSubmissionsScores = await this.prisma.submission.groupBy({
      by: ["teamId"],
      where: {
        eventId,
      },
      _sum: {
        score: true,
      },
    });
    const teamSubmissionsScores: TeamIdAndScore[] =
      groupTeamSubmissionsScores.map((team) => {
        return {
          teamId: team.teamId,
          score: team._sum.score,
        };
      });
    const teams: Team[] = await this.prisma.team.findMany({
      where: {
        eventId,
      },
      include: teamIncludes,
    });
    const teamsWithScores: TeamWithScore[] = teams.map((team: Team) => {
      const teamScore: TeamIdAndScore = teamSubmissionsScores.find(
        (teamScore: TeamIdAndScore) => teamScore.teamId === team.id
      );
      return {
        ...team,
        score: teamScore ? teamScore.score : 0,
      };
    });
    return teamsWithScores.sort(
      (a: TeamWithScore, b: TeamWithScore) => b.score - a.score
    );
  }

  async createTeam(createTeamInput: CreateTeamInput): Promise<Team> {
    return this.prisma.team.create({
      data: {
        ownerId: createTeamInput.ownerId,
        name: createTeamInput.name,
        description: createTeamInput.description,
        image: createTeamInput.image,
        event: {
          connect: {
            id: createTeamInput.eventId,
          },
        },
        members: {
          connect: {
            id: createTeamInput.ownerId,
          },
        },
      },
    });
  }

  async updateTeam(
    id: string,
    userId: string,
    updateTeamInput: CreateTeamInput
  ): Promise<Team> {
    const team: Team = await this.prisma.team.findUnique({
      where: {
        id,
      },
      include: teamIncludes,
    });
    if (!team) throw new HttpException("Team not found", 404);

    const user: User = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (team.ownerId !== userId && !user.isAdmin)
      throw new HttpException("Not authorized", 403);

    return this.prisma.team.update({
      where: {
        id,
      },
      data: {
        name: updateTeamInput.name,
        description: updateTeamInput.description,
        image: updateTeamInput.image,
      },
    });
  }

  async joinTeam(id: string, userId: string): Promise<Team> {
    const team: Team = await this.prisma.team.findUnique({
      where: {
        id,
      },
      include: {
        ...teamIncludes,
        event: true,
      },
    });
    if (!team) throw new HttpException("Team not found", 404);

    if (team.members.some((member: User) => member.id === userId))
      throw new HttpException("Already a member of the team", 400);

    if (team.members.length >= team.event.maxTeamSize)
      throw new HttpException("Team is full", 400);

    return this.prisma.team.update({
      where: {
        id,
      },
      data: {
        members: {
          connect: {
            id: userId,
          },
        },
      },
      include: teamIncludes,
    });
  }

  async leaveTeam(id: string, userId: string): Promise<Team> {
    const team: Team = await this.prisma.team.findUnique({
      where: {
        id,
      },
      include: teamIncludes,
    });
    if (!team) throw new HttpException("Team not found", 404);

    if (team.ownerId === userId)
      throw new HttpException("Cannot leave team as owner", 400);

    if (!team.members.some((member: User) => member.id === userId))
      throw new HttpException("Not a member of the team", 400);

    return this.prisma.team.update({
      where: {
        id,
      },
      data: {
        members: {
          disconnect: {
            id: userId,
          },
        },
      },
      include: teamIncludes,
    });
  }

  async kickMember(id: string, userId: string, ownerId: string): Promise<Team> {
    if (userId === ownerId) throw new HttpException("Cannot kick owner", 400);

    const team: Team = await this.prisma.team.findUnique({
      where: {
        id,
      },
      include: teamIncludes,
    });
    if (!team) throw new HttpException("Team not found", 404);

    if (!team.members.some((member: User) => member.id === userId))
      throw new HttpException("Not a member of the team", 400);

    if (team.ownerId !== ownerId)
      throw new HttpException("Not authorized", 403);

    return this.prisma.team.update({
      where: {
        id,
      },
      data: {
        members: {
          disconnect: {
            id: userId,
          },
        },
      },
      include: teamIncludes,
    });
  }

  async giveOwnership(
    id: string,
    userId: string,
    ownerId: string
  ): Promise<Team> {
    if (userId === ownerId)
      throw new HttpException("Cannot give ownership to owner", 400);

    const team: Team = await this.prisma.team.findUnique({
      where: {
        id,
      },
      include: teamIncludes,
    });
    if (!team) throw new HttpException("Team not found", 404);

    if (!team.members.some((member: User) => member.id === userId))
      throw new HttpException("Not a member of the team", 400);

    if (team.ownerId !== ownerId)
      throw new HttpException("Not authorized", 403);

    return this.prisma.team.update({
      where: {
        id,
      },
      data: {
        ownerId: userId,
      },
      include: teamIncludes,
    });
  }

  static async toggleBan(
    prisma: PrismaService,
    id: string,
    adminId: string,
    ban: boolean
  ): Promise<Team> {
    const team: Team = await prisma.team.findUnique({
      where: {
        id,
      },
      include: teamIncludes,
    });
    if (!team) throw new HttpException("Team not found", 404);

    const admin: User = await prisma.user.findUnique({
      where: {
        id: adminId,
      },
    });

    if (!admin.isAdmin) throw new HttpException("Not authorized", 403);

    return prisma.team.update({
      where: {
        id,
      },
      data: {
        isBanned: ban,
      },
      include: teamIncludes,
    });
  }

  async banTeam(id: string, adminId: string): Promise<Team> {
    return TeamService.toggleBan(this.prisma, id, adminId, true);
  }

  async unbanTeam(id: string, adminId: string): Promise<Team> {
    return TeamService.toggleBan(this.prisma, id, adminId, false);
  }

  async deleteTeam(id: string): Promise<Team> {
    return this.prisma.team.delete({
      where: {
        id,
      },
    });
  }
}
