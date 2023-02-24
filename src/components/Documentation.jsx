const Documentation = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold my-6">
        Quickstart for alinker API
      </h1>
      <h2 className="text-start text-3xl font-normal mx-4">Introduction</h2>
      <h3 className="text-start text-md font-normal mx-4 my-4">
        Alinker API has been developed to ensure a simple interface for
        developers whilst providing flexibility in terms of implementation. This
        is a REST based API that supports creating short-urls as well as
        redirecting to the origin url.
      </h3>
      <div className="text-black mx-4 my-4">
        <h4 className="text-2xl text-start font-normal">
          Obtaining & Managing your API Credentials
        </h4>
        <ol>
          <li className="text-md font-normal m-4">
            1.Create a free account at https://alinker.tk/api/register
          </li>
          <li className="text-md font-normal m-4">
            2.Login at https://alinker.tk/api/login
          </li>
          <li className="text-md font-normal m-4">
            3.Copy the x-auth-token in the response header above
          </li>
          <li className="text-md font-normal m-4">
            4.Add the x-auth-token to your request header
          </li>
        </ol>
      </div>
      <hr />
      <div className="m-4">
        <h5 className="text-2xl  font-normal">Register a user</h5>
        <p className="text-md">Parameters</p>
        <span className="bg-blue-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          POST
        </span>
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          className="mb-6 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg  block w-1/2 p-2.5 cursor-not-allowed "
          value="https://alinker.tk/api/register"
          disabled
        />
      </div>
      <div className="m-4">
        <p className="text-black font-nromal mb-2">Body</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Field
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  email
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">
                  The users email address, Just a unique email.
                </td>
              </tr>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  username
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">
                  A unique username to idehtify a user.Should be alphanumeric,
                  Minimum of 3 charecters.
                </td>
              </tr>
              <tr className="bg-white  dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-black"
                >
                  Password
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">
                  Password should of 8 minimum charecters.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="m-4">
        <h5 className="text-2xl  font-normal">Login a user</h5>
        <p className="text-md">Parameters</p>
        <span className="bg-blue-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          POST
        </span>
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          className="mb-6 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg  block w-1/2 p-2.5 cursor-not-allowed "
          value="https://alinker.tk/api/login"
          disabled
        />
      </div>
      <div className="m-4">
        <p className="text-black font-nromal mb-2">Body</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Field
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  email
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">
                  The users email address, Just a unique email.
                </td>
              </tr>
              <tr className="bg-white  dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-black"
                >
                  Password
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">
                  Password should of 8 minimum charecters.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="m-4">
        <h5 className="text-2xl  font-normal">Create a shortened URL</h5>
        <p className="text-md">Parameters</p>
        <span className="bg-blue-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          POST
        </span>
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          className="mb-6 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg  block w-1/2 p-2.5 cursor-not-allowed "
          value="https://alinker.tk/api/create_short_url"
          disabled
        />
      </div>
      <div className="m-4">
        <p className="text-black font-nromal mb-2">Headers</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Field
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  x-auth-token
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">
                  The token generated after login, The tokenis mandatory in this
                  endpoint.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-4">
        <p className="text-black font-nromal mb-2">Body</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Field
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  long_url
                </th>
                <td className="px-6 py-4">String</td>
                <td className="px-6 py-4">The origin url to be shortened.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="m-4">
        <h5 className="text-2xl  font-normal">Use the shortened Link</h5>
        <p className="text-md">Parameters</p>
        <span className="bg-blue-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          GET
        </span>
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          className="mb-6 mt-2 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg  block w-1/2 p-2.5 cursor-not-allowed "
          value="https://alinker.tk/api/:short-link"
          disabled
        />
      </div>

      {/* <div className="block rounded-md bg-[#007bac] text-white italic p-4 mx-4 w-40 my-4">
        <h2>/register</h2>
      </div>
      <p className="m-4 my-4 text-md">
        Creates a new user in the database, The endpoint expects{" "}
        <i className="text-blue-500">email</i>,{" "}
        <i className="text-blue-500">username</i> and{" "}
        <i className="text-blue-500">password</i> in a json formatted request
        body.Validation of the data passed is done before registering the user.
        The username should be alphanumeric, password minimum length 8
        charecters. The allowed method is POST.
      </p>
      <div className="block rounded-md bg-[#007bac] text-white italic p-4 ml-4 w-40 my-4">
        <h2>/login</h2>
      </div>

      <p className="m-4 my-4">
        The endpoint expects <i className="text-blue-500">email</i>,{" "}
        <i className="text-blue-500">password</i> in a json formatted request
        body. Response has a JWT Authentication token in the header for a
        successful request.The key is named `Authentication`.You are supposed to
        add in the header with the given key `Authentication`` before accessing
        all secure endpoints.The allowed method is POST.
      </p>

      <div className="block rounded-md bg-[#007bac] text-white italic p-4 ml-4 w-40 my-4">
        <h2>/create-short-url</h2>
      </div>
      <p className="m-4 my-4">
        Creates the shortened url and returns it, Expects a <i>long_url</i> key
        in a json request. The user has to be Authenticated to access this
        endpoint, Authenticated user has a key Authentication having the
        returned key obtained in the header response after login.The allowed
        method is POST.
      </p>
      <div className="block rounded-md bg-[#007bac] text-white italic p-4 ml-4 w-40 my-4">
        <h2>/:shorturl</h2>
      </div>
      <p className="m-4 my-4">
        Redirects the user to the long Url mapped with the given shorturl,
        Looked up on the redis database.The mallowed method is GET.
      </p> */}
    </div>
  );
};

export default Documentation;
