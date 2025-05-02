"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import type { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";
import { useEffect, useRef, useState } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ saturation: -100 }, { lightness: 50 }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ lightness: 100 }, { visibility: "simplified" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#d3d3d3" }],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [{ color: "#f0f0f0" }],
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{ color: "#444444" }],
  },
];

const center = {
  lat: 55.751244,
  lng: 37.618423,
};

// Определяем библиотеки для загрузки
const libraries: Libraries = ["marker"];

export const Map = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Создаем маркер после загрузки карты
  useEffect(() => {
    if (
      !mapLoaded ||
      typeof window === "undefined" ||
      !window.google ||
      !mapRef.current
    )
      return;

    // Безопасный доступ к API для маркеров
    const { AdvancedMarkerElement, PinElement } = google.maps.marker;

    if (!AdvancedMarkerElement || !PinElement) {
      console.error("Google Maps Advanced Marker API не загружена");
      return;
    }

    try {
      // Создаем элемент для изображения
      const glyphImg = document.createElement("img");
      glyphImg.src = "/marker.svg";
      glyphImg.width = 24;
      glyphImg.height = 24;
      glyphImg.alt = "Маркер";

      // Обработчик для случая, если SVG не загрузится
      glyphImg.onerror = () => {
        console.error("Ошибка при загрузке SVG маркера");
      };

      // Создаем пин с нашим SVG-изображением
      const pinElement = new PinElement({
        background: "#FFFFFF",
        borderColor: "#3B82F6",
        glyphColor: "#3B82F6",
        scale: 1.2,
        glyph: glyphImg,
      });

      // Создаем и добавляем AdvancedMarkerElement на карту
      const advancedMarker = new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        content: pinElement.element,
        title: "Кастомный маркер",
      });

      console.log("Маркер успешно создан");
    } catch (error) {
      console.error("Ошибка при создании маркера:", error);
    }
  }, [mapLoaded]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID!}
      libraries={libraries}
      onLoad={() => console.log("Google Maps API загружен")}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{ styles: mapStyles }}
        onLoad={(map) => {
          mapRef.current = map;
          setMapLoaded(true);
          console.log("Карта загружена");
        }}
      />
    </LoadScript>
  );
};
