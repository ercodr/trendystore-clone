import { FiMenu } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FaStore } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdStyle } from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";

import Brand from "../assets/brand.webp";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className='bg-white relative'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <FiMenu
          className='text-2xl lg:hidden'
          onClick={() => setToggleNav(!toggleNav)}
        />
        <div className='flex items-center gap-8'>
          <img src={Brand} alt='TrendyStore GH' className='w-[2.5rem]' />
          <ul className='hidden lg:flex gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Store</li>
            <li>Urban</li>
            <li>Contact us</li>
          </ul>
        </div>
        <ul className='flex items-center gap-4'>
          <div className='hidden lg:flex items-center [&>*]:text-xl gap-4'>
            <li>
              <MdCall />
            </li>
            <li>
              <FiMail />
            </li>
            <li>|</li>
            <li>
              <FaSearch />
            </li>
          </div>
          <li className='text-2xl'>
            <RiShoppingBagLine />
          </li>
        </ul>
      </div>

      <ul
        className={`absolute top-20 flex flex-col justify-start text-start [&>*]:my-2 bg-white  ${
          toggleNav ? "translate-x-0" : "-translate-x-full"
        } transitional-transform duration-700 z-50`}>
        <li className='flex items-center px-4'>
          <div className='bg-slate-200 text-white p-3 rounded-l-sm'>
            <FaSearch className='text-slate-600/50' />
          </div>
          <input
            type='text'
            placeholder='Search...'
            className='appearance-none w-full focus:outline-none py-2 px-4 shadow-inner'
          />
          <button className='appearance-none bg-emerald-500 text-white p-3 rounded-r-sm'>
            <RiSendPlaneFill />
          </button>
        </li>
        <li className='pl-4 py-2 text-slate-500 flex gap-4 items-center'>
          <FcHome />{" "}
          <div className='w-[4px] h-[4px] bg-slate-400 rounded-full'></div> Home
        </li>
        <li className='pl-4 py-2 text-slate-500 flex gap-4 items-center'>
          <FcAbout />{" "}
          <div className='w-[4px] h-[4px] bg-slate-400 rounded-full'></div>{" "}
          About
        </li>
        <li className='pl-4 py-2 text-slate-500 flex gap-4 items-center'>
          <FaStore className='text-green-500' />{" "}
          <div className='w-[4px] h-[4px] bg-slate-400 rounded-full'></div>{" "}
          Store
        </li>
        <li className='pl-4 py-2 text-slate-500 flex gap-4 items-center'>
          <MdStyle className='text-yellow-500' />{" "}
          <div className='w-[4px] h-[4px] bg-slate-400 rounded-full'></div>{" "}
          Urban
        </li>
        <li className='pl-4 py-2 text-slate-500 flex gap-4 items-center'>
          <FcContacts />{" "}
          <div className='w-[4px] h-[4px] bg-slate-400 rounded-full'></div>{" "}
          Contact us
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
