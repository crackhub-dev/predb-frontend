import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import CatBrowse from "./routes/CatBrowse";
import Rls from "./routes/Rls"; 
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cat/:cat" element={<CatBrowse />} />
      <Route path="/rls/:id" element={<Rls />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);