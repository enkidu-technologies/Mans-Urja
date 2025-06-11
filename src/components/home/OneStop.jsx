import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { MdMiscellaneousServices, MdOutlineWorkOutline } from 'react-icons/md'

const OneStop = () => {
    return (
        <div className='one-stop text-center'>
            <h2 className='text-4xl font-bold mb-4'>One Stop Solution</h2>
            <p className='text-gray-500'>A true One-Stop Solution for everything you require under one roof.</p>
            <div className='one-stop-cards-container'>
                <div className='one-stop-card'>
                    <MdOutlineWorkOutline size={50} className='icon' />
                    <h3 className='text-2xl font-semibold'>Experience</h3>
                    <p className='text-gray-500'>15+ years of Experience</p>
                </div>
                <div className='one-stop-card'>
                    <BiSupport size={50} className='icon' />
                    <h3 className='text-2xl font-semibold'>Support</h3>
                    <p className='text-gray-500'>Post Sales Support</p>
                </div>
                <div className='one-stop-card'>
                    <MdMiscellaneousServices size={50} className='icon' />
                    <h3 className='text-2xl font-semibold'>Services</h3>
                    <p className='text-gray-500'>Single Point Services</p>
                </div>
            </div>
        </div>
    )
}

export default OneStop