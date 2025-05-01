import Dubai_hero from '@/app/sections/dubai/Dubai_hero';
import DubaiPackagesSection from '@/app/sections/dubai/DubaiPackagesSection';
import { dubaiPackages } from '@/app/data/packages/dubaiPackages';
import React from 'react';
import DestinationFaqs from '@/app/components/DestinationFaqs';

function Dubai() {
  return (
    <div className='w-full'>
      <Dubai_hero />
      {dubaiPackages.map((pkg, ind) => (
        <DubaiPackagesSection key={ind} pkgData={pkg} />
      ))}
      <DestinationFaqs/>
    </div>
  );
}

export default Dubai;
