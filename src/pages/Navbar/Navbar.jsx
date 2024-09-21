import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUser().then(() => {
      toast("User Logged Out");
    });
  };
  const navData = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to="/update">Update Profile</NavLink>
      </li>

      <li>
        <NavLink to="/profile">User Profile</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navData}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DreamDwellings</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navData}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn">
              LogOut
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
