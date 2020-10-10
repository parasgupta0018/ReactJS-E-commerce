import React from 'react';
import logo from './logo.svg';
import Start from './components/Start'
import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Modal from './components/Modal'
import Modal2 from './components/Modal2'
import Sale from './components/Sale'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Jumbotron />
      <Sale />
      <Footer/>
      <Modal />
      <Modal2 />
    </div>
  );
}

export default App;
