import React from "react";
import Banner from "./Component/Banner";
import Header from './Component/Header'
import Navbar from "./Component/Navbar";
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



function App() {
  return (
    <div className="App">
      <Header/> 
      <hr/>
      <br/>
      <Banner/>
      <hr/>
     <Navbar/>
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