import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Challenge } from "src/entities/challenge.entity";
import { ChallengeService } from "src/services/challenge.service";
import { CreateChallengeInput } from "src/services/dto/create-challenge.input";

@Resolver(() => Challenge)
export class ChallengeResolver {
  /**
   * Creates an instance of the challenge resolver.
   *
   * @param {ChallengeService} challengeService - The Challenge service for database interactions.
   */
  constructor(private readonly challengeService: ChallengeService) {}

  @Query(() => [Challenge], {
    name: "getAllChallenges",
    description: "Retrieves all challenges with their associated data",
  })
  getAllChallenges(): Promise<Challenge[]> {
    return this.challengeService.getAllChallenges();
  }

  @Query(() => [Challenge], {
    name: "getPublishedChallenges",
    description: "Retrieves all published challenges",
  })
  getPublishedChallenges(): Promise<Challenge[]> {
    return this.challengeService.getPublishedChallenges();
  }

  @Query(() => Challenge, {
    name: "getChallengeById",
    description: "Retrieves a challenge by its ID",
  })
  getChallengeById(
    @Args("id", { type: () => String }) id: string
  ): Promise<Challenge> {
    return this.challengeService.getChallengeById(id);
  }

  @Query(() => [Challenge], {
    name: "populateChallengeIds",
    description: "Populates an array of challenge IDs",
  })
  populateChallengeIds(
    @Args("challenges", { type: () => [String] }) challenges: string[]
  ): Promise<Challenge[]> {
    return this.challengeService.populateChallengeIds(challenges);
  }

  @Query(() => [Challenge], {
    name: "getChallengesByEventId",
    description: "Retrieves all challenges associated with an event",
  })
  getChallengesByEventId(
    @Args("eventId", { type: () => String }) eventId: string
  ): Promise<Challenge[]> {
    return this.challengeService.getChallengesByEventId(eventId);
  }

  @Mutation(() => Challenge, {
    name: "createChallenge",
    description: "Creates a new challenge",
  })
  async createChallenge(
    @Args("createChallengeInput") createChallengeInput: CreateChallengeInput
  ): Promise<Challenge> {
    return this.challengeService.createChallenge(createChallengeInput);
  }

  @Mutation(() => Challenge, {
    name: "updateChallenge",
    description: "Updates an existing challenge",
  })
  async updateChallenge(
    @Args("id", { type: () => String }) id: string,
    @Args("createChallengeInput") createChallengeInput: CreateChallengeInput
  ): Promise<Challenge> {
    return this.challengeService.updateChallenge(id, createChallengeInput);
  }

  @Mutation(() => Challenge, {
    name: "publishChallenge",
    description: "Publishes an existing challenge",
  })
  async publishChallenge(
    @Args("id", { type: () => String }) id: string
  ): Promise<Challenge> {
    return this.challengeService.publishChallenge(id);
  }

  @Mutation(() => Challenge, {
    name: "hideChallenge",
    description: "Hides an existing challenge",
  })
  async hideChallenge(
    @Args("id", { type: () => String }) id: string
  ): Promise<Challenge> {
    return this.challengeService.hideChallenge(id);
  }

  @Mutation(() => Challenge, {
    name: "giveFirstBlood",
    description: "Gives first blood to a user",
  })
  async giveFirstBlood(
    @Args("id", { type: () => String }) id: string,
    @Args("userId", { type: () => String }) userId: string
  ): Promise<Challenge> {
    return this.challengeService.giveFirstBlood(id, userId);
  }

  @Mutation(() => Challenge, {
    name: "deleteChallenge",
    description: "Deletes an existing challenge",
  })
  async deleteChallenge(
    @Args("id", { type: () => String }) id: string
  ): Promise<Challenge> {
    return this.challengeService.deleteChallenge(id);
  }
}
