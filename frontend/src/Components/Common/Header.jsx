import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="border-b border-gray-200">
      {/*Topbar */}
      <Topbar />
      {/*Navbar */}
      <Navbar />
      {/*Cart Drawer */}
    </div>
  );
}

export default Header;
