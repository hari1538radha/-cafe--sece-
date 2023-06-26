import React from 'react';
//image imports
import Menu from './Images/menu.svg';
import Logo from './Images/Logo.svg';
import Search from './Images/search.svg';
import Arrow from './Images/Arrow.svg';
import help from './Images/help_outline.svg';
import settings from './Images/settings.svg';
import more from './Images/Apps.svg';
import avatar from './Images/Avatar.svg';

export const Navbar = () => {
  return (
    <div className="flex justify-between border-b-[1px] border-gray-200 pb-[9px]">
      <div className=" flex">
        <div className="flex p-2 ">
          <img className="pr-5 pl-4" src={Menu} alt="menu-bar"></img>
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="relative">
          <img className="absolute  top-[37%] left-[95%]" src={Arrow} alt="down-arrow"></img>
          <img className="absolute left-[5%] pl-[17px] top-[37%]" src={Search} alt="search-logo"></img>
          <input
            placeholder="Search mail"
            className="pl-[71px] mt-[9px] text-base placeholder:text-gray-600 bg-[#F1F3F4] h-[46px] rounded-lg ml-10 w-[45rem] border-solid border-black"
          ></input>
        </div>
      </div>
      <div className="flex gap-x-4 mr-[18px] mt-[12px]">
        <img src={help} alt="help"></img>
        <img src={settings} alt="settings"></img>
        <img src={more} alt="more"></img>
        <img src={avatar} alt="avatar"></img>
      </div>
    </div>
  );
};
