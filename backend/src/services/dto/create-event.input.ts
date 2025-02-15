import { Field, InputType } from "@nestjs/graphql";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * The input type for creating an event.
 *
 * @export
 * @class CreateEventInput
 */
@InputType()
export class CreateEventInput {
  /**
   * The title of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event title must not be empty" })
  @IsString({ message: "Event title must be a string" })
  @Field(() => String, {
    description: "Title of the event",
  })
  title: string;

  /**
   * The description of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event description must not be empty" })
  @IsString({ message: "Event description must be a string" })
  @Field(() => String, {
    description: "Description of the event",
    nullable: true,
  })
  description?: string;

  /**
   * The start date of the event.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Event start date must not be empty" })
  @IsDate({ message: "Event start date must be a date" })
  @Field(() => Date, {
    description: "Start date of the event",
  })
  startAt: Date;

  /**
   * The end date of the event.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Event end date must not be empty" })
  @IsDate({ message: "Event end date must be a date" })
  @Field(() => Date, {
    description: "End date of the event",
  })
  endAt: Date;

  /**
   * The location of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event location must not be empty" })
  @IsString({ message: "Event location must be a string" })
  @Field(() => String, {
    description: "Location of the event",
    nullable: true,
  })
  location?: string;

  /**
   * The link of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event link must not be empty" })
  @IsString({ message: "Event link must be a string" })
  @Field(() => String, {
    description: "Link of the event",
    nullable: true,
  })
  link?: string;

  /**
   * The image of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event image must not be empty" })
  @IsString({ message: "Event image must be a string" })
  @Field(() => String, {
    description: "Image of the event",
    nullable: true,
  })
  image?: string;

  /**
   * The maximum team size of the event.
   * @type {number}
   */
  @IsNotEmpty({ message: "Event max team size must not be empty" })
  @IsNumber(
    {
      maxDecimalPlaces: 0,
      allowNaN: false,
      allowInfinity: false,
    },
    { message: "Event max team size must be a number" }
  )
  @Field(() => Number, {
    description: "Maximum team size of the event",
    defaultValue: 1,
  })
  maxTeamSize: number;
}
