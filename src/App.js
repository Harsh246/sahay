import React, { useState } from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Top from "./components/Top";
import Social from "./components/Social";
import JoinTag from "./components/JoinTag";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";
function App() {


  const [showThanks, SetShowThanks] = useState(false);

  return (
    <div className="h-screen w-screen text-s-white">
      <Navbar />

      <Header />

      <About />
      <Work />
      <Gallery/>
      <Newsletter   setShow= {SetShowThanks}/>
     {
       showThanks && <Thanks  setShow={SetShowThanks}  />
     } 
      <Testimonials/>
      <Top/>
      <Social/>
      <JoinTag/>
      <div className="w-full bg-s-gray h-[90vh] py-4 ">
      <div className="w-[80%]  mx-auto h-1 bg-gray-600 rounded-full " />
         
         
 <Footer/>
      </div>
     
    </div>
  );
}

export default App;
