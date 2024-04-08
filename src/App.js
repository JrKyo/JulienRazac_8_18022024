import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Home from "./pages/Home/Home";
import House from "./pages/House/House";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";


function App() {
  return (
   <BrowserRouter>
   <body>
    <Header/>
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/House/:id" element={<House />}/>
    <Route path="/About" element={<About />}/>
    <Route path="*" element={<NoPage />}/>
   </Routes>
   </body>
   
   
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
