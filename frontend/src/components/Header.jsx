import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXTwitter,
  faFacebookF,
  faDiscord,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <div className="flex flex-col items-center bg-black md:px-10">
      {/* social media and search bar goes here */}
      <div className="flex flex-col md:flex-row  w-full justify-around py-6 gap-4 md:gap-0 ">
        <div className="flex flex-col items-center justify-around  ">
          <ul className="flex gap-8 md:gap-6">
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
          </ul>
        </div>

        <div className="px-4 md:w-1/2 md:px-0">
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className=" bg-black text-white hover:bg-gray-800  absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 hover:cursor-pointer "
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* logo goes here */}
      <div>
        <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-6xl ">
          GAMING <br /> GORILLA
        </h1>
      </div>
      {/* navbar goes here */}
      <div className="py-8">
     
        <HamburgerMenu/>
       
      </div>
    </div>
  );
}

// a header that will have across the web have a big logo

//header point
// -social media icon
// -search bar
// -Logo (name)
// -navbar
