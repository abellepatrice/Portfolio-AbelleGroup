import React from "react";

const AboutPage: React.FC = () =>{

return(

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Abelle Group
        </h1>

        <p className="text-gray-600 leading-relaxed mb-4">
          At <span className="font-semibold">Abelle Group</span>, we believe in
          building financial solutions that empower individuals and communities.
          Our flagship product, the{" "}
          <span className="font-semibold">Abelle Group Loan App</span>, is
          designed to make borrowing simple, transparent, and accessible.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          We understand that financial needs vary—from individuals seeking
          personal loans to groups working together for collective growth. With
          this in mind, our loan app provides both{" "}
          <span className="font-semibold">individual</span> and{" "}
          <span className="font-semibold">group lending options</span>, ensuring
          that every user can find a solution tailored to their needs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To provide innovative, reliable, and secure financial tools that make
          access to credit fast, fair, and convenient for everyone.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To become a leading digital financial partner in Africa and beyond,
          leveraging technology to bridge the gap between people and
          opportunities.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Technology at Our Core
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The <span className="font-semibold">Abelle Group Loan App</span> is
          powered by a robust backend built in{" "}
          <span className="font-semibold">Node.js</span>, ensuring speed,
          scalability, and security. By combining modern web technologies with
          financial expertise, we deliver a platform that our users can trust
          and depend on.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>
            <span className="font-semibold">User-Friendly</span> – Simple
            onboarding and loan application process.
          </li>
          <li>
            <span className="font-semibold">Flexible Loans</span> – Options for
            both individuals and groups.
          </li>
          <li>
            <span className="font-semibold">Secure Platform</span> – Built with
            strong authentication and encrypted data storage.
          </li>
          <li>
            <span className="font-semibold">Transparent Process</span> – Clear
            terms, fair interest rates, and no hidden fees.
          </li>
        </ul>

        <p className="text-gray-700 font-medium text-center mt-6">
          At Abelle Group, we are more than a company—we are a team of
          innovators, developers, and financial experts committed to making
          financial inclusion a reality.
        </p>
      </div>
    </div>
  )};
  

export default AboutPage;

