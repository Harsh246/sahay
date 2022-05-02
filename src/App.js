import React from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Top from "./components/Top";
import Social from "./components/Social";
import JoinTag from "./components/JoinTag";
function App() {
  return (
    <div className="h-screen w-screen text-s-white">
      <Navbar />

      <Header />

      <About />
      <Work />
      <Gallery/>
      <Newsletter/>
      <Top/>
      <Social/>
      <JoinTag/>
    </div>
  );
}

export default App;
