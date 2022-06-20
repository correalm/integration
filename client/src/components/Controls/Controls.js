// CONTEXTS
import { useMarkersContext } from "../../context/MarkerContext";
import { useModalContext } from "../../context/ModalContext";

// SASS
import "./Controls.sass";

import Button from "./Button/Button";

const Control = () => {
  const { isLoading, data, refetch, center, selected } = useMarkersContext();
  const { toggleShow, setFunctionToExclude } = useModalContext();

  const handleAddPin = async(e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({position: {lat: center.lat, lng: center.lng}})
    };
    const response = await fetch(`/markers`, requestOptions);
    refetch()
  };

  const handleDeleteAll = () => {
    toggleShow();
    setFunctionToExclude("handleDeleteAll");
  };
  const handleDeletePin = () => {
    toggleShow();
    setFunctionToExclude("handleDeletePin");
  };

  if (isLoading) return null

  return (
    <>
      {selected && (
        <div className="controls controls-selected">
          <Button
            func={handleDeletePin}
            className={"btn btn-red"}
            text={"Deletar Pin"}
            svg={"trash"}
          />
        </div>
      )}
      <div
        className={
          data.length === 0 ? "controls" : "controls controls-deleteAll"
        }
      >
        <Button
          func={handleAddPin}
          className={"btn"}
          text={"Adicionar Novo"}
          svg={"pin"}
        />
        {data.length > 0 && (
          <Button
            func={handleDeleteAll}
            className={"btn btn-red"}
            text={"Deletar Todos"}
            svg={"trash"}
          />
        )}
      </div>
    </>
  );
};

export default Control;
