import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currentState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currentState === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#12172A] to-[#0B0F1A] flex items-center justify-center px-4">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-5xl font-semibold text-white">ChatWave</h1>
          </div>

          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Real-time conversations with a modern, fast and secure chat
            experience built for everyday communication.
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white font-medium">⚡ Lightning Fast</p>
              <p className="text-slate-400 text-sm">
                Instant message delivery
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white font-medium">🔒 Secure & Private</p>
              <p className="text-slate-400 text-sm">
                End-to-end encrypted chats
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-96 mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-4 text-white"
        >
          <h2 className="text-2xl font-semibold flex justify-between items-center">
            {currentState}
            {isDataSubmitted && (
              <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className="w-5 cursor-pointer opacity-70 hover:opacity-100" />
            )}
          </h2>

          {currentState === "Sign up" && !isDataSubmitted && (
            <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" placeholder="Full Name" className="input-ui" required />
          )}

          {!isDataSubmitted && (
            <>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" className="input-ui" required />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="input-ui" required />
            </>
          )}

          {currentState === "Sign up" && isDataSubmitted && (
            <textarea onChange={(e) => setBio(e.target.value)} value={bio} placeholder="Short bio..." rows={4} className="input-ui resize-none" required />
          )}

          <button type="submit" className="mt-2 bg-gradient-to-r from-teal-400 to-cyan-500 hover:opacity-90 transition text-white py-3 rounded-lg font-medium cursor-pointer">
            {currentState === "Sign up" ? "Create Account" : "Login"}
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <input type="checkbox" required />
            <p>Agree to terms & privacy policy</p>
          </div>

          <p className="text-sm text-slate-400 text-center">
            {currentState === "Sign up" ? (
              <>
                Already have an account?{" "}
                <span onClick={() => {setCurrentState("Login");setIsDataSubmitted(false);}}className="text-teal-400 cursor-pointer">
                  Login
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span onClick={() => {setCurrentState("Sign up");setIsDataSubmitted(false);}} className="text-teal-400 cursor-pointer">
                  Sign up
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;