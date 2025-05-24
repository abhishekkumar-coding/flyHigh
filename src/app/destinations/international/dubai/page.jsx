import DestinationHero from '@/app/components/DestinationHero';
import DestinationPackages from '@/app/components/DestinationPackages';
import React from 'react';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function Dubai() {
  const dubaiPackages = [
    {
  id: 1,
  image: "/dubai/dubai_pkg_card_1.png",
  title: "Dubai Delights: 5D/4N",
  duration: "5 Days / 4 Nights",
  isCustomizable: true,
  actualPrice: 30999,
  olderPrice: 35999,
  discount: 0,
  hotelName: "Grand Excelsior Hotel Bur Dubai",
  hotelStars: 4,
  link: "/destinations/international/dubai/dubai_package_1"
},
{
  id: 2,
  image: "/dubai/dubai_pkg_card_2.png",
  title: "Escape to Dubai",
  duration: "5 Days / 4 Nights",
  isCustomizable: true,
  actualPrice: 21999,
  olderPrice: 24999,
  discount: 0,
  hotelName: "Citymax Hotel Bur Dubai",
  hotelStars: 3,
  link: "/destinations/international/dubai/dubai_package_2"
}

  ];

  const additionalPackages = [
    {
      id: 2,
      image: "/dubai/burj_1.jpeg",
      title: "Dubai Escapade: Adventure, Luxury & Skyline Views!",
      description: "S4 nights of luxury in Dubai with iconic views, thrilling desert safari, Burj Khalifa visit, dhow cruise dinner, and seamless visa & transfers.",
      amenities: ["Entry Ticket", "Guide", "Wi-Fi"],
      price: 21999,
      link: "/destinations/international/dubai/dubai_adventures"
    }
  ];

  const heroText = {
    image: "/dubai/dubai_hero_bg_1.png",
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
