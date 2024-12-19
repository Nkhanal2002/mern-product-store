import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md p-3 shadow-3xl w-[90%] mx-auto mt-2">
      <div className="main-nav-container mx-auto flex justify-between text-xl sm:text-[1.3rem] w-[80%]">
        <div className="nav-logo">
          <div className="font-bold uppercase from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent flex">
            <Link to={"/"} className="flex items-center gap-1">
              Product Store <FaCartPlus className="text-blue-600" />
            </Link>
          </div>
        </div>
        <div className="right-container flex items-center gap-5">
          <div className="add-symbol">
            <Link to={"/create"}>
              <MdOutlineAddBox className="text-[1.5rem] text-blue-900" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
