import React from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
    const defaultPosition = [-8.196369, 115.251595];

    // Koordinat area Desa Pengejaran
    const desaCoordinates = [
        [-8.172581, 115.24593],         
        [-8.176829, 115.250736],
        [-8.176829, 115.253311],
        [-8.179038, 115.255200],
        [-8.182266, 115.255371],
        [-8.184475, 115.257088],
        [-8.188553, 115.257603],
        [-8.191781, 115.256916],
        [-8.193820, 115.257775],
        [-8.201466, 115.257775],
        [-8.206223, 115.256573],
        [-8.209621, 115.257946],
        [-8.212340, 115.258290],
        [-8.219476, 115.261894],
        [-8.222024, 115.252110],
        [-8.213699, 115.252796],
        [-8.205034, 115.248333],
        [-8.194840, 115.247990],
        [-8.186514, 115.242840],
        [-8.185155, 115.242840],
        [-8.181757, 115.244900],
        [-8.180397, 115.244557],
        [-8.176829, 115.245243],
        [-8.174110, 115.244557],
        [-8.173091, 115.244900],
        [-8.172581, 115.24593],
    ];

    return (
        <div>
            <MapContainer
                center={defaultPosition}
                zoom={15}
                className="w-full h-[70vh]"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />

                <Polygon
                    positions={desaCoordinates}
                    pathOptions={{
                        color: "yellow",
                        fillColor: "lightyellow",
                        fillOpacity: 0.5,
                    }}
                >
                    <Popup>Desa Pengejaran, Kabupaten Bangli, Bali</Popup>
                </Polygon>
            </MapContainer>
        </div>
    );
};

export default Maps;
