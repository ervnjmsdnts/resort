import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ResortPage } from "./pages/ResortPage";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:municipality" element={<ResortPage />} />
    </Routes>
  </BrowserRouter>
);
