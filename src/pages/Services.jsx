import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { allServices } from "../data/servicesData";

const tabs = Object.keys(allServices);

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = tabs.includes(searchParams.get("state"))
    ? searchParams.get("state")
    : "Uttar Pradesh";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const services = allServices[activeTab];

  return (
    <section className="services-page py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">
          Our Services
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4 space-x-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearchParams({ state: tab });
              }}
              className={`px-6 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200 ${activeTab === tab
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-400 hover:bg-green-50"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {services.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-semibold text-green-700 mb-6 border-l-4 border-green-600 pl-3">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.items.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <service.icon className="text-5xl text-green-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
