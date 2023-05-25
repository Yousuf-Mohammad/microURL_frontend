import './App.css';
import React from "react";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UrlPost from './Components/UrlPost/UrlPost';
import AllUrls from './Components/AllUrls/AllUrls';
import Aboutus from './Components/AboutUs/Aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<UrlPost />} />
          <Route path="/stats" element={<AllUrls />} />
          <Route path="/about" element={<Aboutus />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
