"use client";

import React from 'react'
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';

const Statistics = () => {
    useEffect(() => {
        initFlowbite();

        // Define the updateNumbers function
    function updateNumbers() {
        // Define the final numbers
        const finalNumbers = [73, 100, 40, 10000, 90, 4000];

        // Define the increment value
        const increment = 1; // You can adjust the increment value as needed


        const elementsToUpdate = [
            "developersCount",
            "repositoriesCount",
            "projectsCount",
            "contributorsCount",
            "companiesCount",
            "organizationsCount"
        ];

        // Update the numbers
        elementsToUpdate.forEach((elementId, index) => {
            const element = document.getElementById(elementId);
            const currentNumber = parseInt(element.textContent);
            const targetNumber = finalNumbers[index];
            if (currentNumber < targetNumber) {
                const newValue = Math.min(currentNumber + increment, targetNumber);
                element.textContent = newValue;
            }
        });
    }

    // Call the updateNumbers function every updateInterval milliseconds
    const intervalId = setInterval(updateNumbers, 0.5);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
}, []);

  return (
    <div className="w-full container items-center justify-center mx-auto bg-white dark:bg-gray-900 dark:border-gray-900">
    <div className="lg:hidden md:hidden">
        <label for="tabs" className="sr-only">Select tab</label>
        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400">
            <option>Statistics</option>
            <option>Services</option>
            <option>FAQ</option>
        </select>
    </div>
    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li className="w-full">
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 text-yellow-500 dark:text-yellow-400 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
        </li>
        <li className="w-full">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 text-yellow-500 dark:text-yellow-400 dark:hover:bg-gray-600">Services</button>
        </li>
        <li className="w-full">
            <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 text-yellow-500 dark:text-yellow-400 dark:hover:bg-gray-600">FAQ</button>
        </li>
    </ul>
    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="flex flex-wrap justify-between max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold" id='developersCount'>0</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold" id='repositoriesCount'>0</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold" id='projectsCount'>0</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold" id='contributorsCount'>0</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold" id='companiesCount'>0</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold" id='organizationsCount'>0</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
            </dl>
        </div>
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
            {/* <!-- List --> */}
            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Blockchain education resources</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Tailored mentorship programs</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Innovative cryptocurrency curriculum</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">ABYA community collaboration initiatives</span>
                </li>
            </ul>
        </div>
        <div className="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
            <div id="accordion-flush" data-accordion="collapse" data-active-classNamees="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classNamees="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span>What is ABYA?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 transition-transform ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-1" className="hidden transition-all ease-in-out duration-500" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Africa Blockchain Youth Ambassadors (ABYA) is an initiative with a mission of promoting blockchain, cryptocurrency and web3 literacy and adoption through championing education and setting up of mentorship and training programs for university students.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-yellow-500 dark:text-yellow-400 hover:underline">get started</a> and become the change the world needs.</p>
                    </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span>How does ABYA University support students in learning about blockchain and cryptocurrency?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 transition-transform ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-2" className="hidden  transition-all ease-in-out duration-500" aria-labelledby="accordion-flush-heading-2">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">ABYA University supports students by providing educational resources, mentorship programs, and training sessions focused on blockchain technology, cryptocurrency, and web3. These resources aim to enhance students understanding and skills in these areas.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-yellow-500 dark:text-yellow-400 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                    <span>Are there any specific mentorship programs offered by ABYA University?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 transition-transform ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-3" className="hidden  transition-all ease-in-out duration-500" aria-labelledby="accordion-flush-heading-3">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Yes, ABYA University offers various mentorship programs tailored to students interested in blockchain, cryptocurrency, and web3 technologies. These programs provide one-on-one guidance, career advice, and support in developing practical skills in the field.</p>
                    
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about ABYA:</p>
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="https://flowbite.com/pro/" className="text-yellow-500 dark:text-yellow-400 hover:underline">ABYA</a></li>
                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-yellow-500 dark:text-yellow-400 hover:underline">ABYA University</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Statistics;
