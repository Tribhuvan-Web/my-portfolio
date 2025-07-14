import React from "react";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const viewResume = () => {
    try {
      window.open('/Tribhuvan nath sagar.pdf', '_blank');
    } catch (error) {
      console.error('Error opening resume:', error);
      // Fallback: try direct navigation
      window.location.href = '/Tribhuvan nath sagar.pdf';
    }
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent relative">
                Me
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transform scale-x-0 animate-scaleX animation-delay-500"></div>
              </span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                Recently graduated from Bachelor of Computer Applications with
                hands-on experience in building robust backend systems using
                Spring Boot and SQL. Skilled in integrating REST APIs with React
                and Tailwind CSS.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Developed full-stack projects including a URL shortener, movie
                ticket booking system, and a real-time chat
                application—implementing production-ready features end-to-end.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Core Technologies
              </h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {[
                  "Java",
                  "Spring Boot", 
                  "React",
                  "SQL",
                  "REST APIs",
                  "Tailwind CSS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-lg px-2 py-2 sm:px-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={viewResume}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                View Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Stats/Highlights Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Quick Facts
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <p className="text-gray-600">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Focus</h4>
                  <p className="text-gray-600">Full Stack Development</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Projects</h4>
                  <p className="text-gray-600">Multiple Production Apps</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Passion</h4>
                  <p className="text-gray-600">Building Scalable Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
