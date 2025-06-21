import React from 'react';
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
            className='stats text-white py-16 px-8'
            style={{
                backgroundImage: `url(${pic2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            ref={ref}
        >
            <div className='stats-content text-center max-w-5xl mx-auto bg-black bg-opacity-60 p-8 rounded-lg'>
                <p className='text-lg'>Our track record</p>
                <h2 className='text-4xl font-bold my-4'>Trusted by thousands of businesses</h2>

                <div className='stats-numbers grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8'>
                    {[
                        { number: 60, label: "ABT Meter Installation" },
                        { number: 50, label: "WBA" },
                        { number: 15, label: "Solar, New Element Charge & C.O.D." },
                        { number: 14, label: "CEIG" },
                        { number: 60, label: "Approval for LTOA Related" }
                    ].map((item, index) => (
                        <div key={index} className='stat-item'>
                            <h3 className='text-4xl font-bold'>
                                {inView ? <CountUp end={item.number} duration={5} /> : 0}+
                            </h3>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
