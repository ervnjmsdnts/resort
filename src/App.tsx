import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { ResortPage } from "./pages/ResortPage";

export const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:municipality" element={<ResortPage />} />
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);
