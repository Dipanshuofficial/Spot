import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeCarousel from "./components/image_slider/Image_Carousel";
import Card from "./components/card/Card";
function App() {
  return (
    <>
      <Header />
      <HomeCarousel />
      <Card />
      <Footer />

    </>
  );
}

export default App;
