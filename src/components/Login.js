import React from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn, setIsSignIn] = React.useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
          alt="BG"
        />
      </div>
      <form className="top-1/2 left-1/2 px-15 py-10 rounded-md absolute transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-80">
        <p className="text-3xl font-bold text-white mb-5">{isSignIn ? "Sign In" : "Sign Up" }</p>
        <input
          type="text"
          name="email"
          placeholder="Email or phone number"
          className="p-4 rounded-md bg-transparent text-white border-1 border-gray-200 mb-6 w-full"
        />
        {!isSignIn && 
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          className="p-4 rounded-md bg-transparent text-white border-1 border-gray-200 mb-6 w-full"
        />
        }
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 rounded-md bg-transparent text-white border-1 border-gray-200 mb-8 w-full"
        />
        <button className="block bg-red-500 text-white py-2 rounded-md w-12/12" type="submit">
          {isSignIn ? "Sign In" : "Sign Up" }
        </button>
        <p className="text-white pt-5 cursor-pointer" onClick={toggleForm}>
          New to Netflix? <b>Sign up now.</b>
        </p>
      </form>
    </>
  );
};

export default Login;
