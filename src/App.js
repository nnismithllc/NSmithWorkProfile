import React from "react";
import { BrowserRouter } from "react-router-dom";
import Banner from "./Component/Banner";
import Header from './Component/Header'
import Navbar from "./Component/Navbar";
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../src/App.css';


function App() {
  
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar/> 
      <hr/>
      <br/>
      <Header/>
      <hr/>
      <br/>
     <Banner/>
      <hr/>
      <br/>
      <h1 className="About Me"> About Me</h1>
      <About/>
      <hr/>
      <br/>
      <h1 className="Portfolio"> My Portfolio</h1>
      <Portfolio/>
      <hr/>
      <br/>
      <h1 id="Contactnav" className="contact">Contact Me</h1>
      <Contact/>
      <hr/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;