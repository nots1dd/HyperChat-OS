import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const NavBar = () => {
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="nav-bar">
      <h1>Test Chat</h1>
        <button onClick={()=>signOut(auth)} className="sign-out" type="button">
          Sign Out
        </button>
    </nav>
  );
};

export default NavBar;