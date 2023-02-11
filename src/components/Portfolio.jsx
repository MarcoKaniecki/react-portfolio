import { React, useState } from "react";
import { Helmet } from 'react-helmet';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsFillPatchCheckFill, BsFillMoonStarsFill } from "react-icons/bs"
import { BiDownload } from "react-icons/bi"

import mkk from "../assets/marco-smile-full.png";
import SYP from "../assets/blue_green_cityscape.png";
import CPU from "../assets/cpu-clipart.png";
import BTC from "../assets/cryptocurrency-mining.png";

import Resume from "../assets/MK_Resume.pdf";

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Helmet>
        <title>Marcos Portfolio</title>
        <meta name="description" content="Portfolio of Marco Kaniecki" />
        <meta name="keywords" content="HTML, Tailwind CSS, React JS, Porfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-400">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-400"/>
              </li>
              <li>
                <a
                    href={Resume}
                    download="MK_Resume.pdf"
                    type="application/pdf"
                    className=" bg-gradient-to-r
                    from-green-500
                    to-blue-500
                    text-white px-4 py-2 rounded-md ml-8 inline-flex
                    dark:text-gray-200
                    dark:bg-gradient-to-r
                    dark:from-blue-500
                    dark:to-green-500">
                  <BiDownload className="w-5 h-6 mr-2"/>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-green-500 font-medium md:text-6xl dark:text-blue-500">Marco Kaniecki</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Computer Engineering Student (4th yr.)</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              I teach myself Python in my free time.
              I am interested in learning more about programming and computer security. I constantly have the urge to challenge myself.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <div className="hover:text-green-500 dark:hover:text-blue-500">
              <a href="https://github.com/MarcoKaniecki">
              <AiFillGithub />
            </a>
            </div>
            
           <div className="hover:text-green-500 dark:hover:text-blue-500">
            <a href="https://www.linkedin.com/in/marco-kaniecki-70531a225/">
              <AiFillLinkedin className="cursor-pointer" />
            </a>
           </div>
            
            <div className="hover:text-green-500 dark:hover:text-blue-500">
              <a href="mailto: marcokaniecki@gmail.com">
              <AiFillMail className="cursor-pointer" />
              </a>
            </div>
            
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-green-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:from-blue-500">
            <img src={mkk} alt={""} />
          </div>
        </section>

        <section>
          <div>
            <p className="flex justify-center mt-10">
            <span className="text-green-500 dark:text-blue-500">What Skills I Have</span>
            </p>
            <h3 className="flex justify-center text-3xl py-1 dark:text-white">My Experience</h3>
          </div>

           
           <div className=" max-w-7xl mx-auto">
            <div className="lg:flex gap-10 lg:justify-center mx-auto">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 border border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex-1 max-w-4xl">
                <h5 className="text-center mb-4 text-xl font-medium text-gray-800 dark:text-white">Frontend Development</h5>
                {/* List */} 
                <ul className="space-y-5 my-7 columns-2">
                    <li className="flex space-x-3">
                        {/* Icon */} 
                        <BsFillPatchCheckFill className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-blue-500" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">Tailwind</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */} 
                        <BsFillPatchCheckFill className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-blue-500" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">React</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */} 
                        <BsFillPatchCheckFill className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-blue-500" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">HTML</span>
                    </li>
                </ul>  
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex-1 max-w-4xl">
                <h5 className="text-center mb-4 text-xl font-medium text-gray-800 dark:text-white">Backend Development</h5>
                {/* List */} 
                <ul className="space-y-5 my-7 columns-2">
                    <li className="flex space-x-3">
                        {/* Icon */} 
                        <BsFillPatchCheckFill className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-blue-500" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">Python</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */} 
                        <BsFillPatchCheckFill className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-blue-500" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">C/C++</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */} 
                        <BsFillPatchCheckFill className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-blue-500" />
                        <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">Assembly</span>
                    </li>
                </ul>  
            </div>
          </div>
           </div>
          
        </section>

        <section>
          <div>
            <p className="flex justify-center mt-10">
            <span className="text-green-500 dark:text-blue-500">My Recent Work</span>
            </p>
            <h3 className="flex justify-center text-3xl py-1 pb-10 dark:text-white">Portfolio</h3>
          </div>
          
          <div className="flex justify-between pb-10">
            <div className="mx-auto gap-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            


              <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
                <img className=" border-rounded" src={SYP} alt={""} />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Using Deep Learning for Real Estate Appraisal</h5>

                  <p className="mb-3 pb-10 font-normal text-gray-700 dark:text-gray-400">
                    Program will analyze property photos and a text description, through leveraging with comparable homes the program will
                    determine a price for the home. Will become open-source in <span className="text-green-500 dark:text-blue-500">April 2023</span>.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <a href="https://github.com/MarcoKaniecki/Deep-Learning-Real-Estate-Appraisal"
                    className="inline-flex cursor-not-allowed items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg focus:ring-4 focus:outline-none dark:bg-gray-600">
                      Github
                  </a>
                </div>
              </div>
              

              
                 <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
                  <img className=" border-rounded py-2" src={CPU} alt={""} />
                  <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">XMX Emulator</h5>

                  <p className="mb-3 font-normal pb-10 text-gray-700 dark:text-gray-400">
                    Emulated extension of original XM processor. Parts emulated include all CPU registers, 28 instructions, the program status word,
                    addressing modes, encoded constants, 64KiB of byte-addressable primary memory, and CPU execution time.
                  </p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <a href="https://github.com/MarcoKaniecki/XMX-Emulator" 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 dark:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-300 dark:bg-blue-500">
                        GitHub
                    </a>
                  </div>
                </div>
             

             
              <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
                <img className=" border-rounded px-2 py-6" src={BTC} alt={""} />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bitcoin Mining Simulator</h5>
                  <p className="mb-3 pb-10 font-normal text-gray-700 dark:text-gray-400">
                    A Bitcoin mining simulator which incorporates features such as multithreading, thread synchronization and priority-based scheduling.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <a href="https://github.com/MarcoKaniecki/Bitcoin-Mining-Simulator" 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-500 dark:focus:ring-blue-300 dark:hover:bg-blue-800">
                        GitHub
                    </a> 
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio