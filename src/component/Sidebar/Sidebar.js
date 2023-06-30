import React from 'react';
//image import
import videoicon from "../New folder/Images/vedio.svg"
import keyboardicon from "../New folder/Images/keyboard.svg"
import New from '../New folder/Images/New.svg';
//const import
import { sidebardata } from '../const';
const Sidebar = () => {
  return (
    <div className="flex flex-col  justify-between items-start w-[248px] border-r-[0.5px] border-neutral-200 h-screen">
      <div className="w-full">
        <div className="pt-[15px] ml-2">
          <button className="flex shadow-md font-medium text-[13px] text-[#3D4043]  items-center justify-center w-[126px] h-12 rounded-[40px]">
            <img className="pr-4" src={New} alt="new"></img>
            Compose
          </button>
        </div>
        <div className="pt-4">
          {sidebardata.length &&
            sidebardata.map((obj) => (
              <div className="flex hover:bg-[#F1F3F4] focus:bg-[#F9E9E7]  pl-6  w-full rounded-br-[32px] h-8 items-center rounded-tr-[32px] ">
                <img alt="inbox" src={obj.img}></img>
                <div className="flex w-full items-center justify-between">
                  <p className="text-[14px] font-medium pl-4">{obj.Title}</p>
                  {/* {obj.count == 0:(<p></p>? <p className="pr-8"></p>)} */}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="">
        <div>
          <p>Meet</p>
          <div>
            <img src={videoicon} alt="icon"></img>
            <p>
              <div>New meeting</div>
            </p>
          </div>
          <div>
            <img src={keyboardicon} alt="icon"></img>
            <p>
              <div>Join a meeting</div>
            </p>
          </div>
          <p>Hangouts</p>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
