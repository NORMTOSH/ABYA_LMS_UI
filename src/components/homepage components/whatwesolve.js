"use client"

const Whatwesolve = () => {
    return (
        <section id="whatwesolve" className="items-center justify-center dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800 bg-gradient-to-b from-gray-100 to-gray-300 pt-[200px] md:pt-[5px] lg:pt-2">
            <h2 className="text-gray-700 dark:text-gray-200 font-semibold text-3xl p-2 mx-auto text-center">What We Solve..</h2>
            <h3 className="text-lg text-gray-600 dark:text-gray-400 lg:container text-center w-[85%] p-3 m-2 bottom-2 items-center mx-auto">Traditional education faces serious challenges: limited access, high costs, outdated structures, and lack of student ownership. ABYA University tackles these issues head-on, offering a decentralized, community-driven approach that prioritizes:</h3>
            <div className="container md:container md:items-center md:justify-center md:ml-6 mx-auto p-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center place-content-center place-items-center lg:justify-center lg:items-center lg:mx-auto lg:place-content-center lg:place-items-center lg:justify-items-center lg:justify-content-center">
                <div className="bg-gray-100 shadow-gray-900  hover:cursor-pointer dark:hover:shadow-yellow-400 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden p-6 w-full lg:w-[90%] md:w-[90%]">
                    <a href="#" className="flex space-x-2  items-center justify-center p-2">
                        <img src="/accessibility.png" className="h-10 my-auto"/>
                        <h5 className="mb-2 text-2xl font-semibold my-auto tracking-tight text-gray-900 dark:text-white">Relevance</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Content tailored to your needs and interests, not one-size-fits-all models.</p>
                </div>
                <div className="bg-gray-100 shadow-gray-900  hover:cursor-pointer dark:hover:shadow-yellow-400 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden p-6 w-full lg:w-[90%] md:w-[90%]">
                <a href="#" className="flex space-x-2  items-center justify-center p-2">
                        <img src="/accessibility.png" className="h-10 my-auto"/>
                        <h5 className="mb-2 text-2xl font-semibold my-auto tracking-tight text-gray-900 dark:text-white">Engagement</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Collaborative learning, active participation, and a thriving community.</p>
                </div>
                <div className="bg-gray-100 shadow-gray-900  hover:cursor-pointer dark:hover:shadow-yellow-400 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden p-6 w-full lg:w-[90%] md:w-[90%]">
                <a href="#" className="flex space-x-2  items-center justify-center my-auto p-2">
                        <img src="/mentor.png" className="h-10 my-auto"/>
                        <h5 className="mb-2 text-2xl font-semibold my-auto tracking-tight text-gray-900 dark:text-white">Transparency</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Open governance and clear tokenomics for trust and accountability.</p>
                </div>
                <div className="bg-gray-100 shadow-gray-900  hover:cursor-pointer dark:hover:shadow-yellow-400 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden p-6 w-full lg:w-[90%] md:w-[90%]">
                <a href="#" className="flex space-x-2  items-center justify-center my-auto p-2">
                        <img src="/innovation.png" className="h-10 my-auto"/>
                        <h5 className="mb-2 text-2xl font-semibold my-auto tracking-tight text-gray-900 dark:text-white">Innovation</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Embracing new technologies to enhance learning and empower learners.</p>
                </div>
                <div className="bg-gray-100 hover:cursor-pointer dark:hover:shadow-yellow-400 shadow-gray-900 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden p-6 w-full lg:w-[90%] md:w-[90%]">
                <a href="#" className="flex space-x-2 items-center justify-center p-2">
                        <img src="/transparency.png" className="h-10 my-auto"/>
                        <h5 className="mb-2 text-2xl my-auto font-semibold tracking-tight text-gray-900 dark:text-white">Accessibility</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Everyone,everywhere should have access to quality education.</p>
                    
                </div>
            </div>
        </section>

    );
}

export default Whatwesolve;

