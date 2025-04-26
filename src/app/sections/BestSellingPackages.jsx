import React from 'react'

const domesticPackages = [
  {
    title: 'Kashmir Delight',
    location: 'Kashmir, India',
    duration: '5 Nights / 6 Days',
    price: '₹25,000',
    image: 'kashmir_2.jpeg',
  },
  {
    title: 'Goa Getaway',
    location: 'Goa, India',
    duration: '3 Nights / 4 Days',
    price: '₹15,000',
    image: 'goa_2.jpeg',
  },
  {
    title: 'Kerala Escape',
    location: 'Kerala, India',
    duration: '4 Nights / 5 Days',
    price: '₹22,000',
    image: 'kerala_2.jpeg',
  },
]

const internationalPackages = [
  {
    title: 'Maldives Honeymoon',
    location: 'Maldives',
    duration: '4 Nights / 5 Days',
    price: '₹60,000',
    image: 'maldieve_2.jpeg',
  },
  {
    title: 'Dubai Explorer',
    location: 'Dubai, UAE',
    duration: '5 Nights / 6 Days',
    price: '₹55,000',
    image: 'dubai_2.jpeg',
  },
  {
    title: 'Thailand Tour',
    location: 'Thailand',
    duration: '6 Nights / 7 Days',
    price: '₹50,000',
    image: 'thailand_2.jpeg',
  },
]

function BestSellingPackages() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-left mb-12">Best Selling Packages</h2>

        {/* Domestic Packages */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Domestic Packages</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domesticPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
              >
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="text-lg font-semibold">{pkg.title}</h4>
                  <p className="text-gray-600 text-sm">{pkg.location}</p>
                  <p className="text-sm text-gray-500">{pkg.duration}</p>
                  <p className="text-blue-600 font-bold">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Packages */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">International Packages</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internationalPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
              >
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="text-lg font-semibold">{pkg.title}</h4>
                  <p className="text-gray-600 text-sm">{pkg.location}</p>
                  <p className="text-sm text-gray-500">{pkg.duration}</p>
                  <p className="text-blue-600 font-bold">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellingPackages
