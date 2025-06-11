import React from 'react'
import pic1 from '../../assets/pic1.jpg'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='half'>
                <h1 className='text-5xl font-bold'>Mans Urja Private Limited</h1>
                <p className='text-justify'>At Mans, we have helped organizations to obtain various monetary benefits by our advice and consultancy services. We have been instrumental in executing open access transaction in Uttar Pradersh where we provide end-to-end services for our customers.</p>
                <div>
                    <a href="" className='btn'>About Us</a>
                    <a href="" className='ms-4'>Our Products</a>
                </div>
            </div>

            <div className='half'>
                <img src={pic1} alt="" width="" className='rounded-lg' />
            </div>
        </div>
    )
}

export default Hero