import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-14 mt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">AbelleGroup</h3>
          <p className="text-sm leading-relaxed">
            Building practical and secure digital solutions — from mobile apps 
            and management systems to e-commerce platforms and travel portals.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web & Mobile Development</li>
            <li>Cybersecurity Solutions</li>
            <li>E-commerce Platforms</li>
            <li>Business Automation</li>
            <li>Travel Portals</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/demos" className="hover:text-white">Demos</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" /> 
              <a href="mailto:abellepatrice@gmail.com" className="hover:text-white">
                abellepatrice@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-400" /> Nairobi, Kenya
            </p>
          </div>
          <div className="flex gap-4 mt-4 text-lg">
            <Link href="https://github.com/abellepatrice" target="_blank" className="hover:text-white">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/patrice-oyende-84965b306" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Patrice Oyende | AbelleGroup. All Rights Reserved.
      </div>
    </footer>
  );
}

