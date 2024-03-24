import React from "react";

const Alternate = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col mx-auto">
      <h2 className="mx-auto text-3xl font-semibold text-center mt-5">
              The ABYA Token
            </h2>
        <div className="gap-2 items-center py-8 px-4 mx-auto flex container flex-col md:flex-row md:w-full md:gap-2 md:space-x-2 p-2">
          <div className="md:items-start md:w-[70%] lg:w-[70%] m-2 flex flex-col">
            <h2 className="text-2xl font-bold p-2">Your Key to the Ecosystem</h2>
            <p>
              The ABYA token is your gateway to participating and earning within
              the platform. Here's how it works:
            </p>
            <div className="my-auto items-center">
              <li className="mb-2">
                <span className="font-bold">Earn Tokens:</span>
                <p className="text-gray-600 dark:text-gray-400">
                   Contribute to the platform by creating courses, sharing
                  knowledge, mentoring others, and participating in community
                  initiatives.
                </p>
              </li>
              <li className="items-center mb-2">
                <span className="font-bold">Spend Tokens:</span>
                <p className="text-gray-600 dark:text-gray-400">
                  Access premium features, enroll in exclusive courses, and
                  support community-driven projects.
                </p>
              </li>
              <li className="items-center mb-2">
                <span className="font-bold">Hold Tokens:</span>
                <p className="text-gray-600 dark:text-gray-400">
                  Participate in DAO voting and governance, shaping the
                  platform's future and benefiting from its growth.
                </p>
              </li>
            </div>
          </div>
          <div className="md:items-end md:w-[30%] lg:w-[30%] m-2">
            <img
              className="w-full h-auto lg:rounded-r-[30px]"
              src="landing18.jpg"
              alt="product image"
            />
          </div>
        </div>

        <div className="gap-2 items-center py-8 px-4 mx-auto flex container flex-col md:flex-row md:w-full md:gap-2 md:space-x-2 p-2">
          <div className="md:items-end md:w-[30%] lg:w-[30%] m-2">
            <img
              className="w-full h-auto lg:rounded-l-[30px]"
              src="landing20.jpg"
              alt="product image"
            />
          </div>

          <div className="md:items-start md:w-[70%] lg:w-[70%] m-2">
            <h2 className="text-2xl font-bold">
              Tokenomics for Sustainability
            </h2>
            <p>
              We've carefully designed the tokenomics to ensure fair
              distribution, long-term sustainability, and rewarding active
              participation:
            </p>
            <div className="my-auto items-center">
              <li className="mb-2">
                <span className="font-bold">Transparent allocation:</span>
                <p className="text-gray-600 dark:text-gray-400">
                   Contribute to the platform by creating courses, sharing
                  knowledge, mentoring others, and participating in community
                  initiatives.
                </p>
              </li>
              <li className="items-center mb-2">
                <span className="font-bold">Sustainable Incentives</span>
                <p className="text-gray-600 dark:text-gray-400">
                  Rewards are balanced to encourage meaningful contributions and
                  platform growth, not short-term exploitation.
                </p>
              </li>
              <li className="items-center mb-2">
                <span className="font-bold">Deflationary Model</span>
                <p className="text-gray-600 dark:text-gray-400">
                  The total token supply is capped, preventing inflation and
                  safeguarding the value of your contributions.
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternate;
