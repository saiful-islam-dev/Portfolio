import { Link, NavLink } from "react-router-dom";
import RusemeButton from "../../../component/RusemeButton";
// import { useRef } from 'react';


const Navbar = () => {
  // const targetSectionRef = useRef(null);

  // const scrollToSection = () => {
  //   if (targetSectionRef.current) {
  //     targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutme"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skill"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <Link
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Contact
        </Link>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar px-12 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="normal-case">
            <samp className="lg:text-3xl font-sans font-bold px-4  lg:ml-3">Saiful Islam</samp>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold text-black text-lg">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <RusemeButton/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
