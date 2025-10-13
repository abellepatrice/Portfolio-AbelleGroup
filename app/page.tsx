"use client"; 
import Link from "next/link";
import { motion } from "framer-motion";
import Contact from "./contact/page";

export default function HomePage() {
  return (
    <main className="min-h-screen container-fluid bg-gray-50 text-gray-900">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to AbelleGroup
        </motion.h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          A creative hub where innovation meets practicality. Explore my
          portfolio, live demos, and the journey of building digital solutions —
          from mobile apps and management systems to e-commerce platforms and
          travel portals.
        </p>
        <div className="flex gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-300 hover:text-grey-700 transition"
          >
            View Portfolio
          </Link>
          <Link
            href="/demos"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-300 hover:text-white transition"
          >
            Try Live Demos
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          I’m <span className="font-semibold">Patrice Oyende</span>, a Full
          Stack & Mobile Developer passionate about blending technology with
          everyday needs. I specialize in building secure, scalable, and
          user-friendly solutions — from loan apps and garage management systems
          to travel platforms and e-commerce stores.
        </p>
      </section>

      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="text-gray-700 font-semibold hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-20 text-center">
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

      <section className="py-12 px-6 md:px-20 text-center bg-gray-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Interested in collaborating or exploring more projects? Feel free to
          connect with me via GitHub, LinkedIn, or email.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/abellepatrice"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-300 hover:text-white transition"
          >
            GitHub
          </Link>
          <Link
            href="mailto:abellepatrice@gmail.com"
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-300 hover:text-white transition"
          >
            Email Me
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Tailwind CSS", level: 85 },
            { name: "Next.js", level: 85 },
            { name: "TypeScript", level: 75 },
            { name: "React.js", level: 80 },
            { name: "Android/Kotlin", level: 90 },
            { name: "HTML/CSS", level: 95 },
            { name: "Supabase", level: 80 },
            { name: "MongoDB", level: 100 },
            { name: "Node.js", level: 80 },
            { name: "PHP Laravel", level: 85 },
            { name: "Express.js", level: 90 },
            { name: "Flask/Python", level: 90 },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm mt-1 block">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Gerald",
              role: "Client",
              feedback:
                "Patrice was amazing to work with, delivered on time with great quality.",
              image: "/images/gerald.png",
            },
            {
              name: "Emmanuel",
              role: "Teammate",
              feedback:
                "Super collaborative, always solves problems with a creative approach.",
              image: "/images/emmanuel.png",
            },
            {
              name: "David",
              role: "Mentor",
              feedback:
                "A fast learner and always curious to improve and explore new tech.",
              image: "/images/david.png",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-gray-800">{t.name}</h3>
              <span className="text-sm text-gray-500 mb-3">{t.role}</span>
              <p className="italic text-gray-600">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 px-2 md:px-20 bg-gray-50">
        <Contact />
      </section>
    </main>
  );
}


// "use client"; 
// import Link from "next/link";
// import { LayoutGroup, motion } from "framer-motion";
// import Contact from "./contact/page";


// export default function HomePage() {
//   return (
//     <main className="min-h-screen container-fluid bg-gray-50 text-gray-900">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-700 to-yellow-600 text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Welcome to AbelleGroup
//         </motion.h1>
//         <p className="max-w-2xl text-lg md:text-xl mb-8">
//           A creative hub where innovation meets practicality. Explore my
//           portfolio, live demos, and the journey of building digital solutions —
//           from mobile apps and management systems to e-commerce platforms and
//           travel portals.
//         </p>
//         <div className="flex gap-4">
//           <Link
//             href="/portfolio"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:white hover:text-grey-700 transition"
//           >
//             View Portfolio
//           </Link>
//           <Link
//             href="/demos"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-700 hover:text-white transition"
//           >
//             Try Live Demos
//           </Link>
//         </div>
//       </section>

//       {/* About Snapshot */}
//       <section className="py-16 px-6 md:px-20 text-center">
//         <h2 className="text-3xl font-bold mb-6">About Me</h2>
//         <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
//           I’m <span className="font-semibold">Patrice Oyende</span>, a Full
//           Stack & Mobile Developer passionate about blending technology with
//           everyday needs. I specialize in building secure, scalable, and
//           user-friendly solutions — from loan apps and garage management systems
//           to travel platforms and e-commerce stores.
//         </p>
        
//       </section>

//       {/* Featured Projects */}
//       <section className="py-16 px-6 md:px-20 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Featured Projects
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Project Card */}
//           {[
//             {
//               title: "Loan App",
//               desc: "A loan application system with Node.js backend and React Native dashboard.",
//               link: "/projects/loan-app",
//             },
//             {
//               title: "Elite Shop",
//               desc: "An e-commerce platform where only admin uploads products, with secure logins.",
//               link: "/projects/elite-shop",
//             },
//             {
//               title: "Speedy Spanners",
//               desc: "Garage management system with bookings, repairs, and payments.",
//               link: "/projects/speedy-spanners",
//             },
//             {
//               title: "Travel Portal",
//               desc: "Interactive travel booking portal with real-time itineraries.",
//               link: "/projects/roaringl",
//             },
//           ].map((project, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.desc}</p>
//               <Link
//                 href={project.link}
//                 className="text-gray-700 font-semibold hover:underline"
//               >
//                 Explore →
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Why AbelleGroup */}
//       <section className="py-16 px-6 md:px-20 text-center">
//         <h2 className="text-3xl font-bold mb-6">Why AbelleGroup?</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
//           {[
//             {
//               title: "🚀 Practical Solutions",
//               desc: "Designed with real-world usability in mind.",
//             },
//             {
//               title: "🔒 Security First",
//               desc: "Cybersecurity principles integrated into builds.",
//             },
//             {
//               title: "🌍 Scalable & Future-Ready",
//               desc: "Solutions that grow with businesses and users.",
//             },
//             {
//               title: "💡 Innovative Approach",
//               desc: "Combining creativity with technical expertise.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-md transition"
//             >
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <section className="py-16 px-6 md:px-20 text-center bg-gray-700 text-white">
//         <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
//         <p className="max-w-2xl mx-auto mb-8">
//           Interested in collaborating or exploring more projects? Feel free to
//           connect with me via GitHub, LinkedIn, or email.
//         </p>
//         <div className="flex justify-center gap-4">
//           <Link
//             href="https://github.com/abellepatrice"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-white hover:text-bg-gray-700 transition"
//           >
//             GitHub
//           </Link>
//           <Link
//             href="mailto:abellepatrice@gmail.com"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-2xl hover:bg-gray-700 hover:text-white transition"
//           >
//             Email Me
//           </Link>
//         </div>
          

//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold mb-10">My Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
//         {[
//           { name: "Tailwind CSS", level: 85 },
//           { name: "Next.js", level: 85 },
//           { name: "TypeScript", level: 75},
//           { name: "React.js", level: 80 },
//           { name: "Android/Kotlin", level: 90 },
//           { name: "HTML/CSS", level: 95 },
//           { name: "Supabase", level: 80 },
//           { name: "MongoDB", level: 100 },
//           { name: "Node.js", level: 80 },
//           { name: "PHP Laravel", level: 85 },
//           { name: "Express.js", level: 90 },
//           { name: "Flask/Python", level: 90 },


//         ].map((skill, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="font-semibold mb-2">{skill.name}</h3>
//             <div className="w-full bg-gray-200 h-2 rounded-full">
//           <div
//             className="bg-gray-800 h-2 rounded-full"
//             style={{ width: `${skill.level}%` }}
//           ></div>
//         </div>
//         <span className="text-sm mt-1 block">{skill.level}%</span>
//       </div>
//     ))}
//   </div>
//       </section>

//         <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
//           <h2 className="text-3xl font-bold mb-10">What People Say</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                {[
      
//       {
//         name: "Gerald",
//         role: "Client",
//         feedback:
//           "Patrice was amazing to work with, delivered on time with great quality.",
//         image: "/images/gerald.png",
//       },
//       {
//         name: "Emmanuel",
//         role: "Teammate",
//         feedback:
//           "Super collaborative, always solves problems with a creative approach.",
//         image: "/images/emmanuel.png",
//       },
//       {
//         name: "David",
//         role: "Mentor",
//         feedback:
//           "A fast learner and always curious to improve and explore new tech.",
//         image: "/images/david.png",
//       },
//     ].map((t, i) => (
//       <div
//         key={i}
//         className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
//       >
//         <img
//           src={t.image}
//           alt={t.name}
//           className="w-16 h-16 rounded-full object-cover mb-4"
//         />
//             <h3 className="font-semibold text-gray-800">{t.name}</h3>
//             <span className="text-sm text-gray-500 mb-3">{t.role}</span>
//             <p className="italic text-gray-600">“{t.feedback}”</p>
//           </div>
//         ))}
//       </div>
//     </section>
//        <section className="py-16 px-6 md:px-20 bg-gray-50">
//         <Contact />
//       </section>



//     </main>
//   );
// }

