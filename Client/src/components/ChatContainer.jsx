import React, { useContext, useEffect, useRef, useState } from "react";
import assets from "../assets/assets";
import { formatMessageTime } from "../lib/utils";
import { ChatContext } from "../../context/ChatContext";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";

const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);

  const scrollEnd = useRef();

  const [input, setInput] = useState("");

  // Handle sending a message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await sendMessage({ text: input.trim() });
    setInput("");
  };

  // Handle sending an image
  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = async () => {
      await sendMessage({ image: reader.result });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative bg-slate-900/30 backdrop-blur-xl">
      {/* Chat Header */}
      <div className="flex items-center gap-4 px-6 py-4 bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-10">
        <button
          onClick={() => setSelectedUser(null)}
          className="md:hidden p-2 hover:bg-slate-700/50 rounded-xl transition-all"
        >
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="relative">
          <img
            src={selectedUser.profilePicture || assets.avatar_icon}
            alt="profile"
            className="w-11 h-11 rounded-full object-cover border-2 border-slate-700"
          />
          {onlineUsers.includes(selectedUser._id) && (
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
          )}
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold text-lg">
            {selectedUser.fullName}
          </p>
          <p
            className={`text-xs ${
              onlineUsers.includes(selectedUser._id)
                ? "text-green-400"
                : "text-slate-500"
            }`}
          >
            {onlineUsers.includes(selectedUser._id) ? "Active now" : "Offline"}
          </p>
        </div>
        <button className="max-md:hidden p-2 hover:bg-slate-700/50 rounded-xl transition-all">
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col h-[calc(100%-140px)] overflow-y-scroll px-6 py-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-3 ${
              msg?.senderId === authUser._id ? "justify-end" : "justify-start"
            }`}
          >
            {msg?.senderId !== authUser._id && (
              <img
                src={selectedUser?.profilePicture || assets.avatar_icon}
                alt=""
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div
              className={`flex flex-col ${
                msg?.senderId === authUser._id ? "items-end" : "items-start"
              }`}
            >
              {msg?.image ? (
                <img
                  src={msg.image}
                  alt="message_image"
                  className="max-w-[280px] rounded-2xl shadow-lg border border-slate-700/50 hover:scale-105 transition-transform cursor-pointer"
                />
              ) : (
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[320px] break-words shadow-lg ${
                    msg?.senderId === authUser._id
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-br-none"
                      : "bg-slate-800/80 text-white rounded-bl-none border border-slate-700/50"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg?.text}</p>
                </div>
              )}
              <p className="text-xs text-slate-500 mt-1 px-1">
                {msg?.createdAt ? formatMessageTime(msg.createdAt) : "Now"}
              </p>
            </div>
            {msg?.senderId === authUser._id && (
              <img
                src={authUser?.profilePicture || assets.avatar_icon}
                alt=""
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            )}
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/* Chat Input */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-slate-900/50 backdrop-blur-xl border-t border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center bg-slate-800/50 border border-slate-700/50 px-4 py-3 rounded-2xl hover:border-indigo-500/50 transition-all">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={(e) =>
                e.key === "Enter" ? handleSendMessage(e) : null
              }
              type="text"
              placeholder="Type a message..."
              className="flex-1 text-sm bg-transparent border-none outline-none text-white placeholder-slate-500"
            />
            <input
              onChange={handleSendImage}
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              hidden
            />
            <label
              htmlFor="image"
              className="cursor-pointer p-2 hover:bg-slate-700/50 rounded-xl transition-all"
            >
              <svg
                className="w-5 h-5 text-slate-400 hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </label>
          </div>
          <button
            onClick={handleSendMessage}
            className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full flex justify-center items-center flex-col gap-6 bg-slate-900/30 backdrop-blur-xl max-md:hidden">
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/50 animate-pulse">
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-white mb-2">
          Welcome to ChatWave
        </p>
        <p className="text-slate-400">
          Select a conversation to start chatting
        </p>
      </div>
    </div>
  );
};

export default ChatContainer;
