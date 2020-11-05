import React from "react";
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'



function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Navbar/>
      <br/>
      <Banner/> 
      <br/>
      <About/>
      <br/>
      <h1 className="About Me"> About Me</h1>
      <hr/>
      <Portfolio/>
      <hr/>
      <h1 className="Portfolio"> My Portfolio</h1>
      <br/>
      <hr/>
      <h1 id="Contactnav" className="contact">Contact Me</h1>
      <hr/>
      <Contact/>

    </div>
  );
}

export default App;