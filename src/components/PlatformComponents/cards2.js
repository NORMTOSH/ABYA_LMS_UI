import React from 'react';

const Cards2 = () => {
    return (
        <div className="flex justify-center dark:bg-gray-900 ">
            <div className="w-full md:w-auto">
                <a href="#" className="">
                    <div className="ml-12 mt-20 px-20 mr-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-center">Platform Features </h3>
                        <h2 className="mb-1.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Coming soon, the ABYA University platform will offer:
                        </h2>
                    </div>
                </a>
                <div className="flex flex-wrap justify-center gap-5 container">
                    {/* Box 1 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm hover:shadow-xl hover:shadow-yellow-400 hover:cursor-pointer border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `url('/landing11.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"auto", backdropFilter: 'blur(100px)'}}>
                        
                        {/* <a href="#">
                            <img className="w-full" src="landing5.jpg" alt="" />
                        </a> */}
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-100">AI-powered Recommendations:
                                </h5>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2 text-gray-100">Get personalized learning suggestions based on your interests, progress, and community interactions.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>
                    </div>

                    {/* Box 2 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm hover:shadow-xl hover:shadow-yellow-400 hover:cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `url('/landing17.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"auto", backdropFilter: 'blur(100px)'}}>
                        
                        {/* <a href="#">
                            <img className="w-full" src="landing17.jpg" alt="" />
                        </a> */}
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h5 className="ml-2 text-xl font-bold tracking-tight text-white">Gamified Learning Experiences:
                                </h5>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2 text-gray-100">Level up, earn badges, and compete in friendly challenges to make learning fun and engaging.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500  rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>

                    </div>

                    {/* Box 3 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm hover:shadow-xl hover:shadow-yellow-400 hover:cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `url('/landing16.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"auto", backdropFilter: 'blur(100px)'}}>
                        
                        {/* <a href="#">
                            <img className="w-full rounded-t-lg" src="landing16.jpg" alt="" />
                        </a> */}
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h4 className="ml-2 text-xl font-bold tracking-tight text-white">Personalized Learning Plans:
                                </h4>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2 text-gray-100">Create custom learning paths based on your goals and preferences, optimizing your learning journey.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500  rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>
                        
                    </div>

                   
                </div>
            </div>
        </div>
    );
}

export default Cards2;
