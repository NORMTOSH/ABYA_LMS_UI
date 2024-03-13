"use client"

import { useEffect } from 'react';
import "flowbite";
import Navbar from '../../components/homepage components/navbar';
import Contacthero from '../../components/contactus_components/contact_hero';
import Contactoption from '../../components/contactus_components/contact_option';
import Contactform from '../../components/contactus_components/contactform';
import JionSocial from '../../components/contactus_components/joinsocials';
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
            <Contacthero/>
            <Contactoption/>
            <Contactform />
            <JionSocial/>
            <Footer/>
        </div>
     );
}
 
export default Contactpage;