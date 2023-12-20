import React, { useEffect, useState } from "react";
import "../App.css";
import User from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constatnt";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestion] = useState([]);
  const [hideSuggestionBox, setHideSuggestionBox] = useState(false);

  const search = useSelector(store => store.search)

  useEffect(() => {
    let timer = setTimeout(() => {
      if(search[searchQuery]){
        setSearchSuggestion(search[searchQuery])
      }else{
        getSearchData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    let data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    let json = await data.json();
    setSearchSuggestion(json[1]);
    console.log(json);

    // update
    dispatch(cacheResult({
      [searchQuery] : json[1]
    }))
  };

  useSelector((store) => store.appSlice.isMenuOpen);
  const dispatch = useDispatch("");

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col xl:items-center">
        <div className="flex p-2 xl:col-span-1 items-center ">
          <img
            className="hidden xl:block xl:w-8 "
            src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"
            alt="menu"
            onClick={() => toggleHandler()}
          />
          <a href="/">
          <img
            className="w-25 h-12 xl:w-32 xl:h-24 cursor-pointer"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-l2Mi3Wne75trno9tTP6NDdjXbn_U5Gr17mKVbgYUsiILQWsek61kQxylIXByUAC4X08&usqp=CAU"
          />
          </a>
        </div>
        <div className=" flex justify-center align-middle xl:col-span-10">
          <input
            type="text"
            className="w-28 h-8 mt-4 px-4 text-sm outline-none xl:w-2/3   bg-slate-900 rounded-l-full xl:h-14  xl:text-xl"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
               setHideSuggestionBox(true);
            }}
            
            onBlur={() => {
              setHideSuggestionBox(false);
            }}
            onScroll={() => {
              setHideSuggestionBox(false);
            }}
          />
          <button className="h-8  mt-4 p-1 rounded-r-full bg-slate-900 xl:h-14 xl:p-4">
            🔍
          </button>
        </div>
        <div className="xl:col-span-1">
          <img
            className=" w-15 h-5 bg-white rounded-full mt-6  xl:h-12 "
            src={User}
            alt="user"
          />
        </div>
      </div>

      {hideSuggestionBox && (
        <div className="flex ml-5 xl:flex xl:justify-center xl: ">
          <ul className="py-5 px-4 border rounded-lg w-[60%] items-center fixed">
            {searchSuggestions.map((e, index) => {
              return (
                <li key={index} className="py-2 font-bold xl:text-2xl" onClick={()=> console.log(e)}>
                  🔍 {e}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Head;
