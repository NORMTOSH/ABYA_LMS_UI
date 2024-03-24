"use client"

import ReactSwipe from 'react-swipe';


const Additional = () => {
    let reactSwipeEl;
    const swipeOptions = {
        startSlide: 0,
        speed: 900,
        auto: 4000, // 3 seconds
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {},
        transitionEnd: function(index, elem) {}
    };
    const slideData = () => [

        {
            id: 1,
            title: "Blog",
            img: '/mentor.png',
            description: "Stay informed and engaged with insightful articles, thought leadership pieces, and updates on the latest developments within the ABYA University ecosystem."
        },
        {
            id: 2,
            img: '/mentor.png',
            title: "Community Forum",
            description: "Join the conversation, connect with other learners and contributors, and actively participate in shaping the platform's future through discussions and feedback."
        },
        {
            id: 3,
            img: '/mentor.png',
            title: "Social Media",
            description: "Follow us on various social media platforms to stay connected, receive real-time updates, and participate in interactive discussions with the ABYA University community."
        },
    ];
    return (
        <section className="bg-gray-100 dark:bg-gray-800">
            <h2 className="text-center text-2xl font-semibold">Additional Resources</h2>
            <div className="container pt-6 lg:pt-0 mx-auto items-center h-1/5 bg-transparent p-5 rounded-lg">
            <ReactSwipe
                className="carousel"
                swipeOptions={swipeOptions}
                ref={el => (reactSwipeEl = el)}>
                {slideData().map((slide) => (
                <div key={slide.id} className="p-2 items-center justify-center mx-auto text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <h3 className="text-gray-600 dark:text-gray-300 text-xl m-2 p-2">{slide.title}</h3>
                    <img src={slide.img} alt="" className='h-[50px] shadow-lg shadow-yellow-400 hover:cursor-pointer w-[50px] rounded-lg sm:rounded-none items-center mx-auto' />
                    <p className="text-gray-500 dark:text-gray-400 pt-2">{slide.description}</p>
                </div>
  ))}
            </ReactSwipe>
            </div>
            <div className="container text-gray-300 dark:text-gray-600 pl-[5%] p-5">
                <h2>#Stay Informed, Stay Involved</h2>
                <p>We encourage you to actively explore the resources provided, ask questions, and engage with the community. By staying informed and involved, you become an integral part of building a future where education is accessible, empowering, and driven by the collective power of a passionate community.</p>
            </div>
        </section>
    );
};

export default Additional;