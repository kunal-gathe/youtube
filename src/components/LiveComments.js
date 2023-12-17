import React, { useEffect } from "react";
import User from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import LiveChat from "./LiveChat";
import { generateRandomName, randomText } from "./helper";
function LiveComments() {
  let chat = useSelector((store) => store.chat.message);

  let dispatch = useDispatch();

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: randomText(20),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
    <div className="flex rounded-lg flex-col">
      <div>
        {chat.map((e, i) => {
          return <LiveChat key={i} name={e.name} text={e.text} />;
        })}
      </div>
    </div>
    
    </>
        
  );
}

export default LiveComments;
