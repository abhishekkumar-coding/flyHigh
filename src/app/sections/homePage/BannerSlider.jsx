"use client";
import Image from "next/image";

const bannerImages = [
  "/banner_2.jpeg",
  "/banner_3.jpeg",
  "/banner_3.jpeg"
];

export default function BannerSlider() {
  return (
    <section className="relative w-full overflow-hidden border border-purple-600 bg-gray-100 py-4">
      <div className="flex w-max">
        {[...bannerImages, ...bannerImages].map((img, index) => (
          <div
            key={index}
            className="relative min-w-full h-[400px] sm:h-[500px]"
          >
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
