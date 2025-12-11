import React from "react";

/* Large overlapping hero with center CTA */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-12 gap-6 items-center">
        {/* left big image */}
        <div className="md:col-span-7">
          <div className="relative">
            <img src="/assets/hero-large.jpg" alt="hero big" className="w-full h-[720px] hero-image-large rounded-sm shadow-md" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* decorative label (optional) */}
            </div>
          </div>
        </div>

        {/* right small image and text, visually aligned lower like screenshot */}
        <div className="md:col-span-5 pl-10">
          <div className="w-full max-w-sm ml-auto transform translate-y-24 md:translate-y-28">
            <img src="/assets/hero-small.jpg" alt="hero small" className="w-full h-72 hero-image-small rounded-sm shadow" />
            <div className="mt-6 text-right">
              <h1 className="h-headline text-5xl md:text-6xl font-light leading-tight">ANNA STONE & <span className="font-bold">JUD.</span></h1>
              <p className="mt-4 text-gray-500">Introducing the Capsule Collection</p>
              <div className="mt-6 flex justify-end">
                <a href="#shop" className="px-8 py-3 bg-darkblock text-white inline-block">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
