import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-[#0b1736] px-2 sm:px-4 py-6 w-full">
      <div className="container flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center ml-24">
          <img
            src="../assets/images/search.png"
            alt="logo"
            className="w-10 h-10 "
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white m-2">
            Alinker
          </span>
        </Link>
        <div className="hidden md:block md:w-auto mr-20">
          <ul className="flex md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium items-center justify-items-center">
            <li>
              <Link
                to="/login"
                className=" rounded-md text-white font-semibold"
                aria-current="page"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="rounded-md text-white font-semibold"
                aria-current="page"
              >
                Register Free
              </Link>
            </li>
            <li>
              <button
                to="/docs"
                className="rounded-md text-white font-semibold bg-[#1b3987] hover:bg-[#3665dc] p-4"
                aria-current="page"
              >
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
