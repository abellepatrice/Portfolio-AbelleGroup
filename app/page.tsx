"use client"; 
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen container-fluid bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-700 to-yellow-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to AbelleGroup
        </motion.h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          A creative hub where innovation meets practicality. Explore my
          portfolio, live demos, and the journey of building digital solutions —
          from mobile apps and management systems to e-commerce platforms and
          travel portals.
        </p>
        <div className="flex gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:white hover:text-grey-700 transition"
          >
            View Portfolio
          </Link>
          <Link
            href="/demos"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-700 hover:text-white transition"
          >
            Try Live Demos
          </Link>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          I’m <span className="font-semibold">Patrice Oyende</span>, a Full
          Stack & Mobile Developer passionate about blending technology with
          everyday needs. I specialize in building secure, scalable, and
          user-friendly solutions — from loan apps and garage management systems
          to travel platforms and e-commerce stores.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Card */}
          {[
            {
              title: "Loan App",
              desc: "A loan application system with Node.js backend and React Native dashboard.",
              link: "/projects/loan-app",
            },
            {
              title: "Elite Shop",
              desc: "An e-commerce platform where only admin uploads products, with secure logins.",
              link: "/projects/elite-shop",
            },
            {
              title: "Speedy Spanners",
              desc: "Garage management system with bookings, repairs, and payments.",
              link: "/projects/speedy-spanners",
            },
            {
              title: "Travel Portal",
              desc: "Interactive travel booking portal with real-time itineraries.",
              link: "/projects/roaringl",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <Link
                href={project.link}
                className="text-amber-700 font-semibold hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why AbelleGroup */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why AbelleGroup?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "🚀 Practical Solutions",
              desc: "Designed with real-world usability in mind.",
            },
            {
              title: "🔒 Security First",
              desc: "Cybersecurity principles integrated into builds.",
            },
            {
              title: "🌍 Scalable & Future-Ready",
              desc: "Solutions that grow with businesses and users.",
            },
            {
              title: "💡 Innovative Approach",
              desc: "Combining creativity with technical expertise.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-6 md:px-20 text-center text-grey-700">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Interested in collaborating or exploring more projects? Feel free to
          connect with me via GitHub, LinkedIn, or email.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/abellepatrice"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-700 hover:text-white transition"
          >
            GitHub
          </Link>
          <Link
            href="mailto:abellepatrice@gmail.com"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-700 hover:text-white transition"
          >
            Email Me
          </Link>
        </div>
      </section>
    </main>
  );
}

