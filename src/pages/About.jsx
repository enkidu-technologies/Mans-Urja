'use client';
import React from 'react';

const About = () => {
  return (
    <section className="about-page py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10">
          About Mans Urja Private Limited
        </h1>

        {/* Company Intro */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
          Mans Urja Private Limited is a dynamic company dedicated to empowering businesses with sustainable energy solutions and expert energy consultancy. We specialize in providing complete project execution and regulatory services including Open Access transactions, ABT Meter installations, CEIG approvals, SLDC coordination, and much more across the power and utility sector. We are trusted by industries and institutions for our commitment to excellence, compliance, and customer satisfaction.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="p-6 border-l-4 border-green-600 bg-gray-50 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To facilitate access to reliable and sustainable energy solutions by delivering top-tier consultancy, regulatory support, and technical services for power sector stakeholders.
            </p>
          </div>
          <div className="p-6 border-l-4 border-green-600 bg-gray-50 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be India’s most trusted name in power consultancy by enabling smarter energy choices and advancing a greener tomorrow.
            </p>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">What Sets Us Apart</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <li className="bg-gray-100 p-4 rounded shadow">✔️ 60+ ABT Meter Installations</li>
            <li className="bg-gray-100 p-4 rounded shadow">✔️ 50+ Successful WBA Cases</li>
            <li className="bg-gray-100 p-4 rounded shadow">✔️ Complete LTOA Application Support</li>
            <li className="bg-gray-100 p-4 rounded shadow">✔️ CEIG, SLDC & UPPTCL Coordination</li>
            <li className="bg-gray-100 p-4 rounded shadow">✔️ Expertise in Open Access Energy</li>
            <li className="bg-gray-100 p-4 rounded shadow">✔️ Transparent & Client-Centric Process</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
