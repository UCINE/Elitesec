import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

/**
 * The input type for creating a team.
 *
 * @export
 * @class CreateTeamInput
 */
@InputType()
export class CreateTeamInput {
  /**
   * The owner of the team.
   * @type {string}
   */
  @IsNotEmpty({ message: "Team owner ID must not be empty" })
  @IsString({ message: "Team owner ID must be a string" })
  @Field(() => String, {
    description: "Owner of the team",
  })
  ownerId: string;

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
}
