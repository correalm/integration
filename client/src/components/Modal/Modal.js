// CONTEXT
import { useModalContext } from "../../context/ModalContext";
import { useMarkersContext } from "../../context/MarkerContext";

// ICONS
import trash from "../../assets/Trash.svg";

// SASS
import "./Modal.sass";

const Modal = () => {
  const { show, toggleShow, functionToExclude } = useModalContext();

  const { refetch, selected, setSelected } = useMarkersContext();

  const handleDeleteAll = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`/markers/deleteAll`, requestOptions);
    setSelected(null);
    refetch()
    toggleShow();
  };

  const handleDeletePin = async (pinSelected) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`/markers/${selected}`, requestOptions);
    setSelected(null);
    refetch()
    toggleShow();
  };

  const handleCancell = () => {
    toggleShow();
  };

  const handleClick = () => {
    toggleShow();
    if (functionToExclude === "handleDeleteAll") {
      return handleDeleteAll();
    } else {
      handleDeletePin(selected);
    }
  };

  return (
    <>
      {show && (
        <div className="modalWrapper">
          <div className="center">
            <div className="close">
              <span onClick={handleCancell}>&times;</span>
            </div>
            <div className="modalContent">
              <div className="contentTitle">
                <h3>
                  {functionToExclude === "handleDeleteAll"
                    ? "Excluir todos os pontos?"
                    : "Excluir ponto selecionado?"}
                </h3>
              </div>
              <div className="contentCard">
                <div className="card">
                  <h6>Atenção!</h6>
                  <p>Essa ação não poderá ser desfeita.</p>
                </div>
              </div>
              <div className="buttons">
                <button onClick={handleClick} className="exclude">
                  <img src={trash} alt="trash" />
                  Excluir
                </button>
                <button onClick={handleCancell} className="cancell">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
