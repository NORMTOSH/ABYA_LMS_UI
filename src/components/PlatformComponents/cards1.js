import React from 'react';

const Cards1 = () => {
    return (
        <div className="flex justify-center"> {/* Centering the container horizontally */}
            <div>
                <a href="#" className="">
                    <div className="ml-12 mt-20 px-20 mr-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-center">Platform Features </h3>
                        <h2 className="mb-1.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Coming soon, the ABYA University platform will offer:
                        </h2>
                    </div>
                </a>
                <div className="flex">
                    <div className="pt-2 mt-6 ml-14 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-112">
                        
                        <a href="#">
                            <img className src="landing9.jpg" alt="" />
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
                        <a href="#" class="ml-4 mb-10 mt-0 bg-black w-24 h-8 block"></a>
                    </div>

                    <div className="pt-2 mt-6 ml-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-112">
                        
                        <a href="#">
                            <img src="landing9.jpg" alt="" />
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
                        <a href="#" class="ml-4 mb-10 mt-0 bg-black dark:be-white w-24 h-8 block"></a>
                    </div>

                    <div className="pt-2 mt-6 ml-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-112">
                        
                        <a href="#">
                            <img className="rounded-t-lg" src="landing9.jpg" alt="" />
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
                        <a href="#" class="ml-4 mb-10 mt-0 bg-black w-24 h-8 block"></a>
                    </div>
                </div>

                <div className="flex">
                    <div className="ml-72 pt-2 mt-6 mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-112">
                    
                        <a href="#">
                            <img className="rounded-t-lg" src="landing9.jpg" alt="" />
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
                        <a href="#" class="ml-4 mb-10 mt-0 bg-black w-24 h-8 block"></a>
                    </div>

                    <div className="pt-2 mt-6 ml-12 mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-112">
                        
                        <a href="#">
                            <img className="rounded-t-lg" src="landing9.jpg" alt="" />
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
                        <a href="#" class="ml-4 mb-10 mt-0 bg-black w-24 h-8 block"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards1;
