import { PrismaClient, Event } from "@prisma/client";

const prisma = new PrismaClient();

const getEventById = async (id: string): Promise<Event | null> => {
    return await prisma.event.findUnique({
        where: { id },
    });
};

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const event = await getEventById(id);

    if (!event) return <p>Event not found</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{event.name}</h1>
            <p>{event.desc}</p>
            <img src={event.picture} alt={event.name} className="w-full max-w-lg my-4" />
            <p className="text-gray-500">
                {new Date(event.start_at).toLocaleString()} - {new Date(event.end_at).toLocaleString()}
            </p>
        </div>
    );
}
