import React from 'react';
import Navbar from '../homepage components/navbar';

const AboutPlatform = () => {
  return (
        <div className="flex justify-center">
        <div className="bg-white p-1 text-center space-y-2 dark:bg-gray-900 ">
        <Navbar />
      <div className="ml-20 mt-14 px-20 mr-6 pr-80 ">
        <h3 className="font-semibold text-gray-900 text-left dark:text-white">ABYA University:</h3>
        <h1 className="mb-1.5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          The Platform - Your Learning <br /> Revolution Begins Here
        </h1>
        <p className="font-normal text-gray-900 dark:text-white text-left">
          <span className="font-bold">Dive into a world of learning, reimagined.</span> ABYA Universitys platform is more than just courses and lectures, its <br /> an interactive ecosystem where you:
        </p>
      </div>

      <div className="flex ml-20 px-20 mr-6 pr-80">
        <img src="flashcards.png" alt="icon" className="float-left ml-10 mt-4 w-16 h-16" />
        <p className="font-normal text-gray-900 dark:text-white text-left ml-4 mt-4">
          <span className="font-bold">Shape your journey: Choose from diverse courses, create personal projects, and explore self-directed learning paths.</span> <br /> No more one-size-fits-all education.
        </p>
      </div>

      <div className="flex ml-20 px-20 mr-6 pr-80">
        <img src="get-revenue.png" alt="icon" className="float-left ml-10 mt-2 w-16 h-16" />
        <p className="font-normal text-gray-900 dark:text-white text-left ml-4 mt-4">
          <span className="font-bold">Contribute and earn:</span> Share your knowledge, create innovative content, and <span className="font-bold">get rewarded with <br /> tokens for your expertise. Become a learning leader and empower others.
          </span>
        </p>
      </div>

      <div className="flex ml-20 px-20 mr-6 pr-80">
        <img src="teamwork.png" alt="icon" className="float-left ml-10 mt-2 w-16 h-16" />
        <p className="font-normal text-gray-900 dark:text-white text-left ml-4 mt-4">
          <span className="font-bold">Join the community:</span> Connect with global peers, collaborate on projects, and <span className="font-bold">build meaningful relationships that </span> enhance your learning experience.
        </p>
      </div>

      <div className="flex ml-20 px-20 mr-6 pr-80">
        <img src="dao.png" alt="icon" className="float-left ml-10 mt-2 w-16 h-16" />
        <p className="font-normal text-gray-900 dark:text-white text-left ml-4 mt-4">
          <span className="font-bold">Own your data: Blockchain technology</span>  ensures your learning data is secure and under your control. Privacy and ownership are built-in, not afterthoughts.
        </p>
      </div>

      <div className="flex ml-20 mb-30 px-20 mr-6 pr-80">
        <img src="intelligence.png" alt="icon" className="float-left ml-10 mt-2 w-16 h-16" />
        <p className="font-normal text-gray-900 dark:text-white text-left ml-4 mt-4">
          <span className="font-bold">Experience innovation:</span> Immerse yourself in cutting-edge features like <span className="font-bold">Al-powered recommendations, gamified learning elements, and personalized learning plans.
          </span>
        </p>
      </div>
      </div>
      </div>

  );
}

export default AboutPlatform;