import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { MdMiscellaneousServices, MdOutlineWorkOutline } from 'react-icons/md'

const AboutCards = () => {
    return (
        <>
            <div>
                
                
            </div>
            <div className='about-cards'>
                <div className='about-cards-up'>
                    <div className="card bg-gradient-to-r from-lime-400 via-green-500 to-green-700">
                        <h2>ONE STOP SOLUTION</h2>
                    </div>
                </div>
                <div className='about-cards-down'>
                    <div className="card bg-gradient-to-r from-lime-400 via-green-500 to-green-700">
                        <h2>15+ years of Experience</h2>
                        <MdOutlineWorkOutline size={50} />
                    </div>
                    <div className="card bg-gradient-to-r from-lime-400 via-green-500 to-green-700">
                        <h2>Post Sales Support</h2>
                        <BiSupport size={50} />
                    </div>
                    <div className="card bg-gradient-to-r from-lime-400 via-green-500 to-green-700">
                        <h2>Single Point Services</h2>
                        <MdMiscellaneousServices size={50} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards