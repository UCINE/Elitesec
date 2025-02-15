import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * The input type for creating a submission.
 *
 * @export
 * @class CreateSubmissionInput
 */
@InputType()
export class CreateSubmissionInput {
  /**
   * The ID of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User ID must not be empty" })
  @IsString({ message: "User ID must be a string" })
  @Field(() => String, {
    description: "ID of the user",
  })
  userId: string;

  /**
   * The ID of the team.
   * @type {string}
   */
  @IsNotEmpty({ message: "Team ID must not be empty" })
  @IsString({ message: "Team ID must be a string" })
  @Field(() => String, {
    description: "ID of the team",
  })
  teamId: string;

  /**
   * The ID of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge ID must not be empty" })
  @IsString({ message: "Challenge ID must be a string" })
  @Field(() => String, {
    description: "ID of the challenge",
  })
  challengeId: string;

  /**
   * The ID of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event ID must not be empty" })
  @IsString({ message: "Event ID must be a string" })
  @Field(() => String, {
    description: "ID of the event",
    nullable: true,
  })
  eventId?: string;
}
