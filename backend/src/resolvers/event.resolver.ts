import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Event } from "src/entities/event.entity";
import { EventService } from "src/services/event.service";
import { CreateEventInput } from "src/services/dto/create-event.input";

@Resolver(() => Event)
export class EventResolver {
  /**
   * Creates an instance of the event resolver.
   *
   * @param {EventService} eventService - The event service used for managing event-related queries.
   */
  constructor(private readonly eventService: EventService) {}

  @Query(() => [Event], {
    name: "getAllEvents",
    description: "Retrieves all events with their associated data",
  })
  getAllEvents(): Promise<Event[]> {
    return this.eventService.getAllEvents();
  }

  @Query(() => [Event], {
    name: "getPublishedEvents",
    description: "Retrieves all published events",
  })
  getPublishedEvents(): Promise<Event[]> {
    return this.eventService.getPublishedEvents();
  }

  @Query(() => [Event], {
    name: "getOngoingEvents",
    description: "Retrieves all ongoing events",
  })
  getOngoingEvents(
    @Args("onlyPublished", { type: () => Boolean, nullable: true })
    onlyPublished: boolean = false
  ): Promise<Event[]> {
    return this.eventService.getOngoingEvents(onlyPublished);
  }

  @Query(() => [Event], {
    name: "getUpcomingEvents",
    description: "Retrieves all upcoming events",
  })
  getUpcomingEvents(
    @Args("onlyPublished", { type: () => Boolean, nullable: true })
    onlyPublished: boolean = false
  ): Promise<Event[]> {
    return this.eventService.getUpcomingEvents(onlyPublished);
  }

  @Query(() => [Event], {
    name: "getPastEvents",
    description: "Retrieves all past events",
  })
  getPastEvents(
    @Args("onlyPublished", { type: () => Boolean, nullable: true })
    onlyPublished: boolean = false
  ): Promise<Event[]> {
    return this.eventService.getPastEvents(onlyPublished);
  }

  @Query(() => Event, {
    name: "getEventById",
    description: "Retrieves an event by its ID with associated data",
  })
  getEventById(@Args("id", { type: () => String }) id: string): Promise<Event> {
    return this.eventService.getEventById(id);
  }

  @Query(() => [Event], {
    name: "populateEventIds",
    description: "Retrieves a list of events by their IDs",
  })
  populateEventIds(
    @Args("eventIds", { type: () => [String] }) eventIds: string[]
  ): Promise<Event[]> {
    return this.eventService.populateEventIds(eventIds);
  }

  @Mutation(() => Event, {
    name: "createEvent",
    description: "Creates a new event",
  })
  createEvent(
    @Args("createEventInput") createEventInput: CreateEventInput
  ): Promise<Event> {
    return this.eventService.createEvent(createEventInput);
  }

  @Mutation(() => Event, {
    name: "updateEvent",
    description: "Updates an existing event",
  })
  updateEvent(
    @Args("id", { type: () => String }) id: string,
    @Args("createEventInput") createEventInput: CreateEventInput
  ): Promise<Event> {
    return this.eventService.updateEvent(id, createEventInput);
  }

  @Mutation(() => Event, {
    name: "publishEvent",
    description: "Publishes an existing event",
  })
  publishEvent(@Args("id", { type: () => String }) id: string): Promise<Event> {
    return this.eventService.publishEvent(id);
  }

  @Mutation(() => Event, {
    name: "hideEvent",
    description: "Hides an existing event",
  })
  hideEvent(@Args("id", { type: () => String }) id: string): Promise<Event> {
    return this.eventService.hideEvent(id);
  }

  @Mutation(() => Event, {
    name: "deleteEvent",
    description: "Deletes an existing event",
  })
  deleteEvent(@Args("id", { type: () => String }) id: string): Promise<Event> {
    return this.eventService.deleteEvent(id);
  }
}
