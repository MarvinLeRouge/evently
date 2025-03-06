"use client";

import { EventWithGeoJSON } from "@/app/interfaces/Geojson";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function MapWrapper({ events }: { events: EventWithGeoJSON[] }) {
    return <MapComponent events={events} />;
}