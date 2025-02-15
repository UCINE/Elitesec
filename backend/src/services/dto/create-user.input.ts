import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

/**
 * The input type for creating a user.
 *
 * @export
 * @class CreateUserInput
 */
@InputType()
export class CreateUserInput {
  /**
   * The username of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User username must not be empty" })
  @IsString({ message: "User username must be a string" })
  @Field(() => String, {
    description: "Username of the user",
  })
  username: string;

  /**
   * The email of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User email must not be empty" })
  @IsEmail({}, { message: "User email must be a valid email" })
  @Field(() => String, {
    description: "Email of the user",
  })
  email: string;

  /**
   * The avatar of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User avatar must not be empty" })
  @IsString({ message: "User avatar must be a string" })
  @Field(() => String, {
    description: "Avatar of the user",
  })
  avatar: string;

  /**
   * The provider of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User provider must not be empty" })
  @IsString({ message: "User provider must be a string" })
  @Field(() => String, {
    description: "Provider of the user",
  })
  provider: string;

  /**
   * The provider ID of the user.
   * @type {string}
   */
  @IsNotEmpty({ message: "User provider ID must not be empty" })
  @IsString({ message: "User provider ID must be a string" })
  @Field(() => String, {
    description: "Provider ID of the user",
  })
  providerId: string;
}
