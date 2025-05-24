import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import { dubaiPackages } from '@/app/data/packages/dubaiPackages';
import React from 'react';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function Dubai() {
  const heroText = {
    image: "/dubai_imgs/dubai_bg_1.jpeg",
    title: "Discover the Magic of Dubai",
    description:
      "Experience the perfect blend of tradition and modern marvels in the heart of the UAE. From towering skyscrapers to golden deserts, Dubai offers an unforgettable adventure.",
  };
  const faqs = [
    {
      question: "Is the Dubai visa included in the package?",
      answer:
        "Yes, the tourist visa is included in most packages. However, always check the inclusions to be sure.",
    },
    {
      question: "What is the best time to visit Dubai?",
      answer:
        "The best time to visit is between November and March when the weather is pleasant for sightseeing.",
    },
    {
      question: "Are flights included in this package?",
      answer:
        "Most packages do not include flights by default, but we can help you book them separately.",
    },
    {
      question: "Is this package suitable for families with kids?",
      answer:
        "Absolutely. Dubai offers many family-friendly attractions like theme parks, aquariums, and beaches.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 15 days prior to departure are eligible for a full refund minus processing fees.",
    },
  ];
  return (
    <div className='w-full'>
      <DestinationHero heroText={heroText} />
      {dubaiPackages.map((pkg, ind) => (
        <DestinationPackages key={ind} pkgData={pkg} />
      ))}
      <DestinationFaqs faqs={faqs}/>
    </div>
  );
}

export default Dubai;
