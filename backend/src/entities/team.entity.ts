import { Field, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

import { User } from "./user.entity";
import { Event } from "./event.entity";
import { Submission } from "./submission.entity";

/**
 * Represents a team within the system.
 * This entity encapsulates fundamental team-related details.
 *
 * @export
 * @class Team
 */
@ObjectType()
export class Team {
  /**
   * The unique identifier of the team.
   * @type {string}
   */
  @IsNotEmpty({ message: "Team ID must not be empty" })
  @Field(() => String, { description: "Unique identifier of the team" })
  id: string;

  /**
   * The owner ID of the team.
   * @type {String}
   */
  @IsNotEmpty({ message: "Team owner ID must not be empty" })
  @IsString({ message: "Team owner ID must be a string" })
  @Field(() => String, {
    description: "Owner ID of the team",
  })
  ownerId: string;

  /**
   * The name of the team.
   * @type {string}
   */
  @IsNotEmpty({ message: "Team name must not be empty" })
  @IsString({ message: "Team name must be a string" })
  @Field(() => String, {
    description: "Name of the team",
  })
  name: string;

  /**
   * The description of the team.
   * @type {string}
   */
  @IsNotEmpty({ message: "Team description must not be empty" })
  @IsString({ message: "Team description must be a string" })
  @Field(() => String, {
    description: "Description of the team",
    nullable: true,
  })
  description?: string;

  /**
   * The image of the team.
   * @type {string}
   */
  @IsNotEmpty({ message: "Team image must not be empty" })
  @IsString({ message: "Team image must be a string" })
  @Field(() => String, {
    description: "Image of the team",
    nullable: true,
  })
  image?: string;

  /**
   * The members of the team.
   * @type {User[]}
   */
  @IsNotEmpty({ message: "Team members must not be empty" })
  @Field(() => [User], {
    description: "Members of the team",
  })
  members?: User[];

  /**
   * The submissions of the team.
   * @type {Submission[]}
   */
  @IsNotEmpty({ message: "Team submissions must not be empty" })
  @Field(() => [Submission], {
    description: "Submissions of the team",
  })
  submissions?: Submission[];

  /**
   * The event joined by the team.
   * @type {Event}
   */
  @IsNotEmpty({ message: "Team event must not be empty" })
  @Field(() => Event, {
    description: "Event joined by the team",
  })
  event?: Event;

  /**
   * Whether the team is banned or not from the event.
   * @type {boolean}
   */
  @IsNotEmpty({ message: "Team isBanned must not be empty" })
  @IsBoolean({ message: "Team isBanned must be a boolean" })
  @Field(() => Boolean, {
    description: "Whether the team is banned or not from the event",
    defaultValue: false,
  })
  isBanned: boolean;

  /**
   * The date when the team was created.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Team creation date must not be empty" })
  @IsDate({ message: "Team creation date must be a date" })
  @Field(() => Date, {
    description: "Date when the team was created",
  })
  createdAt: Date;

  /**
   * The date when the team was last updated.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Team last updated date must not be empty" })
  @IsDate({ message: "Team last updated date must be a date" })
  @Field(() => Date, {
    description: "Date when the team was last updated",
  })
  updatedAt: Date;
}
