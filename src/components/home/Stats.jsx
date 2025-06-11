import React from 'react'
import pic2 from "../../assets/pic2.jpg"

const Stats = () => {
    return (
        <div className='stats' style={{ backgroundImage: `url(${pic2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='stats-content'>
                <p>Our track record</p>
                <h2 className='text-4xl font-bold my-4'>Trusted by thousands of businesses</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit deleniti aspernatur vero ipsum recusandae facere consequuntur distinctio cumque aliquam enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa quasi laboriosam odio vitae sit animi itaque et, at nihil?</p>
                <div className='stats-numbers'>
                    <div className='stat-item'>
                        <h3 className='text-4xl font-bold'>60+</h3>
                        <p>ABT Meter Installation</p>
                    </div>
                    <div className='stat-item'>
                        <h3 className='text-4xl font-bold'>50+</h3>
                        <p>WBA</p>
                    </div>
                    <div className='stat-item'>
                        <h3 className='text-4xl font-bold'>15+</h3>
                        <p>Solar, New Element Charge & C.O.D.</p>
                    </div>
                    <div className='stat-item'>
                        <h3 className='text-4xl font-bold'>14+</h3>
                        <p>CEIG</p>
                    </div>
                    <div className='stat-item'>
                        <h3 className='text-4xl font-bold'>60+</h3>
                        <p>Approval for LTOA Related</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats