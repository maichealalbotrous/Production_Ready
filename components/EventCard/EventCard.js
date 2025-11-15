import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function EventCard({slug ,image,title,location,date,time}) {
  return (
    <div>
      <Link href={'/lkl'}>
    <Card className="bg-black/20 border border-white/5 text-white overflow-hidden shadow-sm">
      <CardHeader className="p-0">
          <img
            src={image}
            alt="Event 1"
            className="w-full h-48 md:h-56 lg:h-64 object-cover"
          />
        
      </CardHeader>

      <CardContent className="px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-200 mb-3">
          <img src="/icons/pin.svg" alt="location" className="w-4 h-4" />
        <span className="uppercase text-xs tracking-wide">{location}</span>
        </div>

        <CardTitle className="text-lg md:text-xl font-semibold text-white mb-1">
          {title}
        </CardTitle>

      </CardContent>

      <CardFooter className="px-4 py-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full text-gray-200">
          <div className="flex items-center gap-2 text-sm">
            <img src="/icons/calendar.svg" alt="date" className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <img src="/icons/clock.svg" alt="time" className="w-4 h-4" />
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
    </Link>
    </div>
  )
}

export default EventCard;
