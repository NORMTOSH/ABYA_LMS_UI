import React from 'react';

const Sneak = () => {
    return (
        <div className="bg-white p-8 pt-10 text-center space-y-4 rounded-lg shadow-md dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Sneak Peek at Upcoming Features</h2>
            <p className="text-gray-700 dark:text-gray-300">Stay tuned for the platform launch! Sign up for the waitlist to be among the first to experience <br/> ABYA University's revolutionary learning environment.</p>
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-white dark:text-black">
                Sneak
            </button>
            <p className="text-gray-700"></p>
        </div>
    );
}

export default Sneak;
