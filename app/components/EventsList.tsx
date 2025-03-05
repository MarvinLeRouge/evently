import EventItem from "./EventItem";
import { Event } from "@prisma/client";

const EventsList = ({ events }: { events: Event[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventsList;
