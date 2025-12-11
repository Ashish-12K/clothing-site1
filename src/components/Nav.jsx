// src/components/Nav.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef(null);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // when opening, focus first link
  useEffect(() => {
    if (open) {
      // small timeout to wait for transition
      setTimeout(() => firstLinkRef.current?.focus(), 120);
      // prevent page scrolling while drawer open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const navLinks = [
    { label: "SHOP", to: "/#shop" },
    { label: "ABOUT", to: "/#about" },
    { label: "FAQ", to: "/#faq" },
    { label: "CONTACT", to: "/#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-tealmint text-2xl font-bold">
              J U D<span className="text-tealmint">.</span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex gap-8 text-sm text-gray-600">
              {navLinks.map((l) => (
                <a key={l.label} href={l.to} className="hover:text-gray-900">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm text-gray-600">FREE SHIPPING WORLDWIDE</div>
            <button className="hidden md:inline-block px-4 py-2 border rounded text-sm">Log In</button>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="ml-2 p-2 rounded-md md:hidden hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Side drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link to="/" onClick={() => setOpen(false)} className="text-tealmint text-2xl font-bold">
            J U D<span className="text-tealmint">.</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="px-6 py-6 space-y-4" aria-label="Mobile primary">
          {navLinks.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              ref={i === 0 ? firstLinkRef : null}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-gray-900 hover:text-tealmint focus:outline-none focus:ring-2 focus:ring-tealmint/40 rounded px-2 py-2"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 mt-4 border-t pt-4">
          <button className="w-full text-left px-4 py-2 rounded-md border">Log in</button>
          <div className="mt-4 text-sm text-gray-600">FREE SHIPPING WORLDWIDE</div>
        </div>

        {/* optional footer links in drawer */}
        <div className="mt-auto px-6 py-6 border-t text-sm text-gray-600">
          <a href="#terms" className="block py-1 hover:underline" onClick={() => setOpen(false)}>Terms</a>
          <a href="#privacy" className="block py-1 hover:underline" onClick={() => setOpen(false)}>Privacy</a>
        </div>
      </aside>
    </>
  );
}
