import React from 'react'
import Hero from './sections/homePage/Hero'
import IndiaDestinations from './sections/homePage/IndiaDestinationsIndia'
import InternationalDestinations from './sections/homePage/InternationalDestinations'
import BestSellingPackages from './sections/homePage/BestSellingPackages'
// import InDemandDestinationsIndia from './sections/InDemandDestinations'

function page() {
  return (
    <div>
      <Hero />
      <InternationalDestinations/>
      <IndiaDestinations />
      <BestSellingPackages/>
      {/* <InDemandDestinationsIndia/> */}
    </div>
  )
}

export default page