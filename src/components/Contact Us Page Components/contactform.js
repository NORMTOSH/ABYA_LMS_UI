import React from 'react';

const ContactForm = () => {
    return (
        <section id="contactform" className="mx-auto py-20 bg-white dark:bg-gray-900 h-auto flex items-center" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/contact_us.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"auto", backdropFilter: 'blur(100px)'}}>
            <div className="mx-auto px-4">
                <div className="mb-8">
                    <div className="mb-12 max-w-md mx-auto text-center">
                        <h2 className="text-3xl text-white font-bold leading-tight">Reach Us Directly</h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-stretch justify-center">
                    <div className="md:pr-6 mb-6 md:mb-0">
                        <p className="mt-3 text-lg text-gray-300 dark:text-gray-300">For urgent matters: Email us at <a href="mailto:info@abyauniversity.com" className="text-yellow-400">info@abyauniversity.com</a></p>
                        <p className="mb-12 text-lg text-gray-300 dark:text-gray-300">Together, let's rewrite the rules of learning. We look forward to hearing from you!</p>
                        <ul className="list-none p-0">
                            <li className="flex items-center mb-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"/>
                                </svg>

                                </div>
                                <div className="ml-4">
                                    <h3 className="mb-2 text-xl font-semibold leading-5 text-white">Our Address</h3>
                                    <p className="mb-1 text-base text-gray-400 dark:text-gray-400">Crystal Business Plaza</p>
                                    <p className="text-base text-gray-400 dark:text-gray-400">Ongata Rongai, Kenya</p>
                                </div>
                            </li>

                            <li className="flex items-center mb-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                </svg>

                                </div>
                                <div className="ml-4 py-5">
                                    <h3 className="mb-2 text-xl font-semibold leading-5 text-white">Contact</h3>
                                    <p className="mb-1 text-base text-gray-400 dark:text-gray-400">Mobile: + (254)- 797 546 916</p>
                                    <p className="text-base text-gray-400 dark:text-gray-400">Mail: info@abyauniversity.com</p>
                                </div>
                            </li>

                            <li className="flex items-center mb-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>

                                </div>
                                <div className="ml-4 py-5">
                                    <h3 className="mb-2 text-xl font-semibold leading-5 text-white">Working hours</h3>
                                    <p className="mb-1 text-base text-gray-400">Monday - Friday: 08:00 - 17:00</p>
                                    <p className="text-base text-gray-400">Saturday 08:00 - 12:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:p-3 max-w-lg mx-auto">
                        <h2 className="mb-6 text-2xl font-bold text-yellow-400">Ready to Get Started?</h2>
                        <form id="contactForm">
                            <div className="mb-6">
                                <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="w-full p-2 border border-gray-300 rounded text-gray-700" name="name" />
                            </div>
                            <div className="mb-6">
                                <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="w-full p-2 border border-gray-300 rounded text-gray-700" name="email" />
                            </div>
                            <div className="mb-6">
                                <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="w-full p-2 border border-gray-300 rounded text-gray-700"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
