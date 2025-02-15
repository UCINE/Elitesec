import React, { useState } from 'react';
import Image from "next/image";

const teamMembers = [
  { name: 'John Doe', position: 'Manager', imageUrl: '/images/avatar.jpg' },
  { name: 'Jane Smith', position: 'Developer', imageUrl: '/images/avatar.jpg' },
  { name: 'Alice Johnson', position: 'Designer', imageUrl: '/images/avatar.jpg' },
  { name: 'Bob Brown', position: 'Engineer', imageUrl: '/images/avatar.jpg' },
  { name: 'Eva Williams', position: 'Marketing', imageUrl: '/images/avatar.jpg' },
  { name: 'Max Turner', position: 'Analyst', imageUrl: '/images/avatar.jpg' },
  { name: 'Sophia Adams', position: 'Coordinator', imageUrl: '/images/avatar.jpg' },
  { name: 'Oliver Garcia', position: 'Consultant', imageUrl: '/images/avatar.jpg' },
  { name: 'Emily Clark', position: 'Specialist', imageUrl: '/images/avatar.jpg' },
];

const TeamSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = teamMembers.length;
  const slideWidth = 100 / totalSlides;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide === totalSlides - 1;

  return (
    <div className="max-w-3xl w-full mx-auto p-8 relative">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          disabled={isAtStart}
          className="team-slide-arrow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full focus:outline-none mr-2"
        >
          {'<'}
        </button>
        <div className="overflow-hidden flex w-full relative">
          <div
            className="team-slide-container flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * slideWidth}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member w-full flex-shrink-0"
                style={{ width: `calc(100% / ${totalSlides})`, marginRight: '8px' }}
              >
                <div className="team-member-card bg-white shadow-md rounded-lg p-2 text-center">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className="team-member-image rounded-full w-12 h-12 mx-auto mb-2 object-cover"
                    width={40}
                    height={40}
                  />
                  <h2 className="team-member-name text-xs font-semibold">{member.name}</h2>
                  <p className="team-member-position text-xs text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          disabled={isAtEnd}
          className="team-slide-arrow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-full focus:outline-none ml-2"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section className="bg-black pt-40 bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="team-header mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="team-description font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and elements
            built with the utility classes from Tailwind
          </p>
        </div>
        <div>
          <TeamSlide />
        </div>
        <div className="team-grid grid gap-5 lg:gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* You can add additional content or cards here */}
        </div>
      </div>
    </section>
  );
}
