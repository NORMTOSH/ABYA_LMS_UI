"use client";


const AboutBlockchain = () => {
    return (
        <>
        <div className="dark:bg-gray-900">
        <div className="px-4 mx-auto text-center pt-5 dark:bg-gray-900">
                <h2 className="text-3xl font-bold tracking-tight leading-none md:text-3xl lg:text-3xl">Why Blockchain?</h2>
            </div>
            <div className="py-8 ps-12 mx-auto items-center justify-center container lg:py-16 dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center px-6 md:justify-between">
                    <div className="w-full md:w-1/2">
                        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3">
                          <dd class="mb-4 text-xl font-semibold">Blockchain holds immense potential to transform education by:</dd>  
                        </div>
                        
                        <div class="flex flex-col pb-3">
                            <dt class="text-lg font-semibold dark:text-yellow-400">Decentralizing control: </dt>
                            <dd class="mb-2 md:text-lg dark:text-gray-400">Power shifts from institutions to learners, fostering transparency and community-driven governance.</dd>
                        </div>
                        <div class="flex flex-col pb-3">
                            <dt class="text-lg font-semibold dark:text-yellow-400">Rewarding knowledge: </dt>
                            <dd class="mb-2 md:text-lg dark:text-gray-400">Creates a tokenized incentive system that motivates individuals to share their expertise and contribute to the platform&apos;s growth.</dd>
                        </div>
                        <div class="flex flex-col pb-3">
                            <dt class="text-lg font-semibold dark:text-yellow-400">Ensuring data ownership: </dt>
                            <dd class="mb-2 md:text-lg dark:text-gray-400">Learners control their data, safeguarding privacy and building trust within the ecosystem.</dd>
                        </div>
                        <div class="flex flex-col pb-3">
                            <dt class="text-lg font-semibold dark:text-yellow-400">Facilitating secure transactions: </dt>
                            <dd class="mb-2 md:text-lg dark:text-gray-400">Secure and transparent token-based transactions enable seamless interaction and value exchange.</dd>
                        </div>
                        
                        </dl>
                    </div>
                    {/* verticle divider line */}
                    <div class="hidden md:block pr-[70px] items-center justify-center mx-auto ">
                        <div class="w-1 h-[500px] bg-gray-400 shadow-lg shadow-yellow-400 dark:bg-gray-700"></div>
                    </div>
                    <div className="w-full md:w-1/2"> 
                        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                            <dd class="mb-4 text-xl font-semibold">More than just technology:</dd>  
                            <dd class="mb-4 font-semibold dark:text-gray-400">ABYA University is not just about technology; it&apos;s about people and creating a thriving community. We value:</dd>  
                            </div>
                            
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Collaboration: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">We believe in learning from each other and building something bigger together</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Inclusivity: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">We welcome diverse perspectives and backgrounds, fostering a vibrant and inclusive learning environment.</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Transparency: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">We believe in open communication and shared decision-making</dd>
                            </div>
                            <div class="flex flex-col pb-3">
                                <dt class="text-lg font-semibold dark:text-yellow-400">Innovation: </dt>
                                <dd class="mb-2 md:text-lg dark:text-gray-400">We encourage experimentation and embracing new technologies to constantly evolve and improve.</dd>
                            </div>
                            
                        </dl>
                    </div>
                </div>
            </div>
            {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
        </div>
        </>

    );
};
export default AboutBlockchain; 