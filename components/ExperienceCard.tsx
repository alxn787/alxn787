'use client';

import { useRef, useState } from 'react';
import { ArrowHover, type ArrowHoverHandle } from './ArrowHover';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperienceCard({
  Name,
  Duration,
  Description,
}: {
  Name: string;
  Duration: string;
  Description: string;
}) {
  const arrowRef = useRef<ArrowHoverHandle>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between mt-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => {
          arrowRef.current?.startAnimation();
        }}
        onMouseLeave={() => {
          arrowRef.current?.stopAnimation();
        }}
      >
        <div className="text-lg font-semibold text-white/90 flex items-center justify-center gap-1">
        <div>
          {Name}
        </div>
        <div className='mt-1'>
          <ArrowHover className="" ref={arrowRef} />
        </div>
        </div>
        <div className="text-white/50">{Duration}</div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="desc"
            initial={{ opacity: 0, scaleY: 0.95, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scaleY: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scaleY: 0.95, filter: 'blur(8px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="origin-top bg-black text-white rounded-lg mt-2 text-sm"
          >
            {Description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
