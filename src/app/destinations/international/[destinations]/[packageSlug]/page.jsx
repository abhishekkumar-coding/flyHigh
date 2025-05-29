import React from 'react'
import PackageHero from '../../../../components/PackageHero';

async function getDestinationDetails(destination) {
  try {
    const data = await import(`../../../../data/destinations/international/${destination}`);
    return data.default;
  } catch (error) {
    console.error(`Error loading data for ${destination}:`, error);
    return null;
  }
}
// export async function generateStaticParams() {
//     const destinations = ['dubai', 'maldives', 'vietnam', 'bali', 'singapore'];
//     let params = []
//     for (const dest of destinations) {
//         const data = await import(`../../../../data/destinations/international/${dest}`)
//         const packages = data.default.packages || ""

//         packages.forEach(pkg => {
//             params.push({
//                 destination: dest,
//                 packageSlug: pkg.slug,
//             })
//         });
//     }
//     return params
// }


async function PackagePage({ params }) {

    const { destinations, packageSlug } = params
    console.log(destinations, packageSlug)

    const destinationData = await getDestinationDetails(destinations)
    
    console.log(`destination data ${destinationData}`)

    if (!destinationData) {
        return <div className="text-center text-red-500">Destination not found</div>;
    }
    console.log(destinationData)

    console.log(destinationData.packages[0].slug)
    
    const packageData = destinationData.packages.find(pkg => pkg.slug === packageSlug);

    console.log(packageData)

    if (!packageData) {
        return <div className="text-center text-green-500">Package not found</div>;
    }

    return (
        <div className='w-full'>
            <PackageHero packageData={packageData}/>
        </div>
    )
}

export default PackagePage