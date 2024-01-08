import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LostWriteup from "./posts/n00bzCTF2023/LostWriteup";
import NoobzCtf from "./posts/n00bzCTF2023/NoobzCtf";
import IrisCtfWriteup from "./posts/IrisCtfWriteup";
import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-B7BSRPYFZL";
ReactGA.initialize(GA_TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/posts/n00bz-ctf-2023" element={<NoobzCtf></NoobzCtf>}></Route>
      <Route path="/posts/n00bz-ctf-2023/lost" element={<LostWriteup></LostWriteup>}></Route>
      <Route path="/iris-ctf-2024" element={<IrisCtfWriteup></IrisCtfWriteup>}></Route>
    </Routes>
  );
}

export default App;
