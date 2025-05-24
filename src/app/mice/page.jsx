'use client';

export default function MicePage() {
  return (
    <main className="text-gray-800 bg-white">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/your-hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">MICE Solutions by Fly High Tour</h1>
          <p className="text-xl md:text-2xl">Empowering Businesses Through Exceptional Events</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition">
            Get a Quote
          </button>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Meetings",
              description: "Professional settings for brainstorming, strategy, and executive sessions.",
            },
            {
              title: "Incentives",
              description: "Exclusive programs with unique destinations to reward top performers.",
            },
            {
              title: "Conferences",
              description: "Full-scale coordination with tech, logistics, and audience engagement.",
            },
            {
              title: "Events",
              description: "Product launches, gala nights, and corporate celebrations with flair.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Destinations That Inspire</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            From tranquil beaches to bustling cities, scenic retreats to historic landmarks —
            our destinations are selected to elevate every MICE experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Beaches", "Cityscapes", "Scenic Retreats", "Historical Marvels"].map((dest, idx) => (
              <span key={idx} className="px-5 py-2 bg-orange-100 text-orange-600 rounded-full font-medium">
                {dest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Fly High Tour?</h2>
        <ul className="space-y-4 text-gray-700">
          {[
            "Tailored Solutions Customized plans that meet your unique objectives.",
            "Global Reach Access to elite venues and services worldwide.",
            "Technology-Driven &ndash; Real-time coordination and smart tools.",
            "Experienced Team &ndash; Deep MICE industry expertise.",
            "Cost Efficiency &ndash; Competitive pricing with premium quality.",
          ].map((reason, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">✓</span>
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Comprehensive MICE Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {[
            "Strategic venue selection and contract negotiation",
            "End-to-end travel and accommodation arrangements",
            "Bespoke event branding and creative design",
            "On-site coordination and logistics management",
            "Post-event analysis with ROI reporting",
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Elevate Your Next Corporate Event</h2>
        <p className="mb-6 text-lg">
          Partner with Fly High Tour to turn your corporate vision into reality. We&apos;re with you—every step of the journey.
        </p>
        <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>

    </main>
  );
}
