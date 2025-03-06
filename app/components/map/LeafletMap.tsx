"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Leaflet library for handling map markers
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import { EventWithGeoJSON } from "@/app/interfaces/Geojson";
import Link from "next/link";

const AdjustMapToBounds = ({ events }: { events: EventWithGeoJSON[] }) => {
    const map = useMap();

    useEffect(() => {
        if (events.length > 0) {
            const bounds = new L.LatLngBounds([]);
            events.forEach((event) => {
                bounds.extend([event.address.coordinates[1], event.address.coordinates[0]]);
            });
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [events, map]);

    return null;
};

const LeafletMap = ({ events }: { events: EventWithGeoJSON[] }) => {
    const markerIcon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const parisCenter: [number, number] = [48.8566, 2.3522];

    return (
        <>
            <MapContainer
                center={parisCenter}
                zoom={8}
                style={{ height: "500px", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <AdjustMapToBounds events={events} />
                {events.map((event) => (
                    <Marker
                        key={event.id}
                        position={[event.address.coordinates[1], event.address.coordinates[0]]}
                        icon={markerIcon}
                    >
                        <Popup>
                            <Link href={`/events/${event.id}`} className="text-blue-600"><strong>{event.name}</strong></Link>
                            <br />
                            {event.desc}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default LeafletMap;
