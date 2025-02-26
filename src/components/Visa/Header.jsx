import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const {
    user,
    setUser,
    loading,
    creatUser,
    signInUser,
    handleGoogleSignIn,
    resetPass,
    handleSignOut,
  } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="navbar bg-base-100 shadow-md">
      {" "}
      <div className="flex-1">
        {" "}
        <NavLink to="/" className="text-xl font-bold">
          {" "}
          Historical Artifacts Tracker{" "}
        </NavLink>{" "}
      </div>{" "}
      <div className="flex-none">
        {" "}
        <ul className="menu menu-horizontal p-0">
          {" "}
          <li>
            {" "}
            <NavLink to="/">Home</NavLink>{" "}
          </li>{" "}
          <li>
            {" "}
            <NavLink to="/all-artifacts">All Artifacts</NavLink>{" "}
          </li>{" "}
          <li>
            {" "}
            <NavLink to="/add-artifact">Add Artifacts</NavLink>{" "}
          </li>{" "}
          <li>
            {" "}
            <NavLink to="/my-artifacts">My Artifacts</NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink to="/liked-artifacts">Liked Artifacts</NavLink>{" "}
          </li>
          {user ? (
            <>
              <li>
                <div className="my-auto">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-1/2 rounded-full my-auto"
                    title={user.displayName}
                  />{" "}
                </div>
              </li>
              <li>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleSignOut}
                >
                  Logout
                </button>{" "}
              </li>
            </>
          ) : (
            <li>
              {" "}
              <NavLink to="/login">Login</NavLink>{" "}
            </li>
          )}{" "}
          <li className="h-10 my-auto">
            <ThemeToggle />
          </li>
        </ul>{" "}
      </div>{" "}
    </nav>
  );
};

export default Header;
{
  /* <div>
  <nav className="navbar bg-base-100">
    {" "}
    <div className="navbar-start">
      {" "}
      <a className="btn btn-ghost normal-case text-xl">Visa Navigator</a>{" "}
    </div>{" "}
    <div className="navbar-center hidden lg:flex">
      {" "}
      <ul className="menu menu-horizontal px-1">
        {" "}
        <li>
          {" "}
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink to="/all-visas" activeClassName="active">
            All Visas
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink to="/add-visa" activeClassName="active">
            Add Visa
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink to="/my-added-visas" activeClassName="active">
            My Added Visas
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink to="/my-visa-applications" activeClassName="active">
            My Visa Applications
          </NavLink>{" "}
        </li>{" "}
      </ul>{" "}
    </div>{" "}
    <div className=" flex justify-around">
      {" "}
      {user ? (
        <>
          <img src={user?.photoURL} className="rounded-full w-9 mx-3" alt="" />
          <button className="btn btn-secondary" onClick={() => handleSignOut()}>
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login" className="btn btn-success ">
          Login
        </NavLink>
      )}{" "}
      {/* <NavLink to="/register" className="btn">
              Register
            </NavLink>{" "} */
}
// <ThemeToggle />
// </div>{" "}
// </nav>
// </div>; */}
