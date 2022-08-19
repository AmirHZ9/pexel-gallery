import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Footer from "./components/shared/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Photos />} />
          <Route path="/detail/:alt/:id" element={<Details />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/:query/page/:page" element={<Page />} exact />
          <Route path="/*" element={<Navigate to="search/nature" />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
        {/* <AppPaginating /> */}
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
