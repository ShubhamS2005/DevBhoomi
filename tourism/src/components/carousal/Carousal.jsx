"use client";
import React from 'react'
import { Carousel } from 'flowbite-react';
import { div } from 'framer-motion/client';

const Carousal = () => {
  return (
    <div className="mx-10 mt-6 h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        <img  className=" "src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img  className=""src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img  className=""src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img  className=""src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img  className=""src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Carousal
