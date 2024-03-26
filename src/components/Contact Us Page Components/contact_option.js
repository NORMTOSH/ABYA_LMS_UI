import React from 'react';

const ConnectOption = () => {
    return (
        <div className="bg-white dark:bg-gray-900 mx-auto pt-5 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <p className="mt-4 text-3xl font-extrabold">Choose your connection</p>
                    <p className="mt-4 max-w-lg text-lg text-gray-600 dark:text-gray-300 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    {/* General Inquiries */}
                    <div className="relative flex items-center">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white mr-4">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-xl font-semibold">General Inquiries:</p>
                            <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
                                Have a question about the platform, tokenomics, or DAO? Fill out our general inquiry form and we'll get back to you promptly.
                            </p>
                        </div>
                    </div>

                    {/* Media Inquiries */}
                    <div className="relative mt-10 md:mt-0 flex items-center">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white mr-4">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-xl font-semibold">Media Inquiries:</p>
                            <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
                                Journalists and media professionals interested in covering ABYA University, please contact us through our dedicated media form.
                            </p>
                        </div>
                    </div>

                    {/* Community Support */}
                    <div className="relative flex items-center">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white mr-4">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-xl font-semibold">Community Support:</p>
                            <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
                                Need help navigating the platform or have questions about community engagement? Our dedicated support team is here to assist you.
                            </p>
                        </div>
                    </div>

                    {/* Partnerships & Collaboration */}
                    <div className="relative mt-10 md:mt-0 flex items-center">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white mr-4">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="ml-4">
                            <p className="text-xl font-semibold">Partnerships & Collaboration:</p>
                            <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
                                Interested in exploring potential partnerships or collaborations? Share your proposal with our team and let's discuss how we can work together.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ConnectOption;
