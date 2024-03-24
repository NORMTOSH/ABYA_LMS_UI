"use client";

import Image from 'next/image';

const AboutMission = () => {
    return (
        <>
            <div className="dark:bg-gray-900">
            <div class="px-4 mx-auto max-w-screen-xl text-center pt-12 pb-6 lg:pt-14 dark:bg-gray-900">
                <h2 className="text-center text-gray-700 dark:text-gray-200 mb-8 text-4xl sm:px-10 lg:px-36 font-bold tracking-tight leading-none md:text-2xl lg:text-3xl">Vision, Mission, and Core Values</h2>
            </div>
            <div className="container mx-auto  px-4 dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="p-2 text-2xl text-center lg:text-left sm:px-12 lg:px-18 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Our Vision</h1>
                        <p className='sm:px-12 lg:px-18 mb-8 text-center lg:text-left'>
                            To revolutionize education through a decentralized learning platform, empowering creators, fostering a vibrant community, and democratizing access to knowledge for all.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Vision.jpg"
                            alt="Vision Image"
                            layout="fill"
                            objectFit="cover"
                            className="z-20"
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center lg:flex-row-reverse">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl mt-2 sm:px-12 text-center lg:text-left p-2 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Our Mission</h1>
                        <p className='sm:px-12 lg:px-18 mb-8 text-center lg:text-left'>
                            To build a transparent, secure, and community-driven ecosystem where creators retain ownership, learners thrive, and knowledge flows freely.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Mission.jpg"
                            alt="Vision Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-1/2 py-4">
                        <h1 className="text-2xl mt-2 p-2  font-bold tracking-tight leading-none md:text-3xl lg:text-3xl text-center">Our Core Values</h1>
                        <dl class="max-w-lg ps-12 text-gray-900 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold">Decentralization: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Empowering individuals through community ownership and governance.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold">Transparency: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Fostering trust through open, verifiable transactions and data.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold">Fairness: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Ensuring equitable rewards for creators, learners, and contributors.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold">Community:  </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Building a collaborative and inclusive space for knowledge sharing and engagement..</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold">Decentralizing control: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Power shifts from institutions to learners, fostering transparency and community-driven governance.</dd>
                            </div>
                        </dl>


                    </div>
                    <div className="w-full md:w-1/2">
                            <img
                                src="/landing1.jpg"
                                alt="Core Values Image"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </>
            );
};
            export default AboutMission;
