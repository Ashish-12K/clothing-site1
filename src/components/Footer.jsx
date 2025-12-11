// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer-light text-gray-900">

  <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
    
    {/* Brand */}
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-tealmint grid place-items-center font-bold text-darkblock">J</div>
        <div>
          <div className="text-lg font-semibold">JUD.</div>
          <div className="text-sm text-light-muted">Minimal fashion — seasonal drops & limited runs.</div>
        </div>
      </div>

      <p className="mt-6 text-sm text-light-muted max-w-sm">
        Designed and curated with attention to fabric and silhouette. Portfolio store built with React + Tailwind.
      </p>

      <div className="mt-6 flex items-center gap-3">
        {/* Social icons (visible on light footer) */}
        <div className="mt-6 flex items-center gap-3">
          <a aria-label="Instagram" href="#" className="p-2 rounded-md bg-black/5 hover:bg-black/10 text-gray-900">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 3.3A5.7 5.7 0 1 0 17.7 11 5.71 5.71 0 0 0 12 5.3zM18.7 6.1a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z" />
            </svg>
          </a>

          <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-black/5 hover:bg-black/10 text-gray-900">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 7.5c-.6.3-1.2.5-1.9.6a3.2 3.2 0 0 0-5.5 2.9 9.2 9.2 0 0 1-6.7-3.4 3.2 3.2 0 0 0 1 4.3c-.5 0-1-.2-1.5-.4v.1a3.2 3.2 0 0 0 2.6 3.1c-.5.2-1 .2-1.6.1a3.2 3.2 0 0 0 3 2.2A6.4 6.4 0 0 1 4 18.6 9.1 9.1 0 0 0 9.6 20c6.1 0 9.4-5 9.4-9.3v-.4c.6-.4 1.1-.8 1.6-1.3-.6.3-1.2.5-1.9.6z" />
            </svg>
          </a>

          <a aria-label="Pinterest" href="#" className="p-2 rounded-md bg-black/5 hover:bg-black/10 text-gray-900">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 3.8 19.4c-.1-.8-.3-2-.5-2.9-.5-1.9 0-4.1 3-4 2.2 0 3.1 1.6 3.1 3.5 0 2.3-1.5 4.5-4.6 4.5-2.2 0-3.7-1.5-3.4-3.5.6-3.8 2.2-6.6 2.2-9.3 0-3.1-2.3-5.6-5.6-5.6S6 5.9 6 9.1c0 1.2.4 2.2 1.2 2.9.3.3.3.5.2.9-.1.4-.4 1.4-.6 1.9-.2.6-.6 1.3-.9 1.8-.3.5-.1.9.4.7 1.7-.7 3-2.5 3.2-4.4.1-.8.3-1.6.5-2.4.1-.4.1-.8 0-1.2-.2-.6-.8-1.1-1.5-1.1-1 0-1.9.9-1.9 1.9 0 .5.2 1 .5 1.4.1.2.2.2.3.1.1-.1.3-.3.4-.4.2-.2.4-.4.7-.4.2 0 .3.1.4.3.1.3-.1 1.3-.2 1.7-.2.6-.5 1.2-.8 1.7-.4.6-.2 1.2.4.9 2.3-1 3.7-3.3 3.7-6.1C18.9 6.3 16 3.5 12 3.5z" />
            </svg>
          </a>
        </div>

      </div>
    </div>

    {/* Links */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Shop</h4>
        <ul className="text-sm text-light-muted space-y-2">
          <li><a href="#shop" className="hover:underline">New arrivals</a></li>
          <li><a href="#shop" className="hover:underline">Best sellers</a></li>
          <li><a href="#shop" className="hover:underline">Collections</a></li>
          <li><a href="#shop" className="hover:underline">Gift cards</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Company</h4>
        <ul className="text-sm text-light-muted space-y-2">
          <li><a href="#about" className="hover:underline">About us</a></li>
          <li><a href="#press" className="hover:underline">Press</a></li>
          <li><a href="#careers" className="hover:underline">Careers</a></li>
          <li><a href="#sustainability" className="hover:underline">Sustainability</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Help</h4>
        <ul className="text-sm text-light-muted space-y-2">
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
          <li><a href="#shipping" className="hover:underline">Shipping</a></li>
          <li><a href="#returns" className="hover:underline">Returns</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <h4 className="text-sm font-medium text-gray-900 mb-3">Join our newsletter</h4>
      <p className="text-sm text-light-muted">
        Sign up to receive early access to sales, styling tips, and behind-the-scenes.
      </p>

      <form className="mt-4 flex gap-2">
        <input
          id="footer-email"
          type="email"
          placeholder="Your email"
          className="flex-1 min-w-0 px-4 py-3 rounded-md bg-black/5 placeholder:text-light-muted focus:outline-none focus:ring-2 focus:ring-tealmint"
        />
        <button type="submit" className="px-4 py-3 rounded-md bg-tealmint text-gray-900 font-semibold">Subscribe</button>
      </form>

      <div className="mt-6 text-xs text-light-muted">
        <div>Free shipping on orders over ₹4,999</div>
        <div className="mt-3">Secure payments • Easy returns</div>
      </div>
    </div>

  </div>

  <div className="border-t border-black/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-light-muted">
      <div>© {new Date().getFullYear()} JUD. — Built with ♥</div>
      <div className="mt-3 md:mt-0 flex items-center gap-4">
        <a href="#terms" className="hover:underline">Terms</a>
        <a href="#privacy" className="hover:underline">Privacy</a>
        <a href="#cookies" className="hover:underline">Cookies</a>
      </div>
    </div>
  </div>

</footer>

  );
}
