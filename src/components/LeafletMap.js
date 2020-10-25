import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Map, Marker, TileLayer, Circle, withLeaflet } from "react-leaflet";

import SearchControl from "./SearchControl";

const LeafletMap = () => {
  const [center, setCenter] = useState([-37.8047962, 144.9413828]);
  const [coordinates, setCoordinates] = useState([]);
  const radius = 25000; // unit in meters
  const mapRef = useRef(null);
  const SearchBar = withLeaflet(SearchControl);

  useEffect(() => {
    const map = mapRef.current.leafletElement;

    // Retrieve coordinates of selected location
    map.on("geosearch/showlocation", (e) => {
      const newCoordinates = [...coordinates];
      if (newCoordinates.length < 2) {
        newCoordinates.push([e.location.y, e.location.x]);
      } else {
        newCoordinates.splice(0, 2);
        newCoordinates.push([e.location.y, e.location.x]);
      }
      setCoordinates(newCoordinates);
    });
  }, [coordinates]);

  return (
    <StyledMap center={center} zoom={10} ref={mapRef}>
      <SearchBar
        searchLabel={
          coordinates.length === 1
            ? "Where are you going?"
            : "Where do you live"
        }
      />
      <TileLayer
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        attribution={
          "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        }
      />
      {coordinates.map((pos, index) => (
        <Marker position={pos} key={index}>
          <Circle
            center={pos}
            color={index === 0 ? "blue" : "green"}
            radius={radius}
            key={index}
          />
        </Marker>
      ))}
    </StyledMap>
  );
};

export default LeafletMap;

const StyledMap = styled(Map)`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
