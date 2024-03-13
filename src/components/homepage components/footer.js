"use client"


import { useTheme } from 'next-themes'

const Footer = () => {
    const { theme } = useTheme()

    const bgImage = theme === 'dark' 
    ? 'url(/landing10.jpg)' 
    : 'url(/landing15.jpg)'

    return ( 


<footer class="bg-gray-200 shadow dark:bg-gray-900 relative h-auto" style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)), ${bgImage}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 container my-auto py-auto items-center">
        <div className="items-center w-[75%] mx-auto justify-center text-center m-4 pb-7">
            <h2 class="text-3xl font-semibold text-gray-200 dark:text-gray-200">Ready to tap into the Future?</h2>
            <p class="mt-2 text-gray-300 dark:text-gray-300">Join ABYA today, and start your journey of unwoven adventures, exciting challenges and a pool of limitless possibilities.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-300 p-3 m-4 rounded-3xl shadow-lg">Get Started</button>
        </div>
        <div class="flex items-center justify-around my-auto mx-auto">
            <a href="https://flowbite.com/" class="hidden lg:flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img width="250" height="250" src="https://abyauniversity.com/wp-content/uploads/2022/08/abya-university-resized.png" class="attachment-large size-large wp-image-3255" alt="" loading="lazy" srcset="https://abyauniversity.com/wp-content/uploads/2022/08/abya-university-resized.png 592w, https://abyauniversity.com/wp-content/uploads/2022/08/abya-university-resized-300x129.png 300w" sizes="(max-width: 592px) 100vw, 592px"/>
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ABYA</span> */}
            </a>
            <ul class="flex flex-wrap items-center gap-4 m-3 mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
                <li className="flex flex-col">
                    <p class="me-4 md:me-6 text-2xl">About Us</p>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Privacy Policy</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Blog</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Careers</a>
                </li>
                <li className="flex flex-col">
                <p class="me-4 md:me-6 text-2xl">Support</p>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Contact Us</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Documentation</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Community</a>
                </li>
                <li className="flex flex-col">
                    <p class="me-4 md:me-6 text-2xl">Socials</p>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Privacy Policy</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Blog</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Careers</a>
                </li>
                {/* <li className="flex flex-col">
                    <p class="me-4 md:me-6 text-2xl">About Us</p>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Privacy Policy</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Blog</a>
                    <a href="#" class="hover:underline me-4 md:me-6 text-md text-gray-400">Careers</a>
                </li> */}
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2024 <a href="https://abyauniversity.com/" class="hover:underline">ABYA University™</a>. All Rights Reserved.</span>
    </div>
</footer>


     );
}
 
export default Footer;