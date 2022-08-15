import "./App.css";
import { Route, Routes,Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import Collection from "./components/Collection";
import Details from "./components/shared/Details";
import Search from "./components/Search";
import Page from "./components/Page";
import AppPaginating from "./components/shared/AppPaginating";

function App() {

  return (
    
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/detail/:alt/:id" element={<Details />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/:query/page/:page" element={<Page />} exact/>
          <Route  path="/*" element={<Navigate to='search/nature'/>}/>
          
        </Routes>
        <AppPaginating/>
  
      </Provider>
    </div>
  );
}

export default App;
