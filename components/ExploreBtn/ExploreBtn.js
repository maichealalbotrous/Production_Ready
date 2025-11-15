"use client";
import { Link } from 'lucide-react'
import React from 'react'

function ExploreBtn() {
  return (
    
    <button className="text-center bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer px-6 py-2 rounded-md flex items-center gap-2 ">
             <a>
            Explore Events
             </a>
            <img src="/icons/arrow-down.svg" alt="arrow" className="transition-transform group-hover:translate-y-1 w-4 h-4" />
         
          </button>
        
  )
}

export default ExploreBtn