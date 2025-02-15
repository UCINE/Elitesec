import { Field, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

import { Avatar } from "./avatar.entity";
import { Connection } from "./connection.entity";

/**
 * Represents an individual user within the system.
 * This entity encapsulates fundamental user-related details.
 *
 * @export
 * @class User
 */
@ObjectType()
export class User {
  /**
   * The unique identifier of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User ID must not be empty" })
  @Field(() => String, { description: "Unique identifier of the user" })
  id: string;

  /**
   * The associated connection entity.
   * @type {Connection}
   */
  @IsNotEmpty({ message: "Connection must not be empty" })
  @Field(() => Connection, {
    description: "The associated connection entity",
    nullable: true,
  })
  connection?: Connection;

  /**
   * The associated avatar entity.
   * @type {Avatar}
   */
  @IsNotEmpty({ message: "Avatar must not be empty" })
  @Field(() => Avatar, {
    description: "The associated avatar entity",
    nullable: true,
  })
  avatar?: Avatar;

  /**
   * The username chosen by the user for identification.
   * @type {string}
   */
  @IsNotEmpty({ message: "Username must not be empty" })
  @IsString({ message: "Username must be a string" })
  @Field(() => String, {
    description: "Username chosen by the user",
    nullable: true,
  })
  username?: string;

  /**
   * Whether or not the user is an admin.
   * @type {boolean}
   * @default false
   */
  @IsNotEmpty({ message: "User is admin must not be empty" })
  @IsBoolean({ message: "User is admin must be a boolean" })
  @Field(() => Boolean, {
    description: "Whether or not the user is an admin",
    defaultValue: false,
  })
  isAdmin: boolean;

  /**
   * The email address of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "Email must not be empty" })
  @IsString({ message: "Email must be a string" })
  @Field(() => String, { description: "Email address of the user" })
  email: string;

  /**
   * The date the user account was created.
   * @type {Date}
   */
  @IsNotEmpty({ message: "User created at must not be empty" })
  @IsDate({ message: "User created at must be a date" })
  @Field(() => Date, { description: "Date the user was created" })
  createdAt: Date;

  /**
   * The date the user account was last updated.
   * @type {Date}
   */
  @IsDate({ message: "User updated at must be a date" })
  @Field(() => Date, { description: "Date the user was last updated" })
  updatedAt: Date;
}
