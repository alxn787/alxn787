'use client'
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion'

    const springvars = {
        stiffness: 120,
        damping: 14,
    };

export default function Hero() {
    const { scrollYProgress }= useScroll();
    const masksize = useSpring(useTransform(scrollYProgress, [0, 1], ['14000', '400']),springvars);
    const maskposition = useTransform(scrollYProgress, [0, 1], ['-1200', '100']);

  return (
    <div className="h-[300vh]">
        {/* <motion.div className='flex inset-0 h-full w-full bg-[url(/bg.png)] bg-cover bg-fixed'>
        </motion.div> */}

        <motion.div
        className='fixed flex inset-0 w-full h-full [mask-image:url(/alxn1.svg)] [mask-repeat:no-repeat] bg-white/40'
        style = {{
            maskSize: useMotionTemplate`${masksize}px`,
            maskPosition: useMotionTemplate`center ${maskposition}px`,
        }}
        >
        <motion.div className='flex inset-0 h-full w-full bg-[url(/bg.png)] bg-cover bg-fixed'>
        </motion.div>
        </motion.div>
    </div>
  );
}