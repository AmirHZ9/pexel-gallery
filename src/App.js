import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import Collection from "./components/Collection";
import Details from "./components/shared/Details";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/detail/:alt/:id" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
