import React from "react";
import "../css/Home.css";
import Crousel from "./Crousel.jsx";
import Img01 from "../img/banner10.avif";
import Img02 from "../img/banner11.avif";
import Img03 from "../img/banner03.jpg";
import Img04 from "../img/banner04.webp";
import Img05 from "../img/banner05.jpg";
// import Try from "./Try.jsx";
import HomePage from "./HomePage.jsx";
// import Mobile from "./Mobile.jsx";
function Home() {
  const slides = [
    { imageSrc: Img01, title: "Slide 1", subtitle: "Subtitle 1" },
    { imageSrc: Img02, title: "Slide 2", subtitle: "Subtitle 2" },
    { imageSrc: Img03, title: "Slide 3", subtitle: "Subtitle 3" },
    { imageSrc: Img04, title: "Slide 4", subtitle: "Subtitle 4" },
    { imageSrc: Img05, title: "Slide 5", subtitle: "Subtitle 5" },
  ];
  return (
    <>
      <Crousel slides={slides} />
      <HomePage />
    </>
  );
}

export default Home;
