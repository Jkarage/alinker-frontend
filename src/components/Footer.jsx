import { Link } from "react-router-dom";
const now = new Date();

const Footer = () => {
  return (
    <footer className="p-4 mt-auto bg-[#0b1736] shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-white sm:text-center dark:text-white">
        © {now.getFullYear()}{" "}
        <Link to="https://alinker.tk/" className="hover:underline">
          Alinker{" "}
        </Link>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-white sm:mt-0">
        <li>
          <a
            href="https://github.com/jkarage"
            className="mr-4 hover:underline md:mr-6 "
          >
            Github
          </a>
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
