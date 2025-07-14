import React from "react";

const Achievement = () => {
  const handleLinkClick = (link, type) => {
    try {
      if (type === 'profile') {
        // External links (profiles)
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        // PDF files in public folder
        window.open(link, '_blank');
      }
    } catch (error) {
      console.error('Error opening link:', error);
      // Fallback: try direct navigation
      window.location.href = link;
    }
  };

  const achievements = [
    {
      id: 1,
      category: "Academic",
      title: "Bachelor of Computer Applications",
      description:
        "• Graduated with 69.5% Honours\n• Specialized in Software Development\n• Strong foundation in programming",
      year: "2025",
      proof: {
        type: "document", // document, profile, certificate, screenshot
        link: "/Final result.pdf", // File in public folder
        text: "View Certificate",
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      category: "Coding Platform",
      title: "LeetCode 365 Days Badge",
      description:
        "• 365+ consecutive days of coding\n• Consistent problem solving\n• Daily programming practice",
      year: "2024-2025",
      proof: {
        type: "profile",
        link: "https://leetcode.com/u/Tribhuvan_nath/",
        text: "View Profile",
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 3,
      category: "Programming Skills",
      title: "HackerRank 5-Star Java",
      description:
        "• Highest Java rating achieved\n• Advanced programming skills\n• Complex problem solving",
      year: "2024",
      proof: {
        type: "profile",
        link: "https://www.hackerrank.com/profile/tribhuvannath567",
        text: "View Profile",
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      category: "Certification",
      title: "Spring Boot Mastery",
      description:
        "• in28Minutes Udemy Course\n• Comprehensive framework knowledge\n• Production-ready applications",
      year: "2025",
      proof: {
        type: "certificate",
        link: "/certificates/spring-boot-certificate.pdf", // Replace with actual certificate path
        text: "View Certificate",
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 5,
      category: "Database Skills",
      title: "SQL Intermediate",
      description:
        "• HackerRank Certified\n• Advanced query optimization\n• Database design expertise",
      year: "2024",
      proof: {
        type: "certificate",
        link: "/SQL.pdf", // File in public folder
        text: "View Certificate",
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: 6,
      category: "Version Control",
      title: "Git & GitHub Certified",
      description:
        "• Coursera Certification\n• Version control mastery\n• Collaborative development",
      year: "2022",
      proof: {
        type: "certificate",
        link: "/Git.pdf", // File in public folder
        text: "View Certificate",
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gray-50",
    },
  ];

  const stats = [
    { label: "Years of Learning", value: "3+" },
    { label: "Certifications", value: "6+" },
    { label: "Coding Platforms", value: "3+" },
    { label: "Academic Score", value: "69.5%" },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my academic accomplishments, certifications, and
            coding platform achievements that demonstrate my commitment to
            continuous learning and excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-orange-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`${achievement.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4 sm:p-6 border border-gray-100`}
            >
              {/* Icon and category */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                  {achievement.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-500 bg-white/70 px-2 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">
                    {achievement.category}
                  </p>
                </div>
                
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {achievement.description.split('\n').map((line, index) => (
                    <div key={index} className="mb-1">
                      {line}
                    </div>
                  ))}
                </div>
                
                {/* Proof button */}
                <button
                  onClick={() => handleLinkClick(achievement.proof.link, achievement.proof.type)}
                  className={`w-full mt-3 sm:mt-4 px-3 py-2 bg-gradient-to-r ${achievement.color} text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer`}
                >
                  {achievement.proof.text}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
