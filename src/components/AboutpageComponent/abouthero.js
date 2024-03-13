"use client";
import '../../app/globals.css'; // Import your CSS file


const AboutHero = () => {
    return (
        <div className="jumbotron mt-10">
            <h3 className="subtitle">About ABYA University</h3>
            <h1 className="title">Building a Learner-Driven Future</h1>
            <p>
                <strong>Tired of the education status quo?</strong> We are too. That&apos;s why we created ABYA University, a <strong> decentralized learning platform built on the promise of empowerment, community, and innovation</strong>
            </p>

            <div id='buttons' className="flex items-center">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Learn More
                </button>

                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-green-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Enroll Now
                </button>
            </div>
        </div>

    );
};

export default AboutHero;
