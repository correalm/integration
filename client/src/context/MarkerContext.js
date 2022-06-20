// REACT
import {
  createContext,
  useState,
  useContext,
} from "react";

// QUERY
import { useQuery } from "react-query";


// DATA
import geoCoordinates from "../GEOJson.json";

// UTILITES
import calculateCenter from "../utilites/calculateCenter";

// Testando com outras coordenadas
import dataTest from "../GEOTestJson.json";

const MarkersContext = createContext();

// PATHS TO POLYGON
const { geometry } = geoCoordinates.features[0];
const { coordinates } = geometry;
const paths = [];

coordinates.forEach((coordinate) =>
  coordinate.forEach((path) => paths.push({ lat: path[1], lng: path[0] }))
);

// CENTER OF POLYGON
const center = calculateCenter(paths);


export const MarkersContextProvider = ({ children }) => {
  
  const {isLoading, data, refetch} = useQuery("markers", async () => {    
    const res = await fetch('/markers');
    if (!res.ok){
      throw new Error("Network response was not ok");
    }
    const data = await res.json()
    return data;
  })

  const [selected, setSelected] = useState(null);
  
  return (
    <MarkersContext.Provider
      value={{
        data,
        isLoading,
        refetch,
        paths,
        center,
        selected,
        setSelected,
      }}
    >
      {children}
    </MarkersContext.Provider>
  );
};

export function useMarkersContext() {
  return useContext(MarkersContext);
}
