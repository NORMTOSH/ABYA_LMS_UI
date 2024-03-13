"use client";

import { useEffect } from "react";
import "flowbite";
// import Navbar from '../../components/homepage components/navbar';
import Hero from '../../components/homepage components/hero section';
import Whatwesolve from '../../components/homepage components/whatwesolve';
import Features from '../../components/homepage components/features';
import Testimonies from '../../components/homepage components/testimonies';
import Footer from '../../components/homepage components/footer'
import { initFlowbite } from 'flowbite';
import AboutHero from '../../components/AboutpageComponent/abouthero';




const Homepage = () => {
  useEffect(() => {
    initFlowbite();
  } , []);
    return ( 
        <div>        
            <Hero />
            <Whatwesolve />
            <Features />
            <Testimonies />
            <Footer />
        </div>
     );
}
 
export default Homepage;
