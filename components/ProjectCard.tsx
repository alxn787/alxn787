'use client';

import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export default function ProjectCard({
  Title,
  Description,
  Imageurl,
  url
}: {
  Title: string;
  Description: string;
  Imageurl: string;
  url: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  function handleOpenInNewTab(url:string){
    window.open(url, '_blank');
  }
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    useEffect(() => {
    if (isMobile) {
      setIsHovered(inView);
    }
    }, [inView, isMobile]);

  return (
    <div
      ref={ref}
      onClick={()=>handleOpenInNewTab(url)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-between  rounded-xl p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-lg min-w-[16rem] min-h-[16rem] w-full h-full overflow-hidden cursor-pointer hover:scale-105 "
    >
      {/* <div
        className={`absolute inset-0 bg-center bg-cover  transition-all duration-500 transform rounded-lg z-0 ease-in-out
          ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
        `}
        style={{ backgroundImage: `url(${Imageurl})`}}

      /> */}
        <img
        src={Imageurl}
        alt={Title}
        className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-95'}`}
      />

        <div
            className={`absolute bottom-0 left-0 right-0 h-24 
                bg-gradient-to-t from-black/90 via-black/70 to-transparent 
                 transition-all duration-500 
                ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <div>

        </div>
        <div className={`${isHovered}== true ? visibility:visible  : visibility:hidden text-center gap-4`}>
            <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-1">
            {Title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300">
            {Description}
            </p>
        </div>

    </div>
  );
}