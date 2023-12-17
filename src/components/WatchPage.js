import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";
import LiveComments from "./LiveComments";
import { addMessage } from "../utils/chatSlice";
import { randomText } from "./helper";

function WatchPage() {
  let [customMessage, setCustomMessage] = useState("");
  let [searchParams] = useSearchParams();

  useSelector((store) => store.appSlice.isMenuOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center xl:items-start xl:justify-start  xl:flex xl:flex-row ">
        <iframe
          className=" w-50m-2 rounded-md xl:w-[1200px] xl:h-[500px] xl:m-8"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col justify-center items-center">
          <div className="border w-[100%] h-[250px] p-4 my-6 overflow-y-scroll flex flex-col-reverse
          xl:h-[450px] xl:w-[400px] xl:mt-12">
            <LiveComments />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(
                addMessage({
                  name: "Kunal",
                  text: customMessage,
                })
              );
              setCustomMessage("");
            }}
          >
            <input
              type="text"
              className="bg-slate-900 p-1 w-40 text-white xl:w-60"
              value={customMessage}
              onChange={(e) => {
                setCustomMessage(e.target.value);
              }}
            />
            <button className="mx-4 bg-blue-400 px-2 py-1 rounded-lg ">
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
}

export default WatchPage;
