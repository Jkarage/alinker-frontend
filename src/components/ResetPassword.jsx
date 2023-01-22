import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-1/2 max-w-sm p-4 my-5 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-slate-300">
        <form className="space-y-6">
          <Link to="/" className="flex items-center justify-center">
            <img
              src="../assets/images/NavigationBar/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Alinker Logo"
            />
          </Link>
          <h5 className="flex items-center justify-center text-3xl font-medium text-gray-800 dark:text-gray-800">
            Reset Password
          </h5>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@alinker.tk"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-b-4 border-blue-700 hover:border-blue-500"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;