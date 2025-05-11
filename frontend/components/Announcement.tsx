import React from "react";

export default function Announcement() {
  return (
    <div className="bg-green-700 text-white text-center py-3 px-4 font-bold shadow-md">
      🚨 Upcoming Event: Hack The Box Meetup at UM6P-1337, Ben Guerir — May 17-19, 2025!
      <a
        href="/program/event_program.html"
        target="_blank"
        rel="noopener noreferrer"
        className="underline ml-2"
      >
        View Full Program
      </a>
    </div>
  );
}