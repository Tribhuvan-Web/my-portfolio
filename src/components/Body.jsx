const Body = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-gray-50 via-white to-orange-50"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          <div className="flex-1 text-center lg:text-left space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Hi, 👋
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                My name is
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent break-words leading-tight">
                Tribhuvan Nath Sagar
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-gray-700 mt-6 leading-relaxed">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-bold">
                  Java
                </span>{" "}
                Web Developer
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating robust web applications with modern technologies. 
                I build scalable solutions that deliver exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer text-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer text-lg"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="body.png"
                alt="Tribhuvan Nath Sagar"
                className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
