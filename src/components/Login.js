import Header from "./Header";
import { auth } from "../utils/firebase";
import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = (e) => {
    // Validate form data
    const emailData = email?.current?.value;
    const passwordData = password?.current?.value;
    const nameData = name?.current?.value;

    const response = checkValidData(emailData, passwordData, nameData);
    setErrorMessage(response);
    if (response) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
          updateProfile(user, {
            displayName: nameData,
            photoURL: AVATAR,
          })
            .then(() => {
              console.log("User updated.");
              console.log(auth.currentUser);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("Error signing up:", errorCode, errorMessage);
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing up:", errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing in:", errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
          alt="BG"
        />
      </div>
      <form
        className="top-1/2 left-1/2 px-15 py-10 rounded-md absolute transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="text-3xl font-bold text-white mb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email or phone number"
          className="p-4 rounded-md bg-transparent text-white border-1 border-gray-200 mb-6 w-full"
        />
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="p-4 rounded-md bg-transparent text-white border-1 border-gray-200 mb-6 w-full"
          />
        )}
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 rounded-md bg-transparent text-white border-1 border-gray-200 mb-8 w-full"
        />
        {errorMessage && (
          <p className="text-red-500 font-semibold mb-2">{errorMessage}</p>
        )}
        <button
          className="block bg-red-500 text-white py-2 rounded-md w-12/12 cursor-pointer"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white pt-5 cursor-pointer" onClick={toggleForm}>
          New to Netflix? <b>Sign up now.</b>
        </p>
      </form>
    </>
  );
};

export default Login;