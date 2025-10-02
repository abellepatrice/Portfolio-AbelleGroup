import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">AbelleGroup</h3>
          <p className="text-sm">
            Building practical and secure digital solutions — from mobile apps 
            and management systems to e-commerce platforms and travel portals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/demos" className="hover:text-white">Demos</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
          <p>Email: <a href="mailto:abellepatrice@gmail.com" className="hover:text-white">abellepatrice@gmail.com</a></p>
          <p>Location: Nairobi, Kenya</p>
          <div className="flex gap-4 mt-4">
            <Link href="https://github.com/abellepatrice" target="_blank" className="hover:text-white">GitHub</Link>
            <Link href="https://www.linkedin.com/in/patrice-oyende-84965b306" target="_blank" className="hover:text-white">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Patrice Oyende | AbelleGroup
      </div>
    </footer>
  );
}
