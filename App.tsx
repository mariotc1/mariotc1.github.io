import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  User, 
  Mail, 
  Terminal,
  Cpu
} from 'lucide-react';
import Hero3D from './components/Hero3D';
import ProjectDeck from './components/ProjectDeck';
import { USER_INFO } from './constants';

type ViewState = 'hero' | 'projects' | 'about';

function App() {
  const [view, setView] = useState<ViewState>('hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-[100dvh] w-screen bg-black text-slate-200 overflow-hidden relative font-sans selection:bg-brand-accent selection:text-black">
      
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[8s]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          
          {/* VIEW: HERO / PROFILE */}
          {view === 'hero' && (
            <motion.div 
              key="hero"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-20 relative"
            >
               {/* 3D Element Background for Hero */}
               <div className="absolute inset-0 z-0 opacity-60">
                 <Hero3D /> 
               </div>
               
               <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        System Online
                     </div>
                     <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4 mix-blend-difference">
                        MARIO<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">TC1</span>
                     </h1>
                     <p className="text-xl md:text-3xl font-light text-slate-300 max-w-2xl mx-auto">
                        <span className="font-semibold text-white">Full Stack Developer.</span> {USER_INFO.subheading}
                     </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4"
                  >
                     <button 
                       onClick={() => setView('projects')}
                       className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform"
                     >
                        <span className="relative z-10 flex items-center gap-2">
                           <Code size={20} /> Ver Proyectos
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </button>
                     
                     <a 
                       href={`mailto:${USER_INFO.email}`}
                       className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                     >
                       <Mail size={20} /> Contactar
                     </a>
                  </motion.div>
               </div>
            </motion.div>
          )}

          {/* VIEW: PROJECTS (DECK) */}
          {view === 'projects' && (
             <motion.div
               key="projects"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -50 }}
               transition={{ duration: 0.6 }}
               className="w-full h-full"
             >
                <div className="absolute top-6 left-6 z-50 md:hidden">
                   <button onClick={() => setView('hero')} className="text-slate-400 hover:text-white">← Volver</button>
                </div>
                <ProjectDeck />
             </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Navigation Dock (The "OS" Feel) */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
           
           <NavButton 
             active={view === 'hero'} 
             onClick={() => setView('hero')} 
             icon={<User size={20} />} 
             label="Perfil" 
           />
           
           <div className="w-px h-8 bg-white/10 mx-1"></div>

           <NavButton 
             active={view === 'projects'} 
             onClick={() => setView('projects')} 
             icon={<Code size={20} />} 
             label="Proyectos" 
           />

           <div className="w-px h-8 bg-white/10 mx-1"></div>
           
           <a 
             href={USER_INFO.github} 
             target="_blank" 
             rel="noreferrer"
             className="relative group p-3 rounded-xl transition-all duration-300 hover:bg-white/10 text-slate-400 hover:text-white"
           >
             <Terminal size={20} />
             <Tooltip text="GitHub" />
           </a>

           <a 
             href={USER_INFO.cv} 
             download
             className="relative group p-3 rounded-xl transition-all duration-300 hover:bg-white/10 text-slate-400 hover:text-white"
           >
             <Cpu size={20} />
             <Tooltip text="CV" />
           </a>

        </div>
      </nav>

    </div>
  );
}

const NavButton = ({ active, onClick, icon, label }: any) => (
  <button 
    onClick={onClick}
    className={`relative group p-3 rounded-xl transition-all duration-300 ${active ? 'bg-white text-black shadow-lg scale-110' : 'hover:bg-white/10 text-slate-400 hover:text-white'}`}
  >
    {icon}
    {!active && <Tooltip text={label} />}
  </button>
);

const Tooltip = ({ text }: { text: string }) => (
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20">
    {text}
  </span>
);

export default App;