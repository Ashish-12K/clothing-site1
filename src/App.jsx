// import React from "react";
// import Nav from "./components/Nav";
// import Hero from "./components/Hero";
// import ProductsGrid from "./components/ProductsGrid";
// import Newsletter from "./components/NewsLetter";
// import ChatButton from "./components/ChatButton";
// import Footer from "./components/Footer";
// import "./index.css";

// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <Nav />
//       <main>
//         <Hero />
//         <ProductsGrid />
//         <Newsletter />
//         {/* <Footer /> */}
//       </main>

//       <Footer />
//       <ChatButton />
//     </div>
//   );
// }



// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import Newsletter from "./components/NewsLetter";
import ChatButton from "./components/ChatButton";
import Footer from "./components/Footer";

import ProductDetail from "./pages/ProductDetail";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Nav />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProductsGrid />
                <Newsletter />
              </>
            } />

            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="*" element={<div className="max-w-4xl mx-auto px-6 py-24 text-center">Page not found</div>} />
          </Routes>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </BrowserRouter>
  );
}

