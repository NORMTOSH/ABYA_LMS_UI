import React from 'react';

const Cards1 = () => {
    return (
        <div className="flex justify-center dark:bg-gray-900">
            <div className="w-full md:w-auto">
                <a href="#" className="">
                    <div className="ml-12 mt-20 px-20 mr-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-center">Platform Features </h3>
                        <h2 className="mb-1.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Coming soon, the ABYA University platform will offer:
                        </h2>
                    </div>
                </a>
                <div className="flex flex-wrap justify-center container">
                    {/* Box 1 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm bg-white dark:bg-gray-900 dark:shadow-white dark:shadow-lg rounded-lg">
                        
                        <a href="#">
                            <img className="w-full" src="landing9.jpg" alt="" />
                        </a>
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Learning Management System (LMS):
                                </h5>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2">Access a vast library of high-quality courses, manage your learning progress, and track your achievements.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300  ml-5 mb-10">
                         Read more
                         </a>
                    </div>

                    {/* Box 2 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm bg-white dark:bg-gray-900 dark:shadow-white dark:shadow-lg rounded-lg">
                        
                        <a href="#">
                            <img className="w-full" src="landing8.jpg" alt="" />
                        </a>
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Digital Library:
                                </h5>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2">Explore diverse learning materials, research papers, and community-created content to deepen your knowledge.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500  rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>

                    </div>

                    {/* Box 3 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm bg-white  dark:bg-gray-900 dark:shadow-white dark:shadow-lg rounded-lg">
                        
                        <a href="#">
                            <img className="w-full rounded-t-lg" src="landing7.jpg" alt="" />
                        </a>
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h4 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Web-based IDE:
                                </h4>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2">Build your skills by creating software projects, collaborating with peers, and showcasing your expertise.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500  rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>
                        
                    </div>

                    {/* Box 4 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm bg-white dark:bg-gray-900 dark:shadow-white dark:shadow-lg rounded-lg">
                    
                        <a href="#">
                            <img className="w-full rounded-t-lg" src="landing6.jpg" alt="" />
                        </a>
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tokenized Incentive System: 
                                </h5>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2">Earn tokens for sharing knowledge, creating content, and contributing to the platform's growth. Spend them on courses, tools, or community initiatives.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>
                    </div>

                    {/* Box 5 */}
                    <div className="pt-2 mt-6 mx-2 max-w-sm bg-white dark:bg-gray-900 dark:shadow-white dark:shadow-lg rounded-lg">
                        
                        <a href="#">
                            <img className="w-full rounded-t-lg" src="landing1.jpg" alt="" />
                        </a>
                        <div className="pt-2 mx-2">
                            <a href="#">
                                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">DAO Framework:
                                </h5>
                            </a>
                        </div>
                        <div className="pt-2 pb-6 mx-2">
                            <p className="text-base ml-2">Actively participate in shaping the platform's future through voting on proposals, governance decisions, and feature development.</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10">
                         Read more
                         </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards1;
