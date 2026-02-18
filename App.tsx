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

      {/* Hero Section - Brutal & Responsive Redesign */}
      <header className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden selection:bg-cyan-400 selection:text-black">
        <Hero3D onScrollClick={() => scrollToSection('about')} />
        
        {/* Main Content Container - Centered Vertically & Horizontally */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full pb-20 md:pb-0">
          
          {/* Profile Image - Dynamic sizing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-brand-accent to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden border-2 md:border-4 border-slate-900/80 shadow-2xl ring-2 ring-white/10">
               <img 
                 src="/assets/profile.jpeg" 
                 onError={(e) => { e.currentTarget.src = 'https://picsum.photos/400/400?grayscale' }}
                 alt={USER_INFO.name} 
                 className="w-full h-full object-cover transform decoration-clone" 
               />
            </div>
          </motion.div>

          {/* Text Content - Brutal Typography */}
          <div className="text-center flex flex-col gap-2 md:gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase drop-shadow-xl"
            >
              {USER_INFO.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-6xl font-bold tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-brand-accent to-purple-400">
                Full Stack Dev
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-sm md:text-xl font-medium tracking-wide max-w-xs md:max-w-2xl mx-auto mt-4 md:mt-0 leading-relaxed"
            >
              {USER_INFO.subheading}
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Anchored */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ y: [0, 8, 0], opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 cursor-pointer p-4 group"
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-semibold group-hover:text-brand-accent transition-colors">Scroll</span>
            <ChevronDown size={28} className="text-slate-400 group-hover:text-brand-accent transition-colors" />
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 space-y-40 py-24 relative z-10">
        
        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto scroll-mt-32">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
             {/* Decorative gradient orb inside card */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] group-hover:bg-brand-accent/30 transition-colors duration-700"></div>

                {/* Vertical Layout: Text Top, Stack Bottom */}
                <div className="flex flex-col gap-16 relative z-10">
                   
                   {/* Text Section */}
                   {/* Text Section */}
                   <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, margin: "-100px" }}
                     variants={{
                       hidden: { opacity: 0 },
                       visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                     }}
                     className="w-full"
                   >
                      <div className="flex flex-row flex-wrap justify-between items-center gap-4 mb-10 border-b border-slate-700/50 pb-6">
                        <motion.h2 
                          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                          className="text-4xl md:text-5xl font-black text-white flex items-center gap-4"
                        >
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-brand-accent to-purple-600 drop-shadow-lg">Sobre mí</span>
                        </motion.h2>

                        {/* Integrated Compact Button */}
                        <motion.a 
                          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                          href="/assets/Mario-Tome-Core-cv.pdf" 
                          download 
                          className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-brand-accent transition-all duration-300 group text-sm font-medium backdrop-blur-sm"
                        >
                          <Download size={16} className="group-hover:text-brand-accent transition-colors" /> 
                          <span>Descargar CV</span>
                        </motion.a>
                      </div>
                      
                      <div className="text-slate-300 text-justify leading-relaxed flex flex-col gap-6">
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl md:text-2xl font-light">
                          Soy Mario Tomé, desarrollador <strong className="text-white font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Full Stack</strong> con formación técnica superior en Desarrollo de Aplicaciones Multiplataforma <strong className="text-white">(DAM)</strong> y Desarrollo de Aplicaciones Web <strong className="text-white">(DAW)</strong>.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-slate-400">
                          He construido aplicaciones reales en entornos de escritorio, web y móvil, trabajando todo el <strong className="text-white">ciclo de desarrollo:</strong> arquitectura, lógica, persistencia de datos, interfaz y despliegue.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-slate-400">
                          Me caracterizo por una fuerte disciplina, mentalidad profesional desde el primer día y obsesión por el clean code, la claridad y la mantenibilidad.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-slate-400">
                          Busco incorporarme a un equipo donde aportar <strong className="text-white">valor real</strong> como desarrollador junior, seguir creciendo técnicamente y asumir responsabilidades desde el primer momento.
                        </motion.p>
                      </div>
                   </motion.div>
                   
                   {/* Tech Stack - Compact & Centered */}
                   {/* Tech Stack - Compact & Centered */}
                   {/* Tech Stack - Compact & Centered */}
                   {/* Tech Stack - Compact & Centered */}
                   <div className="w-full bg-slate-900/30 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-slate-700/40 shadow-inner">
                     <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center border-b border-gray-700/50 pb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                          Stack Tecnológico
                        </span>
                     </h3>
                     
                     {/* Flex with specific widths for mobile 2-col + centered orphan */}
                     <div className="flex flex-wrap justify-center gap-3 md:gap-8">
                       {SKILLS.map((category) => (
                         <div 
                           key={category.title} 
                           className="w-[calc(50%-0.5rem)] md:w-auto flex flex-col items-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border border-slate-700/60 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-brand-accent/40 transition-all duration-500 group/card"
                         >
                           <p className="text-[10px] md:text-sm text-brand-accent/90 font-bold mb-2 md:mb-5 uppercase tracking-widest text-shadow-sm text-center">{category.title}</p>
                           <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                             {category.skills.map((skill) => (
                               <div key={skill.name} className="group relative" title={skill.name}>
                                  <div className="w-10 h-10 md:w-16 md:h-16 bg-slate-800/80 backdrop-blur-sm rounded-lg md:rounded-2xl p-1.5 md:p-3 border border-slate-700/50 hover:bg-slate-700 group-hover/card:border-slate-600/50 transition-all flex items-center justify-center transform hover:scale-110 duration-300 shadow-md hover:shadow-brand-accent/20 cursor-help relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter group-hover:brightness-110 transition-all drop-shadow-md opacity-90 group-hover:opacity-100 relative z-10" />
                                  </div>
                               </div>
                             ))}
                           </div>
                         </div>
                       ))}
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