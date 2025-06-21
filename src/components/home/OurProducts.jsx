import React from 'react';
import abt from "../../assets/imgs/abt.webp";
import ctpt from "../../assets/imgs/ct&pt.jpg";

const OurProducts = () => {
    return (
        <section className='py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 to-gray-100 text-center'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-14 text-gray-800'>
                    Our Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
                    {/* ABT Meter */}
                    <div className='bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-sm lg:max-w-md hover:scale-105 group border border-gray-100'>
                        <div className='w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto mb-4 sm:mb-6 overflow-hidden'>
                            <img 
                                src={abt} 
                                alt="ABT Meter" 
                                className='w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg group-hover:border-green-600 transition-colors duration-300' 
                            />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300'>
                            ABT Meter
                        </h3>
                        <p className='text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed px-2'>
                            Precision-engineered ABT meters for energy monitoring in industrial and commercial sectors.
                        </p>
                        <button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base'>
                            View More
                        </button>
                    </div>

                    {/* CT & PT */}
                    <div className='bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-sm lg:max-w-md hover:scale-105 group border border-gray-100'>
                        <div className='w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto mb-4 sm:mb-6 overflow-hidden'>
                            <img 
                                src={ctpt} 
                                alt="CT & PT" 
                                className='w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg group-hover:border-green-600 transition-colors duration-300' 
                            />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300'>
                            CT & PT
                        </h3>
                        <p className='text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed px-2'>
                            Reliable and safe Current and Potential Transformers for all voltage class needs.
                        </p>
                        <button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base'>
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;