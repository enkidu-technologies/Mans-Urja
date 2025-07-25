import { useState } from 'react';

const AbtMeter = () => {
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-700 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400 mr-2">⚡</span>
                <span className="text-sm font-medium">Industrial Grade Precision</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                ABT Meter
                <span className="block text-3xl text-green-300 mt-2">Apex 150</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Professional three-phase ABT meter designed for industrial applications with
                exceptional 0.2s accuracy class. Built with precision engineering and backed
                by Indian manufacturing excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                  Get Quote <span className="ml-2">→</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-500 rounded h-12 flex items-center justify-center">
                      <span className="text-white font-bold">L1</span>
                    </div>
                    <div className="bg-yellow-500 rounded h-12 flex items-center justify-center">
                      <span className="text-white font-bold">L2</span>
                    </div>
                    <div className="bg-red-500 rounded h-12 flex items-center justify-center">
                      <span className="text-white font-bold">L3</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-2xl font-mono font-bold">
                      230.5V | 50.0Hz
                    </div>
                    <div className="text-green-400 text-lg font-mono">
                      Class 0.2s Accuracy
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-gray-900 font-bold text-xl mb-2">ABT Meter Apex 150</h3>
                  <p className="text-gray-600">Industrial Three-Phase Meter</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                New
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Certified Quality</h3>
              <p className="text-gray-600">BIS & ISO certified manufacturing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 mb-2">0.2s Accuracy</h3>
              <p className="text-gray-600">Precision measurement guaranteed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Three Phase</h3>
              <p className="text-gray-600">Industrial grade application</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">Made in India</h3>
              <p className="text-gray-600">Supporting local manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical specifications and features of the ABT Meter Apex 150
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b">
            {[
              { id: 'specifications', label: 'Specifications' },
              { id: 'features', label: 'Features' },
              { id: 'applications', label: 'Applications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Model Name/Number</span>
                      <span className="text-gray-900">ABT Meter Apex 150</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Phase</span>
                      <span className="text-gray-900">Three Phase</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Accuracy Class</span>
                      <span className="font-bold text-green-600">0.2s</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Usage/Application</span>
                      <span className="text-gray-900">Industrial</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Brand</span>
                      <span className="text-gray-900">Secure</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="font-medium text-gray-700">Country of Origin</span>
                      <span className="text-gray-900 flex items-center">
                        Made in India <span className="ml-2">🇮🇳</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">High Precision Measurement</p>
                        <p className="text-gray-600 text-sm">0.2s accuracy class ensures reliable and precise energy measurement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">Industrial Grade Construction</p>
                        <p className="text-gray-600 text-sm">Built to withstand harsh industrial environments</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">Three Phase Capability</p>
                        <p className="text-gray-600 text-sm">Suitable for three-phase industrial applications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">Made in India</p>
                        <p className="text-gray-600 text-sm">Supporting domestic manufacturing with quality assurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-3xl">
                    ⚡
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Advanced Metering</h3>
                  <p className="text-gray-600">State-of-the-art measurement technology for accurate energy monitoring</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-3xl">
                    🛡️
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Robust Design</h3>
                  <p className="text-gray-600">Durable construction designed for long-term industrial use</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-3xl">
                    🏆
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Certified Quality</h3>
                  <p className="text-gray-600">Meets all industry standards and certification requirements</p>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Ideal Applications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Manufacturing facilities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Industrial complexes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Power distribution systems</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Energy monitoring installations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Commercial buildings</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <span className="text-gray-700">Accurate energy billing and monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <span className="text-gray-700">Reduced energy losses and improved efficiency</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <span className="text-gray-700">Compliance with industrial standards</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                      <span className="text-gray-700">Long-term reliability and low maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Energy Monitoring?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a customized quote for the ABT Meter Apex 150 and discover how it can
            improve your industrial energy management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
              Request Quote <span className="ml-2">→</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
              <span className="mr-2">📞</span>
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbtMeter;