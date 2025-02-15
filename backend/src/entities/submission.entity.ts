import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * Represents a submission within the system.
 * This entity encapsulates fundamental submission-related details.
 *
 * @export
 * @class Submission
 */
@ObjectType()
export class Submission {
  /**
   * The unique identifier of the submission.
   * @type {string}
   */
  @IsNotEmpty({ message: "Submission ID must not be empty" })
  @Field(() => String, { description: "Unique identifier of the submission" })
  id: string;

  /**
   * The unique identifier of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User ID must not be empty" })
  @IsString({ message: "User ID must be a string" })
  @Field(() => String, {
    description: "Unique identifier of the user",
    nullable: true,
  })
  userId?: string;

  /**
   * The unique identifier of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event ID must not be empty" })
  @IsString({ message: "Event ID must be a string" })
  @Field(() => String, {
    description: "Unique identifier of the event",
    nullable: true,
  })
  eventId?: string;

  /**
   * The unique identifier of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge ID must not be empty" })
  @IsString({ message: "Challenge ID must be a string" })
  @Field(() => String, {
    description: "Unique identifier of the challenge",
    nullable: true,
  })
  challengeId?: string;

  /**
   * The score of the submission.
   * @type {number}
   */
  @IsNotEmpty({ message: "Submission score must not be empty" })
  @IsNumber(
    {
      maxDecimalPlaces: 0,
      allowInfinity: false,
      allowNaN: false,
    },
    { message: "Submission score must be a number" }
  )
  @Field(() => Int, {
    description: "Score of the submission",
  })
  score: number;

  /**
   * The date when the submission was created.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Submission created date must not be empty" })
  @IsDate({ message: "Submission created date must be a date" })
  @Field(() => Date, {
    description: "Date when the submission was created",
  })
  createdAt: Date;

  /**
   * The date when the submission was last updated.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Submission updated date must not be empty" })
  @IsDate({ message: "Submission updated date must be a date" })
  @Field(() => Date, {
    description: "Date when the submission was last updated",
  })
  updatedAt: Date;
}
