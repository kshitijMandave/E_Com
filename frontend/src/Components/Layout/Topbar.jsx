import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import logo from "./aura-logo.png";

function Topbar() {
  return (
    <div className="bg-sky-700">
      <div className="container mx-auto flex justify-between items-center py-1 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="">
            <FaMeta className=" text-white hover:text-sky-400" />
            {/* <img className="h-10 p-1 " src={logo} alt="" /> */}
          </a>
          <a href="#">
            <FaInstagram className=" text-white hover:text-sky-400" />
            {/* <img className="h-10 p-1 " src={logo} alt="" /> */}
          </a>
          <a href="#">
            <FaXTwitter className=" text-white hover:text-sky-400" />
            {/* <img className="h-10 p-1 " src={logo} alt="" /> */}
          </a>
        </div>
        <div className="text-center flex-grow">
          <span className="text-white hover:text-sky-400 cursor-pointer">
            Elevate Your Shopping Experience
          </span>
        </div>
        <div className="text-sm text-center hidden md:block">
          <a href="" className="text-white hover:text-sky-400 cursor-pointer">
            +91 88888 88888
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
