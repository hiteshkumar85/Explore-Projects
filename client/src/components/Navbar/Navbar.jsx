import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Web from "../Portfolio/Web/Web";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="main w-full h-[80px] flex justify-between px-6 items-center bg-black">
        <Link to="/" className="text-white">logo</Link>
        <div className="harsh rounded-full w-[35%]  border-white border/0.08 bg-white/20 backdrop-blur-5xl">
          <ul className="h flex w-full justify-center  gap-20 items-center py-3 text-white ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/solution">Solution</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <button className="bg-green-500 px-8 py-2 rounded-xl ">
              Sign In
            </button>
      </div>
    </>
  );
};

export default Navbar;
