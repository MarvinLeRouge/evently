import { PrismaClient, Event } from "@prisma/client";
import LeafletMap from "@/app/components/LeafletMap";
  
const prisma = new PrismaClient();

interface GeoJSONPoint {
    type: "Point";
    coordinates: [number, number]; // [latitude, longitude]
}
type EventWithGeoJSON = Omit<Event, 'address'> & {
    address: GeoJSONPoint;
};

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
            <LeafletMap events={events} />
        </div>
    );
};

