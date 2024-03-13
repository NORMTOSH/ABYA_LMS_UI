"use client"

import { useEffect } from 'react';
import "flowbite";
import Community_hero from '../../components/communitypage components/community_hero';
import Highlights from '../../components/communitypage components/highlights';
import Whyjoinsection from '../../components/communitypage components/whyjoinsection';
import Statistics from '../../components/communitypage components/statistics';
import Footer from '../../components/homepage components/footer';
import { initFlowbite } from 'flowbite';






const Aboutpage = () => {
  useEffect(() => {
    initFlowbite();
  } , []);
    return ( 
        <div>
            <Community_hero />
            <Whyjoinsection />
            <Highlights />
            <Statistics />
            <Footer />
        </div>
     );
}
 
export default Aboutpage;