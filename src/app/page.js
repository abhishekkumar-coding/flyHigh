import React from 'react'
import Hero from './sections/homePage/Hero'
import IndiaDestinations from './sections/homePage/IndiaDestinationsIndia'
import InternationalDestinations from './sections/homePage/InternationalDestinations'
import BestSellingPackages from './sections/homePage/BestSellingPackages'
import TopDestinations from './sections/homePage/TopDestinations'
import TopDubaipackages from './sections/homePage/InternationalDestinations'
import DiscoverByInterest from './sections/homePage/DiscoverByInterest'
import WhyChooseUs from './sections/homePage/WhyChooseUs'
import BannerSlider from './sections/homePage/BannerSlider'
// import InDemandDestinationsIndia from './sections/InDemandDestinations'

function page() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <TopDestinations/>
      <TopDubaipackages/>
      <DiscoverByInterest/>
      {/* <BannerSlider/> */}
      <IndiaDestinations />
      <BestSellingPackages/>
      <WhyChooseUs/>
      {/* <InDemandDestinationsIndia/> */}
    </div>
  )
}

export default page