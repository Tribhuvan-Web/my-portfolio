import React from "react";

const Sidebar = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tribhuvan-nath-sagar/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:bg-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/tribhuvan-Web/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "hover:bg-gray-800",
    },
    {
      name: "Gmail",
      url: "mailto:tribhuvannath4567@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.711-1.592 1.592-1.592l.044-.001h.003c.287 0 .562.1.781.284L12 10.639l9.58-6.491a1.298 1.298 0 0 1 .781-.284h.003l.044.001c.881 0 1.592.705 1.592 1.592z" />
        </svg>
      ),
      color: "hover:bg-red-600",
    },
    {
      name: "Phone",
      url: "tel:+918228904121",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      color: "hover:bg-green-600",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Tribhuvan_nath/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      color: "hover:bg-yellow-600",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/tribhuvannath567",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.114.642 10.886 0 12C21.75 19.114 13.285 24 12 24s-9.75-4.886-10.392-6c-.642-1.114-.642-10.886 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 5.116c-.051-.031-.111-.049-.174-.049-.063 0-.123.018-.174.049L7.303 6.429c-.074.045-.123.127-.123.221 0 .143.113.258.254.258h.701v4.424c0 .542.437.979.979.979h2.855c.542 0 .979-.437.979-.979V7.057c0-.141-.115-.258-.258-.258h-.395zm1.717 7.932c-.092-.064-.217-.084-.329-.051l-.574.167c-.092.027-.174.086-.221.170-.047.084-.061.182-.037.274l.167.574c.033.113.115.199.221.221.027.006.055.010.084.010.086 0 .168-.035.227-.098l.308-.42c.068-.092.084-.217.051-.329l-.167-.574c-.027-.092-.086-.174-.17-.221-.084-.047-.182-.061-.274-.037l-.574.167c-.113.033-.199.115-.221.221-.006.027-.010.055-.010.084 0 .086.035.168.098.227l.42.308z" />
        </svg>
      ),
      color: "hover:bg-green-700",
    },
  ];

  return (
    <div className="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-3">
        <div className="flex flex-col space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={
                link.url.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`
                group relative w-12 h-12 flex items-center justify-center
                bg-gray-100 text-gray-600 rounded-xl transition-all duration-300
                hover:scale-110 hover:shadow-lg transform ${link.color} hover:text-white
              `}
              aria-label={link.name}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {link.icon}

              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap shadow-lg z-50">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
