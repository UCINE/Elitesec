import { ForbiddenException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { DEBUG } from "src/main";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";

@Resolver(() => User)
export class UserResolver {
  /**
   * Creates an instance of the user resolver.
   *
   * @param {UserService} userService - The user service used for managing user-related queries.
   */
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], {
    name: "getAllUsers",
    description: "Retrieves all users with their associated data",
  })
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Query(() => User, {
    name: "getUserById",
    description: "Retrieves a user by their ID with associated data",
  })
  getUserById(@Args("id", { type: () => String }) id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Query(() => [User], {
    name: "populateUserIds",
    description: "Retrieves a list of users by their IDs",
  })
  populateUserIds(
    @Args("userIds", { type: () => [String] }) userIds: string[]
  ): Promise<User[]> {
    return this.userService.populateUserIds(userIds);
  }

  @Mutation(() => User, {
    name: "updateUsername",
    description: "Updates the username of a user",
  })
  updateUsername(
    @Args("userId", { type: () => String }) userId: string,
    @Args("username", { type: () => String }) username: string
  ): Promise<User> {
    // if (id !== userId && !DEBUG)
    //   throw new ForbiddenException("User not authorized");
    return this.userService.updateUsername(userId, username);
  }

  @Mutation(() => User, {
    name: "updateAvatar",
    description: "Updates the avatar of a user",
  })
  updateAvatar(
    @Args("userId", { type: () => String }) userId: string,
    @Args("avatar", { type: () => String }) avatar: string
  ): Promise<User> {
    // if (id !== userId && !DEBUG)
    //   throw new ForbiddenException('User not authorized');
    return this.userService.updateAvatar(userId, avatar);
  }

  @Mutation(() => String, {
    name: "deleteAllUsers",
    description: "Deletes all users in development environment",
  })
  deleteAllUsers(): string {
    if (DEBUG) this.userService.deleteAllUsers();
    else throw new ForbiddenException("User not authorized");
    return "All users deleted";
  }
}
