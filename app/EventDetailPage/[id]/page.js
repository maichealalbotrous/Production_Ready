import React from "react";
import Image from "next/image";
import { Clock, Calendar, MapPin, Users, Check, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard/EventCard";
import { events } from "../../../lib/EventDataTesting";

// Re-usable component for the booking form (unchanged)
const BookSpotCard = () => (
  <div className="bg-black/40 p-6 rounded-lg border border-emerald-900/50 shadow-xl sticky top-6 lg:top-10">
    <h3 className="text-2xl font-bold mb-4 text-white">Book Your Spot</h3>
    <p className="text-gray-400 mb-4 text-sm">
      Fill in your details to reserve your place at the event.
    </p>
    <div className="space-y-4">
      <Input
        type="email"
        placeholder="Email Address"
        className="bg-black/50 border border-white/10 text-white placeholder-gray-500 focus-visible:ring-emerald-500"
      />
      <Input
        type="text"
        placeholder="Enter your name"
        className="bg-black/50 border border-white/10 text-white placeholder-gray-500 focus-visible:ring-emerald-500"
      />
      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center gap-2">
        Submit <Check className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

// Main Page Component
export default async function Page({ params }) {
  const { id } = await params;
  console.log(id);  
  const eventId = parseInt(id, 10);  
console.log(events);

  let event = null;

  events.forEach((e) => {
    if (e.id === eventId) { 
      event = e;
    }
  });

  if (event) {
    event.description = "Join us for this leading event bringing together developers, engineers, and technology leaders to discuss the latest advancements in programming and digital innovation. A perfect opportunity for learning and networking.";
    event.details = [
      { icon: Calendar, label: "Date", value: event.date },
      { icon: Clock, label: "Time", value: event.time },
      { icon: MapPin, label: "Venue", value: event.location },
      { icon: Users, label: "Audience", value: "Developers, DevOps Engineers, Team Leaders" },
    ];
    event.agenda = [
      "09:00 AM - 10:00 AM | Opening Keynote and Future Vision",
      "10:00 AM - 12:00 PM | Specialized Technical Sessions (React, Next.js, AI)",
      "12:00 PM - 01:00 PM | Lunch Break and Networking",
      "01:00 PM - 03:00 PM | Hands-on Workshops and Live Projects",
      "03:00 PM - 04:00 PM | Q&A Session with Experts",
      "04:00 PM - 05:00 PM | Closing and Event Summary",
    ];
    event.organizer = {
      name: "About the Organizer",
      description: "We are a community of developers aiming to enhance technical knowledge and exchange expertise among our members. We organize periodic events to raise the level of innovation in the region.",
    };
    event.tags = ["Frontend", "Backend", "Full Stack", "AI"];
  }

  const similarEvents = events.filter((e) => e.id !== eventId).slice(0, 3);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Event Not Found</h1>
          <p className="text-gray-400">We couldnt find an event with the ID: **{id}**.</p>
        </div>
      </div>
    );
  }

  // ...rest of component...

  // Event rendering logic (unchanged from the corrected version)
  return (
    <div className="min-h-screen bg-gray-950 pt-10 text-white">
      <div className="relative bg-gradient-to-t from-gray-950 via-gray-900/80 to-emerald-950/70 pt-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            {event.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-4xl">
            {event.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition duration-300 hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  NOW
                </div>
              </div>

              {/* Overview Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                  Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {event.overview}
                </p>
              </div>

              {/* Event Details Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                  Event Details
                </h2>
                <div className="space-y-3">
                  {event.details.map((detail, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <detail.icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 mr-3" />
                      <p>
                        <span className="font-semibold text-white">
                          {detail.label}:
                        </span>{" "}
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agenda Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                  Agenda
                </h2>
                <ul className="space-y-2 list-none p-0">
                  {event.agenda.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-400 before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Organizer and Tags Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
                  {event.organizer.name}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {event.organizer.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full border border-white/20 hover:bg-white/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Booking Card (Desktop) */}
            <div className="lg:col-span-1 hidden lg:block">
              <BookSpotCard />
            </div>
          </div>

          {/* Booking Card (Mobile) */}
          <div className="lg:hidden mt-10">
            <BookSpotCard />
          </div>
        </div>
      </div>

      {/* Similar Events Section */}
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Similar events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarEvents.map((e) => (
            <EventCard
              key={e.id}
              id={e.id}
              image={e.image}
              title={e.title}
              location={e.location}
              date={e.date}
              time={e.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}