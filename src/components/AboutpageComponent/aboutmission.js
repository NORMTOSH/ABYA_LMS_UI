"use client";

import Image from 'next/image';

const AboutMission = () => {
    return (
        <>
            <div className="dark:bg-gray-900">
            <div class="px-4 mx-auto max-w-screen-xl text-center pt-12 pb-6 lg:pt-14 dark:bg-gray-900">
                <h2 className="p-2 text-2xl text-center lg:text-center sm:px-12 lg:px-18 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Vision, Mission, and Core Values</h2>
            </div>
            <div className="container mx-auto  px-4 dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="p-2 text-2xl text-center lg:text-left sm:px-12 lg:px-18 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Our Vision</h1>
                        <p className='sm:px-12 lg:px-18 mb-8 text-center lg:text-left'>
                            To revolutionize education through a decentralized learning platform, empowering creators, fostering a vibrant community, and democratizing access to knowledge for all.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <img
                            src="/Vision.jpg"
                            alt="Vision Image"
                            className="w-full h-full object-cover"
                            objectPosition="center"
                            style={{ minHeight: '200px' }} //  Set a minimum height to prevent image from collapsing
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl sm:px-12 text-center lg:text-left p-4 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Our Mission</h1>
                        <p className='sm:px-12 lg:px-18 mb-8 text-center lg:text-left'>
                            To build a transparent, secure, and community-driven ecosystem where creators retain ownership, learners thrive, and knowledge flows freely.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <img
                            src="/Mission.jpg"
                            alt="mission Image"
                            className="w-full h-full object-cover"
                                objectPosition="center"
                                style={{ minHeight: '200px' }} //  Set a minimum height to prevent image from collapsing
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-left md:justify-between">
                    <div className="w-full md:w-1/2 py-4 px-4">
                        <h1 className="text-2xl mt-2 ps-12 pt-12 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl sm:text-center md:text-center lg:text-left">Our Core Values</h1>
                        <dl class="max-w-lg ps-12 text-gray-900 dark:text-white dark:divide-gray-700 md:text-center sm:text-center lg:text-left">
                            <div class="flex flex-col py-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Decentralization: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Empowering individuals through community ownership and governance.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Transparency: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Fostering trust through open, verifiable transactions and data.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Fairness: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Ensuring equitable rewards for creators, learners, and contributors.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Community:  </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Building a collaborative and inclusive space for knowledge sharing and engagement..</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Decentralizing control: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Power shifts from institutions to learners, fostering transparency and community-driven governance.</dd>
                            </div>
                        </dl>


                    </div>
                    <div className="w-full md:w-1/2 relative">
                            <img
                                src="/core.jpg"
                                alt="Core Values Image"
                                className="w-full h-full object-cover"
                                objectPosition="center"
                                style={{ minHeight: '200px' }} //  Set a minimum height to prevent image from collapsing
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </>
            );
};
            export default AboutMission;
