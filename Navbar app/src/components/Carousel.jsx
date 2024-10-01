import React, { useState, useEffect } from 'react';

const AutoplayCarousel = () => {
  const images = [
    'https://content.r9cdn.net/rimg/dimg/db/2a/2a8a5680-city-46381-16a45b0105c.jpg?width=1366&height=768&xhint=3892&yhint=1679&crop=true',
        'https://www.holidify.com/images/bgImages/HARIDWAR.jpg',
        'https://3.imimg.com/data3/EC/AY/MY-9295562/badrinath-yatra-500x500.png',
        'https://3.imimg.com/data3/EC/AY/MY-9295562/badrinath-yatra-500x500.png',
        'https://3.imimg.com/data3/EC/AY/MY-9295562/badrinath-yatra-500x500.png',
        'https://registrationandtouristcare.uk.gov.in/uploads/kedarnath.png',
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full mt-10 max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg h-96 md:h-[500px] lg:h-[600px]">
        <div
          className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="inline-block w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoplayCarousel;
