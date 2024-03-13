import React from 'react';

const ConnectOption = () => {
    return (
        <div className="bg-white dark:bg-gray-900 mx-auto pt-20 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <p className="mt-4 text-3xl font-extrabold">Choose your connection</p>
                    <p className="mt-4 max-w-lg text-lg text-gray-500 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="grid grid-cols-2 gap-x-10 gap-y-10">

                        {/* General Inquiries */}

                        <div className="relative">
                            <dt>
                                <div className="absolute top-0 left-0 flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <p className="mt-4 ml-16 text-xl font-semibold">General Inquiries:</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Have a question about the platform, tokenomics, or DAO? Fill out our general inquiry form and we'll get back to you promptly.
                            </dd>
                        </div>

                        {/* Media Inquiries */}

                        <div className="relative">
                            <dt>
                                <div className="absolute top-0 left-0 flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <p className="mt-4 ml-16 text-xl font-semibold">Media Inquiries:</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Journalists and media professionals interested in covering ABYA University, please contact us through our dedicated media form.
                            </dd>
                        </div>

                        {/* Community Support */}

                        <div className="relative">
                            <dt>
                                <div className="absolute top-0 left-0 flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <p className="mt-4 ml-16 text-xl font-semibold">Community Support:</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Need help navigating the platform or have questions about community engagement? Our dedicated support team is here to assist you.
                            </dd>
                        </div>

                        {/* Partnerships & Collaboration */}

                        <div className="relative">
                            <dt>
                                <div className="absolute top-0 left-0 flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-white">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <p className="mt-4 ml-16 text-xl font-semibold">Partnerships & Collaboration:</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Interested in exploring potential partnerships or collaborations? Share your proposal with our team and let's discuss how we can work together
                            </dd>
                        </div>

                    </dl>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default ConnectOption;
