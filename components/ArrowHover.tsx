'use client';

import { forwardRef, useImperativeHandle } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ArrowHoverHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowHoverProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowHover = forwardRef<ArrowHoverHandle, ArrowHoverProps>(
  ({ className, size = 20, ...props }, ref) => {
    const controls = useAnimation();

    useImperativeHandle(ref, () => ({
      startAnimation: () => controls.start({ x: 5 }),
      stopAnimation: () => controls.start({ x: 0 }),
    }));

    return (
      <div
        className={cn(className??"")}
        onMouseEnter={() => controls.start({ x: 5 })}
        onMouseLeave={() => controls.start({ x: 0 })}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M9 6l6 6-6 6"
            animate={controls}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </svg>
      </div>
    );
  }
);

ArrowHover.displayName = 'ArrowHover';
export { ArrowHover };
