"use client"

import { useEffect } from 'react';
import '../../app/globals.css'; // Import your CSS file
import "flowbite";
import Navbar from '../../components/homepage components/navbar';
import Abouthero from '../../components/AboutpageComponent/abouthero';
import { initFlowbite } from 'flowbite';
import AboutMission from '../../components/AboutpageComponent/aboutmission';
import AboutWhoAreWe from "../../components/AboutpageComponent/aboutwhoarewe";




const Aboutpage = () => {
  useEffect(() => {
    initFlowbite();
  } , []);
    return ( 
        <div>
            <Navbar />
            <Abouthero />
            <AboutMission />
            <AboutWhoAreWe />          
        </div>
     );
}
 
export default Aboutpage;