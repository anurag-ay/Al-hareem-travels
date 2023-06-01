


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
   
    </BrowserRouter>
    </>
  );
}

export default App;
