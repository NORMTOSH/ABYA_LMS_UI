"use client"

const Features = () => {
    return ( 
        <section id="features" className="p-3 h-auto dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800 bg-gradient-to-b from-gray-300 to-gray-500">
            <h2 className="text-gray-700 dark:text-gray-200 font-semibold text-2xl p-2 mx-auto text-center">Key Features</h2>
            <h3 className="text-lg text-gray-600 dark:text-gray-400 lg:container text-center w-[60%] m-2 bottom-2 items-center mx-auto">ABYA University is more than just a platform; its an ecosystem where you can:</h3>

            <div className="container md:ml-6 lg:mx-auto mx-auto m-2 p-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:place-items-center">
            <div className="flex flex-col h-[400px] w-full md:w-[90%] lg:w-[90%] dark:border-b dark:border-yellow-400 bg-transparent rounded-lg dark:bg-gray-800 ">
                <a href="#" className="items-center justify-center mx-auto flex">
                    <img className="p-8 w-1/2 rounded-t-lg" src="learn.png" alt="product image" />
                </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center dark:text-yellow-400">Learn</h5>
                </a>
                <p className="dark:text-gray-300">Choose from diverse courses, create your own learning path, and connect with expert mentors.</p>
                <div className="flex items-center justify-between p-2">
                    <a href="#" className="inline-flex mt-2 gap-2 font-medium items-center text-yellow-500 hover:underline">
                    See our guideline
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </div>
            </div>
            </div>
            <div className="flex flex-col w-full h-[400px] md:w-[90%] lg:w-[90%] bg-transparent dark:border-b  rounded-lg dark:bg-gray-800 dark:border-yellow-400">
    <a href="#"  className="items-center justify-center mx-auto flex">
        <img className="p-8 w-1/2 rounded-t-lg" src="relevance.png" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center dark:text-yellow-400">Own Your Data</h5>
        </a>
        <p className="dark:text-gray-300">Keep your learning data secure and under your control, thanks to blockchain technology.</p>
        <div className="flex items-center justify-between p-2">
                <a href="#" className="inline-flex mt-2 gap-2 font-medium items-center text-yellow-500 hover:underline">
                    See our guideline
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
        </div>
    </div>
</div>
<div className="flex flex-col w-full h-[400px] md:w-[90%] lg:w-[90%] bg-transparent dark:border-b rounded-lg dark:bg-gray-800 dark:border-yellow-400">
    <a href="#"  className="items-center justify-center mx-auto flex">
        <img className="p-8 w-1/2 rounded-t-lg" src="govern.png" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center dark:text-yellow-400">Govern</h5>
        </a>
        <p className="dark:text-gray-300">Join the DAO and actively shape the future of ABYA University. ️</p>
        <div className="flex items-center justify-between p-2">
                <a href="#" className="inline-flex mt-2 gap-2 font-medium items-center text-yellow-500 hover:underline">
                    See our guideline
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
        </div>
    </div>
</div>
<div className="flex flex-col w-full h-[400px] md:w-[90%] lg:w-[90%] bg-transparent dark:border-b  rounded-lg dark:bg-gray-800 dark:border-yellow-400">
    <a href="#"  className="items-center justify-center mx-auto flex">
        <img className="p-8 w-1/2 rounded-t-lg" src="connect.png" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center dark:text-yellow-400">Connect</h5>
        </a>
        <p className="dark:text-gray-300">Build global connections, collaborate with peers, and be part of a supportive community.</p>
        <div className="flex items-center justify-between p-2">
                <a href="#" className="inline-flex mt-2 gap-2 font-medium items-center text-yellow-500 hover:underline">
                    See our guideline
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
        </div>
    </div>
</div>

<div className="flex flex-col w-full h-[400px] md:w-[90%] lg:w-[90%] dark:border-b rounded-lg dark:bg-gray-800 dark:border-yellow-400">
    <a href="#"  className="items-center justify-center mx-auto flex">
        <img className="p-8 w-1/2 rounded-t-lg" src="transparency.png" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-yellow-400">Contribute</h5>
        </a>
        <p className="dark:text-gray-300">Share your knowledge, create innovative content, and earn rewards for your expertise. ‍</p>
        <div className="flex items-center justify-between p-2">
                <a href="#" className="inline-flex mt-2 gap-2 font-medium items-center text-yellow-500 hover:underline">
                    See our guideline
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
        </div>
    </div>
</div>
            </div>

        {/* other section */}
        <div className="mx-auto flex md:flex-row items-center justify-center lg:w-[65%] dark:bg-gray-900 mt-3 gap-3 space-x-3 h-auto p-6 bg-gradient-to-b from-transparent to-gray-500 rounded-lg">
    <div className="md:w-1/2 items-start hidden md:flex lg:flex">
        <img src="own_data.png" alt="content" className="w-1/2 mx-auto rounded" />
    </div>
    <div className="md:w-1/2 items-end lg:container">
        <h1 className="text-gray-700 text-2xl font-semibold dark:text-gray-200 p-3 lg:text-3xl">We want to change how content is written and distributed.</h1>
        <h2 className="text-gray-800 text-3xl dark:text-gray-400 font-bold p-3">We want to build the best tools to help ambitious content teams—developers, marketers, bloggers, journalists—write better content, faster.</h2>
        <a href="#" className="inline-block bg-gradient-to-tr from-yellow-400 hover:transition-opacity delay-75 ease-in-out hover:text-gray-300 to-yellow-500 hover:shadow-white hover:shadow-lg hover:bg-blue-500 dark:bg-blue-600 dark:focus:ring-blue-800 text-gray-200 font-bold py-2 px-4 rounded-lg m-2">Read more about our mission</a>
    </div>
</div>
        </section>
     );
}
 
export default Features;