import { Link } from "react-router-dom";
const now = new Date();

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 m-0">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {now.getFullYear()}{" "}
        <Link to="https://alinker.tk/" className="hover:underline">
          Alinker™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/docs" className="hover:underline">
            Documentations
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
