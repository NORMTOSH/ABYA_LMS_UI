import React from 'react';

const ContactForm = () => {
    return (
        <section id="contactform" className="mx-auto pt-20 bg-white dark:bg-gray-900 h-auto ">
            <div className="mx-auto px-4">
                <div className="mb-8">
                    <div className="mb-12 max-w-md mx-auto">
                        <h2 className="text-3xl font-bold leading-tight">Reach Us Directly</h2>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid grid-cols-2">
                        <div className="pr-6">
                            <p className="mt-3 text-lg text-gray-500">For urgent matters: Email us at <a href="mailto:example@example.com" className="text-blue-600">example@example.com</a></p>
                            <p className="mb-12 text-lg text-gray-500">Together, let's rewrite the rules of learning. We look forward to hearing from you!</p>
                            <ul className="list-none p-0">
                                <li className="flex items-center">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-xl font-semibold leading-5">Our Address</h3>
                                        <p className="mb-1 text-base text-gray-500">1230 Maecenas Street Donec Road</p>
                                        <p className="text-base text-gray-500">Nairobi, Kenya</p>
                                    </div>
                                </li>

                                <br></br>

                                <li className="flex items-center">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-xl font-semibold leading-5">Contact</h3>
                                        <p className="mb-1 text-base text-gray-500">Mobile: +1 (123) 456-7890</p>
                                        <p className="text-base text-gray-500">Mail: tailnext@gmail.com</p>
                                    </div>
                                </li>

                                <br></br>

                                <li className="flex items-center">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-xl font-semibold leading-5">Working hours</h3>
                                        <p className="mb-1 text-base text-gray-500">Monday - Friday: 08:00 - 17:00</p>
                                        <p className="text-base text-gray-500">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                    </div>
                                </li>
                                <br></br>
                            </ul>
                        </div>
                        <div className="p-3 max-w-lg mx-auto">
                            <h2 className="mb-6 text-2xl font-bold text-blue-700">Ready to Get Started?</h2>
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
                                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
