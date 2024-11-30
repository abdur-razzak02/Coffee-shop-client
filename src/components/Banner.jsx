const Banner = () => {
  return (
      <div className="hero bg-bannerbg lg:h-[450px] xl:h-[660px]">
          <div className="w-4/5 mx-auto lg:flex justify-between">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2 py-10">
            <h1 className="text-3xl md:text-5xl font-bold font-rancho text-white">Would you like a Cup of Delicious Coffee?</h1>
            <p className="py-6 text-gray-400">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="px-5 py-2 bg-[#E3B577] hover:bg-transparent hover:text-white hover:border font-rancho text-lg transition duration-300">Learn More</button>
          </div>
          </div>
    </div>
  );
};

export default Banner;
