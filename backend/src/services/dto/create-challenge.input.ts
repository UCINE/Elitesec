import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * The input type for creating a challenge.
 *
 * @export
 * @class CreateChallengeInput
 */
@InputType()
export class CreateChallengeInput {
  /**
   * The ID of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event ID must not be empty" })
  @IsString({ message: "Event ID must be a string" })
  @Field(() => String, {
    description: "ID of the event",
  })
  eventId: string;

  /**
   * The title of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge title must not be empty" })
  @IsString({ message: "Challenge title must be a string" })
  @Field(() => String, {
    description: "Title of the challenge",
  })
  title: string;

  /**
   * The description of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge description must not be empty" })
  @IsString({ message: "Challenge description must be a string" })
  @Field(() => String, {
    description: "Description of the challenge",
    nullable: true,
  })
  description?: string;

  /**
   * The image of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge image must not be empty" })
  @IsString({ message: "Challenge image must be a string" })
  @Field(() => String, {
    description: "Image of the challenge",
    nullable: true,
  })
  image?: string;

  /**
   * The score of the challenge.
   * @type {number}
   */
  @IsNotEmpty({ message: "Challenge score must not be empty" })
  @IsNumber(
    { maxDecimalPlaces: 0, allowInfinity: false, allowNaN: false },
    { message: "Challenge score must be an integer" }
  )
  @Field(() => Int, {
    description: "Score of the challenge",
  })
  score: number;

  /**
   * The flag of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge flag must not be empty" })
  @IsString({ message: "Challenge flag must be a string" })
  @Field(() => String, {
    description: "Flag of the challenge",
    nullable: true,
  })
  flag?: string;
}
