import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
    const app = useSelector(store => store.appSlice.isMenuOpen)
    // early return

    if(!app) return null ;


  return (
    <div className="hidden span-1 ml-3 xl:block">
      <div className="p-4 font-normal">
        <div>Home</div>
        <div>Shorts</div>
        <div>Subscription</div>
      </div>
      <div className="font-normal">
        <h2 className="text-xl font-medium mt-2">Explore</h2>
        <ul className="p-5 ">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movie</li>
          <li>Live</li>
          <li>gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
          <li>Fashion & Beauty</li>
          <li>Podcast</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
