// import React from "react";

// export default function ProductCard({ src, title, price }) {
//   return (
//     <div className="group bg-white">
//       <div className="overflow-hidden">
//         <img src={src} alt={title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
//       </div>
//       <div className="text-center py-6">
//         <h3 className="text-lg font-medium text-gray-700">{title}</h3>
//         <div className="mt-2 text-gray-500">{price}</div>
//       </div>
//     </div>
//   );
// }



// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, src, title, price }) {
  return (
    <Link to={`/product/${id}`} className="group block bg-white hover:shadow-md transition-shadow">
      <div className="overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center py-6">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <div className="mt-2 text-gray-500">${price}</div>
      </div>
    </Link>
  );
}
