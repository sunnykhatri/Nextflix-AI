import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store?.config?.lang);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const onLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 right-0 flex px-14 justify-between items-center p-4 bg-gradient-to-b from-black w-full mx-auto z-10">
      <img className="w-36" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="bg-blue-400 text-white rounded-md px-2 py-2 mr-2"
              onChange={onLanguageChange}
              value={selectedLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2 py-2 mr-2 bg-white text-black rouned-md cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img alt="userIcon" src={user.photoURL} />
          <button
            className="text-white pl-2 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
