// import React from "react";
// import ProductCard from "./ProductCard";

// const PRODUCTS = [
//   { id:1, src:"/assets/prod-1.jpg", title:"I'm a product", price:"$150.00"},
//   { id:2, src:"/assets/prod-2.jpg", title:"I'm a product", price:"$150.00"},
//   { id:3, src:"/assets/prod-3.jpg", title:"I'm a product", price:"$160.00"},
//   { id:4, src:"/assets/prod-4.jpg", title:"I'm a product", price:"$170.00"},
//   { id:5, src:"/assets/prod-5.jpg", title:"I'm a product", price:"$140.00"},
//   { id:6, src:"/assets/prod-6.jpg", title:"I'm a product", price:"$130.00"},
//   { id:7, src:"/assets/prod-7.jpg", title:"I'm a product", price:"$145.00"},
//   { id:8, src:"/assets/prod-8.jpg", title:"I'm a product", price:"$155.00"}
// ];

// export default function ProductsGrid() {
//   return (
//     <section id="shop" className="max-w-7xl mx-auto px-6 py-20">
//       <h2 className="h-headline text-5xl text-center text-tealmint mb-10">Explore the Collection</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {PRODUCTS.map(p => <ProductCard key={p.id} {...p} />)}
//       </div>
//     </section>
//   );
// }



// src/components/ProductsGrid.jsx
import React from "react";
import PRODUCTS from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl mb-8 text-center">Explore the Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} id={p.id} src={p.src} title={p.title} price={p.price} />
        ))}
      </div>
    </section>
  );
}
