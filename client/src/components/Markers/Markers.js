import { Marker } from "@react-google-maps/api";
import { useMarkersContext } from "../../context/MarkerContext";

// SVG
import pin from "../../assets/Regular=on, Move=off.svg";
import pin2 from "../../assets/Regular=off, Move=on.svg";

const Markers = () => {
  const { data, isLoading, setSelected, selected } = useMarkersContext();

  const handleClickMarker = (marker, e) => {
    if (selected !== marker._id) {
      setSelected(marker._id);
    } else {
      setSelected(null);
    }
  };


  const handleDragEnd = async (e, markerId) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({position: {
        lat: lat,
        lng: lng
      }})
    };
    const response = await fetch(`/markers/${markerId}`, requestOptions);
    console.log(response)
  };
  

  if (isLoading) return null;
  return (
    <div>
      {data.map((marker) => {
        return (
          <Marker
            key={marker._id}
            draggable={selected === marker._id ? true : false}
            onClick={(e) => handleClickMarker(marker, e)}
            icon={selected === marker._id ? pin2 : pin}
            position={marker.position}
            onDragEnd={(e) => handleDragEnd(e, marker._id)}
          />
        );
      })}
    </div>
  );
};

export default Markers;
