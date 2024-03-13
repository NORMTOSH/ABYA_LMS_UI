"use client";

import { useEffect } from 'react';

import React from 'react'

interface propsType {
    img: string;
    title: string;
    description: string;
}

const Slide:React.FC<propsType> = ({img, title, description}) => {
  return (
    <div className='outline-none lg:mx-auto lg:items-center lg:justify-center md:mx-auto md:items-center md:justify-center border-none relative container flex flex-col space-y-2 lg:flex-row md:flex-row text-gray-200 lg:pt-5 md:pt-5 lg:m-4'>
      <div className='items-center mx-auto flex flex-col left-[30px] md:left-[70px]  max-w-[250px]  sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-transparent text-[200px] sm:bg-transparent pt-3 mt-[100px] sm:p-0 rounded-lg sm:rounded-none lg:items-start lg:w-1/2'>
        <h2 className='text-2xl lg:text-[28px] text-gray-700 dark:text-gray-100 font-bold'>{title}</h2>
        <p className='text-[14px] text-center lg:text-left text-gray-500 dark:text-gray-400 lg:text-[16px]'>{description}</p>
      </div>
      <div className='lg:items-end lg:w-1/2'>
        <img src={img} alt="" className='w-full h-[230px] lg:h-[350px] w-10 rounded-lg sm:rounded-none' />
      </div>
    </div>
  )
}

export default Slide
