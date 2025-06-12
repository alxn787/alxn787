'use client';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { PortfolioComponent } from './Portifolio';

const springvars = {
  stiffness: 100,
  damping: 10,
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
    
  const masksize = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [400, 30000]),
    springvars
  );
    
  const imagescale = useTransform(scrollYProgress, [0, 1], [0.8, 1.19]);
  const whitefillopacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const innerImageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.44, 0.45], [0, 1, 1, 0]);
  const outerImageOpacity = useTransform(scrollYProgress, [0.05, 0.44, 0.45], [0, 1, 0]); 
  
  const maskContainerOpacity = useTransform(scrollYProgress, [0.75, 0.8], [1, 0]);
  const maskPointerEvents = useTransform(scrollYProgress, [0.8, 0.85], [1, 0]);
  const outerPortfolioScrollable = useTransform(scrollYProgress, [0.44, 0.46], [0, 1]);
  const introElementsOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const mainContentY = useTransform(scrollYProgress, [0.44, 0.46], ['10vh', '0vh']);

  return (
    <div className="relative">
        

      <div className="h-[120vh] relative">
        <motion.div
          className="fixed inset-0 h-full w-full flex justify-center"
          style={{
            scale: imagescale,
            opacity: outerImageOpacity,
            pointerEvents: useMotionTemplate`${outerImageOpacity.get() > 0.1 ? 'auto' : 'none'}`,
          }}
        >
          <PortfolioComponent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="fixed flex inset-0 w-full h-full [mask-image:url(/alxn2.svg)] [mask-repeat:no-repeat] z-10"
          style={{
            maskSize: useMotionTemplate`${masksize}px`,
            maskPosition: 'center',
            opacity: maskContainerOpacity,
            pointerEvents: useMotionTemplate`${maskPointerEvents.get() < 0.5 ? 'none' : 'auto'}`,
          }}
        >
          <motion.div
            className="flex justify-center inset-0 h-full w-full"
            style={{
              scale: imagescale,
              opacity: innerImageOpacity,
            }}
          >
            <PortfolioComponent />
          </motion.div>
                     
          <motion.div
            className="fixed inset-0 h-full w-full bg-white/70 pointer-events-none"
            style={{
              opacity: whitefillopacity,
            }}
          />
        </motion.div>
      </div>
      
      <motion.div
        className="relative z-20 min-h-screen w-full bg-black"
        style={{
          opacity: outerPortfolioScrollable,
          y: mainContentY
        }}
      >
        <PortfolioComponent />
      </motion.div>
    </div>
  );
}