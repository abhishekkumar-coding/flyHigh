import React from 'react'
import DestinationHero from '@/app/components/DestinationHero'
import DestinationPackages from '@/app/components/DestinationPackages';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function page() {

  const heroText = {
    image: "/goa/goa_bg.jpg",
    title: "Discover the Vibrant Vibes of Goa",
    description:
      "From sun-kissed beaches to historic forts and lively nightlife, Goa offers the perfect blend of relaxation and adventure. Dive into the coastal charm and experience the spirit of freedom.",
  };

  const goaPackages = [
    {
      id: 1,
      image: "/goa/goa_card_1.jpeg",
      title: "Goa Beach Escape Tour",
      description: "A 4 Nights / 5 Days fun-filled getaway to Goa's famous beaches, historic forts, vibrant nightlife, and delicious seafood. Includes guided sightseeing, beach activities, and cozy stays.",
      amenities: ["Hotel", "Meal", "Guide", "Cab"],
      price: 14999,
      link: "/destinations/domestic/goa/package1",
    }
  ];


  const faqs = [
    {
      question: "Is transportation included in the Goa packages?",
      answer:
        "Yes, our Goa packages typically include airport pickup/drop and local transfers for sightseeing. Please refer to the specific package details.",
    },
    {
      question: "What is the best time to visit Goa?",
      answer:
        "The best time to visit Goa is from November to February when the weather is ideal for beach activities and festivals like Sunburn and New Year&rsquo;s Eve celebrations.",
    },
    {
      question: "Are meals included in the Goa packages?",
      answer:
        "Most packages include breakfast and selected meals. Kindly check the inclusions section of your chosen package for exact details.",
    },
    {
      question: "Are the Goa packages suitable for families?",
      answer:
        "Yes, we offer family-friendly packages with safe accommodations, guided tours, and activities suitable for all age groups.",
    },
    {
      question: "Can I customize my Goa trip?",
      answer:
        "Absolutely! We offer customizable itineraries based on your interests, whether it's a romantic getaway, adventure trip, or cultural exploration.",
    }
  ];


  return (
    <div className='w-full '>
      <DestinationHero heroText={heroText} />
      {
        goaPackages.map((pkg, ind) => (
          <DestinationPackages key={ind} pkgData={pkg} />
        ))
      }
      <DestinationFaqs faqs={faqs} />

    </div>
  )
}

export default page