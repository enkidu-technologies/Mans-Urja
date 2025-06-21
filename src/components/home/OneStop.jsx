import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { MdMiscellaneousServices, MdOutlineWorkOutline } from 'react-icons/md'

const OneStop = () => {
    return (
        <div className='one-stop text-center p-24'>
            <h2 className='text-5xl font-bold mb-4'>One Stop Solution</h2>
            <p className='text-gray-500 text-lg'>A true One-Stop Solution for everything you require under one roof.</p>
            <div className='one-stop-cards-container'>
                <div className='one-stop-card'>
                    <MdOutlineWorkOutline size={50} className='icon' />
                    <h3 className='text-3xl font-semibold'>Experience</h3>
                    <p className='text-gray-500 text-lg'>15+ years of Experience</p>
                </div>
                <div className='one-stop-card'>
                    <BiSupport size={50} className='icon' />
                    <h3 className='text-3xl font-semibold'>Support</h3>
                    <p className='text-gray-500 text-lg'>Post Sales Support</p>
                </div>
                <div className='one-stop-card'>
                    <MdMiscellaneousServices size={50} className='icon' />
                    <h3 className='text-3xl font-semibold'>Services</h3>
                    <p className='text-gray-500 text-lg'>Single Point Services</p>
                </div>
            </div>
        </div>
    )
}

export default OneStop