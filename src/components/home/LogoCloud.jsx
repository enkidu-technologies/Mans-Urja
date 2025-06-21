'use client';
import React from 'react';

import logo1 from '../../assets/developers/1.png';
import logo2 from '../../assets/developers/2.png';
import logo3 from '../../assets/developers/3.png';
import logo4 from '../../assets/developers/4.png';
import logo5 from '../../assets/developers/5.png';
import logo6 from '../../assets/developers/6.png';
import logo7 from '../../assets/developers/7.png';
import logo8 from '../../assets/developers/8.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const LogoCloud = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Esteemed Solar Developers</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                            <img
                                src={logo}
                                alt={`client-logo-${index}`}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
