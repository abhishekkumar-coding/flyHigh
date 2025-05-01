import React from 'react'

function PackageFlyHigh() {
  return (
    <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-4">Why Choose FlyHigh?</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Trusted by thousands of travelers, we deliver unforgettable, safe, and affordable experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-yellow-600 text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600">We guarantee competitive pricing on all our packages without compromising on quality.</p>
            </div>

            <div className="bg-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-yellow-600 text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always available to assist you — before, during, and after your journey.</p>
            </div>

            <div className="bg-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-yellow-600 text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Curated Experiences</h3>
              <p className="text-gray-600">Only the most authentic and highly-rated experiences make it to our list.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PackageFlyHigh