import React from 'react';
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'



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
      <Project/>
      <hr/>
      <h1 id="contactnav" className="contact">Contact Me</h1>
      <hr/>
      <Contact/>

    </div>
  );
}

export default App;