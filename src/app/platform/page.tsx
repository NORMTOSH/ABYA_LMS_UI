"use client";

import { useEffect } from "react";
import Footer from '../../components/homepage components/footer';
import AboutPlatform from '../../components/PlatformComponents/aboutPlatform'
import Sneek from '../../components/PlatformComponents/sneek';
import Cards1 from '../../components/PlatformComponents/cards1';
import Cards2 from '../../components/PlatformComponents/cards2';
import { initFlowbite } from 'flowbite'; // Assuming this is the correct import for flowbite functionality


const Platform = () => {

  useEffect(() => {
    initFlowbite();
  } , []);
  
  return ( 
    <div>
      <AboutPlatform />
      <Cards1 />
      <Cards2 />
      <Sneek />
      <Footer />
    </div>
  );
}

export default Platform;
