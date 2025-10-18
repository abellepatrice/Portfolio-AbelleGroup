import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Loan App",
      description: "A comprehensive loan application system with Node.js backend and React Native dashboard for managing loans.",
      link: "/demos",
      tech: ["Node.js", "React Native", "MongoDB"],
    },
    {
      title: "Elite Shop",
      description: "An e-commerce platform where only admins can upload products, featuring secure login and user management.",
      link: "/demos",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
    },
    {
      title: "Speedy Spanners",
      description: "A garage management system for booking repairs, tracking services, and handling payments.",
      link: "/demos",
      tech: ["React", "Node.js", "Express.js"],
    },
    {
      title: "RoaringL Travel Portal",
      description: "An interactive travel booking portal with real-time itineraries and destination guides.",
      link: "https://abellepatrice.pythonanywhere.com/",
      tech: ["Flask", "Python", "HTML/CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Portfolio
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore a selection of projects I've built, showcasing my skills in full-stack development, mobile apps, and web solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.link}
                className="inline-block bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
