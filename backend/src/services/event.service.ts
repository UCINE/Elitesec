import { Injectable, NotFoundException } from "@nestjs/common";

import { Event } from "src/entities/event.entity";
import { PrismaService } from "./prisma.service";
import { CreateEventInput } from "./dto/create-event.input";
import { eventIncludes } from "src/includes/event.includes";

@Injectable()
export class EventService {
  /**
   * Creates an instance of the EventService class.
   *
   * @param {PrismaService} prisma - The Prisma service for database interactions.
   */
  constructor(private readonly prisma: PrismaService) {}

  getAllEvents(): Promise<Event[]> {
    return this.prisma.event.findMany({
      include: eventIncludes,
      orderBy: {
        startAt: "asc",
      },
    });
  }

  getPublishedEvents(): Promise<Event[]> {
    return this.prisma.event.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        startAt: "asc",
      },
    });
  }

  getOngoingEvents(onlyPublished: boolean): Promise<Event[]> {
    const where = {
      startAt: {
        lte: new Date(),
      },
      endAt: {
        gte: new Date(),
      },
    };
    if (onlyPublished) where["isPublished"] = true;
    return this.prisma.event.findMany({
      where,
      orderBy: {
        startAt: "asc",
      },
    });
  }

  getUpcomingEvents(onlyPublished: boolean): Promise<Event[]> {
    const where = {
      startAt: {
        gt: new Date(),
      },
    };
    if (onlyPublished) where["isPublished"] = true;
    return this.prisma.event.findMany({
      where,
      orderBy: {
        startAt: "asc",
      },
    });
  }

  getPastEvents(onlyPublished: boolean): Promise<Event[]> {
    const where = {
      endAt: {
        lt: new Date(),
      },
    };
    if (onlyPublished) where["isPublished"] = true;
    return this.prisma.event.findMany({
      where,
      orderBy: {
        endAt: "desc",
      },
    });
  }

  async getEventById(id: string): Promise<Event> {
    const event: Event = await this.prisma.event.findUnique({
      where: {
        id,
      },
      include: eventIncludes,
    });
    if (!event) throw new NotFoundException("Event not found");
    return event;
  }

  populateEventIds(eventIds: string[]): Promise<Event[]> {
    return this.prisma.event.findMany({
      where: {
        id: {
          in: eventIds,
        },
      },
      include: eventIncludes,
      orderBy: {
        startAt: "asc",
      },
    });
  }

  async createEvent(createEventInput: CreateEventInput): Promise<Event> {
    return this.prisma.event.create({
      data: {
        title: createEventInput.title,
        description: createEventInput.description,
        startAt: createEventInput.startAt,
        endAt: createEventInput.endAt,
        location: createEventInput.location,
        link: createEventInput.link,
        image: createEventInput.image,
        maxTeamSize: createEventInput.maxTeamSize,
      },
    });
  }

  async updateEvent(
    id: string,
    createEventInput: CreateEventInput
  ): Promise<Event> {
    return this.prisma.event.update({
      where: {
        id,
      },
      data: {
        ...createEventInput,
      },
    });
  }

  async publishEvent(id: string): Promise<Event> {
    return this.prisma.event.update({
      where: {
        id,
      },
      data: {
        isPublished: true,
      },
    });
  }

  async hideEvent(id: string): Promise<Event> {
    return this.prisma.event.update({
      where: {
        id,
      },
      data: {
        isPublished: false,
      },
    });
  }

  async deleteEvent(id: string): Promise<Event> {
    return this.prisma.event.delete({
      where: {
        id,
      },
    });
  }
}
