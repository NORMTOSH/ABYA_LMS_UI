"use client"

import Navbar from "./navbar";
import Slider from "react-slick";
import Slide from "./slide";
// Import your CSS file
import "../../app/globals.css";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 7000,
        pauseOnHover: true,
        cssEase: 'ease-in-out',
        // fade: true,
      };

    const slideData = () => [
        {
            id: 1,
            img: "/slide1.png",
            title: "Students rule",
            description: "Shape your education through the DAO (Decentralized Autonomous Organization) - vote on curriculum, policies, and platform development."
        },
        {
            id: 2,
            img: "/slide2.png",
            title: "Knowledge pays",
            description: "Share your expertise, create courses, and contribute to the community. Get rewarded with tokens, unlocking new opportunities and empowering your financial future."
        },
        {
            id: 3,
            img: "/slide3.png",
            title: "Learning without borders",
            description: "Break down barriers of geography and cost. Connect with diverse voices and perspectives on our globally accessible platform."
        },
        {
            id: 4,
            img: "/slide4.png",
            title: "Data you control",
            description: "Say goodbye to centralized control. Blockchain ensures secure storage and ownership of your data, giving you peace of mind and the power to choose.Share your expertise, create courses, and contribute to the community. Get rewarded with tokens, unlocking new opportunities and empowering your financial future."
        },
        {
            id: 5,
            img: "/slide5.png",
            title: "Innovation never graduates",
            description: "From cutting-edge AI tools to gamified learning experiences, ABYA embraces continuous innovation. Be part of a vibrant community shaping the future of education."
        }
    ]
    return ( 
        <div className="bg-gray-100 dark:bg-gray-800 h-[100vh]">
            <Navbar />
            <div className="container pt-2 lg:pt-0 mx-auto items-center">
                <div className="items-center mx-auto text-center p-[20px] md:p-[60px] lg:p-[60px]">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">ABYA University: Where Education Meets Empowerment</h1>
                    <p className="text-lg lg:text-xl text-gray-600 lg:w-[80%] m-2 lg:text-center lg:mx-auto dark:text-gray-400">Tired of stale lectures and rigid systems? The education revolution is here, powered by blockchain technology and fueled by you.</p>
                    <span className="mt-3 text-2xl">Join ABYA University, the decentralized learning platform where:</span>
                    {/* two join btns */}
                    <div className="flex justify-center mt-4 gap-2">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mr-4">Join Now</button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">Learn More</button>
                    </div>
                </div>
                <Slider {...settings}>
                    {slideData().map((item) => (<Slide key={item.id} img={item.img} title={item.title} description={item.description} />))}
                </Slider>
            </div>
        </div>

        

     );
}
 
export default Hero;