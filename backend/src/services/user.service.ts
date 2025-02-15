import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { User } from "src/entities/user.entity";
import { userIncludes } from "src/includes/user.includes";
import { PrismaService } from "src/services/prisma.service";
import { CreateUserInput } from "./dto/create-user.input";
import { Team } from "src/entities/team.entity";

@Injectable()
export class UserService {
  /**
   * Creates an instance of the UserService class.
   *
   * @param {PrismaService} prisma - The Prisma service for database interactions.
   */
  constructor(private readonly prisma: PrismaService) {}

  getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: userIncludes,
    });
  }

  async getUserById(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: userIncludes,
    });
    if (!user) throw new NotFoundException("User not found");
    return user;
  }

  populateUserIds(userIds: string[]): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      include: userIncludes,
    });
  }

  getUserEvents(userId: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  getUserTeams(userId: string): Promise<Team[]> {
    return this.prisma.team.findMany({
      where: {
        members: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        members: true,
      },
    });
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        username: createUserInput.username,
        email: createUserInput.email,
        avatar: {
          create: {
            defaultFilename: createUserInput.avatar,
            filename: createUserInput.avatar,
          },
        },
        connection: {
          create: {
            provider: createUserInput.provider,
            providerId: createUserInput.providerId,
          },
        },
      },
      include: userIncludes,
    });
  }

  updateUsername(userId: string, username: string): Promise<User> {
    /**
     * Remove all whitespace from the username.
     * This is done to prevent users from having a username that is only whitespace.
     * This is also done to prevent users from having a username that starts or ends with whitespace.
     */
    username = username.replace(/\s+/g, "");
    if (username.length < 3)
      throw new ForbiddenException("Username must be at least 3 characters");

    try {
      return this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          username,
        },
        include: userIncludes,
      });
    } catch (e) {
      throw new ForbiddenException("Unable to update username");
    }
  }

  updateAvatar(userId: string, avatar: string): Promise<User> {
    try {
      return this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          avatar: {
            update: {
              filename: avatar,
            },
          },
        },
        include: userIncludes,
      });
    } catch (e) {
      throw new ForbiddenException("Unable to update avatar");
    }
  }

  async deleteUser(userId: string): Promise<User> {
    try {
      /**
       * Delete the user's avatar and connection before deleting the user.
       * This is done to prevent orphaned data in the database.
       */
      const [deletedAvatarsCount, deletedConnectionsCount, deletedUser] =
        await this.prisma.$transaction([
          this.prisma.avatar.deleteMany({
            where: {
              userId,
            },
          }),
          this.prisma.connection.deleteMany({
            where: {
              userId,
            },
          }),
          this.prisma.user.delete({
            where: {
              id: userId,
            },
            include: userIncludes,
          }),
        ]);

      if (deletedAvatarsCount.count === 0)
        throw new ForbiddenException("Unable to delete user avatar");
      if (deletedConnectionsCount.count === 0)
        throw new ForbiddenException("Unable to delete user connection");

      return deletedUser;
    } catch (e) {
      throw new ForbiddenException("Unable to delete user and associated data");
    }
  }

  async deleteAllUsers(): Promise<void> {
    try {
      await this.prisma.$transaction([
        this.prisma.avatar.deleteMany({}),
        this.prisma.connection.deleteMany({}),
        this.prisma.user.deleteMany({}),
      ]);
    } catch (e) {
      throw new ForbiddenException(
        "Unable to delete all users and associated data"
      );
    }
  }
}
