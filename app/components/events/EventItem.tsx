import { Event } from "@prisma/client";
import Link from "next/link";

const EventItem = ({ event }: { event: Event }) => {
    return (
        <Link href={`/events/${event.id}`} className="text-blue-600">
            <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p>{event.desc}</p>
                <p className="text-gray-500">{new Date(event.start_at).toLocaleDateString()}</p>
            </div>
        </Link>
    );
};

export default EventItem;
