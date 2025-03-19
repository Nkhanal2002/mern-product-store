import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className=" bg-slate-100 shadow-md dark:bg-background dark:border-2 p-3  w-[90%] mx-auto mt-2">
      <div className="main-nav-container mx-auto flex flex-col space-y-2 items-center sm:flex-row sm:justify-between text-xl sm:text-[1.3rem] w-[80%]">
        <div className="nav-logo">
          <div className="font-bold uppercase from-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent flex">
            <Link to={"/"} className="flex items-center gap-1">
              <span>Product Store</span>
              <FaCartPlus className="text-blue-600" />
            </Link>
          </div>
        </div>

        <div className="right-container flex items-center justify-center space-x-3 sm:space-x-4">
          <div className="add-symbol">
            <Link to={"/create"} className="flex justify-center items-center">
              <MdOutlineAddBox className="text-[1.5rem] text-primary sm:mb-[0.2rem]" />
            </Link>
          </div>
          <div className="mode-toggle">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
