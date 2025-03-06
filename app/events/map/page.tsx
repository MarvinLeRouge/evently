import { PrismaClient } from "@prisma/client";
import { EventWithGeoJSON } from "@/app/interfaces/Geojson";
import LeafletMapWrapper from "@/app/components/map/LeafletMapWrapper";
const prisma = new PrismaClient();


const getEvents = async (): Promise<EventWithGeoJSON[]> => {
    const events = await prisma.event.findMany({});
    const eventsWithGeoJSONArray:EventWithGeoJSON[] = []
    events.forEach((event) => {
        eventsWithGeoJSONArray.push(event as unknown as EventWithGeoJSON)
    })
    return eventsWithGeoJSONArray
};

export default async function EventsMapPage() {
    const events = await getEvents();
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Events Map</h1>
            <LeafletMapWrapper events={events} />
        </div>
    );
};

