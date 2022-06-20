// SASS
import "./Map.sass";

// REACT
import { memo } from "react";

// GOOGLE MAPS API
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Polygon } from "@react-google-maps/api";

// COMPONENTS
import List from "../List/List";
import Controls from "../Controls/Controls";
import Header from "../Header/Header";
import Markers from "../Markers/Markers";
import Load from "../Load/Load";

// CONTEXT
import { useMarkersContext } from "../../context/MarkerContext";

// OPTIONS
import { polygonOptions } from "../../utilites/polygonOptions";


const MyMap = () => {
  // CONFIG LIB
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCm3Pehwq5JVY3_9l9jsEDpnUSR1bnsBus",
  });
  const google = window.google;

  const { paths, center } = useMarkersContext();

  const map = () => {
    // Ver se é interessante
    // const handleClickPolygon = (e) => {
    //   const lat = e.latLng.lat();
    //   const lng = e.latLng.lng();
    //   const time = Date.now();
    //   const obj = { coordinates: { lat: lat, lng: lng }, timestamp: time, id: time };
    //   dispatch({
    //     type: "ADD",
    //     payload: obj,
    //   });
    // };
    
    // MAP
    const mapOptions = {
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },
      mapTypeId: "satellite",
    };

    const containerStyle = {
      width: "100%",
      height: "100%",
    };

    return (
      <div className="map">
        <Header />
        <List />
        {isLoaded && (
          <GoogleMap
            options={mapOptions}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            <Polygon
              paths={paths}
              options={polygonOptions}
              // onClick={handleClickPolygon}
            />
            <Markers />
            <Controls />
          </GoogleMap>
        )}
      </div>
    );
  };

  if (isLoaded) {
    return map();
  } else {
    return <Load />;
  }
};

export default memo(MyMap);
