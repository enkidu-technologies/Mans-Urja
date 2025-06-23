'use client';
import React from 'react';

import abt from '../assets/imgs/abt.webp';
import ctpt from '../assets/imgs/ct&pt.jpg';

const products = [
  {
    title: 'ABT Meter',
    image: abt,
    description: 'Accurate metering solutions for open access and grid-connected consumers, ensuring seamless energy monitoring and compliance.',
    url: '/abt-meter',
  },
  {
    title: 'CT & PT',
    image: ctpt,
    description: 'Reliable Current and Potential Transformers that ensure safe, stable, and precise power measurement.',
    url: '/ct-pt',
  },
];

const Products = () => {
  return (
    <section className="products-page py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
            >
              <div className="w-40 h-40 mx-auto mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-full border-4 border-green-600 shadow"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <a
                href={product.url}
                className="btn"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
