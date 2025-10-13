"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            👋 Hello, I'm Patrice Oyende
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            🚀 Full Stack Developer | Cybersecurity Student | Tech Enthusiast
          </motion.p>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            I'm a passionate Full Stack Developer with experience in React, React
            Native, PHP Laravel, Next.js, Kotlin (Android), Flask, MySQL, and
            cybersecurity. I love building scalable web applications, securing
            systems, and working on innovative projects.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            🔧 Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "💻 Frontend",
                desc: "React.js, HTML, CSS, JavaScript, React Native, Next.js, Kotlin (Android)",
              },
              {
                title: "🛠️ Backend",
                desc: "PHP (Laravel), Flask (Python), Express.js (Node.js)",
              },
              {
                title: "📦 Database",
                desc: "MySQL, MongoDB, Firebase, Microsoft SQL, Supabase",
              },
              {
                title: "🔒 Cybersecurity",
                desc: "Ethical Hacking, Network Security",
              },
              {
                title: "☁️ Other Tools",
                desc: "Git, Docker, Postman, VS Code, Android Studio, Insomnia, Ngrok",
              },
            ].map((stack, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {stack.title}
                </h3>
                <p className="text-gray-600">{stack.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What I'm Working On Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            🌱 What I'm Working On
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "🔹 Speedy Spanners",
                desc: "A garage management system (Built with Express.js & MongoDB)",
              },
              {
                title: "🔹 Elite Shop",
                desc: "An e-commerce platform for tech accessories",
              },
              {
                title: "🔹 Patrice Soko Garden",
                desc: "A marketplace with MPESA integration",
              },
              {
                title: "🔹 Abelle Group Loan App",
                desc: "A Loan App that allows users to borrow money as a group or individual",
              },
              {
                title: "🔹 Abelle Group Web-Portfolio",
                desc: "A portfolio that shows the projects I have created, live demos and the programs I use",
                span: true,
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg transition ${
                  proj.span ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-600">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-14 px-6 md:px-20 text-center bg-gray-700 text-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-200">
            Interested in collaborating or exploring more projects? Feel free to
            connect with me via GitHub, LinkedIn, or email.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/abellepatrice"
              className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-white hover:text-gray-800 transition"
            >
              GitHub
            </Link>
            <Link
              href="mailto:abellepatrice@gmail.com"
              className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-white hover:text-gray-800 transition"
            >
              Email Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/patrice-oyende-84965b306"
              className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-white hover:text-gray-800 transition"
            >
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

// import React from "react";
// import Link from "next/link";

// const AboutPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
//       <div className="max-w-4xl mx-auto">
//         {/* Hero Section */}
//         <section className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             👋 Hello, I'm Patrice Oyende
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             🚀 Full Stack Developer | Cybersecurity Student | Tech Enthusiast
//           </p>
//           <p className="text-base text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
//             I'm a passionate Full Stack Developer with experience in React, React Native, PHP Laravel, Next.js, Kotlin (Android), Flask, MySQL, and cybersecurity. I love building scalable web applications, securing systems, and working on innovative projects.
//           </p>
//         </section>

//         {/* Tech Stack Section */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//             🔧 Tech Stack
//           </h2>
//           <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-5">
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">💻 Frontend</h3>
//               <p className="text-gray-600">
//                 React.js, HTML, CSS, JavaScript, React Native, Next.js, Kotlin (Android)
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">🛠️ Backend</h3>
//               <p className="text-gray-600">
//                 PHP (Laravel), Flask (Python), Express.js (Node.js)
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">📦 Database</h3>
//               <p className="text-gray-600">
//                 MySQL, MongoDB, Firebase, Microsoft SQL, Supabase
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">🔒 Cybersecurity</h3>
//               <p className="text-gray-600">
//                 Ethical Hacking, Network Security
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">☁️ Other Tools</h3>
//               <p className="text-gray-600">
//                 Git, Docker, Postman, VS Code, Android Studio, Insomnia, Ngrok
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* What I'm Working On Section */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//             🌱 What I'm Working On
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 🔹 Speedy Spanners
//               </h3>
//               <p className="text-gray-600">
//                 A garage management system (Built with Express.js & MongoDB)
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 🔹 Elite Shop
//               </h3>
//               <p className="text-gray-600">
//                 An e-commerce platform for tech accessories
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 🔹 Patrice Soko Garden
//               </h3>
//               <p className="text-gray-600">
//                 A marketplace with MPESA integration
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 🔹 Abelle Group Loan App
//               </h3>
//               <p className="text-gray-600">
//                 A Loan App that allows users to borrow money as a group or individual
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-lg md:col-span-2">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 🔹 Abelle Group Web-Portfolio
//               </h3>
//               <p className="text-gray-600">
//                 A portfolio that shows the projects I have created, live demos and the programs I use
//               </p>
//             </div>
//           </div>
//         </section>


        
//       <section className="py-12 px-6 md:px-20 text-center bg-gray-700 text-white">
//         <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
//         <p className="max-w-2xl mx-auto mb-6">
//           Interested in collaborating or exploring more projects? Feel free to
//           connect with me via GitHub, LinkedIn, or email.
//         </p>
//         <div className="flex justify-center gap-4">
//           <Link
//             href="https://github.com/abellepatrice"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-300 hover:text-white transition"
//           >
//             GitHub
//           </Link>
//           <Link
//             href="mailto:abellepatrice@gmail.com"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-300 hover:text-white transition"
//           >
//             Email Me
//           </Link>
//         </div>
//       </section>

//       </div>
//     </div>
//   );
// };

// export default AboutPage;
