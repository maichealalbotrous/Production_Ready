"use client";
import React from "react";
import EventCard from "../components/EventCard/EventCard";
import {events} from "../lib/EventDataTesting";

export default function Page() {
  return (
    <section className="min-h-screen flex flex-col px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="mb-8 inline-block">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">✨ Discover Events</span>
        </div>

        <h1 className="mt-6 mb-6 text-5xl md:text-7xl font-black leading-tight tracking-tighter">
          The Hub for Every
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 mt-2">
            DevEvent You Can`t Miss
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Discover hackathons, meetups, and conferences. Connect with developers worldwide and level up your skills.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#featured-events" 
            className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
          >
            Explore Events
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full" id="featured-events">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Featured Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {events.map((event, index) => (
            <div key={event.slug} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard 
              id={event.id}
                slug={event.slug}
                image={event.image} 
                title={event.title} 
                location={event.location} 
                date={event.date} 
                time={event.time}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}