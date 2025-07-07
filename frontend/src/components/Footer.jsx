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

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col ">
      <div>
        <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-6xl text-center md:py-8 ">
          <span className="text-green-700 font-extrabold text-4xl md:text-5xl lg:text-7xl">
            G
          </span>
          AMING <br />
          <span className="text-green-700 font-extrabold text-4xl md:text-5xl lg:text-7xl">
            G
          </span>
          ORILLA
        </h1>
      </div>

      <div className="z-0 px-10 sm:px-40 md:px-60 lg:px-80 xl:px-120">
        <Searchbar />
      </div>

      <div className="flex flex-col items-center ">
        <ul className="flex justify-center gap-8 py-6 md:py-8  lg:py-10 md:gap-6">
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
        <p className="text-gray-500 ">Copyright © MH.</p>
      </div>
      
    </footer>
  );
}

// login/logout button goes here if admin/owner only can see an logout button
