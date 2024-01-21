import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import IrisCtfWriteup from "./posts/IrisCtfWriteup";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import BiznessHtbWriteup from "./posts/BiznessHtbWriteup";
import UofTCtfWriteup from "./posts/UofTCtfWriteup";
import MapnaCtfWriteup from "./posts/MapnaCtfWriteup";

const GA_TRACKING_ID = "G-B7BSRPYFZL";
ReactGA.initialize(GA_TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/iris-ctf-2024" element={<IrisCtfWriteup></IrisCtfWriteup>}></Route>
      <Route path="/htb-bizness" element={<BiznessHtbWriteup></BiznessHtbWriteup>}></Route>
      <Route path="/uoft-ctf-2024" element={<UofTCtfWriteup></UofTCtfWriteup>}></Route>
      <Route path="/mapna-ctf-2024" element={<MapnaCtfWriteup></MapnaCtfWriteup>}></Route>
    </Routes>
  );
}

export default App;
