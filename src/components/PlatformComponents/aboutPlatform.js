import Navbar from '../homepage components/navbar';
import React from 'react';

const AboutPlatform = () => {
  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="bg-white p-1 text-center space-y-2 dark:bg-gray-900">
      <Navbar />
        <div className="mx-auto px-4 sm:px-6">
          <h3 className="font-semibold text-gray-900 dark:text-white text-left">ABYA University:</h3>
          <h1 className="mb-1.5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
            The Platform - Your Learning <br /> Revolution Begins Here
          </h1>
          <p className="font-normal text-gray-900 dark:text-white text-left">
            <span className="font-bold">Dive into a world of learning, reimagined.</span> ABYA University's platform is more than just courses and lectures, it's an interactive ecosystem where you:
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md sm:max-w-xl md:max-w-3xl">
            <div className="flex items-center">
              <img src="flashcards.svg" alt="icon" className="w-16 h-16 dark:filter dark:invert" />
              <p className="font-normal text-gray-900 dark:text-white text-left ml-4">
                <span className="font-bold">Shape your journey: Choose from diverse courses, create personal projects, and explore self-directed learning paths.</span> <br /> No more one-size-fits-all education.
              </p>
            </div>

            <div className="flex items-center mt-4">
              <img src="get-revenue.svg" alt="icon" className="w-16 h-16 dark:filter dark:invert" />
              <p className="font-normal text-gray-900 dark:text-white text-left ml-4">
                <span className="font-bold">Contribute and earn:</span> Share your knowledge, create innovative content, and <span className="font-bold">get rewarded with <br /> tokens for your expertise. Become a learning leader and empower others.
                </span>
              </p>
            </div>

            <div className="flex items-center mt-4">
              <img src="teamwork.svg" alt="icon" className="w-16 h-16 dark:filter dark:invert" />
              <p className="font-normal text-gray-900 dark:text-white text-left ml-4">
                <span className="font-bold">Join the community:</span> Connect with global peers, collaborate on projects, and <span className="font-bold">build meaningful relationships that </span> enhance your learning experience.
              </p>
            </div>

            <div className="flex items-center mt-4">
              <img src="dao.svg" alt="icon" className="w-16 h-16 dark:filter dark:invert" />
              <p className="font-normal text-gray-900 dark:text-white text-left ml-4">
                <span className="font-bold">Own your data: Blockchain technology</span>  ensures your learning data is secure and under your control. Privacy and ownership are built-in, not afterthoughts.
              </p>
            </div>

            <div className="flex items-center mt-4 mb-4">
              <img src="intelligence.svg" alt="icon" className="w-16 h-16 dark:filter dark:invert" />
              <p className="font-normal text-gray-900 dark:text-white text-left ml-4">
                <span className="font-bold">Experience innovation:</span> Immerse yourself in cutting-edge features like <span className="font-bold">Al-powered recommendations, gamified learning elements, and personalized learning plans.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPlatform;
