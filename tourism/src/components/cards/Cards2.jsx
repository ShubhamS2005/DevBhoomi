import React from "react";

const Cards2 = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-center text-5xl font-bold mb-4">
          <span>Attractive spots of Uttarakhand</span>
        </div>

        <div className=" my-10 container-lg mx-auto w-[70vw] ">
          <ul className="grid grid-cols-3 gap-6 w-full">
{/*................................................. 1st item .........................................*/}
            <li
              id="cardReplace"
              className="flex justify-center tansition ease-in delay-50 hover:border border-blue-950 hover:cursor-pointer rounded-lg"
            >
              <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-xl  dark:border-gray-700">
                <a href="#">
                  <img
                    src="https://uttarakhandtourism.gov.in/sites/default/files/2020-06/3_0.jpg"
                    alt=""
                  />
                </a>
                <div className="border-t-[1px] p-5 text-center border-[#dcd8d7] bg-[#f9f7f6] 
            w-full">
                <div className="flex flex-col gap-3 w-full">
<span className="text-2xl font-semibold">
RAFTING
</span>
<p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi incidunt natus delectus laborum minus, atque, reiciendis ea eius itaque corporis, suscipit iste non id cumque beatae nobis corrupti laudantium facilis.
</p>
<div className="flex justify-center">
<a href="#" class=" w-fit inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> 
        </div>
                </div>

                </div>
              </div>
            </li>
{/*................................................. 2nd item .........................................*/}
            <li
              id="cardReplace"
              className="flex justify-center tansition ease-in delay-50 hover:border border-blue-950 hover:cursor-pointer rounded-lg"
            >
              <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-xl  dark:border-gray-700">
                <a href="#">
                  <img
                    src="https://uttarakhandtourism.gov.in/sites/default/files/2021-01/check-this-out-2.jpg"
                    alt=""
                  />
                </a>
                <div className="border-t-[1px] p-5 text-center border-[#dcd8d7] bg-[#f9f7f6] 
            w-full">
               <div className="flex flex-col gap-3 w-full">
<span className="text-2xl font-semibold">
KUMBH MELA 
</span>
<p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi incidunt natus delectus laborum minus, atque, reiciendis ea eius itaque corporis, suscipit iste non id cumque beatae nobis corrupti laudantium facilis.
</p>
<div className="flex justify-center">
<a href="#" class=" w-fit inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> 
        </div>
                </div>

                </div>
              </div>
            </li>
{/*................................................. 3rd item .........................................*/}
            <li
              id="cardReplace"
              className="flex justify-center tansition ease-in delay-50 hover:border border-blue-950 hover:cursor-pointer rounded-lg"
            >
              <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-xl  dark:border-gray-700">
                <a href="#">
                  <img
                    className="bg-contain"
                    src="https://uttarakhandtourism.gov.in/sites/default/files/2021-01/check-this-out-1.png"
                    alt=""
                  />
                </a>
                <div className="border-t-[1px] p-5 text-center border-[#dcd8d7] bg-[#f9f7f6] 
            w-full">
                <div className="flex flex-col gap-3 w-full">
<span className="text-2xl uppercase font-semibold">
Beatles magical tour
</span>
<p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi incidunt natus delectus laborum minus, atque, reiciendis ea eius itaque corporis, suscipit iste non id cumque beatae nobis corrupti laudantium facilis.
</p>
<div className="flex justify-center">
<a href="#" class=" w-fit inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> 
        </div>
                </div>
                
                

                </div>
              </div>
            </li>
{/* end.............................................................................. */}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
