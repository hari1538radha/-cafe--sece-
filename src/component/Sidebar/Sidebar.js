import React from 'react';
//image import
import New from '../New folder/Images/New.svg';
import Inbox from '../New folder/Images/Side Nav icons.svg';
const Sidebar = () => {
  return (
    <div className="w-[248px] border-r-[0.5px] border-neutral-200 h-screen">
      <div className="pt-[15px] ml-2">
        <button className="flex shadow-md font-medium text-[13px] text-[#3D4043]  items-center justify-center w-[126px] h-12 rounded-[40px]">
          <img className="pr-4" src={New} alt="new"></img>
          Compose
        </button>
      </div>
      <div className="pt-4">
        <div className="flex hover:bg-[#F1F3F4] pl-6  rounded-br-[32px] h-8 items-center rounded-tr-[32px] ">
          <img alt="inbox" src={Inbox}></img>
          <p className="text-[14px] font-bold pl-4">Inbox</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
