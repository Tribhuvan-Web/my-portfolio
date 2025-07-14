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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 animate-fade-in">
                Hi, 👋
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
                My name is
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent break-words">
                Tribhuvan Nath Sagar
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700 mt-4">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-bold">
                  Java
                </span>{" "}
                Web Developer
              </h2>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                About Me
              </button>
            </div>
          </div>

          {/* Image Content - Desktop Only */}
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src="body.png"
                alt="Tribhuvan Nath Sagar"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-orange-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
