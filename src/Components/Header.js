import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { BsSearch } from "react-icons/bs";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col pt-2 font-sans w-full fixed bg-white top-0 h-14 select-none ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer ml-6 mt-2"
          alt="menu"
          src="https://cdn.icon-icons.com/icons2/2385/PNG/512/hamburger_menu_icon_144302.png"
        />

        <img
          className="h-5  ml-6 mt-[10px]"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 ml-24">
        <div>
          <input
            className=" w-[550px] border border-gray-400 py-[6px] rounded-l-full placeholder:pl-2 pl-3 focus:outline-none"
            placeholder="Search..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-[6px] rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        <div className="static">
          {showSuggestions && (
            <div className=" bg-white  w-[550px]  rounded-xl border border-gray-100 absolute">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3  hover:bg-gray-100 flex">
                    <BsSearch className=" text-base mt-1 mr-3" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
