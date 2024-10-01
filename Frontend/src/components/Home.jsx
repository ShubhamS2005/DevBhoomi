import React from "react";
import { motion } from "framer-motion";
// import { a } from "react-router-dom";
import Cards from "./Cards2.jsx";

import { useEffect } from "react";
import Spline from '@splinetool/react-spline';
import AutoplayCarousel from "./Carousel.jsx";
import Chat from "./chat.jsx";
import ImageGallery from "./Gallery.jsx";

const Home = () => {

    // useEffect(() => {
    //     const scriptSource = ["/src/App.js"];
        
        
    //     const appendScripts = () => {
    //         scriptSource.forEach((src) => {
    //             const script = document.createElement("script");
    //             script.src = src;
    //             script.async = true;
    //             document.body.appendChild(script);
    //         })
    //     }


    //     appendScripts();

    //     return() => {
    //     scriptSource.forEach((src) => {
    //         const script = document.querySelectorAll(`script[src="${src}"]`);
    //         script.forEach((script) => {
    //             document.body.removeChild(script);
    //             });
    //         });
    //     };
    // },[]);

    // cardReplace.hidden = "true";
    // useEffect(() => {
    //     setTimeout(() => {
    //     const handleCard=(e)=>{
    //         e.preventDefault();
    //         const cardChange = document.getElementById("cardReplace");
    //         console.log("replaced");
    //     }
    //         // cardChange.hidden = "true";
    //     }, 1000);
    //   }, []);


    // 
    //     
    //     
    //     // e.preventDefault();.
    // }

  return (
    
    <>
      <div>
        <div className="relative max-w-screen overflow-x-hidden bg-black">
        <div className="absolute top-1/3 text-xl w-1/2">
            <div className= " flex flex-col justify-center items-center leading-none text-white ">
                <p className="text-6xl font-semibold font-mono tracking-wider">
                    DEVBHOOMI
                </p>
                <br />
                <p className="text-4xl font-normal font-mono tracking-normal">
                    where heaven meets the land
                </p>

            </div>
        </div>
        <Spline className="relative left-[45%]" scene="https://prod.spline.design/KqLNG-dvoJiswhtz/scene.splinecode" />
        </div>

        <div className="mb-12 relative h-fit">
          <img
            className="h-80 w-full bg-cover "
            src="https://tourismmedia.italia.it/is/image/mitur/landscape_1-100-1?wid=2880&hei=1280&fit=constrain,1&fmt=webp"
            alt=""
          />

          <motion.div
            className="absolute text-center w-full bottom-[50%]"
            initial={{ opacity: 0 }}
            animate={{ y: 100 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            viewport={{ once: true }}
          >
            <h1 className="reveal text-5xl mx-auto font-semibold max-w-5xl">
              Landscapes that will take your breath away, rich history, and
              delicious food, your trip href Uttarakhand will be nothing short of
              unforgettable.
            </h1>
          </motion.div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col mb-10 ">
              <div className="text-center">
                <span className="text-xl text-slate-500 ">DESTINATIONS</span>
              </div>
              <div className="text-center pt-2 pb-8">
                <span className=" text-5xl  font-semibold">
                  Unmissible sites
                </span>
              </div>

              <div class="mx-auto text-sm font-medium text-center  border-gray-200">
                <ul class="flex flex-wrap -mb-px">
                <button id="cardReplace">
                
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 border-b-2 border-transparent rounded-t-lg font-[400]  hover:text-[#020B5A] hover:border-[#020B5A] dark:hover:text-[#020B5A]"
                    >
                      Highlights
                    </a>
                  </li>
                  </button>
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 text-[#020B5A] border-b-2 border-transparent font-[400] hover:border-[#020B5A] rounded-t-lg dark:text-[#020B5A] dark:border-[#020B5A]"
                      aria-current="page"
                    >
                      Cities
                    </a>
                  </li>
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 text-[#020B5A] border-b-2 border-transparent font-[400] hover:border-[#020B5A] rounded-t-lg dark:text-[#020B5A] dark:border-[#020B5A]"
                      aria-current="page"
                    >
                      Best sites
                    </a>
                  </li>
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 text-[#020B5A] border-b-2 border-transparent font-[400] hover:border-[#020B5A] rounded-t-lg dark:text-[#020B5A] dark:border-[#020B5A]"
                      aria-current="page"
                    >
                      Regions
                    </a>
                  </li>
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 text-[#020B5A] border-b-2 border-transparent font-[400] hover:border-[#020B5A] rounded-t-lg dark:text-[#020B5A] dark:border-[#020B5A]"
                      aria-current="page"
                    >
                      Villages
                    </a>
                  </li>
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 text-[#020B5A] border-b-2 border-transparent font-[400] hover:border-[#020B5A] rounded-t-lg dark:text-[#020B5A] dark:border-[#020B5A]"
                      aria-current="page"
                    >
                      Food
                    </a>
                  </li>
                  <li class="mx-4">
                    <a
                      href="#"
                      class="inline-block text-lg p-4 text-[#020B5A] border-b-2 border-transparent font-[400] hover:border-[#020B5A] rounded-t-lg dark:text-[#020B5A] dark:border-[#020B5A]"
                      aria-current="page"
                    >
                      Waterfalls
                    </a>
                  </li>
                  
                 
                </ul>
              </div>
            </div>
           

          </div>
        </div>
        <div>
            <div className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="text-center">
                        <span className="text-xl text-slate-500 p-2 ">EVENTS</span>
                    </div>
                    <div className="text-center pt-4 pb-6">
                        <h2 className=" text-5xl  font-semibold">
                            Live Events in Uttarakhand
                        </h2>
                    </div>
                </div>
                <Cards/>
            </div>
        </div>

{/*............................................... caurosal.................................. */}

<ImageGallery/>
<AutoplayCarousel/>
<Chat/>




      </div>
    </>
  );
};

export default Home;
