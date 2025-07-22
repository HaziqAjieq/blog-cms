import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Searchbar from "./Searchbar";
import {
  faXTwitter,
  faFacebookF,
  faDiscord,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import useAuthState from "../hooks/useAuthState";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { User } from "../contexts/ExampleOOP";

export default function Navbar() {
  const isUser = useAuthState();
 
  const { logout , user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row  bg-black lg:px-8 pt-6 gap-5 md:gap-0 md:pt-10 justify-evenly z-50 ">
      {/* social media and search bar goes here */}

      <div className="md:basis-3xs md:flex justify-center md:mt-4">
        <ul className="flex justify-center gap-8  md:gap-4">
          <li className="style:none ">
            <a className="">
              <FontAwesomeIcon icon={faFacebookF} className="text-white" />
            </a>
          </li>

          <li className="style:none ">
            <a>
              <FontAwesomeIcon icon={faXTwitter} className="text-white" />
            </a>
          </li>

          <li className="style:none ">
            <a>
              <FontAwesomeIcon icon={faDiscord} className="text-white" />
            </a>
          </li>

          <li className="style:none ">
            <a>
              <FontAwesomeIcon icon={faTiktok} className="text-white" />
            </a>
          </li>

          <li className="style:none ">
            <a>
              <FontAwesomeIcon icon={faYoutube} className="text-white" />
            </a>
          </li>

          <li className="style:none ">
            <a className="">
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
            </a>
          </li>
        </ul>
      </div>

      {/* logo goes here */}
      <div className="md:basis-sm flex-col items-baseline justify-center md:mt-15 mx-10">
        <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-6xl text-center md:py-8 ">
          <span className="text-green-700 font-extrabold text-4xl md:text-5xl lg:text-7xl">
            G
          </span>
          AMING <br />{" "}
          <span className="text-green-700 font-extrabold text-4xl md:text-5xl lg:text-7xl">
            G
          </span>
          ORILLA
        </h1>

        {/* navbar goes here */}

        {/* mobile hamburger */}
        <HamburgerMenu />
        {isUser ? (
          <nav className="hidden md:grid grid-cols-4  text-white font-bold  flex-row items-center justify-around gap-6 md:pb-6 w-[100%]">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Home
            </Link>

            <Link
              to={{
                pathname: "/news/:slug",
              }}
            >
              News
            </Link>

            <Link
              to={{
                pathname: "/news/esport",
              }}
            >
              E-Sport
            </Link>

            <Link
              to={{
                pathname: "/about",
              }}
            >
              About
            </Link>
            {/* probably another component idk */}
            <Link
              to={{
                pathname: "/platform/:slug",
              }}
            >
              Platform
            </Link>
          </nav>
        ) : (
          <nav className="hidden md:flex  text-white font-bold  flex-row items-center justify-around gap-6 md:pb-6 w-[100%]">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Home
            </Link>

            <Link
              to={{
                pathname: "/news/:slug",
              }}
            >
              News
            </Link>

            <Link
              to={{
                pathname: "/news/esport",
              }}
            >
              E-Sport
            </Link>

            <Link
              to={{
                pathname: "/about",
              }}
            >
              About
            </Link>
            {/* probably another component idk */}
            <Link
              to={{
                pathname: "/platform/:slug",
              }}
            >
              Platform
            </Link>
          </nav>
        )}
      </div>

      {/* searchbar */}

      { isUser? (
        <>
          <div className="hidden md:flex flex-col justify-between md:basis-80 ">
            <Searchbar />

            <div>
            
              <button onClick={logout} className="text-white m">
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex md:basis-80 ">
            <Searchbar />
          </div>
        </>
      )}
    </div>
  );
}

// a header that will have across the web have a big logo

//header point
// -social media icon
// -search bar
// -Logo (name)
// -navbar
