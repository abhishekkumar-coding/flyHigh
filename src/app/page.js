import React from 'react'
import Hero from './sections/Hero'
import IndiaDestinations from './sections/IndiaDestinationsIndia'
import InternationalDestinations from './sections/InternationalDestinations'
import BestSellingPackages from './sections/BestSellingPackages'
// import InDemandDestinationsIndia from './sections/InDemandDestinations'

function page() {
  return (
    <div>
      <Hero />
      <IndiaDestinations />
      <InternationalDestinations/>
      <BestSellingPackages/>
      {/* <InDemandDestinationsIndia/> */}
    </div>
  )
}

export default page