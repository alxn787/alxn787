'use client';

import { useState } from "react";

export default function ProjectCard({
  Title,
  Description,
  Imageurl,
}: {
  Title: string;
  Description: string;
  Imageurl: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-between  rounded-lg p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-lg min-w-[18rem] min-h-[18rem] w-full h-full overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-center bg-cover transition-all duration-500 ease-out transform rounded-lg z-0
          ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
        `}
        style={{ backgroundImage: `url(${Imageurl})`}}

      />
        <div>

        </div>
        <div className="relative z-20 text-center gap-4">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-1">
            {Title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300">
            {Description}
            </p>
        </div>

        {isHovered && (
        <div className="absolute inset-0 bg-black/10 rounded-lg z-10 transition-opacity duration-300" />
        )}
    </div>
  );
}
