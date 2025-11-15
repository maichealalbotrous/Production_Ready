// ...existing code...
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white/5 backdrop-blur-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Dev Event" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-lg hidden md:block">Dev Event</span>
        </Link>

        <ul className="flex items-center gap-8 text-sm">
          <a href="#Home" className="text-emerald-600 hover:text-teal-500">Home</a>
          <a href="#Event" className="text-emerald-600 hover:text-teal-500">Event</a>
          <a href="#CreateEvent" className="text-emerald-600 hover:text-teal-500">Create Event</a>
        </ul>

      

       
      </div>
    </nav>
  )
}
// ...existing code...