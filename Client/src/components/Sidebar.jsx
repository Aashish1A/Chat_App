import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Sidebar = () => {
  const { logout, onlineUsers } = useContext(AuthContext);
  const { getUsers, users, selectedUser, setSelectedUser, unseenMessages, setUnseenMessages, } = useContext(ChatContext);

  const [input, setInput] = useState(false);

  const navigate = useNavigate();

  const filteredUsers = input
    ? users.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase())
      )
    : users;

  useEffect(() => {
    getUsers();
  }, [onlineUsers]);

  return (
    <div
      className={`bg-slate-900/50 backdrop-blur-xl border-r border-slate-700/50 h-full p-5 overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        {/* Logo and Menu */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              ChatWave
            </h1>
          </div>
          <div className="relative group">
            <button className="p-2 hover:bg-slate-700/50 rounded-xl transition-all">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
            <div className="absolute top-full right-0 mt-2 z-20 w-48 p-3 rounded-xl bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
              <p onClick={() => navigate("/profile")} className="cursor-pointer text-sm px-3 py-2 hover:bg-slate-700/50 rounded-lg transition-all flex items-center gap-2" >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Edit Profile
              </p>
              <hr className="my-2 border-slate-700" />
              <p onClick={() => logout()} className="cursor-pointer text-sm px-3 py-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </p>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center gap-3 px-4 py-3 hover:border-teal-500/50 transition-all">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search conversations..." className="bg-transparent border-none outline-none text-white text-sm placeholder-slate-500 flex-1" />
        </div>
      </div>

      {/* User List */}
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider px-2 mb-2">
          Messages
        </h3>
        {filteredUsers.map((user, index) => (
          <div key={index} onClick={() => {setSelectedUser(user);setUnseenMessages((prev) => ({ ...prev, [user._id]: 0 }));}}
            className={`flex items-center gap-3 p-3 hover:bg-slate-800/50 rounded-xl cursor-pointer relative transition-all group ${
              selectedUser?._id === user._id
                ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30"
                : "border border-transparent"
            }`}
          >
            <div className="relative">
              <img src={user?.profilePicture || assets.avatar_icon} alt="profilePic" className="w-12 h-12 rounded-full object-cover border-2 border-slate-700 group-hover:border-teal-500 transition-all" />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white truncate">
                {user.fullName}
              </p>
              <p className={`text-xs truncate ${
                  onlineUsers.includes(user._id)
                    ? "text-green-400"
                    : "text-slate-500"
                }`}
              >
                {onlineUsers.includes(user._id) ? "Active now" : "Offline"}
              </p>
            </div>
            {unseenMessages[user._id] > 0 && (
              <div className="flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-bold shadow-lg">
                {unseenMessages[user._id]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
