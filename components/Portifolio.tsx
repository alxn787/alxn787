'use client';
import { Mail} from 'lucide-react';
import { Clock } from './Clock';
import ProjectCard from './ProjectCard';
import { FileTextIcon } from './resumeicon';
import { GithubIcon } from './Githubicon';
import { TwitterIcon } from './TwitterIcon';
import { LinkedinIcon } from './linkedin';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export const PortfolioComponent = () => {
    const router = useRouter();
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

        <div             ref={sectionRef} className='flex justify-between'>
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
                Hello! I'm Alen, a 21 y/o CS student at IIIT Kota who loves to dabble around tech . <br></br>I'm a Developer, trader who has a particular interest about equity derivatives and tech in finance. I play the  piano/guitar and do competitive programmming when im bored.
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
            <div className='flex justify-between mt-3'>
                <div className='text-lg font-semibold'>Cointracker</div>
                <div className=' text-white/50'>Nov 2024 - Feb 2025</div>
            </div>

            <div className='h-10'></div>
            <div>
                <h2 className='text-2xl text-primary tracking-tighter font-bold uppercase '>
                    PROJECTS
                </h2>
            </div>
            <div className='h-5'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ProjectCard Title='AlgoRush' Description='Matiks for DSA.' Imageurl='algorush.png' />
                <ProjectCard Title='SuperDm' Description='Superchats on Solana.' Imageurl='superdm.png' />
                <ProjectCard Title='ezWallet' Description='Trade on Solana.' Imageurl='ezwallet.png' />
                <ProjectCard Title='Probo' Description='Opinion Trading Platform' Imageurl='lg.png' />
            </div>
            <div
            onClick={scrollToSection}
            className='text-white/50 flex justify-center'>
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

        {/* --- Footer Section --- */}
        <footer className="text-center py-12 border-t border-neutral-800 mt-16">
           <h3 className="text-2xl font-bold text-neutral-100 mb-4">Get In Touch</h3>
           <p className="text-neutral-400 mb-6">
             I'm currently open to new opportunities and collaborations.
           </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:email@example.com" className="text-neutral-400 hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
          </div>
          <p className="text-neutral-600 text-sm mt-8">
            &copy; {new Date().getFullYear()} Alex Nelson. All Rights Reserved.
          </p>
        </footer>

      </div>
    </div>
  );
};


