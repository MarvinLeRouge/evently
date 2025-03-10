import PicturesList from "@/app/components/pictures/PicturesList";
import { PrismaClient, Event, Picture } from "@prisma/client";

const prisma = new PrismaClient();

const getEventById = async (id: string): Promise<Event & { pictures: Picture[]} | null> => {
    return await prisma.event.findUnique({
        where: { id },
        include: {
            pictures: true
        }
    });
};

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const event = await getEventById(id);
    console.log(event)

    if (!event) return <p>Event not found</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{event.name}</h1>
            <p>{event.desc}</p>
            <img src={event.picture} alt={event.name} className="w-full max-w-lg my-4" />
            <p className="text-gray-500">
                {new Date(event.start_at).toLocaleString()} - {new Date(event.end_at).toLocaleString()}
            </p>
            {event.pictures && <PicturesList pictures={event.pictures} event={event} />}
        </div>
    );
}
