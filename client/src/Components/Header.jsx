import React from "react";
// link help to go to the other page without refreshing the page
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="SignIn">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
