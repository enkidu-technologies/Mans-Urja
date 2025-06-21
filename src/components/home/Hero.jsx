import React from 'react';
// import pic1 from '../../assets/imgs/pic1.jpg';
import vid1 from "../../assets/vids/video1.mp4";

const Hero = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden'>

            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className='p-16 hero-section relative z-10 flex flex-col md:flex-row items-center justify-between h-full text-white'>
                <div className=''>
                    <h1 className='text-7xl font-bold my-10'>Mans Urja Private Limited</h1>
                    <p className='text-justify text-xl mb-10'>
                        At Mans, we have helped organizations to obtain various monetary benefits by our advice and consultancy services. We have been instrumental in executing open access transaction in Uttar Pradesh where we provide end-to-end services for our customers.
                    </p>
                    <div>
                        <a href="/about" className='btn bg-orange-600 px-4 py-2 rounded text-white'>About Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
