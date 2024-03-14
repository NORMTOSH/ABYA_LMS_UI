import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const CommunitySection = () => {
  return (
    <div className='mx-auto pt-10 md:pt-20 bg-white dark:bg-gray-900 h-auto'>
      <div className="text-center">
        <p className="mt-4 text-3xl md:text-4xl font-extrabold">Stay Connected</p>
      </div>
      <div className="max-w-7xl mx-auto pt-10 md:pt-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <div className="relative rounded-xl border-yellow-400 shadow-2xl shadow-yellow-400 p-6 md:p-12 text-center" style={{backgroundImage: `url('/community4.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height:"auto", backdropFilter: 'blur(100px)'}}>
            <h2 className="text-xl md:text-3xl text-white font-bold mb-4 md:mb-6">Join our community forum today!</h2>
            <p className="text-base md:text-lg text-white mb-8 md:mb-12">Dive deeper into discussions, connect with like-minded individuals, and actively participate in shaping the platform's future.</p>
            <div className="flex justify-center items-center">
              <a
                href="your-forum-url"
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg py-2 md:py-4 px-6 md:px-8 transition duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the forum
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col items-center bg-cover bg-center rounded-xl p-6 md:p-12 gap-6 md:gap-8 text-center cursor-pointer">
            <h1 className="text-xl md:text-2xl font-bold uppercase text-black dark:text-white transition-colors">Follow us on social media:</h1>
            <h2 className="text-base md:text-lg text-gray-500">Stay up-to-date with the latest news, announcements, and community events through our social media channels.</h2>
            <div className="flex justify-center items-center gap-4 mt-4 md:mt-6">
              <a href='your-google-url' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} size="2x" className="text-gray-400 hover:text-yellow-400 hover:-translate-y-2 hover:delay-100 ease-in-out transition-colors duration-300" /></a>
              <a href='your-whatsapp-url' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-gray-400 hover:text-yellow-400 hover:-translate-y-2 hover:delay-100 ease-in-out transition-colors duration-300" /></a>
              <a href='your-linkedin-url' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-400 hover:text-yellow-400 hover:-translate-y-2 hover:delay-100 ease-in-out transition-colors duration-300" /></a>
              <a href='your-twitter-url' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" className="text-gray-400 hover:text-yellow-400 hover:-translate-y-2 hover:delay-100 ease-in-out transition-colors duration-300" /></a>
              <a href='your-facebook-url' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" className="text-gray-400 hover:text-yellow-400 hover:-translate-y-2 hover:delay-100 ease-in-out transition-colors duration-300" /></a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default CommunitySection;
