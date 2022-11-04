import * as React from 'react';
import { useEffect, useRef } from 'react';

const GoogleMap = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div className="city-map" ref={ref} id="map" />;
};

export default GoogleMap;
