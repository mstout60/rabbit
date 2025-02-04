import Topbar from "../Layout/TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Top bar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
