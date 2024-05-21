import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/img/Logo.jpg";
import { Link } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      {/* Header */}
      <div className="z-10 block max-w-screen-lg py-6 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex items-center justify-between px-4 sm:px-0">
          <div>
            <Link to="/">
              <img
                src={logo}
                className="cursor-pointer w-36 rounded-full"
                alt="Logo du site"
                width={150}
                height={120}
              />
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none text-3xl"
              aria-label="Hamburger Menu"
            >
              {showMenu ? (
                <i
                  className="fa-solid fa-xmark  "
                  style={{ color: "white" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-bars"
                  size="3xl"
                  style={{ color: "white" }}
                ></i>
              )}
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? " block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className=" block mb-3 mt-5 text-2xl text-left sm:mx-4 sm:py-2">
            <Link to="/projects" aria-label="Projects">
              Projets
            </Link>
          </div>
          <div className="block mb-3 mt-5 text-2xl text-left  sm:mx-4 sm:py-2">
            <Link to="/about" aria-label="About Me">
              A propos
            </Link>
          </div>
          <div className="block mb-3 mt-5 text-2xl text-left  sm:mx-4 sm:py-2">
            <Link to="/contact" aria-label="Contact">
              Contact
            </Link>
          </div>
          <div className=" pt-3 border-t-2 sm:pt-0 sm:border-t-0 border-primary-light ">
            <div className="mx20 flex justify-around text-2xl">
              <Link target="_blank" to="http://www.linkedin.com/in/ines-sek">
                <i className="fa-brands fa-linkedin i"></i>
              </Link>
              <Link to="mailto:sephecya@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </Link>

              <Link target="_blank" to="https://github.com/sek1005">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="items-center justify-centerc content-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none">
          <div
            className=" block mb-2 text- hover:text-orange-200 text-2xl font-medium text-left sm:mx-4 sm:py-2"
            aria-label="Projects"
          >
            <Link to="/projects">Projets</Link>
          </div>
          <div
            className="block hover:text-orange-200 mb-2 text-2xl font-medium text-left  sm:mx-4 sm:py-2"
            aria-label="About Me"
          >
            <Link to="/about">A propos</Link>
          </div>

          <div
            className="block hover:text-orange-200 mb-2 text-2xl font-medium text-left sm:mx-4 sm:py-2"
            aria-label="Contact"
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="flex-col items-center text-3xl justify-between hidden sm:flex md:flex-row">
          <div className="hidden md:flex">
            <div className="mx20 hover:text-orange-200">
              <Link target="_blank" to="http://www.linkedin.com/in/ines-sek">
                <i className="fa-brands fa-linkedin i"></i>
              </Link>
            </div>

            <div className="mx20 hover:text-orange-200">
              <Link to="mailto:sephecya@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </Link>
            </div>

            <div className="mx20 hover:text-orange-200">
              <Link target="_blank" to="https://github.com/sek1005">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>

          {/* Theme switcher large screen */}
        </div>
      </div>
    </motion.nav>
  );
}

export default Nav;
