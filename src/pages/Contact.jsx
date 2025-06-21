'use client';
import React from 'react';

const Contact = () => {
  return (
    <section className="contact-page py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need assistance? We're here to help you with all your energy needs.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-green-600 font-semibold mb-2">Mans Urja Private Limited</h2>
              <h4 className='font-bold'>Registered Office:</h4>
              <p> H No. 12, First floor vill. Adhichini, New Delhi North East DL</p>
              <p>PIN: 110017</p>
              <h4 className='font-bold'>Corporate Office:</h4>
              <p>B 97, 1st floor, Vibhuti khand near UPNEDA, Gomti Nagar, Lucknow</p>
              <p>PIN: 226010</p>
              <h4 className='font-bold'>Branch Office:</h4>
              <p>Bokta Chowk, Piprouli Road, Plot no. AL 6/A, Sec-13, Gida, Gorakhpur</p>
              <p>PIN: 273209</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-green-600 font-semibold">+91 95173 56969</p>
              <p className="text-green-600 font-semibold">+91 83686 44748</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-green-600 font-semibold">sales@mansurja.com</p>
            </div>
            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-green-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border rounded-lg focus:outline-green-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full p-3 border rounded-lg focus:outline-green-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
