import React from 'react'
import abt from "../../assets/abt.webp"
import ctpt from "../../assets/ct&pt.jpg"

const OurProducts = () => {
    return (
        <div className='our-products'>
            <h2 className='text-4xl font-bold my-4'>Our Products</h2>
            <div className="products-list">
                <div className='product-item my-4'>
                    <img src={abt} alt="" />
                    <h3 className='text-2xl my-5 font-bold'>ABT Meter</h3>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci incidunt asperiores.</p>
                    <a href="" className='btn'>View more</a>
                </div>
                <div className='product-item my-4'>
                    <img src={ctpt} alt="" />
                    <h3 className='text-2xl my-5 font-bold'>CT & PT</h3>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci incidunt asperiores.</p>
                    <a href="" className='btn'>View more</a>
                </div>
            </div>
        </div>
    )
}

export default OurProducts