import "./App.css";

// COMPONENTS
import Map from "./components/Map/Map";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Modal />
      <div className="App">
        <Map />
      </div>
    </>
  );
}

export default App;
