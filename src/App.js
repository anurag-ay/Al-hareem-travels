import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Home from './Components/home'
import About from './Components/about'
import Contact from './Components/contact'
import Services from './Components/service'


import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    < >
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route exact path="/"element={<Home/>}/>
        <Route exact path="/about"element={<About/>}/>
        <Route exact path="/contact"element={<Contact/>}/>
        <Route exact path="/services"element={<Services/>}/>
      </Routes>
      
    </div>
   <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
