import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="../assets/images/NavigationBar/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Alinker Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Alinker
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 my-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block py-2 pl-3 pr-4 my-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Register
              </Link>
            </li>
            <Link
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              to="/donate"
            >
              Donate(Servers)
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
