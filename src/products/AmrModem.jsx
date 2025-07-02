import React from 'react';

import amr from "../assets/imgs/amr_modem.png";

const AMRModemProduct = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            Automatic Meter Reading Modem (AMR GPRS)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A non-intrusive, DLMS-compliant smart modem for real-time energy meter reading and cloud integration using 4G GPRS.
          </p>
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Product Overview</h2>
            <p className="text-gray-700 mb-4">
              The AMR GPRS Modem connects seamlessly to any electronic energy meter via Optical, RS232, or RJ11 ports, compliant with DLMS IEC 62056-21.
            </p>
            <p className="text-gray-700 mb-4">
              Drawing power from the meter terminal, this plug-and-play modem is non-intrusive and can be retrofitted to existing meters. It communicates using GSM/GPRS and transmits data over 4G networks, with fallbacks to 3G and 2G.
            </p>
          </div>

          {/* Optional image block */}
          <div className="flex justify-center items-center">
            <img
              src={amr}
              alt="AMR GPRS Modem"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "DLMS IEC 62056-21 compliant",
              "Supports Optical / RS232 / RJ11 ports",
              "4G compatible (fallback to 3G/2G)",
              "Non-intrusive & retrofittable",
              "Powered via meter terminal block",
              "Built-in DLMS communication intelligence",
              "Push data to cloud dynamically",
              "Secure, scalable design",
              "Plug-and-play setup"
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <p className="text-green-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Profiles */}
        <div className="bg-green-100 p-8 md:p-12 rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Supported Data Profiles</h2>
          <ul className="list-disc pl-6 md:pl-12 space-y-3 text-gray-800 text-lg">
            <li>Instantaneous parameters at time of reading</li>
            <li>Billing data (current + 12-month history)</li>
            <li>Load survey data (30+ days)</li>
            <li>Tamper, configuration, and setting data</li>
            <li>Transaction and event logs</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Ready to Upgrade Your Metering System?</h3>
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md transition">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default AMRModemProduct;
