"use client";
import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function EventCard({ id, image, title, location, date, time }) {
  return (
    <Card className="bg-black/20 border border-white/5 text-white overflow-hidden shadow-sm hover:border-white/10 transition-colors">
      <CardHeader className="p-0">
        <Link href={`/EventDetailPage/${id}`} className="block overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </CardHeader>

      <CardContent className="px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-200 mb-3">
          <span className="text-emerald-400">📍</span>
          <span className="uppercase text-xs tracking-wide">{location}</span>
        </div>

        <CardTitle className="text-lg md:text-xl font-semibold text-white mb-1">
          {title}
        </CardTitle>
      </CardContent>

      <CardFooter className="px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full text-gray-200 text-sm">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🕐</span>
          <span>{time}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default EventCard