import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/About" element={<About />}/>
    <Route path="*" element={<NoPage />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
