import React from 'react'
import { FaUserTie, FaClock, FaUsers, FaTools, FaHandshake, FaBolt, FaSuitcaseRolling, FaShoppingCart } from "react-icons/fa";


function WhyChooseUs() {


  const features = [
    {
      title: "Professional & Certified",
      description: "Highly trained and certified travel professionals ensuring the best experience.",
      icon: <FaUserTie />,
    },
    {
      title: "24/7 Customer Support",
      description: "We are available round the clock to assist you anytime, anywhere.",
      icon: <FaClock />,
    },
    {
      title: "Team of Experts",
      description: "Experienced professionals who understand travel and customer expectations.",
      icon: <FaUsers />,
    },
    {
      title: "Customized Solutions",
      description: "Tailor-made travel experiences that match your needs and desires.",
      icon: <FaTools />,
    },
    {
      title: "Excellent Supplier Relationships",
      description: "Strong ties with hotels, airlines and other vendors for the best deals.",
      icon: <FaHandshake />,
    },
    {
      title: "Fast & Reliable Service",
      description: "Quick turnaround with a sharp focus on your requirements.",
      icon: <FaBolt />,
    },
    {
      title: "Exclusive Tailor-Made Packages",
      description: "Unique packages designed just for you—no two plans are the same.",
      icon: <FaSuitcaseRolling />,
    },
    {
      title: "Corporate Buying Power",
      description: "Better prices from suppliers thanks to our strong purchase volume.",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Why Choose <span className="text-red-600">FlyHighTourz</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-red-600 text-4xl">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default WhyChooseUs