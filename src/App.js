import "./App.css";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import PhotosContextProvider from "./PhotosContextProvider";
function App() {
  return <div className="App">


<PhotosContextProvider>
  <Navbar/>
  <Photos/>
</PhotosContextProvider>



  </div>;
}

export default App;
