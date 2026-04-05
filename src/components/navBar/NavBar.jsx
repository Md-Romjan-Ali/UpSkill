import React from 'react';
import './NavBar.css'
import { IoMenuSharp } from 'react-icons/io5';
const NavBar = () => {
    const link=<>
    <li><a>Home</a></li>
    <li><a>Course</a></li>
    <li><a>Bootcamp</a></li>
    <li><a>Page</a></li>
    <li><a>Blog</a></li>
    <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button"className="btn btn-ghost lg:hidden">
       <IoMenuSharp size={30}/>
      </div>
      <ul
        tabIndex="-1"
        className="menu menus menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
        
    <a className="btn1 btn2">Register</a>
      </ul>
    </div>
    <h1 className="title">UpSkill.</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menus menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end login">
    <a className="btn1">Login</a>
    <a className="btn1 btn2 hidden lg:block">Register</a>
  </div>
</div>
    );
};

export default NavBar;