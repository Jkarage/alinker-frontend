const Shortener = () => {
  return (
    <div className="flex justify-center m-12">
      <div className="block max-w-lg rounded-lg bg-[#0b0c0e] text-center shadow-lg overflow-hidden">
        <div className="border-2 border-neutral-100 py-3 px-6 text-2xl bg-[#374151] text-white">
          Try it Now
        </div>
        <div className="p-6">
          <div className="mb-6 flex">
            <input
              type="text"
              id="base-input"
              className="bg-white w-3/4 mx-4  border border-gray-300 text-gray-900 text-md rounded-lg px-4 py-2"
            />
            <button
              type="button"
              className="inline-flex rounded p-4 text-md font-medium uppercase leading-normal text-white bg-[#8296b7]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Shorten
            </button>
          </div>

          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
            By using this your agreeing to our terms and services.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Shortener;
