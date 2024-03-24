"use client"

import { useEffect } from 'react';
import '../../app/globals.css'; // Import your CSS file
import "flowbite";
// import Navbar from '../../components/homepage components/navbar';
import Abouthero from '../../components/AboutpageComponent/abouthero';
import { initFlowbite } from 'flowbite';
import AboutMission from '../../components/AboutpageComponent/aboutmission';
import AboutWhoAreWe from "../../components/AboutpageComponent/aboutwhoarewe";
import AboutBlockchain from "../../components/AboutpageComponent/aboutblockchain";
import AboutJoinUs from "../../components/AboutpageComponent/aboutJoinus";
import Footer from "../../components/homepage components/footer";




const Aboutpage = () => {
  useEffect(() => {
    initFlowbite();
  } , []);
    return ( 
        <div>
            {/* <Navbar /> */}
            <Abouthero />
            <AboutMission />
            <AboutWhoAreWe /> 
            <AboutBlockchain />
            <AboutJoinUs />         
            <Footer />         
        </div>
     );
}
 
export default Aboutpage;