"use client";

import { useEffect } from "react";
import DaoPlatform from "../../components/DaoAndTokenomicsComponents/daoplatform";
import { initFlowbite } from "flowbite";
import Footer from "../../components/homepage components/footer";
import Cards1 from "@/components/DaoAndTokenomicsComponents/cards1";
import Sneak from "@/components/DaoAndTokenomicsComponents/sneek";
import Alternate from "@/components/DaoAndTokenomicsComponents/alternate"


const DaoPage = () => {
  useEffect(() => {
    initFlowbite();
  }, []);


  return (
    <div>
        <DaoPlatform/>
        <Cards1/>
        <Alternate/>
        <Sneak/>
        <Footer/>
    </div>
  )

};

export default DaoPage;