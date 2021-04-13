import React, { useEffect, useState } from "react";
import { useIsLoading, useUser } from "../features/userSlice";
import { auth, provider } from "../firebase";
import "./Navbar.css";

const Navbar = () => {
  const user = useUser();
  const isLoading = useIsLoading();
  const [show, setShow] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const signIn = () => {
    console.log("signin");
    auth()
      .signInWithPopup(provider)
      // .then((auth) => console.log(auth))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const showFunc = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", showFunc);
    return () => {
      window.removeEventListener("scroll", showFunc);
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt=""
        className="navbar-logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className="navbar-avatar"
        onMouseEnter={() => {
          setShowProfile(!showProfile);
        }}
        onClick={signIn}
      />
      {showProfile && user ? (
        <div className="details">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="navbar-avatar-details"
          />
          <h3>{isLoading ? "" : user?.displayName}</h3>
          <button onClick={() => auth().signOut()}>Sign Out</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
