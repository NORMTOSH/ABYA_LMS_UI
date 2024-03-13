"use effect";

import React from 'react'


const Highlights = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <h2 className='mx-auto flex text-2xl font-bold justify-center p-2'>Community Highlights</h2>
      <div className='container flex flex-col mx-auto'>
        <div className="gap-4 items-center py-8 px-4 mx-auto flex flex-col md:flex-row md:w-full md:gap-2 md:space-x-2 p-2">
          <div className='md:items-start md:w-[30%] lg:w-[30%] m-1'>
            <img className="p-1 w-full h-auto rounded-t-lg" src="highlights.jpg" alt="product image" />
          </div>
          <div className="md:items-end md:w-[70%] lg:w-[70%] m-2">
            <ul className='my-auto items-center'>
              <li className="mb-2">
                <span className='font-bold'>Global Network:</span>
                <p className='text-gray-600 dark:text-gray-400'>Connect with learners from every corner of the world, breaking down geographical barriers.</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Diverse Expertise:</span>
                <p className='text-gray-600 dark:text-gray-400'>Find mentors, collaborators, and peers with specialized knowledge in various fields.</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Active Forums:</span>
                <p className='text-gray-600 dark:text-gray-400'>Engage in stimulating discussions, ask questions, and share your learning experiences.</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Community-driven Initiatives:</span>
                <p className='text-gray-600 dark:text-gray-400'>Participate in exciting projects, events, and knowledge-sharing workshops.</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Rewards and Recognition:</span>
                <p className='text-gray-600 dark:text-gray-400'>Earn recognition for your contributions and be rewarded for your active participation.</p>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              View more
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <h2 className='mx-auto flex text-2xl font-bold justify-center p-2'>Join the Movement</h2>
        <div className="gap-2 items-center py-8 px-4 mx-auto flex container flex-col md:flex-row md:w-full md:gap-2 md:space-x-2 p-2">
          <div className="md:items-start md:w-[70%] lg:w-[70%] m-2">
            <ul className='my-auto items-center'>
              <li className="mb-2">
                <span className='font-bold'>Join our forum:</span>
                <p className='text-gray-600 dark:text-gray-400'>Start connecting with the community and participate in ongoing discussions</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Follow us on social media:</span>
                <p className='text-gray-600 dark:text-gray-400'>Stay up-to-date with community events, news and announcements.</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Share your ideas:</span>
                <p className='text-gray-600 dark:text-gray-400'>Propose initiatives, suggest features, and actively shape the communitys future.</p>
              </li>
              <li className="items-center mb-2">
                <span className='font-bold'>Contribute your expertise:</span>
                <p className='text-gray-600 dark:text-gray-400'>Create tutorials, mentor others, and share your knowledge for benefit of all.</p>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              View more
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
          <div className='md:items-end md:w-[30%] lg:w-[30%] m-2'>
            <img className="p-2 w-full h-auto rounded-t-lg" src="movement.jpg" alt="product image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights;
