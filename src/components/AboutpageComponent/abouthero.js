"use client";
import '../../app/globals.css'; // Import your CSS file
import Navbar from '../../components/homepage components/navbar';


const AboutHero = () => {
    return (
        <section className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply" style={{backgroundImage: "url('aboutcover.jpg')" }}>
            <Navbar />
            <div class="px-4 mx-auto max-w-screen-xl py-12 lg:py-24">
                <h3 className="text-2xl sm:px-10 lg:px-16 text-white font-medium">About ABYA University</h3>
                <h1 className="mb-4 text-4xl sm:px-10 lg:px-16 text-white font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl">Building a Learner-Driven Future</h1>
                <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-10 lg:px-16">
                    <strong>Tired of the education status quo?</strong> We are too. That&apos;s why we created ABYA University, a <strong> decentralized learning platform built on the promise of empowerment, community, and innovation</strong>
                </p>

                <div id='buttons' className="flex sm:px-10 lg:px-16 items-center">
                    <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-400">
                        Learn More
                    </button>

                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-red-700 hover:bg-red-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700">
                        Enroll Now
                    </button>
                </div>
            </div>
        </section>

    );
};

export default AboutHero;
