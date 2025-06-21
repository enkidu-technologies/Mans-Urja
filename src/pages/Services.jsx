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
      { icon: GrConnect, title: 'Connectivity' },
      { icon: MdApproval, title: 'LTOA Approvals' },
      { icon: RiInstallLine, title: 'ABT Meter Installation' },
      { icon: CiSettings, title: 'WBA' },
    ],
  },
  {
    category: 'Electrical Safety',
    items: [
      { icon: MdAppRegistration, title: 'Drawing Approval' },
      { icon: MdApproval, title: 'CEIG Approval' },
    ],
  },
  {
    category: 'SLDC',
    items: [
      { icon: FaChargingStation, title: 'New Elements Charging' },
      { icon: SiCodeblocks, title: 'C.O.D.' },
    ],
  },
];

const Services = () => {
  return (
    <section className="services-page py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {services.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">{section.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {section.items.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 hover:bg-green-50 rounded-xl shadow hover:shadow-md transition duration-300"
                >
                  <service.icon className="text-4xl text-green-600 mb-4" />
                  <h4 className="text-md font-medium text-center">{service.title}</h4>
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
