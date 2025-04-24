import React from 'react'
import Hero from './sections/Hero'
import IndiaDestinations from './sections/IndiaDestinationsIndia'
import InternationalDestinations from './sections/InternationalDestinations'
import InDemandDestinationsIndia from './sections/InDemandDestinations'

function page() {
  return (
    <div>
      <Hero />
      <IndiaDestinations />
      <InternationalDestinations/>
      <InDemandDestinationsIndia/>
    </div>
  )
}

export default page