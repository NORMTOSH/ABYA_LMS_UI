"use effect";

import React from 'react'


const Whyjoinsection = () => {
  return (
    <div style={{backgroundImage: `url('/community1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"auto", backdropFilter: 'blur(100px)'}} className='bg-gray-900 bg-opacity-50 z-20'>
    <section className="bg-gray-500 bg-opacity-50 dark:bg-gray-900 p-2">
        <div className="container mx-auto m-2 p-2">
            <div className=" mb-8 lg:mb-16">
                <h2 className="mb-2 text-2xl tracking-tight font-bold mx-auto text-center text-gray-200 dark:text-white">Why Join the ABYA Community?</h2>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-2 space-y-2'>
                <div className=''>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Find your tribe</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Connect with learners from diverse backgrounds, interests, and expertise levels.</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Share your knowledge</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Contribute to the community by creating content, answering questions, and mentoring others.</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Learn from peers</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Expand your perspectives, gain new insights, and benefit from collective knowledge.</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shape the future</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Participate in community discussions, propose ideas, and actively influence the platforms evolution.</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Have fun!</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Engage in social events, online forums, and discussions, building meaningful connections and lasting friendships.</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Collaborate on projects</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Team up with others on exciting projects, build skills, and achieve shared goals.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Whyjoinsection;
