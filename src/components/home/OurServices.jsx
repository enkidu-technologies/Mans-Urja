import React from 'react'
import { GrConnect } from 'react-icons/gr'
import { RiInstallLine } from 'react-icons/ri'
import { MdAppRegistration, MdApproval } from 'react-icons/md'
import { CiSettings } from 'react-icons/ci'
import { FaChargingStation } from 'react-icons/fa'
import { SiCodeblocks } from 'react-icons/si'

const OurServices = () => {
    return (
        <div className='our-services'>
            <h2 className='text-center text-4xl font-bold my-4'>Our Services</h2>

            <h3 className='services-heading font-bold text-2xl'>UPPTCL/UPPCL</h3>
            <div className="services-list">
                <div className='services-item'>
                    <GrConnect className='icon' />
                    <h4>Connectivity</h4>
                </div>
                <div className='services-item'>
                    <MdApproval className='icon' />
                    <h4>LTOA Approvals</h4>
                </div>
                <div className='services-item'>
                    <RiInstallLine className='icon' />
                    <h4>ABT Meter Installation</h4>
                </div>
                <div className='services-item'>
                    <CiSettings className='icon' />
                    <h4>WBA</h4>
                </div>
            </div>

            <h3 className='services-heading font-bold text-2xl'>Electrical Safety</h3>
            <div className="services-list">
                <div className='services-item'>
                    <MdAppRegistration className='icon' />
                    <h4>Drawing Approval</h4>
                </div>
                <div className='services-item'>
                    <MdApproval className='icon' />
                    <h4>CEIG Approval</h4>
                </div>
            </div>

            <h3 className='services-heading font-bold text-2xl'>SLDC</h3>
            <div className="services-list">
                <div className='services-item'>
                    <FaChargingStation className='icon' />
                    <h4>New Elements Charging</h4>
                </div>
                <div className='services-item'>
                    <SiCodeblocks className='icon' />
                    <h4>C.O.D.</h4>
                </div>
            </div>


        </div>
    )
}

export default OurServices