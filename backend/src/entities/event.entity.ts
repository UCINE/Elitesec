import { Field, Int, ObjectType } from "@nestjs/graphql";
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

/**
 * Represents an event within the system.
 * This entity encapsulates fundamental event-related details.
 *
 * @export
 * @class Event
 */
@ObjectType()
export class Event {
  /**
   * The unique identifier of the event.
   * @type {string}
   */
  @IsNotEmpty({ message: "Event ID must not be empty" })
  @Field(() => String, { description: "Unique identifier of the event" })
  id: string;

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
   * The date when the event starts.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Event start date must not be empty" })
  @IsDate({ message: "Event start date must be a date" })
  @Field(() => Date, {
    description: "Date when the event starts",
  })
  startAt: Date;

  /**
   * The date when the event ends.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Event end date must not be empty" })
  @IsDate({ message: "Event end date must be a date" })
  @Field(() => Date, {
    description: "Date when the event ends",
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
   * The link of the event if there is any.
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
   * The image of the event if there is any.
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
   * Whether or not the event is published.
   * @type {boolean}
   * @default false
   */
  @IsNotEmpty({ message: "Event is published must not be empty" })
  @IsBoolean({ message: "Event is published must be a boolean" })
  @Field(() => Boolean, {
    description: "Whether or not the event is published",
    defaultValue: false,
  })
  isPublished: boolean;

  /**
   * The maximum size of the team.
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
  @Field(() => Int, {
    description: "Maximum size of the team",
    defaultValue: 1,
  })
  maxTeamSize: number;

  /**
   * The date the event was created.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Event created at date must not be empty" })
  @IsDate({ message: "Event created at date must be a date" })
  @Field(() => Date, {
    description: "Date the event was created",
  })
  createdAt: Date;

  /**
   * The date the event was last updated.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Event updated at date must not be empty" })
  @IsDate({ message: "Event updated at date must be a date" })
  @Field(() => Date, {
    description: "Date the event was last updated",
  })
  updatedAt: Date;
}
