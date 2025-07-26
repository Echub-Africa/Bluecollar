import { BrowserRouter, Routes, } from "react-router-dom"
import './App.css';
import "aos/dist/aos.css";
import AOS from "aos";
import Routess from "./Routes";
import { AppProvider } from "./Context/Context";
import ScrollToTop from "./GuestPages/ScrollToTop";
import React, { useEffect } from "react";



function App() {
   useEffect(() => {
    document.body.style.overflowX = "hidden";
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      scrollBehaviour: "smooth",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
    <AppProvider>
    <div className="App">
     <BrowserRouter>
      
      <Routess /><ScrollToTop />
     </BrowserRouter>
    
    </div>
    </AppProvider>
    </>
  );
}

export default App;
