import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsDate, IsBoolean, IsInt } from "class-validator";

import { User } from "./user.entity";

/**
 * Represents a connection entity that stores user-related data.
 *
 * @export
 * @class Connection
 */
@ObjectType()
export class Connection {
  /**
   * The unique identifier of the connection.
   * @type {string}
   */
  @IsNotEmpty({ message: "Connection ID must not be empty" })
  @Field(() => String, { description: "Unique identifier of the connection" })
  id: string;

  /**
   * The ID of the associated user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User ID must not be empty" })
  @Field(() => String, { description: "The ID of the associated user" })
  userId: string;

  /**
   * The associated user entity.
   * @type {User}
   */
  @Field(() => User, {
    description: "The associated user entity",
    nullable: true,
  })
  user?: User;

  /**
   * The provider of the connection.
   * @type {string}
   */
  @IsNotEmpty({ message: "Provider must not be empty" })
  @Field(() => String, { description: "Provider of the connection" })
  provider: string;

  /**
   * The ID from the provider of the connection.
   * @type {string}
   */
  @IsNotEmpty({ message: "Provider ID must not be empty" })
  @Field(() => String, { description: "Provider ID of the connection" })
  providerId: string;

  /**
   * The date when the connection was created.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Created at must not be empty" })
  @IsDate({ message: "Created at must be a valid date" })
  @Field(() => Date, {
    description: "The date when the connection was created",
  })
  createdAt: Date;

  /**
   * The date when the connection was last updated.
   * @type {Date}
   */
  @IsNotEmpty({ message: "Updated at must not be empty" })
  @IsDate({ message: "Updated at must be a valid date" })
  @Field(() => Date, {
    description: "The date when the connection was last updated",
  })
  updatedAt: Date;
}
