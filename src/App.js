import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeCarousel from "./components/image_slider/Image_Carousel";
function App() {
  return (
    <>
      <Header />
      <HomeCarousel />
      <Footer />
    </>
  );
}

export default App;
