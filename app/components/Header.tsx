'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          ZippyLite
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          <Link href="/get-started">
            <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
              Get Started
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-3 text-base font-medium border-t border-gray-200 shadow-md">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 hover:text-blue-600 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/get-started"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
} 