import { Event } from "@prisma/client";

export interface GeoJSONPoint {
    type: "Point";
    coordinates: [number, number]; // [latitude, longitude]
}
export type EventWithGeoJSON = Omit<Event, 'address'> & {
    address: GeoJSONPoint;
};

