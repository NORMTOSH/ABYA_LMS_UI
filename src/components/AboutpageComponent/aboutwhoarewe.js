"use client";


const AboutWhoAreWe = () => {
    return (
        <>
            <div className="dark:bg-gray-900">
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="container pt-20 pb-8 mx-auto w-full text-center">
                    <h1 className="text-3xl py-5 font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Who are we?</h1>
                    <p className="px-8 text-left text-lg font-normal md:text-center lg:text-center dark:text-gray-400">
                        We&apos;re a passionate team of educators, technologists, and dreamers driven by a shared vision: to unlock the full potential of education through blockchain technology. We believe learning should be:
                    </p>
                    <div className=" text-lg text-center font-normal lg:text-xl">
                        <dl class="px-4 text-gray-900 dark:text-white dark:divide-gray-700 m-3 lg:container">
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Accessible:  </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Everyone, regardless of background or location, should have the opportunity to pursue their educational goals.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Engaging: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Interactive, collaborative, and personalized learning experiences that spark curiosity and fuel knowledge.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Empowering: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">Students should be actively involved in shaping their education, owning their data, and reaping the rewards of their contributions.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Sustainable: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">A model that fosters innovation, community growth, and financial stability, ensuring long-term impact.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            </div>
        </>

    );
};
export default AboutWhoAreWe; 