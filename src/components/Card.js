import React from "react";

function Card({ info }) {
  const { snippet, statistics } = info;
  return (
    <div className="w-90  my-5 xl:m-6 xl:w-80 ">
      <img
        className="rounded-lg w-50"
        src={snippet.thumbnails.medium.url}
        alt="img"
      />
      <div className="flex">
        <img
          className="rounded-full w-6 h-7 mt-5 mr-2 "
          src={snippet.thumbnails.high.url}
          alt="img"
        />
        <div>
          <h2 className="font-bold my-2 text-md xl:text-xl xl:my-4">{snippet.title.slice(0,25)}</h2>
          <h2>{statistics.viewCount} Views</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
