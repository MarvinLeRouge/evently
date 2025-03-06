"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import L from "leaflet"; // Leaflet library for handling map markers
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import { Event } from "@prisma/client";
interface GeoJSONPoint {
    type: "Point";
    coordinates: [number, number]; // [latitude, longitude]
}
type EventWithGeoJSON = Omit<Event, 'address'> & {
    address: GeoJSONPoint;
};

const LeafletMap = ({ events }: { events: EventWithGeoJSON[] }) => {
    console.log("events length", events.length)
    //let mappableEvents = events.filter((event): event is EventWithGeoJSON => event !== null)
    //console.log(events.length)

    const andorraBounds: [[number, number], [number, number]] = [
        [42.428, 1.407], // Coin sud-ouest
        [42.656, 1.786]  // Coin nord-est
    ];

    return (
        <MapContainer
            bounds={andorraBounds}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default LeafletMap;
