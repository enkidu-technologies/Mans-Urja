import React from 'react';
import { GrConnect } from 'react-icons/gr';
import { RiInstallLine } from 'react-icons/ri';
import { MdAppRegistration, MdApproval } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { FaChargingStation } from 'react-icons/fa';
import { SiCodeblocks } from 'react-icons/si';

const ServiceCard = ({ Icon, title }) => (
    <div className='flex flex-col items-center bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 hover:border-green-200 hover:scale-105'>
        <div className='mb-3 sm:mb-4 p-3 sm:p-4 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300'>
            <Icon className='text-2xl sm:text-3xl md:text-4xl text-green-600 group-hover:text-green-700 transition-colors duration-300' />
        </div>
        <h4 className='text-sm sm:text-base md:text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-tight'>
            {title}
        </h4>
    </div>
);

const ServiceSection = ({ title, children, bgColor = "bg-white" }) => (
    <div className={`${bgColor} p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6 sm:mb-8 md:mb-12`}>
        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-green-600 mb-4 sm:mb-6 text-center md:text-left'>
            {title}
        </h3>
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {children}
        </div>
    </div>
);

const OurServices = () => {
    return (
        <section className='bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4'>
                        Our Services
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
                        Comprehensive solutions for all your electrical and regulatory needs
                    </p>
                </div>

                {/* UPPTCL/UPPCL */}
                <ServiceSection title="UPPTCL / UPPCL" bgColor="bg-gradient-to-br from-blue-50 to-indigo-50">
                    <ServiceCard Icon={GrConnect} title="Connectivity" />
                    <ServiceCard Icon={MdApproval} title="LTOA Approvals" />
                    <ServiceCard Icon={RiInstallLine} title="ABT Meter Installation" />
                    <ServiceCard Icon={CiSettings} title="WBA" />
                </ServiceSection>

                {/* Electrical Safety */}
                <ServiceSection title="Electrical Safety" bgColor="bg-gradient-to-br from-green-50 to-emerald-50">
                    <ServiceCard Icon={MdAppRegistration} title="Drawing Approval" />
                    <ServiceCard Icon={MdApproval} title="CEIG Approval" />
                </ServiceSection>

                {/* SLDC */}
                <ServiceSection title="SLDC" bgColor="bg-gradient-to-br from-purple-50 to-pink-50">
                    <ServiceCard Icon={FaChargingStation} title="New Elements Charging" />
                    <ServiceCard Icon={SiCodeblocks} title="C.O.D." />
                </ServiceSection>
            </div>
        </section>
    );
};

export default OurServices;