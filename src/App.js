import NavBar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
       
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
 <Footer/>
      </BrowserRouter>
     
    </>
  );
}

export default App;
