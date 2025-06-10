'use client';
import { Mail} from 'lucide-react';
import { Clock } from './Clock';

export const PortfolioComponent = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief and engaging description of your project. Highlight the key technologies and the problem it solves.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "Explain what this project is about and what you learned from it. Keep it concise and impactful.",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "Showcase another key project. Mention your specific role and contributions if it was a team effort.",
      tags: ["Python", "Flask", "PostgreSQL"],
      link: "#"
    },
  ];

  const skills = ["JavaScript (ES6+)", "React & Next.js", "Node.js", "Tailwind CSS", "Python", "Figma", "Firebase", "Git & GitHub"];

  return (
    <div className="bg-black text-neutral-200 font-sans leading-relaxed">
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className='h-20'></div>

        <div className='flex justify-between'>
            <div>
                <h1 className=" text-neutral-50 font-serif text-[2.5rem]">
                    Alen Abraham
                </h1>
            </div>
            <div className='translate-y-5'>
                <Clock />
            </div>
        </div>
        <div className='h-5'></div>
        <main>
            <h5 className="text-2xl font-bold text-neutral-100 mb-2">About Me</h5>
            <div className="text-neutral-300 space-y-4">
              <p>
                Hello! I'm Alex, a developer with a passion for creating beautiful and functional digital experiences. With a background in design, I bring a unique perspective to my development work, focusing on pixel-perfect details and intuitive user flows.
              </p>
            </div>

          <section id="projects" className="my-16">
            <h2 className="text-3xl font-bold text-neutral-100 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-cyan-400/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-neutral-50 mb-2">{project.title}</h3>
                  <p className="text-neutral-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-neutral-800 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center">
                    View Project &rarr;
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="my-16">
            <h2 className="text-3xl font-bold text-neutral-100 mb-6">Core Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                 <span key={skill} className="bg-neutral-800 border border-neutral-700 text-neutral-300 text-sm font-medium px-4 py-2 rounded-md">
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


