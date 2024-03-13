"use client";

import '../../app/globals.css'; // Import your CSS file
import Image from 'next/image'; // Import Image component from next/image

const AboutMission = () => {
    return (
        <>
            <div className="vision">
                <h2 className="text-center title">Vision, Mission, and Core Values</h2>
            </div>
            <div className="mission container mx-auto mt-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="title">Our Vision</h1>
                        <p>
                            To revolutionize education through a decentralized learning platform, empowering creators, fostering a vibrant community, and democratizing access to knowledge for all.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 visionimg">

                    </div>
                </div>
            </div>
            <div className="mission container mx-auto mt-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-1/2 missionimg">

                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="title">Our Mission</h1>
                        <p>
                            To build a transparent, secure, and community-driven ecosystem where creators retain ownership, learners thrive, and knowledge flows freely.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mission container mx-auto mt-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="title">Our Core Values</h1>

                        <ul>
                            <li><strong>Decentralization: </strong>Empowering individuals through community ownership and governance.</li>
                            <li><strong>Transparency: </strong>Fostering trust through open, verifiable transactions and data.</li>
                            <li><strong>Fairness: </strong>Ensuring equitable rewards for creators, learners, and contributors.</li>
                            <li><strong>Quality: </strong>Upholding high standards for content, accessibility, and learning experiences.</li>
                            <li><strong>Community: </strong>Building a collaborative and inclusive space for knowledge sharing and engagement.</li>
                        </ul>

                    </div>
                    <div className="w-full md:w-1/2 coreimg">

                    </div>
                </div>
            </div>

        </>
    );
};
export default AboutMission;
