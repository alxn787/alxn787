'use client';
import { Clock } from './Clock';
import ProjectCard from './ProjectCard';
import { FileTextIcon } from './resumeicon';
import { GithubIcon } from './Githubicon';
import { TwitterIcon } from './TwitterIcon';
import { LinkedinIcon } from './linkedin';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { useRouter } from 'next/navigation';

export const PortfolioComponent = () => {
    const handleOpenInNewTab = (url: string) => {
    window.open(url, '_blank');
};
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const router = useRouter();

  // const skills = ["Next.js", "Typescript","Framer Motion","Figma", "C++"];

  return (
    <div className="bg-[#000000] text-neutral-200 font-sans leading-relaxed">
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className='h-20'></div>

        <div  ref={sectionRef} className='flex justify-between'>
            <div>
                <h1 className=" text-neutral-50 font-serif text-[2.5rem]">
                    Alen Abraham
                </h1>
            </div>
            <div className='translate-y-5'>
                <Clock />
            </div>
        </div>
        <div className='h-4'></div>
        <main>
            <h5 className="text-2xl font-bold text-neutral-100 mb-2">About Me</h5>
            <div className="text-neutral-300 space-y-4">
              <p className='text-md'>
                Hello! I&rsquo;m Alen, a 21 y/o CS undergrad from IIIT K who loves to build cool stuff. <br></br>I&rsquo;m a dev, trader who is particularly interested about how tech works in finance.<br></br> I play the  piano/guitar and drive when im bored.
              </p>
            </div>
            <div className='h-5'></div>
            <div
            className='flex justify-start gap-4'>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://drive.google.com/file/d/1UYcK0OgTMUuf0mdD_M-JAnO3tKPaTxN-/view?usp=sharing')}>
                  <FileTextIcon />
                  {/* <div className='text-sm flex flex-col items-center justify-center'>Resume</div> */}
                </div>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://github.com/alxn787')}>
                  <GithubIcon />
                  {/* <div className='text-sm'>Github</div> */}
                </div>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://x.com/alxn787')}>
                        <TwitterIcon />
                  {/* <div className='text-sm'>Twitter</div> */}
                </div>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://www.linkedin.com/in/alen-alex-abraham-301aba237/')}>
                  <LinkedinIcon/>
                  {/* <div className='text-sm ml-1'>LinkedIn</div> */}
                </div>
                <div className='text-md mb-2 hover:text-blue-400 cursor-pointer' onClick={()=>router.push('/blogs')}>Blogs</div>
            </div>
            <div className='h-10'></div>
            <div>
                <h2 className='text-2xl text-white tracking-tighter font-bold uppercase '>
                    Experience
                </h2>
            </div>
            <ExperienceCard Name='CoinTracker' Duration='Nov 2024 - Feb 2025' Description='I worked on the CoinTracker project, which was a web application that allowed users to track their cryptocurrency holdings' />

            <div className='h-10'></div>
            <div>
                <h2 className='text-2xl text-white tracking-tighter font-bold uppercase '>
                    PROJECTS
                </h2>
            </div>
            <div className='h-5'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ProjectCard Title='CodeSpace' Description='Isolated Codespaces for React and Nodejs via K8s' Imageurl='codespace.png' url='https://github.com/alxn787/codespace' />
                <ProjectCard Title='Payment Gateway' Description='Payment Gateway with private key management and adrress sweeping via indexer' Imageurl='gateway.png' url='https://github.com/alxn787/Payment-gateway' />
                <ProjectCard Title='AlgoRush' Description='Matiks for DSA. 300+users' Imageurl='algorush.png' url='https://www.algorush.live/' />
                <ProjectCard Title='PromoChain' Description='Marketing Made Better.' Imageurl='promo.png' url='https://superdm.xyz/' />
                <ProjectCard Title='SuperDm' Description='Superchats on Solana.' Imageurl='superdm.png' url='https://promo-chained.vercel.app/'/>
                <ProjectCard Title='ezWallet' Description='Trade on Solana.' Imageurl='ezwallet.png' url='https://ezwallet-six.vercel.app/' />
                <ProjectCard Title='INRC' Description='Indian Rupee on chain' Imageurl='inrc.jpg' url='https://github.com/alxn787/INRC' />
                <ProjectCard Title='FitFrame' Description='AI powered Fitness App' Imageurl='fitframe.png' url='https://fit-frame.vercel.app/'/>
            </div>
            <div
            onClick={scrollToSection}
            className='text-white/50 flex justify-center cursor-pointer'>
                More Projects on Github!
            </div>
          <motion.div 
          whileInView={{scale: 1.02, opacity: 1}}
          transition={{duration: 0.5}}
          id="skills" 
          className="my-16">
            {/* <div>
                <h2 className='text-2xl text-white tracking-tighter font-bold uppercase '>
                    SKILLS
                </h2>
            </div> */}
            <div className='h-5'></div>
            <div className="flex flex-wrap gap-3">
              {/* {skills.map(skill => (
                 <span key={skill} className="bg-white border border-neutral-700 text-black  font-normal px-4 py-1 rounded-md text-sm">
                   {skill}
                 </span>
              ))} */}
            </div>
          </motion.div>
        </main>

        <footer className="text-center py-12 border-t border-neutral-800 mt-16">
        </footer>
      </div>
    </div>
  );
};


