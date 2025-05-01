import React from 'react'

function PackageInclusions({inclusions}) {
  return (
    <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">What’s Included</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-all duration-200 p-5 rounded-2xl shadow-sm flex items-center gap-3"
              >
                <div className="text-green-500 text-xl">
                  ✔
                </div>
                <div className="text-gray-800 font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PackageInclusions