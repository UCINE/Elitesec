import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Submission } from "src/entities/submission.entity";
import { CreateSubmissionInput } from "src/services/dto/create-submission.input";
import { SubmissionService } from "src/services/submission.service";

@Resolver(() => Submission)
export class SubmissionResolver {
  /**
   * Creates an instance of the submission resolver.
   *
   * @param {SubmissionService} submissionService - The Submission service for database interactions.
   */
  constructor(private readonly submissionService: SubmissionService) {}

  @Query(() => [Submission], {
    name: "getAllSubmissions",
    description: "Retrieves all submissions with their associated data",
  })
  getAllSubmissions(): Promise<Submission[]> {
    return this.submissionService.getAllSubmissions();
  }

  @Query(() => Submission, {
    name: "getSubmissionById",
    description: "Retrieves a submission by its ID",
  })
  getSubmissionById(
    @Args("id", { type: () => String }) id: string
  ): Promise<Submission> {
    return this.submissionService.getSubmissionById(id);
  }

  @Query(() => [Submission], {
    name: "populateSubmissionIds",
    description: "Populates an array of submission IDs",
  })
  populateSubmissionIds(
    @Args("submissions", { type: () => [String] }) submissions: string[]
  ): Promise<Submission[]> {
    return this.submissionService.populateSubmissionIds(submissions);
  }

  @Query(() => [Submission], {
    name: "getSubmissionsByEventId",
    description: "Retrieves all submissions associated with an event",
  })
  getSubmissionsByEventId(
    @Args("eventId", { type: () => String }) eventId: string
  ): Promise<Submission[]> {
    return this.submissionService.getSubmissionsByEventId(eventId);
  }

  @Query(() => [Submission], {
    name: "getSubmissionsByChallengeId",
    description: "Retrieves all submissions associated with a challenge",
  })
  getSubmissionsByChallengeId(
    @Args("challengeId", { type: () => String }) challengeId: string
  ): Promise<Submission[]> {
    return this.submissionService.getSubmissionsByChallengeId(challengeId);
  }

  @Query(() => [Submission], {
    name: "getSubmissionsByUserId",
    description: "Retrieves all submissions associated with a user",
  })
  getSubmissionsByUserId(
    @Args("userId", { type: () => String }) userId: string
  ): Promise<Submission[]> {
    return this.submissionService.getSubmissionsByUserId(userId);
  }

  @Mutation(() => Submission, {
    name: "createSubmission",
    description: "Creates a new submission",
  })
  async createSubmission(
    @Args("createSubmissionInput") createSubmissionInput: CreateSubmissionInput
  ): Promise<Submission> {
    return this.submissionService.createSubmission(createSubmissionInput);
  }

  @Mutation(() => Submission, {
    name: "updateSubmission",
    description: "Updates an existing submission",
  })
  async updateSubmission(
    @Args("id", { type: () => String }) id: string,
    @Args("createSubmissionInput") createSubmissionInput: CreateSubmissionInput
  ): Promise<Submission> {
    return this.submissionService.updateSubmission(id, createSubmissionInput);
  }

  @Mutation(() => Submission, {
    name: "deleteSubmission",
    description: "Deletes an existing submission",
  })
  async deleteSubmission(
    @Args("id", { type: () => String }) id: string
  ): Promise<Submission> {
    return this.submissionService.deleteSubmission(id);
  }
}
