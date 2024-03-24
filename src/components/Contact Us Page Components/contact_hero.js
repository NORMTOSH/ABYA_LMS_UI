import React from 'react';
import Navbar from '../homepage components/navbar';

function HeroSection() {
  return (
    <div className="bg-white dark:bg-gray-900 h-auto">
      <Navbar />
      <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h2 className="text-yellow-400">ABYA University:</h2>
          <h1 className="text-3xl font-semibold text-black dark:text-white xl:text-5xl lg:text-3xl"><span className="block w-full">Reach Out - Connect with the Decentralized Learning Revolution</span> </h1>
          <p className="py-4 text-lg text-gray-600 dark:text-gray-300 2xl:py-8 md:py-6 2xl:pr-5">
            Ready to join the ABYA University movement? 
            We re excited to connect with you and answer any questions you may have about our platform, community, or vision for the future of education.
          </p>
          <div className="mt-4">
            <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-yellow-500 rounded-lg md:px-8 hover:bg-yellow-400 transition duration-300 ease-in-out"><span>Explore More</span></a>
          </div>
        </div>

        <div className="pb-10 md:p-10 lg:p-0 sm:pb-0">
          <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="/contact_hero.png" alt="Awesome hero page image" width="500" height="488"/>
        </div>
      </div>

    </div>
  );
}

export default HeroSection;