"use client"

import { useEffect } from 'react';
import "flowbite";
// import Navbar from '../../components/homepage components/navbar';
import HeroSection  from '../../components/Contact Us Page Components/contact_hero';
import ConnectOption from '../../components/Contact Us Page Components/contact_option';
import Contactform from '../../components/Contact Us Page Components/contactform';
import CommunitySection from '../../components/Contact Us Page Components/join socials';
import Footer from '../../components/homepage components/footer'
import { initFlowbite } from 'flowbite';
//import "../styles/style.css";
// import "tailwindcss/tailwind.css;"



const Contactpage = () => {
  useEffect(() => {
    initFlowbite();
  } , []);
    return ( 
        <div>
            {/* <Navbar /> */}
            <HeroSection/>
            <ConnectOption/>
            <Contactform />
            <CommunitySection/>
            <Footer/>
        </div>
     );
}
 
export default Contactpage;