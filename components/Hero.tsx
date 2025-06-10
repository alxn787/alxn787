'use client';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const springvars = {
  stiffness: 100,
  damping: 20,
};

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const masksize = useSpring(
    useTransform(scrollYProgress, [0, 0.8], ['800', '20000']),
    springvars
  );

  const imagescale = useTransform(scrollYProgress, [0, 1], ['0.8', '1']);
  const outerImageOpacity = useTransform(scrollYProgress, [0.2, 0.4], ['0', '1']);
  const whitefillopacity = useTransform(scrollYProgress, [0, 0.1], ['1', '0']);
  const innerImageOpacity = useTransform(scrollYProgress, [0, 0.1], ['0', '1']); 
  const svgopacity = useTransform(scrollYProgress, [0, 0.2], ['1', '0']);

  return (
    <div className="h-[150vh] bg-[#000000]">
      <motion.div
        className="fixed inset-0 h-full w-full bg-[url(/bg.png)] bg-cover bg-fixed"
        style={{
          scale: imagescale,
          opacity: outerImageOpacity,
        }}
      />

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5 }}
            className="fixed flex inset-0 w-full h-full [mask-image:url(/alxn1.svg)] [mask-repeat:no-repeat]"
            style={{
            maskSize: useMotionTemplate`${masksize}px`,
            maskPosition: useMotionTemplate`center`,
            opacity: 0,
            }}
        >
            <motion.div
            className="flex inset-0 h-full w-full bg-[url(/bg.png)] bg-cover bg-fixed"
            style={{
                scale: imagescale,
                opacity: innerImageOpacity, 
            }}
            >
            </motion.div>
            <motion.div
            className="fixed inset-0 h-full w-full bg-white/70"
            style={{
                opacity: whitefillopacity,
            }}
            />
        </motion.div>
    </div>
  );
}
