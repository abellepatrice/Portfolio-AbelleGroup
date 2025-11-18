"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 bg-gray-700 py-20 px-6 md:px-16 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hello, I'm Patrice Oyende
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer | Tech Enthusiast
          </motion.p>
          <p className="text-base text-gray-300 max-w-6xl mx-auto mt-4 leading-relaxed">
            I'm a passionate Full Stack Developer with experience in React, React Native, PHP Laravel, Next.js, Kotlin (Android), Flask, MySQL, and cybersecurity.
            I love building scalable web applications, securing systems, and working on innovative projects. 
            Aspiring and results-driven Full Stack Developer with strong expertise in modern web and mobile development technologies. 
            Since beginning formal training in January 2024, I have successfully built and deployed full-scale applications using MERN (MongoDB, Express.js, React.js, Node.js), Flask, and React Native. 
            Skilled in crafting dynamic frontends, robust backends, and seamless mobile dashboards using JavaScript and TypeScript. Practical experience includes full deployment to production environments such as PythonAnywhere, Heroku, and Netlify.
          </p>
         
        </motion.section>

        {/* Key Competencies Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Key Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Competencies</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Design and develop complete web and mobile applications using MERN, Flask, and React Native.</li>
                <li>Create responsive, interactive UIs with HTML5, CSS3, Bootstrap, React.js, and React Native.</li>
                <li>Build RESTful APIs using Node.js (Express.js) and Flask.</li>
                <li>Design, query, and integrate databases using MongoDB, Supabase, MySQL, Microsoft SQL and Firebase.</li>
                <li>Implement secure authentication systems using JWT, bcrypt, and role-based access.</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tools & Practices</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Develop Android apps and mobile dashboards using React Native + TypeScript and Kotlin.</li>
                <li>Manage code and collaborate using Git and GitHub.</li>
                <li>Deploy websites and apps on Netlify, Vercel, Render, Heroku, and PythonAnywhere.</li>
                <li>Integrate MPESA and PayPal payment systems.</li>
                <li>Develop and maintain admin dashboards, user profiles, and reporting features.</li>
                <li>Apply Agile methodologies and use team collaboration tools effectively.</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                ),
                title: "Frontend",
                desc: "React.js, HTML5, CSS3, JavaScript, TypeScript, React Native,Next JS, Bootstrap",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Backend",
                desc: "Node.js (Express.js), Flask (Python)",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                ),
                title: "Database",
                desc: "MongoDB, MySQL, Firebase, Supabase, Microsoft SQL",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Development Tools",
                desc: "Git, GitHub, VS Code, Insomnia, Postman, Android Studio",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5z" />
                  </svg>
                ),
                title: "Mobile & Other",
                desc: "React Native, Kotlin (Android), MPESA/PayPal Integration",
              },
            ].map((stack, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
              >
                <div className="flex justify-center mb-3">{stack.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {stack.title}
                </h3>
                <p className="text-gray-600">{stack.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Speedy Spanners Garage Management System",
                desc: "Tech Stack: React, Node.js, Express, MongoDB. Users can request repairs, get live updates, and pay with MPESA. Admin dashboard for service approvals. (Private Repository).",
              },
              {
                title: "Elite Shop – E-commerce Platform",
                desc: "Tech Stack: React, Node.js, MongoDB. Niche e-commerce store with admin upload access and MPESA checkout. Includes cart and order management functionality. (Private Repository)",
              },
              {
                title: "Roaring Lion Tours and Travel Website",
                desc: "Tech Stack: HTML, CSS, Bootstrap, Python (Flask), MySQL. Responsive site with booking interface. Live demo: abellepatrice.pythonanywhere.com. GitHub: github.com/abellepatrice/RoaringLionToursandTravel.",
              },
              {
                title: "Loan App (Individual & Group Loans)",
                desc: "Tech Stack: React Native, TypeScript, Node.js (Express.js), MongoDB and Android (Kotlin). Mobile app with individual and group loan applications. Admin dashboard for approving loans, tracking repayment status, and managing users. GitHub: github.com/abellepatrice/AbelleGroup. Collaborated with Emmanuel Abelle.",
              },
              {
                title: "Abelle Group Web-Portfolio",
                desc: "Tech Stack: NextJS, TypeScript and Supabase. A portfolio that shows the projects I have created, live demos and the programs I use. This is the current website you're viewing. Collaborated with Emmanuel Abelle.",
              },
              {
                title: "Health App",
                desc: "Tech Stack: React Native, TypeScript, Node.js (Express.js), Supabase. Mobile app that allows users to track their health numbers and majorly focusing on nutrition and diabesity. This includes BMI, blood pressure and glucose.",
              },
              
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-600">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Work Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Developer</h3>
              <p className="text-gray-600 mb-2"><strong>Roaring Lion Tours and Travel Ltd., Nairobi, Kenya</strong></p>
              <p className="text-gray-600 mb-2"><strong>February 2024 – June 2024</strong></p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Developed a full-featured tour and travel website using HTML, CSS, Bootstrap, SQL, and Python (Flask).</li>
                <li>Live-deployed at abellepatrice.pythonanywhere.com.</li>
                <li>Built booking systems and interactive destination displays with responsive UI.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Developer</h3>
              <p className="text-gray-600 mb-2"><strong>Abelle Group Loan App</strong></p>
              <p className="text-gray-600 mb-2"><strong>June 2025 – October 2025</strong></p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Developed a mobile app for individual and group loan applications using React Native, Node.js, MongoDB, and TypeScript.</li>
                <li>Built an admin dashboard for approving loans, tracking repayment status, and managing users.</li>
                <li>Integrated secure authentication and payment systems for seamless user experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Certificate in Full Stack Development (MERN)</h3>
              <p className="text-gray-600 mb-2"><strong>Modcom Institute of Technology, Nairobi, Kenya</strong></p>
              <p className="text-gray-600 mb-2"><strong>May 2024 – August 2024</strong></p>
              <p className="text-gray-600">Specialized in MongoDB, Express.js, React.js, Node.js, React Native, and TypeScript.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certificate in Software Development</h3>
              <p className="text-gray-600 mb-2"><strong>Modcom Institute of Technology, Nairobi, Kenya</strong></p>
              <p className="text-gray-600 mb-2"><strong>January 2024 – May 2024</strong></p>
              <p className="text-gray-600">Covered HTML5, CSS3, Python, Flask, SQL, and Android App Development using Kotlin.</p>
            </div>
          </div>
        </section>

       
        {/* References Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            References
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Duncan Muturi</h3>
              <p className="text-gray-600 mb-2">Trainer – Modcom Institute of Technology</p>
              <p className="text-gray-600 mb-2">Email: <Link href="mailto:duncanmuturi@gmail.com" className="text-blue-500 hover:underline">duncanmuturi@gmail.com</Link></p>
              <p className="text-gray-600"><Link href="https://www.linkedin.com/in/duncan-muturi" className="text-blue-500 hover:underline">LinkedIn</Link></p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">David Kasilia</h3>
              <p className="text-gray-600 mb-2">Senior Developer</p>
              <p className="text-gray-600 mb-2">Mentor</p>
              <p className="text-gray-600 mb-2">Email: <Link href="mailto:davidkasilia001@gmail.com" className="text-blue-500 hover:underline">davidkasilia001@gmail.com</Link></p>
              <p className="text-gray-600"><Link href="https://github.com/David-Kasilia" className="text-blue-500 hover:underline">Github</Link></p>
            </motion.div>
          </div>
        </motion.section>

        {/* Credits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Credits
          </h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex items-center space-x-6"
          >
            <img src="/images/emmanuel.png" alt="Emmanuel Abelle" className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Emmanuel Abelle(Wazzicus)</h3>
              <p className="text-gray-600 mb-2">Teammate and Collaborator</p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Collaborated on Loan App (React Native, Node.js, MongoDB)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Co-developed Abelle Group Web-Portfolio (Next.js, TypeScript)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Contributed to multiple projects' success</li>
              </ul>
              <p className="text-gray-600 mt-2"><Link href="https://github.com/wazzicus" className="text-blue-500 hover:underline">GitHub</Link></p>
            </div>
          </motion.div>
        </motion.section>

        {/* Call-to-Action */}
        <section className="py-14 px-6 md:px-20 text-center bg-gray-700 text-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-200">
            Interested in collaborating or exploring more projects? Feel free to connect with me via GitHub or email.
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
