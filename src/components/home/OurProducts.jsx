import React from 'react';
import abt from "../../assets/imgs/abt.webp";
import ctpt from "../../assets/imgs/ct&pt.jpg";

const OurProducts = () => {
    return (
        <section className='our-products py-16 px-6 md:px-16 bg-white text-center'>
            <h2 className='text-4xl font-bold mb-14 text-gray-800'>Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 justify-items-center">
                {/* ABT Meter */}
                <div className='bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 max-w-xs'>
                    <div className='w-40 h-40 mx-auto mb-6'>
                        <img src={abt} alt="ABT Meter" className='w-full h-full object-cover rounded-full border-4 border-green-600 shadow-md' />
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-3'>ABT Meter</h3>
                    <p className='text-gray-600 mb-4 text-sm'>Precision-engineered ABT meters for energy monitoring in industrial and commercial sectors.</p>
                    <a href="#" className='btn'>View More</a>
                </div>

                {/* CT & PT */}
                <div className='bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 max-w-xs'>
                    <div className='w-40 h-40 mx-auto mb-6'>
                        <img src={ctpt} alt="CT & PT" className='w-full h-full object-cover rounded-full border-4 border-green-600 shadow-md' />
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-3'>CT & PT</h3>
                    <p className='text-gray-600 mb-4 text-sm'>Reliable and safe Current and Potential Transformers for all voltage class needs.</p>
                    <a href="#" className='btn'>View More</a>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
