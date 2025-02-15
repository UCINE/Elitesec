import { Field, Int, ObjectType } from "@nestjs/graphql";
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

/**
 * Represents an individual challenge within the system.
 * This entity encapsulates fundamental challenge-related details.
 *
 * @export
 * @class Challenge
 */
@ObjectType()
export class Challenge {
  /**
   * The unique identifier of the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge ID must not be empty" })
  @Field(() => String, { description: "Unique identifier of the challenge" })
  id: string;

  /**
   * The unique identifier of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event ID must not be empty" })
  @Field(() => String, {
    description: "Unique identifier of the event",
    nullable: true,
  })
  eventId?: string;

  /**
   * The unique identifier of the first user to complete the challenge.
   * @type {string}
   */
  @IsNotEmpty({ message: "First blood ID must not be empty" })
  @Field(() => String, {
    description:
      "Unique identifier of the first user to complete the challenge",
    nullable: true,
  })
  firstBloodId?: string;

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
   * The image of the challenge (optional)
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
   * @type {string}
   */
  @IsNotEmpty({ message: "Challenge score must not be empty" })
  @IsNumber(
    { allowNaN: false },
    { message: "Challenge score must be a number" }
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

  /**
   * Whether or not the challenge is published.
   * @type {boolean}
   * @default false
   */
  @IsNotEmpty({ message: "Challenge is published must not be empty" })
  @IsBoolean({ message: "Challenge is published must be a boolean" })
  @Field(() => Boolean, {
    description: "Whether or not the challenge is published",
    defaultValue: false,
  })
  isPublished: boolean;

  /**
   * The date and time the challenge was created.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Challenge created at must not be empty" })
  @IsDate({ message: "Challenge created at must be a date" })
  @Field(() => Date, {
    description: "Date and time the challenge was created",
  })
  createdAt: Date;

  /**
   * The date and time the challenge was last updated.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Challenge updated at must not be empty" })
  @IsDate({ message: "Challenge updated at must be a date" })
  @Field(() => Date, {
    description: "Date and time the challenge was last updated",
  })
  updatedAt: Date;
}
