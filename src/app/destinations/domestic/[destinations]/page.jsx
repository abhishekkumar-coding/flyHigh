// /app/international/[destination]/page.jsx

import React from 'react';
// import Link from 'next/link';
import DestinationHero from "../../../components/DestinationHero"
import DestinationPackages from '../../../components/DestinationPackages';
import DestinationFaqs from "../../../components/DestinationFaqs"
import EnquiryFrom from "../../../components/EnquiryForm"


export async function generateStaticParams() {
  return [
    { destination: 'ayodhya' },
    { destination: 'kashmie' },
    { destination: 'goa' },
    { destination: 'krala' },
    { destination: 'manali' },
  ];
}

async function getDestinationData(destinations) {
  try {
    const data = await import(`../../../data/destinations/domestic/${destinations}`);
    console.log(data);
    return data.default;
  } catch (error) {
    console.error(`Error loading data for ${destinations}:`, error);
    return null;
  }
}

export default async function Page({ params }) {
  const { destinations } = params;
  console.log(`this is param ${destinations}`);

  const destinationData = await getDestinationData(destinations);

  if (!destinationData) {
    return <div className="text-center text-red-500">Destination not found</div>;
  }

  return (
    <div className='w-full'>
      <DestinationHero heroText={destinationData} />
      {destinationData.packages ? destinationData.packages.map((pkg, ind) => (
        <DestinationPackages key={ind} pkgData={pkg} destination={destinations} />
      )) : <EnquiryFrom/>}
    </div>
  );
}
