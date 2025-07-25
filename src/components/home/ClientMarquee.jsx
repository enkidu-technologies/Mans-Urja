'use client';
import React from 'react';

import logo1 from '../../assets/clients/1.png';
import logo2 from '../../assets/clients/2.png';
import logo3 from '../../assets/clients/3.png';
import logo4 from '../../assets/clients/4.png';
import logo5 from '../../assets/clients/5.png';
import logo6 from '../../assets/clients/6.png';
import logo7 from '../../assets/clients/7.png';
import logo8 from '../../assets/clients/8.png';
import logo9 from '../../assets/clients/9.jpg';
import logo10 from '../../assets/clients/10.png';
import logo11 from '../../assets/clients/11.png';
import logo12 from '../../assets/clients/12.png';
import logo13 from '../../assets/clients/13.png';
import logo14 from '../../assets/clients/14.png';
import logo15 from '../../assets/clients/15.png';
import logo16 from '../../assets/clients/16.png';
import logo17 from '../../assets/clients/17.png';
import logo18 from '../../assets/clients/18.png';
import logo19 from '../../assets/clients/19.png';
import logo20 from '../../assets/clients/20.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20];

const ClientMarquee = () => {
  // Split logos into rows: 4 - 3 - 4 - 3
  const rowPattern = [4, 3, 4, 3];
  let currentIndex = 0;
  const rows = rowPattern.map((count) => {
    const row = logos.slice(currentIndex, currentIndex + count);
    currentIndex += count;
    return row;
  });

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Our Esteemed Clients
      </h2>

      <div className="space-y-6 px-4 max-w-6xl mx-auto">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex justify-center gap-6 flex-wrap ${
              row.length === 3 ? "justify-evenly" : "justify-between"
            }`}
          >
            {row.map((logo, j) => (
              <img
                key={j}
                src={logo}
                alt={`logo-${i}-${j}`}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default ClientMarquee;
