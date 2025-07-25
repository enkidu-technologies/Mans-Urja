import { BiSupport } from 'react-icons/bi'
import { MdMiscellaneousServices, MdOutlineWorkOutline } from 'react-icons/md'

const OneStop = () => {
    return (
        <div className='text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-24'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4'>
                One Stop Solution
            </h2>
            <p className='text-gray-500 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto'>
                A true One-Stop Solution for everything you require under one roof.
            </p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto'>
                <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100'>
                    <div className='flex justify-center mb-4 sm:mb-6'>
                        <MdOutlineWorkOutline 
                            size={40} 
                            className='text-green-600 sm:w-12 sm:h-12 md:w-14 md:h-14' 
                        />
                    </div>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3'>
                        Experience
                    </h3>
                    <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
                        15+ years of Experience
                    </p>
                </div>
                
                <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100'>
                    <div className='flex justify-center mb-4 sm:mb-6'>
                        <BiSupport 
                            size={40} 
                            className='text-green-600 sm:w-12 sm:h-12 md:w-14 md:h-14' 
                        />
                    </div>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3'>
                        Support
                    </h3>
                    <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
                        Post Sales Support
                    </p>
                </div>
                
                <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 sm:col-span-2 lg:col-span-1'>
                    <div className='flex justify-center mb-4 sm:mb-6'>
                        <MdMiscellaneousServices 
                            size={40} 
                            className='text-green-600 sm:w-12 sm:h-12 md:w-14 md:h-14' 
                        />
                    </div>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3'>
                        Services
                    </h3>
                    <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
                        Single Point Services
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OneStop