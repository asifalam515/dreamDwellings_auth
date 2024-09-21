import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser, loader, photo, name } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser().then(() => {
      toast("User Logged Out");
    });
  };

  const navData = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update">Update Profile</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">User Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/register">Register</NavLink>
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
          <Link to="/" className="btn btn-ghost text-xl">
            DreamDwellings
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navData}</ul>
        </div>
        <div className="navbar-end">
          {/* Profile image with tooltip */}
          {user && (
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={
                  photo ||
                  "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="
                }
                alt="Profile"
              />
              <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                <h1 className="text-2xl text-rose-600">
                  {name || "No name found"}
                </h1>
              </span>
            </div>
          )}
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
      <div>
        <ToastContainer />
        {loader && (
          <span className="loading loading-spinner text-error text-center"></span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
