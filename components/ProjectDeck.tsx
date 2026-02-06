import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDeck: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const currentProject = PROJECTS[activeIndex];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background (Blurred version of current project) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentProject.slug}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={currentProject.image} 
            alt="Background" 
            className="w-full h-full object-cover blur-[80px] scale-110 opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl px-4 md:px-10 h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Left Side: Text Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-center order-2 md:order-1 space-y-6">
           <motion.div
             key={`text-${currentProject.slug}`}
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${currentProject.status.includes('Excelencia') ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'}`}>
                    {currentProject.status}
                </span>
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
               {currentProject.title}
             </h2>
             <p className="text-lg text-slate-300 leading-relaxed mb-6">
               {currentProject.description}
             </p>

             <div className="flex flex-wrap gap-2 mb-8">
               {currentProject.tech.map(t => (
                 <span key={t} className="text-sm font-mono text-brand-accent/80 border border-brand-accent/20 px-2 py-1 rounded">
                   {t}
                 </span>
               ))}
             </div>

             <div className="flex gap-4">
               <a 
                 href={currentProject.repo} 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform"
               >
                 <Github size={20} /> Repo
               </a>
               {currentProject.demo && (
                 <a 
                   href={currentProject.demo} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                 >
                   <ExternalLink size={20} /> Live Demo
                 </a>
               )}
             </div>
           </motion.div>
        </div>

        {/* Right Side: Visual Showcase */}
        <div className="w-full md:w-2/3 h-[40vh] md:h-[60vh] order-1 md:order-2 relative perspective-1000 group">
           
           {/* Navigation Arrows */}
           <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-30">
              <button onClick={prevProject} className="p-3 bg-black/50 hover:bg-brand-accent text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110">
                <ChevronLeft size={24} />
              </button>
           </div>
           <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-30">
              <button onClick={nextProject} className="p-3 bg-black/50 hover:bg-brand-accent text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110">
                <ChevronRight size={24} />
              </button>
           </div>

           <AnimatePresence mode="wait">
             <motion.div
               key={`img-${currentProject.slug}`}
               initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
               animate={{ opacity: 1, rotateY: 0, scale: 1 }}
               exit={{ opacity: 0, rotateY: -20, scale: 0.9 }}
               transition={{ duration: 0.6 }}
               className="w-full h-full relative"
             >
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Reflection effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-50 mix-blend-overlay"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-accent/50 rounded-tr-3xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-purple-500/50 rounded-bl-3xl" />
             </motion.div>
           </AnimatePresence>

           {/* Progress Indicators */}
           <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
             {PROJECTS.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setActiveIndex(idx)}
                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-brand-accent' : 'w-2 bg-white/20 hover:bg-white/40'}`}
               />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeck;
