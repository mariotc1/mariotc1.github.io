import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronDown, 
  Code, 
  Database, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import Hero3D from './components/Hero3D';
import ProjectCard from './components/ProjectCard';
import StatsPanel from './components/StatsPanel';
import { PROJECTS, ACADEMIC_REPOS, SKILLS, USER_INFO } from './constants';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-brand-dark relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
         <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
         <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-slate-800 py-3 shadow-lg' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-white tracking-tighter hover:scale-105 transition-transform cursor-pointer bg-transparent border-none outline-none focus:outline-none"
            aria-label="Volver arriba"
          >
            mariotc<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">1</span>
          </button>
          
          <div className="flex gap-4">
             <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all duration-300">
               <Github size={22} />
             </a>
             <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:bg-[#0077b5] p-2 rounded-full transition-all duration-300">
               <Linkedin size={22} />
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D onScrollClick={() => scrollToSection('about')} />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 relative inline-block group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-brand-accent to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            {/* User Profile Image */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-slate-900/80 shadow-2xl">
               <img 
                 src="/assets/profile.jpeg" 
                 onError={(e) => { e.currentTarget.src = 'https://picsum.photos/400/400?grayscale' }}
                 alt={USER_INFO.name} 
                 className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
               />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
          >
            {USER_INFO.name} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-4xl md:text-6xl">
               Desarrollador Full Stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {USER_INFO.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              <Code size={20} /> Ver proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800/40 hover:bg-slate-800/80 text-white font-semibold rounded-full border border-slate-600 backdrop-blur-md transition-all hover:scale-105 hover:border-brand-accent"
            >
              Solicitar contacto
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-brand-accent transition-colors"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={40} />
        </motion.div>
      </header>

      <main className="container mx-auto px-4 space-y-40 py-24 relative z-10">
        
        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto scroll-mt-32">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
             {/* Decorative gradient orb inside card */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] group-hover:bg-brand-accent/30 transition-colors duration-700"></div>

             <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                <div className="flex-1 space-y-8">
                   <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">Sobre mí</span>
                   </h2>
                   <div className="prose prose-invert prose-lg max-w-none">
                     <p className="text-slate-300 leading-relaxed text-lg">
                       {USER_INFO.bio}
                     </p>
                     <div className="bg-slate-800/50 border-l-4 border-brand-accent p-6 rounded-r-xl mt-8">
                       <p className="text-white font-medium italic text-lg">
                         "{USER_INFO.pitch}"
                       </p>
                     </div>
                   </div>
                   
                   <div className="pt-4">
                     <a href="/assets/Mario-Tome-Core-cv.pdf" download className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-all border border-slate-700 hover:border-brand-accent group">
                       <Download size={20} className="group-hover:-translate-y-1 transition-transform" /> 
                       <span className="font-semibold">Descargar Curriculum</span>
                     </a>
                   </div>
                </div>
                
                {/* Skills Grid */}
                <div className="w-full lg:w-1/3">
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Stack Tecnológico</h3>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {SKILLS.map((skill) => (
                      <div key={skill.name} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-800 hover:border-brand-accent/50 transition-all cursor-default group">
                        <span className="block text-slate-200 font-semibold group-hover:text-brand-accent transition-colors">{skill.name}</span>
                        <span className="block text-xs text-slate-500 mt-1 uppercase tracking-wider">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill Icons from User Readme */}
                  <div className="space-y-4">
                     <p className="text-sm text-slate-400 font-medium">Lenguajes & Herramientas</p>
                     <img src="https://skillicons.dev/icons?i=python,java,js,php,dart,swift&theme=dark" alt="Languages" className="w-full" />
                     <img src="https://skillicons.dev/icons?i=html,css,react,flutter,androidstudio,flask&theme=dark" alt="Frontend" className="w-full" />
                     <img src="https://skillicons.dev/icons?i=mysql,sqlite,supabase,git,github,figma&theme=dark" alt="Tools" className="w-full" />
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">Destacados</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Una selección de mis trabajos más recientes, desde aplicaciones móviles hasta sistemas de escritorio complejos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Academic Repos */}
        <section id="academic" className="scroll-mt-32 max-w-7xl mx-auto">
           <div className="flex items-center gap-4 mb-8">
              <div className="bg-slate-800 p-3 rounded-xl text-brand-accent">
                <Terminal size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Repositorios Académicos</h2>
                <p className="text-slate-400">Proyectos desarrollados durante DAM & DAW</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             {ACADEMIC_REPOS.map((repo) => (
               <a 
                 key={repo.slug} 
                 href={repo.repo} 
                 target="_blank" 
                 rel="noreferrer"
                 className="bg-slate-900/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 hover:border-brand-accent/50 transition-all group relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent/5 rounded-bl-full transition-all group-hover:bg-brand-accent/10"></div>
                 
                 <div className="flex justify-between items-start mb-4 relative z-10">
                   <div className="p-2 bg-slate-800 rounded-lg group-hover:text-brand-accent transition-colors text-slate-400">
                     {repo.tech[0] === 'Java' ? <Code size={20}/> : 
                      repo.tech[0] === 'PHP' ? <Database size={20}/> :
                      <Terminal size={20}/>}
                   </div>
                   <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                 </div>
                 
                 <h4 className="font-bold text-white text-lg mb-2 group-hover:text-brand-accent transition-colors">{repo.title}</h4>
                 <p className="text-sm text-slate-400 mb-4 leading-relaxed">{repo.short}</p>
                 
                 <div className="flex flex-wrap gap-2 text-xs">
                    {repo.tech.map(t => (
                      <span key={t} className="text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">{t}</span>
                    ))}
                 </div>
               </a>
             ))}
           </div>
        </section>

        {/* GitHub Activity */}
        <section className="scroll-mt-32 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-4">
             <h2 className="text-3xl font-bold text-white">Actividad en GitHub</h2>
             <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="text-brand-accent hover:text-white text-sm font-semibold flex items-center gap-1 transition-colors">
               Ver perfil completo <ExternalLink size={14} />
             </a>
          </div>
          <StatsPanel />
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto scroll-mt-32 text-center pb-20">
          <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-12 rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
              <p className="text-slate-300 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                Estoy buscando activamente una <span className="text-brand-accent font-semibold">oportunidad como desarrollador junior</span> donde pueda aportar valor desde el primer día y crecer dentro de un equipo técnico.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <a 
                  href={`mailto:${USER_INFO.email}`} 
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto justify-center"
                >
                  <Mail className="text-slate-900" />
                  <span>Enviar Email</span>
                </a>
                <a 
                  href={USER_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] hover:bg-[#006396] text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] w-full sm:w-auto justify-center"
                >
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Respondo habitualmente en menos de 24 horas.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-4">
             Desarrollado por <strong className="text-white">{USER_INFO.name}</strong>
          </p>
          <div className="text-slate-600 text-sm flex justify-center gap-4">
             <span>React 18</span>
             <span>•</span>
             <span>TailwindCSS</span>
             <span>•</span>
             <span>Three.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
