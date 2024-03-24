"use client"

const Keystone = () => {
    return (

        <div className="mt-5 pt-5">
        <h1 className="md:text-2xl text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">Explore the Keystones</h1>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-center p-10">
            <div className="flex-1 max-w-sm bg-white border lg:bg-gradient-to-b lg:from-white lg:to-white bg-gradient-to-b from-gray-300 to-gray-600 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 lg:dark:bg-gradient-to-b lg:dark:from-gray-800 lg:dark:to-gray-800">
                <a href="#" className="hidden lg:flex">
                    <img className="rounded-t-lg"  src="/whitepaper1.jpeg" alt="" />
                </a>
                <div className="px-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-900 lg:dark:text-white">Whitepapers</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-100 lg:text-gray-900 text-wrap dark:text-gray-900 lg:dark:text-white">Explore the technical and philosophical underpinnings of ABYA University, including blockchain integration, tokenomics, and DAO governance. Download the whitepaper to understand our vision and its implementation thoroughly.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg  focus:ring-4 focus:outline-none dark:hover:bg-yellow-500 mb-2">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
                <div class="flex-1 max-w-sm bg-white border lg:bg-gradient-to-b lg:from-white lg:to-white bg-gradient-to-b from-gray-300 to-gray-600 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 lg:dark:bg-gradient-to-b lg:dark:from-gray-800 lg:dark:to-gray-800">
                    <a href="#" className="hidden lg:flex">
                        <img class="rounded-t-lg" src="/roadmap1.png" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-900 lg:dark:text-white">Roadmap</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-100 lg:text-gray-900 dark:text-gray-900 lg:dark:text-white">Chart our journey and discover the exciting features and functionalities planned for the platform.
                         Get a glimpse into upcoming milestones, project phases, and how ABYA University will evolve in the near future..</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:hover:bg-yellow-500">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex-1 h-100 max-w-sm lg:bg-gradient-to-b lg:from-white lg:to-white bg-white bg-gradient-to-b from-gray-300 to-gray-600 border rounded-lg shadow-lg  dark:bg-gray-800 dark:border-gray-700 lg:dark:bg-gradient-to-b lg:dark:from-gray-800 lg:dark:to-gray-800">
                    <a href="#" className="hidden lg:flex">
                        <img class="rounded-t-lg" src="/faqs1.png" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-900 lg:dark:text-white">FAQs</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-100 lg:text-gray-900 dark:text-gray-900 lg:dark:text-white">Find answers to common questions about the platform, tokenomics, DAO participation, and other essential aspects.
                         Get clarity on key concepts and ensure you have all the information you need.</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Keystone;