import React from 'react';
import logo from '../../public/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div className='flex justify-center '>
         <div className='flex justify-between items-center static 2xl:w-[1320px] h-[72px] mt-8 md:w-[1100px]'>
            <img className='w-[252px]' src={logo} alt="" />
            <div className='flex list-none gap-5  text-center'>
                
                    <Link to={"/"} ><li className='hover:text-[#FF444A] text-xl font-bold hover:border-b-2 border-[#FF444A]'>Home</li></Link>
                    <Link to={"/Donation"}><li className='hover:text-[#FF444A] text-xl font-bold hover:border-b-2 border-[#FF444A]'>Donation</li></Link>
                    <Link to={"/Statistics"}><li className='hover:text-[#FF444A] text-xl font-bold hover:border-b-2 border-[#FF444A]'>Statistics</li></Link>
                
            </div>
        </div>
       </div>
    );
};

export default Navbar;