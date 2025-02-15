import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Team } from "src/entities/team.entity";
import { TeamService } from "src/services/team.service";
import { CreateTeamInput } from "src/services/dto/create-team.input";
import { TeamWithScore } from "src/services/types/team.service";

@Resolver(() => Team)
export class TeamResolver {
  /**
   * Creates an instance of the team resolver.
   *
   * @param {TeamService} teamService - The team service used for managing team-related queries.
   */
  constructor(private readonly teamService: TeamService) {}

  @Query(() => [Team], {
    name: "getAllTeams",
    description: "Retrieves all teams with their associated data",
  })
  getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Query(() => Team, {
    name: "getTeamById",
    description: "Retrieves a team by its ID",
  })
  getTeamById(@Args("id") id: string): Promise<Team> {
    return this.teamService.getTeamById(id);
  }

  @Query(() => [Team], {
    name: "getTeamsByUserId",
    description: "Retrieves all teams that a user is a member of",
  })
  getTeamsByUserId(@Args("userId") userId: string): Promise<Team[]> {
    return this.teamService.getTeamsByUserId(userId);
  }

  @Query(() => [Team], {
    name: "getTeamsByEventId",
    description: "Retrieves all teams that belong to an event",
  })
  getTeamsByEventId(@Args("eventId") eventId: string): Promise<Team[]> {
    return this.teamService.getTeamsByEventId(eventId);
  }

  @Query(() => [Team], {
    name: "getEventLeaderboard",
    description: "Retrieves the leaderboard for an event",
  })
  getEventLeaderboard(
    @Args("eventId") eventId: string
  ): Promise<TeamWithScore[]> {
    return this.teamService.getEventLeaderboard(eventId);
  }

  @Mutation(() => Team, {
    name: "createTeam",
    description: "Creates a new team",
  })
  createTeam(
    @Args("createTeamInput") createTeamInput: CreateTeamInput
  ): Promise<Team> {
    return this.teamService.createTeam(createTeamInput);
  }

  @Mutation(() => Team, {
    name: "updateTeam",
    description: "Updates an existing team",
  })
  updateTeam(
    @Args("id") id: string,
    @Args("userId") userId: string,
    @Args("createTeamInput") createTeamInput: CreateTeamInput
  ): Promise<Team> {
    return this.teamService.updateTeam(id, userId, createTeamInput);
  }

  @Mutation(() => Team, {
    name: "joinTeam",
    description: "Adds a user to a team",
  })
  joinTeam(
    @Args("id") id: string,
    @Args("userId") userId: string
  ): Promise<Team> {
    return this.teamService.joinTeam(id, userId);
  }

  @Mutation(() => Team, {
    name: "leaveTeam",
    description: "Removes a user from a team",
  })
  leaveTeam(
    @Args("id") id: string,
    @Args("userId") userId: string
  ): Promise<Team> {
    return this.teamService.leaveTeam(id, userId);
  }

  @Mutation(() => Team, {
    name: "kickMember",
    description: "Removes a user from a team",
  })
  kickMember(
    @Args("id") id: string,
    @Args("userId") userId: string,
    @Args("ownerId") ownerId: string
  ): Promise<Team> {
    return this.teamService.kickMember(id, userId, ownerId);
  }

  @Mutation(() => Team, {
    name: "giveOwnership",
    description: "Gives ownership of a team to another user",
  })
  giveOwnership(
    @Args("id") id: string,
    @Args("userId") userId: string,
    @Args("ownerId") ownerId: string
  ): Promise<Team> {
    return this.teamService.giveOwnership(id, userId, ownerId);
  }

  @Mutation(() => Team, {
    name: "banTeam",
    description: "Bans a team from an event",
  })
  banTeam(
    @Args("id") id: string,
    @Args("adminId") adminId: string
  ): Promise<Team> {
    return this.teamService.banTeam(id, adminId);
  }

  @Mutation(() => Team, {
    name: "unbanTeam",
    description: "Unbans a team from an event",
  })
  unbanTeam(
    @Args("id") id: string,
    @Args("adminId") adminId: string
  ): Promise<Team> {
    return this.teamService.unbanTeam(id, adminId);
  }

  @Mutation(() => Team, {
    name: "deleteTeam",
    description: "Deletes an existing team",
  })
  deleteTeam(@Args("id") id: string): Promise<Team> {
    return this.teamService.deleteTeam(id);
  }
}
