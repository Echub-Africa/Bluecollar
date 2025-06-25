import { BrowserRouter, Routes, } from "react-router-dom"
import './App.css';
import Routess from "./Routes";
import { AppProvider } from "./Context/Context";
import ScrollToTop from "./GuestPages/ScrollToTop";



function App() {
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
