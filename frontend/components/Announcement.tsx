import React from "react";

export default function Announcement() {
  return (
    <div className="w-full bg-green-700 text-white text-center py-2 px-2 md:py-3 md:px-4 font-bold shadow-md text-sm md:text-base flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 z-50 relative">
      <span>
        🚨 Upcoming Event: Hack The Box Meetup at UM6P-1337, Ben Guerir — May 17-19, 2025!
      </span>
      <a
        href="/program/event_program.html"
        target="_blank"
        rel="noopener noreferrer"
        className="underline ml-0 md:ml-2"
      >
        View Full Program
      </a>
    </div>
  );
}