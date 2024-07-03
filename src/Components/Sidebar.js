import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  BsBullseye,
  BsCollectionPlay,
  BsChevronRight,
  BsPersonBoundingBox,
  BsClockHistory,
  BsMusicNoteList,
  BsPlayBtn,
  BsClock,
  BsHandThumbsUp,
  BsFire,
  BsBagHeart,
  BsMusicNote,
  BsNewspaper,
  BsTrophy,
  BsController,
} from "react-icons/bs";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className=" mt-16 pl-3 w-52 font-sans italic">
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <AiFillHome className=" mt-1 mr-2 text-xl" />
        <Link to="/">
          <h1 className="text-[17px] ml-2 mt-[2px]">Home</h1>
        </Link>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsBullseye className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Shorts</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsCollectionPlay className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Subscription</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 hover:rounded-lg p-1  border-gray-300 border-t-[1.5px] ">
        <h1 className="text-[17px] mr-2 mt-[2px]">You</h1>
        <BsChevronRight className=" mt-1 ml-2 text-xl" />
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsPersonBoundingBox className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Your Channel</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsClockHistory className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">History</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsMusicNoteList className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Playlists</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsPlayBtn className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Your Videos</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsClock className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Watch Later</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsHandThumbsUp className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Liked Videos</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 hover:rounded-lg p-1  border-gray-300 border-t-[1.5px] ">
        <h1 className="text-[17px] mr-2 mt-[2px]">Explore</h1>
        <BsChevronRight className=" mt-1 ml-2 text-xl" />
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsFire className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Trending</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsBagHeart className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Shopping</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsMusicNote className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Music</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsController className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Gaming</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsTrophy className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">Sports</h1>
      </div>
      <div className="flex pl-4 mt-2 hover:bg-gray-200 w-48 rounded-lg p-1">
        <BsNewspaper className=" mt-1 mr-2 text-xl" />
        <h1 className="text-[17px] ml-2 mt-[2px]">News</h1>
      </div>
    </div>
  );
};

export default Sidebar;
