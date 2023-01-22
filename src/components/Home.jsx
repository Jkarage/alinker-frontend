import { Link } from "react-router-dom";
import Footer from "./Footer";
import Projects from "./Projects";
const Home = () => {
  return (
    <div>
      <div className=" text-center mt-6">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-700">
          Optimized for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            fast fetching
          </span>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-500">
          At alinker.tk the focus is on technology, innovation, and creativity
          so as we can unlock long-term values and drive global economic growth.
        </p>

        <div className="flex justify-center items-center mb-8">
          <div className="w-2/4 p-4 text-center border rounded-lg shadow-md sm:p-8 dark:bg-slate-300">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-700">
              Generate a link for your endpoint now
            </h5>
            <p className="mb-5 text-base text-gray-600 sm:text-lg dark:text-gray-600">
              The generated short-url below won&apos;t be cached and will be
              auto deleted in 24Hrs.For a long term and cached url Register for
              an account{" "}
              <Link to="/register">
                {" "}
                <span className="text-blue-600 dark:text-blue-500">here.</span>
              </Link>
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <form>
                <div className="text-center relative z-0 mb-6 group">
                  <div>
                    <input
                      name="floating_email"
                      id="floating_email"
                      className="py-2.5 px-0 text-sm inline-flex  items-center justify-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center px-5 py-3 ml-5 mt-5 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400"
                    >
                      Generate link
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" text-center text-4xl my-5 font-extrabold dark:text-gray-700">
          Other Projects By The same author
        </h2>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
