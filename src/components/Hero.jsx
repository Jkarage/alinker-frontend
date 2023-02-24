const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-4 my-6">
        <div className="col-span-1 place-self-center">
          <h1 className="font-semibold text-5xl p-10 text-gray-700">
            Shorten URLs <br />
            with our fast and <br /> secure shortener.
          </h1>
          <button className="rounded-md bg-[#007aab] hover:bg-[#045f83] text-white p-6 mx-10 my-6 text-xl text-center">
            Get Started for Free
          </button>
        </div>
        <div className="col-span-1 place-self-center">
          <img
            src="../assets/images/hero-banner.jpg"
            alt="url-shortener links"
            className="w-auto h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
