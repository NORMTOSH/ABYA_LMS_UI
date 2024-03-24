"use client"

import Navbar from '../homepage components/navbar';
import React from 'react';

const DaoPlatform = () => {
  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="bg-white p-1 space-y-2 dark:bg-gray-900">
      <Navbar />
        <div className="mx-auto p-3">
          {/* <h3 className="font-semibold text-gray-900 dark:text-white text-left">ABYA University:</h3> */}
          <h1 className="mb-1.5 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white leading-tight">
            DAO & Tokenomics - Decentralized Governance,<br/> Rewarded Expertise
          </h1>
          <p className="font-normal text-gray-900 dark:text-gray-300 text-center p-3 lg:w-[60%] mx-auto">
            <span className='font-semibold'>Welcome to the heart of ABYA University, where power rests with the community and knowledge fuels innovation. Here, we unpack the <span className='text-yellow-400'>Decentralized Autonomous Organization (DAO)</span> and tokenomics that empower you to actively shape the future of learning.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DaoPlatform;