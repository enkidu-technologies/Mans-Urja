'use client';
import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { IoTimeSharp } from 'react-icons/io5';

const Contact = () => {
  return (
    <section className="contact-page py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need assistance? We're here to help you with all your energy needs.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            {/* Address Section */}
            <div className="flex gap-4 items-start">
              <MdLocationOn className="text-3xl text-green-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-green-700 mb-2">Our Offices</h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <h4 className="font-bold">Registered Office:</h4>
                    <p>H No. 12, First Floor Vill Adhichini, New Delhi, North East DL 110017</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Corporate Office:</h4>
                    <p>FF-46 River Heights Regalia, Rajnagar Extn, Ghaziabad 201017</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <MdPhone className="text-2xl text-green-600 mt-1" />
              <div>
                <h3 className="text-md font-semibold mb-1">Phone</h3>
                {/* <p className="text-green-600 font-medium">+91 95173 56969</p> */}
                <p className="text-green-600 font-medium">+91 83181 78822</p>
                <p className="text-green-600 font-medium">+91 83686 44748</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <MdEmail className="text-2xl text-green-600 mt-1" />
              <div>
                <h3 className="text-md font-semibold mb-1">Email</h3>
                <p className="text-green-600 font-medium">sales@mansurja.com</p>
                <p className="text-green-600 font-medium">info@mansurja.in</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4 items-start">
              <IoTimeSharp className="text-2xl text-green-600 mt-1" />
              <div>
                <h3 className="text-md font-semibold mb-1">Working Hours</h3>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-green-700">Send Us a Message</h2>
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
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
