import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../Utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 border border-black rounded-t-lg font-sans italic font-medium w-full">
        <h1 className="p-2">Live Chat</h1>
      </div>
      <div className=" h-[430px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse border-t-neutral-50 border-b-neutral-50 w-full">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage
              key={Math.random()}
              name={c.name}
              message={c.message}
            />
          ))}
        </div>
      </div>

      <form
        className=" p-2 ml-2 border border-black rounded-b-lg w-full"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Harsh Bhoir",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="static">
          <input
            className="px-2 focus:outline-none"
            placeholder="Chat.."
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className=" absolute right-8 font-sans italic font-semibold">
            Send
          </button>
        </div>
      </form>
    </>
  );
};
export default LiveChat;
