import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-brandbg py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="h-headline text-4xl mb-6">Never miss our updates about new arrivals and special offers</h3>
        <form className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <input type="email" placeholder="Enter your email here *" className="w-full md:flex-1 p-4 bg-white/80 border-b border-gray-400" />
          <button className="px-8 py-3 bg-darkblock text-white">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
}

