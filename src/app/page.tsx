import React from "react";

import AboutUs from "./home/Aboutus";
import Contactus from "./home/Contactus";
import Events from "./home/Events";
import Gallery from "./home/Gallery";
import Gifpage from "./home/Gifpage";
import Initiative from "./home/Initiative";
import Ourteam from "./home/Ourteam";

export default function Home() {
  return (
    <div>
      <Gifpage />
      <AboutUs />
      <Initiative />
      <Events />
      <Gallery />
      <Ourteam />
      <Contactus />
    </div>
  );
}
