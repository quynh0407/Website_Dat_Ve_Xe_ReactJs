import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiYmFvZHV5ZW4xMjMiLCJhIjoiY205NWRnenRmMHh0ZDJpcjQ4a2Y2ZzRhaSJ9.w70EOHntFvOVf6uE2rIahQ";

const MapPreview = ({ startLocation, endLocation }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (!mapContainer.current || !startLocation || !endLocation) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: startLocation,
            zoom: 10,
        });

        map.current.on('load', async () => {
            // Add markers
            new mapboxgl.Marker({ color: "green" })
                .setLngLat(startLocation)
                .addTo(map.current);

            new mapboxgl.Marker({ color: "red" })
                .setLngLat(endLocation)
                .addTo(map.current);

            // Fit to bounds
            const bounds = new mapboxgl.LngLatBounds();
            bounds.extend(startLocation).extend(endLocation);
            map.current.fitBounds(bounds, { padding: 60 });

            // Fetch directions
            const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLocation[0]},${startLocation[1]};${endLocation[0]},${endLocation[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

            const response = await fetch(url);
            const data = await response.json();

            const route = data.routes[0].geometry;

            // Add route line to the map
            map.current.addSource("route", {
                type: "geojson",
                data: {
                    type: "Feature",
                    geometry: route,
                },
            });

            map.current.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#0F3079",
                    "line-width": 5,
                },
            });
        });

        return () => map.current?.remove();
    }, [startLocation, endLocation]);

    return <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-md mt-8" />;
};

export default MapPreview;
