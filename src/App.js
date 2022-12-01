import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Corusel from "./components/Corusel.js"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      < Navbar />
      < Header />
      < Corusel />
      < Footer />
    </div>
  );
}

export default App
