import React from 'react';
import { GrConnect } from 'react-icons/gr';
import { RiInstallLine } from 'react-icons/ri';
import { MdAppRegistration, MdApproval } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { FaChargingStation } from 'react-icons/fa';
import { SiCodeblocks } from 'react-icons/si';

const ServiceCard = ({ Icon, title }) => (
    <div className='flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center'>
        <Icon className='text-4xl text-green-600 mb-4' />
        <h4 className='text-lg font-semibold text-gray-700'>{title}</h4>
    </div>
);

const OurServices = () => {
    return (
        <section className='our-services bg-gray-50 py-16 px-6 md:px-16'>
            <h2 className='text-4xl font-bold text-center text-gray-800 mb-12'>Our Services</h2>

            {/* UPPTCL/UPPCL */}
            <div className='mb-12'>
                <h3 className='text-2xl font-semibold text-green-700 mb-6'>UPPTCL / UPPCL</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <ServiceCard Icon={GrConnect} title="Connectivity" />
                    <ServiceCard Icon={MdApproval} title="LTOA Approvals" />
                    <ServiceCard Icon={RiInstallLine} title="ABT Meter Installation" />
                    <ServiceCard Icon={CiSettings} title="WBA" />
                </div>
            </div>

            {/* Electrical Safety */}
            <div className='mb-12'>
                <h3 className='text-2xl font-semibold text-green-700 mb-6'>Electrical Safety</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <ServiceCard Icon={MdAppRegistration} title="Drawing Approval" />
                    <ServiceCard Icon={MdApproval} title="CEIG Approval" />
                </div>
            </div>

            {/* SLDC */}
            <div>
                <h3 className='text-2xl font-semibold text-green-700 mb-6'>SLDC</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <ServiceCard Icon={FaChargingStation} title="New Elements Charging" />
                    <ServiceCard Icon={SiCodeblocks} title="C.O.D." />
                </div>
            </div>
        </section>
    );
};

export default OurServices;
