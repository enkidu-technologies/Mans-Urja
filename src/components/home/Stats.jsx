import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import pic2 from "../../assets/imgs/pic2.jpg";

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // count up only once when in view
        threshold: 0.3,    // how much of the element should be visible (30%)
    });

    return (
        <div
            className='relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8'
            style={{
                backgroundImage: `url(${pic2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
            ref={ref}
        >
            {/* Bright overlay for modern look */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 " />

            <div className='relative z-10 text-center max-w-7xl mx-auto bg-white/20 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl'>
                <p className='text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-slate-700 font-medium'>
                    Our track record
                </p>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-slate-800'>
                    Trusted by thousands of businesses
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8'>
                    {[
                        { number: 60, label: "ABT Meter Installation" },
                        { number: 50, label: "WBA" },
                        { number: 15, label: "Solar, New Element Charge & C.O.D." },
                        { number: 14, label: "CEIG" },
                        { number: 60, label: "Approval for LTOA Related" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className='bg-white/30 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/40 hover:bg-white/40 transition-all duration-500 hover:scale-110 hover:shadow-xl group'
                        >
                            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2 sm:mb-3 group-hover:text-green-500 transition-colors duration-300'>
                                {inView ? <CountUp end={item.number} duration={3} /> : 0}+
                            </h3>
                            <p className='text-xs sm:text-sm md:text-base leading-tight text-slate-700 font-medium group-hover:text-slate-600 transition-colors duration-300'>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;