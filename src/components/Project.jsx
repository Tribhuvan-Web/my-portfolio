import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "URL Shortener",
      description:
        "A deployed full-stack URL shortening service built with Spring Boot and React. Features include google Oauth, analytics tracking, and user authentication.",
      image: "url-shortner.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      liveLink: "https://shortly-col.netlify.app/",
      githubLink: "https://github.com/Tribhuvan-Web/url-shortener",
      featured: true,
    },
    {
      id: 2,
      title: "Movie Ticket Booking System",
      description:
        "A comprehensive movie booking platform with Login otp, seat selection and payment integration",
      image: "movie-booking.png",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Payment Gateway",
      ],
      liveLink: "https://your-live-demo.com",
      githubLink: "https://github.com/yourusername/movie-booking",
      featured: true,
    },
    {
      id: 3,
      title: "MailGenius - An AI Based email Assistant",
      description:
        "An AI Based email assistant which read your message and auto suggest the reply . and obviously we can also specify the tone.",
      image: "mail-genius.png",
      technologies: ["Java", "Spring Boot", "Gemini2.0", "React"],
      liveLink: "https://mail-genius-puce.vercel.app/",
      githubLink: "https://github.com/Tribhuvan-Web/Mailgenius",
      featured: false,
    },
    {
      id: 4,
      title: "Chat application - ( Completing soon )",
      description:
        "A complete e-commerce solution with product catalog, shopping cart, order management, and payment processing",
      image: "chat-app.png",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "Websocket",
        "End to End encryption",
      ],
      liveLink: "https://chat-frontend-eight-gamma.vercel.app/",
      githubLink: "https://github.com/Tribhuvan-Web/chat",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Things I've built so far
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? "ring-2 ring-orange-200" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-2xl font-bold">🚀</span>
                    </div>
                    <p className="text-gray-500 text-sm">Project Image</p>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg text-center hover:from-orange-600 hover:to-amber-600 transition-all duration-200 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-200 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
