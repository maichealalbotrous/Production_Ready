"use client";
import React from "react";
import EventCard from "../components/EventCard/EventCard";
import {events} from "../lib/EventDataTesting";
import ExploreBtn from "../components/ExploreBtn/ExploreBtn";
export default function Page() {
  return (
    <section className="min-h-screen flex flex-col px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="mt-20 mb-10 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          The Hub for Every
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
            DevEvent You Can`t Miss
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Hackathons, meetups, and conferences — discover and create events in one place.
        </p>

        <div className="flex justify-center">
          <ExploreBtn/>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Featured Events</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard 
              key={event.slug}
              slug={event.slug} 
              image={event.image} 
              title={event.title} 
              location={event.location} 
              date={event.date} 
              time={event.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}