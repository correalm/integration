import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [functionToExclude, setFunctionToExclude] = useState(null);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <ModalContext.Provider
      value={{ show, toggleShow, functionToExclude, setFunctionToExclude }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModalContext() {
  return useContext(ModalContext);
}
