import "./App.css";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return <div className="App">


<Provider store={store}>

  <Navbar/>
  <Photos/>

</Provider>



  </div>;
}

export default App;
