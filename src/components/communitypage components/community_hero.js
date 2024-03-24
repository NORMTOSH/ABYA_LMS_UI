"use effect";

import React from 'react'
import Navbar from '../homepage components/navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Community_hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000, // 5 seconds
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },

        ],
        prevArrow: <></>, // Hide previous arrow
        nextArrow: <></>, // Hide next arrow
      };
  return (
        <section className="bg-white dark:bg-gray-900 h-auto ">
            <Navbar />
    <div className="py-8 px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-5">
        <a href="#" className="inline-flex justify-between items-center m-1 py-1 px-1 pr-4 mb-7 text-sm shadow-lg shadow-yellow-500 text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-yellow-400 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">See whats new in community!</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-2xl p-2 font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-white">ABYA Community - Where Learners Connect, Collaborate, and Thrive</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 w-full lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Forget isolated learning and join a vibrant community where diversity thrives, knowledge flows freely, and collaboration sparks innovation. At ABYA University, learning goes beyond courses and lectures; its about connecting with like-minded individuals from around the world, sharing your experiences, and growing together.</p>
        <div className="flex flex-row container mx-auto items-center justify-center mb-8  md:justify-center md:space-y-0 md:space-x-2 lg:flex-row lg:justify-center lg:space-x-2 gap-2 my-auto">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn more
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-xl top-2 mt-2 pt-2 lg:px-3 dark:bg-gray-400">
            <span className="font-semibold text-gray-400 uppercase p-4 text-2xl dark:text-gray-200">FEATURED IN</span>
            <Slider {...settings} className="space-x-10 gap-5 lg:p-5 md:p-5 lg:w-full items-center justify-between my-auto">
                <div className='my-auto p-3 lg:pt-10  md:pt-10'>
                    <a href="https://www.blockchain1.com">
                        <img src="/monero.svg" alt="" />
                    </a>
                </div>
                <div className='my-auto p-3 lg:pt-5 md:pt-5'>
                <a href="https://www.blockchain2.com">
                    <img src="/tron.svg" alt="" />
                </a>
                </div>
                <div className='my-auto p-3 lg:pt-10 md:pt-10'>
                <a href="https://www.blockchain2.com">
                    <img src="/bitcoin.svg" alt="" />
                </a>
                </div>
                <div className='my-auto p-3 lg:pt-10 md:pt-10'>
                    <a href="https://www.blockchain1.com">
                        <img src="/ethereum3.svg" alt="" />
                    </a>
                </div>
                <div className='my-auto p-3 lg:pt-5'>
                <a href="https://www.blockchain2.com">
                    <img src="/solana.svg" alt="" />
                </a>
                </div>
                <div className='my-auto p-3'>
                <a href="https://www.blockchain2.com">
                    <img src="/stellar.svg" alt="" />
                </a>
                </div>
                <div>
                    <a href="https://www.blockchain1.com">
                        <img src="/litecoin.svg" alt="" />
                    </a>
                </div>
                <div className='my-auto p-3'>
                <a href="https://www.blockchain2.com">
                    <img src="/aptos.svg" alt="Blockchain 2" />
                </a>
                </div>
                <div className='my-auto p-3 lg:pt-10 md:pt-10'>
                    <a href="https://www.blockchain1.com">
                        <img src="/worldcoin.svg" alt=""/>
                    </a>
                </div>
                <div className='my-auto p-3'>
                <a href="https://www.blockchain2.com">
                    <img src="/apenft.svg" alt="" />
                </a>
                </div>
                <div className='my-auto p-5'>
                    <a href="https://www.blockchain1.com">
                        <img src="/quant.svg" alt="" />
                    </a>
                </div>
                <div className='my-auto p-5'>
                <a href="https://www.blockchain2.com">
                    <img src="/chia.svg" alt="" />
                </a>
                </div>
            </Slider>
        </div> 
    </div>
</section>
  )
}

export default Community_hero;
