import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Homepage = () => {
  return (
    <div className=" bg-hero w-full bg-cover bg-no-repeat h-[600px]  mt-[-110px]">
      <div className=" w-full h-[600px] bg-white bg-opacity-70">
        {/* <Navbar></Navbar> */}
       {/* backdrop-opacity-10 backdrop-invert bg-white/80 */}
       <div className=" flex justify-center items-center w-full h-full"> 
       <div className="text-center">
       <p className=" text-center text-[#0B0B0B]  font-extrabold text-5xl mb-10">I Grow By Helping People In Need</p>
          <input
            className="appearance-none text-md py-1 px-4 h-[50px] w-[400px] focus:outline-none border-2 focus:ring-blue-600 border-[#DEDEDE]  text-black  placeholder-blue-300 dark:placeholder-gray-600 font-semibold rounded-l"
            type="search"
            name="q"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="bg-[#FF444A] h-[50px] w-[100px] px-5 py-1 text-lg font-semibold  cursor-pointer transition duration-250 ease-in-out rounded-r text-white"
            value="Search"
          >
            Search
          </button>
        </div>
       </div>
      </div>
      <Card></Card>
    </div>
    
  );
};

export default Homepage;
