import React, { useState } from 'react';
import img from "../assets/imgs/ct&pt.jpg"

const Ctpt = () => {
  const productData = {
    title: '11KV CT PT Combined Unit Oil Cooled',
    voltage: '11 KV',
    description: 'High-performance current and potential transformer combined unit designed for 11KV distribution systems.',
    applications: ['Distribution Networks', 'Substations', 'Industrial Plants', 'Power Monitoring']
  };

  const specifications = [
    { label: 'Cooling Type', value: 'Oil Cooled', icon: '🌡️' },
    { label: 'Phase Configuration', value: '3 Phase 4 Wire', icon: '⚡' },
    { label: 'Frequency', value: '50 Hz', icon: '⚙️' },
    { label: 'Insulation', value: 'Oil Immersed', icon: '🛡️' }
  ];

  const features = [
    'High accuracy measurement capabilities',
    'Robust oil-cooled design for enhanced thermal management',
    'Combined CT and PT functionality in single unit',
    'Suitable for both indoor and outdoor applications',
    'Compliance with international standards',
    'Long service life with minimal maintenance',
    'Effective protection against environmental factors',
    'Optimized for Indian power system requirements'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-100">

      {/* Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div style={{background : `url(${img})`}} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-green-600 text-xl">{spec.icon}</div>
                    <span className="text-sm font-medium text-gray-600">{spec.label}</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {productData.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-green-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Applications</h3>
              <div className="grid grid-cols-2 gap-4">
                {productData.applications.map((app, index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                    <span className="font-medium text-green-600">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Order?</h3>
              <p className="text-gray-600 mb-6">
                Get effective & timely delivery for your electrical infrastructure needs. 
                Our expert team is ready to assist you with technical specifications and custom requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex-1">
                  Request Quote
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex-1">
                  Technical Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-3xl">🛡️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600">All products undergo rigorous testing and comply with national and international standards.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-3xl">⚙️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h4>
            <p className="text-gray-600">Tailored configurations available to meet specific voltage and current requirements.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-3xl">✅</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">After-Sales Support</h4>
            <p className="text-gray-600">Comprehensive maintenance services and technical support throughout product lifecycle.</p>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Parameter</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-700">Rated Voltage</td>
                  <td className="py-4 px-6 text-gray-600">11 KV</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-700">Cooling Type</td>
                  <td className="py-4 px-6 text-gray-600">Oil Cooled</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-700">Phase Configuration</td>
                  <td className="py-4 px-6 text-gray-600">3 Phase 4 Wire</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-700">Frequency</td>
                  <td className="py-4 px-6 text-gray-600">50 Hz</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-700">Insulation Class</td>
                  <td className="py-4 px-6 text-gray-600">Oil Immersed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ctpt;