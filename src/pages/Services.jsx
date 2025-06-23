'use client';
import React from 'react';

import { GrConnect } from 'react-icons/gr';
import { RiInstallLine } from 'react-icons/ri';
import { MdAppRegistration, MdApproval } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { FaChargingStation } from 'react-icons/fa';
import { SiCodeblocks } from 'react-icons/si';

const services = [
  {
    category: 'UPPTCL / UPPCL',
    items: [
      { icon: GrConnect, title: 'Connectivity', desc: 'Facilitating new connections and grid integration with UPPTCL/UPPCL.' },
      { icon: MdApproval, title: 'LTOA Approvals', desc: 'Obtaining Long-Term Open Access approvals for large-scale power usage.' },
      { icon: RiInstallLine, title: 'ABT Meter Installation', desc: 'Advanced metering infrastructure for accurate energy monitoring.' },
      { icon: CiSettings, title: 'WBA', desc: 'Wheeling & Banking Agreement setup and support.' },
    ],
  },
  {
    category: 'Electrical Safety',
    items: [
      { icon: MdAppRegistration, title: 'Drawing Approval', desc: 'Technical drawing approval from electrical safety authorities.' },
      { icon: MdApproval, title: 'CEIG Approval', desc: 'Ensuring compliance with Chief Electrical Inspector standards.' },
    ],
  },
  {
    category: 'SLDC',
    items: [
      { icon: FaChargingStation, title: 'New Elements Charging', desc: 'Registering new transmission or distribution elements with SLDC.' },
      { icon: SiCodeblocks, title: 'C.O.D.', desc: 'Commercial Operation Declaration processing and approval.' },
    ],
  },
];

const Services = () => {
  return (
    <section className="services-page py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-800">Our Services</h1>

        {services.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-semibold text-green-700 mb-6 border-l-4 border-green-600 pl-3">{section.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.items.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <service.icon className="text-5xl text-green-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
