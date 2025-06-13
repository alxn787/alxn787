'use client';
import { Clock } from './Clock';
import ProjectCard from './ProjectCard';
import { FileTextIcon } from './resumeicon';
import { GithubIcon } from './Githubicon';
import { TwitterIcon } from './TwitterIcon';
import { LinkedinIcon } from './linkedin';
import { useRef } from 'react';
import ExperienceCard from './ExperienceCard';

export const PortfolioComponent = () => {
    const handleOpenInNewTab = (url: string) => {
    window.open(url, '_blank');
};
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = ["Next.js", "Typescript","Framer Motion","Figma", "C++"];

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
                Hello! I&rsquo;m Alen, a 21 y/o CS student at IIIT Kota who loves to try anything new. <br></br>I&rsquo;m a dev, trader who is particularly interested about how tech works in finance.<br></br> I play the  piano/guitar and learn animations when im bored.
              </p>
            </div>
            <div className='h-5'></div>
            <div
            className='flex justify-start gap-4'>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://drive.google.com/file/d/1UYcK0OgTMUuf0mdD_M-JAnO3tKPaTxN-/view?usp=sharing')}>
                        <FileTextIcon />
                </div>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://github.com/alxn787')}>
                        <GithubIcon />
                </div>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://x.com/alxn787')}>
                        <TwitterIcon />
                </div>
                <div className='flex' onClick={()=>handleOpenInNewTab('https://www.linkedin.com/in/alen-alex-abraham-301aba237/')}>
                    <LinkedinIcon/>
                </div>
                    
            </div>
            <div className='h-10'></div>
            <div>
                <h2 className='text-2xl text-primary tracking-tighter font-bold uppercase '>
                    Experience
                </h2>
            </div>
            <ExperienceCard Name='CoinTracker' Duration='Nov 2024 - Feb 2025' Description='I worked on the CoinTracker project, which was a web application that allowed users to track their cryptocurrency holdings' />
            
            <div className='h-10'></div>
            <div>
                <h2 className='text-2xl text-primary tracking-tighter font-bold uppercase '>
                    PROJECTS
                </h2>
            </div>
            <div className='h-5'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ProjectCard Title='AlgoRush' Description='Matiks for DSA. 300+users' Imageurl='algorush.png' url='https://www.algorush.live/' />
                <ProjectCard Title='SuperDm' Description='Superchats on Solana.' Imageurl='superdm.png' url='https://superdm.xyz/' />
                <ProjectCard Title='ezWallet' Description='Trade on Solana.' Imageurl='ezwallet.png' url='https://ezwallet-six.vercel.app/' />
                <ProjectCard Title='FitFrame' Description='AI powered Fitness App' Imageurl='fitframe.png' url='https://fit-frame.vercel.app/'/>
            </div>
            <div
            onClick={scrollToSection}
            className='text-white/50 flex justify-center cursor-pointer'>
                More Projects on Github!
            </div>



          <section id="skills" className="my-16">
            <div>
                <h2 className='text-2xl text-primary tracking-tighter font-bold uppercase '>
                    SKILLS
                </h2>
            </div>
            <div className='h-5'></div>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                 <span key={skill} className="bg-white border border-neutral-700 text-black  font-normal px-4 py-1 rounded-md text-sm">
                   {skill}
                 </span>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center py-12 border-t border-neutral-800 mt-16">
        </footer>
      </div>
    </div>
  );
};


