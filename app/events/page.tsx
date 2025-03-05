import React from "react";
import EventsList from "../components/EventsList";
import { PrismaClient, Event } from "@prisma/client";

const prisma = new PrismaClient();


const getEvents = async (): Promise<Event[]> => {
    const events = await prisma.event.findMany({
        include: {
            pictures: true
        }
    });
    console.log(events)

    return events
};

export default async function EventsPage() {
    const events: Event[] = await getEvents();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Events</h1>
            <EventsList events={events} />
        </div>
    );
}
