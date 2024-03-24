import React from "react";

const Cards1 = () => {
  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="w-full md:w-auto">
        <a href="#" className="">
          <div className="items-center justify-center mx-auto p-3 mt-4">
            <h3 className="text-gray-900 dark:text-white text-center font-bold text-2xl">
             The DAO: Your Seat at the Table
            </h3>
            <h2 className="mb-1.5 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-300 text-center">
            ABYA University is more than just a platform; it's a self-governing ecosystem driven by<br/> the ABYA token. Through the DAO, you have the power to:
            </h2>
          </div>
        </a>
        <div className="flex flex-wrap justify-center container">
          {/* Box 1 */}
          <div className="pt-2 mt-6 mx-2 max-w-sm rounded-lg dark:shadow-lg dark:shadow-yellow-400">
            <a href="#">
              <img className="w-full rounded-tl-[100px] rounded-br-[100px] shadow-lg shadow-yellow-400" src="landing14.jpg" alt="" />
            </a>
            <div className="pt-4 mx-2">
              <a href="#">
                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Vote on key decisions
                </h5>
              </a>
            </div>
            <div className="pt-2 pb-6 mx-2">
              <p className="text-base ml-2 dark:text-gray-300">
              From curriculum development and platform features to token allocation and governance rules, your voice matters.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300  ml-5 mb-10"
            >
              Read more
            </a>
          </div>

          {/* Box 2 */}
          <div className="pt-2 mt-6 mx-2 max-w-sm rounded-lg dark:shadow-lg dark:shadow-yellow-400">
            <a href="#">
              <img className="w-full rounded-tl-[100px] rounded-br-[100px] shadow-lg shadow-yellow-400" src="landing13.jpg" alt="" />
            </a>
            <div className="pt-4 mx-2">
              <a href="#">
                <h5 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Shape the future of learning 
                </h5>
              </a>
            </div>
            <div className="pt-2 pb-6 mx-2">
              <p className="text-base ml-2 dark:text-gray-300">
              Propose new ideas, participate in discussions, and actively influence the platform's evolution.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500  rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10"
            >
              Read more
            </a>
          </div>

          {/* Box 3 */}
          <div className="pt-2 mt-6 mx-2 max-w-sm rounded-lg dark:shadow-lg dark:shadow-yellow-400">
            <a href="#">
            <img className="w-full rounded-tl-[100px] rounded-br-[100px] shadow-lg shadow-yellow-400" src="landing16.jpg" alt="" />
            </a>
            <div className="pt-4 mx-2">
              <a href="#">
                <h4 className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ensure transparency
                </h4>
              </a>
            </div>
            <div className="pt-2 pb-6 mx-2">
              <p className="text-base ml-2 dark:text-gray-300">
              Access all proposals, voting results, and financial data on the blockchain, fostering trust and accountability.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500  rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ml-5 mb-10"
            >
              Read more
            </a>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Cards1;
