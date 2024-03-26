"use client";

import '../../app/globals.css'; // Import your CSS file
import Image from 'next/image'; // Import Image component from next/image

const AboutJoinUs = () => {
    return (
            <div className="dark:bg-gray-900">
                <div className="container px-4 mx-auto max-w-screen-xl text-center lg:py-2">
                    <h3 className="p-4  text-3xl font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Join the movement</h3>
                    <p className="mx-5 text-lg dark:text-gray-400 font-normal lg:text-lg sm:px-8 lg:px-24">
                        We invite you to be part of this <strong>revolutionary journey</strong>. Whether you&apos;re a learner seeking a new educational experience, a creator eager to share your knowledge, or simply someone who believes in the power of decentralized learning, there&apos;s a place for you at ABYA University.
                    </p>
                    <p className="px-5 py-5 text-lg font-normal lg:text-lg sm:px-16 lg:px-48"><strong>Explore our platform (launching soon!), connect with our community, and join us in building a future where education empowers, inspires, and connects the world.</strong></p>
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
                        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                            <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                        </div>
                    </div>

                    <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white"> Together, let&apos;s rewrite the rules of learning.</blockquote>

                </div>
                <div className="container px-5 mx-auto max-w-screen-xl text-center lg:py-4">
                    <button type="button" class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 my-8 mx-4 dark:bg-yellow-500 dark:hover:bg-yellow-400">JOIN US TODAY</button>
                </div>

            </div>


    );
};
export default AboutJoinUs; 
