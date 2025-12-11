// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <button onClick={() => navigate("/")} className="text-tealmint underline">Back to shop</button>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <nav className="text-sm text-gray-500 mb-6">Home / {product.title}</nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="hidden lg:block col-span-1 space-y-4">
              {product.images.map((src, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`w-full h-20 rounded overflow-hidden border ${activeImage===i ? "ring-2 ring-tealmint" : "border-gray-200"}`}>
                  <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="col-span-1 lg:col-span-5">
              <div className="w-full rounded border border-gray-200 overflow-hidden">
                <img src={product.images[activeImage]} alt={product.title} className="w-full h-[560px] object-cover" />
              </div>
              <div className="mt-6 text-gray-700 text-sm">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <h1 className="text-2xl font-medium text-gray-900 mb-1">{product.title}</h1>
          <div className="text-xs text-gray-500 mb-4">SKU: {product.id}</div>
          <div className="text-2xl font-semibold text-gray-900 mb-6">${product.price.toFixed(2)}</div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Quantity *</label>
            <div className="inline-flex items-center border rounded-md overflow-hidden">
              <button onClick={() => setQty(Math.max(1, qty-1))} className="px-3 py-2">−</button>
              <div className="px-4 py-2 min-w-[48px] text-center">{qty}</div>
              <button onClick={() => setQty(qty+1)} className="px-3 py-2">+</button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex gap-3 items-center">
              <button onClick={() => alert("Add to cart (demo)")} className="flex-1 border border-tealmint text-tealmint px-4 py-3 rounded hover:bg-tealmint hover:text-white">Add to Cart</button>
              <button onClick={() => alert("Buy now (demo)")} className="flex-1 bg-gray-900 text-white px-4 py-3 rounded">Buy Now</button>
            </div>
          </div>

          <div className="mb-6">
            <div className="border-t pt-4 text-sm text-gray-600">
              <h4 className="font-medium mb-2">PRODUCT INFO</h4>
              <p>{product.description}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
