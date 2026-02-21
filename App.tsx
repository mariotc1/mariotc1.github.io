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
  ExternalLink,
  MessageCircle
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
      <header className="relative h-[100dvh] flex flex-col items-center overflow-hidden selection:bg-cyan-400 selection:text-black">
        <Hero3D onScrollClick={() => scrollToSection('about')} />
        
        {/* Main Content Container - Grows to fill space, centers content */}
        <div className="flex-grow flex flex-col items-center justify-center w-full px-4 relative z-10">
          
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

        {/* Scroll Indicator - Integrated in Flex Flow (Guaranteed Center) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="pb-8 md:pb-12 z-10 cursor-pointer text-slate-500 hover:text-brand-accent transition-colors"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={32} strokeWidth={2.5} />
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
                      
                      <div className="text-slate-300 text-left leading-relaxed flex flex-col gap-4 md:gap-6">
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-base md:text-2xl font-light">
                          Soy Mario Tomé, desarrollador <strong className="text-white font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Full Stack</strong> con formación técnica superior en Desarrollo de Aplicaciones Multiplataforma <strong className="text-white">(DAM)</strong> y Desarrollo de Aplicaciones Web <strong className="text-white">(DAW)</strong>.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-sm md:text-xl text-slate-400">
                          He construido aplicaciones reales en entornos de escritorio, web y móvil, trabajando todo el <strong className="text-white">ciclo de desarrollo:</strong> arquitectura, lógica, persistencia de datos, interfaz y despliegue.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-sm md:text-xl text-slate-400">
                          Me caracterizo por una fuerte disciplina, mentalidad profesional desde el primer día y obsesión por el clean code, la claridad y la mantenibilidad.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-sm md:text-xl text-slate-400">
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

        {/* Academic Repos - "Fundamentos & Arquitectura" */}
        <section id="academic" className="scroll-mt-32 max-w-7xl mx-auto px-4 md:px-0">
           <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
              <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                <Terminal size={28} className="text-brand-accent" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Fundamentos & Arquitectura</h2>
                <p className="text-slate-400 text-lg mt-1 font-mono text-sm border-l-2 border-brand-accent/50 pl-3">Repositorios Base · Ciclo Superior Desarrollo de Aplicaciones Web (DAW)</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {ACADEMIC_REPOS.map((repo) => (
               <a 
                 key={repo.slug} 
                 href={repo.repo} 
                 target="_blank" 
                 rel="noreferrer"
                 className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/80 hover:border-brand-accent/50 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-lg"
               >
                 {/* Cyber Glow Effect */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                 
                 <div className="relative z-10 flex flex-col h-full">
                   <div className="flex justify-between items-start mb-5">
                     <h4 className="font-bold text-white text-xl group-hover:text-cyan-400 transition-colors">{repo.title}</h4>
                     <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1" />
                   </div>
                   
                   <p className="text-sm text-slate-300 mb-6 flex-grow leading-relaxed font-light">{repo.short}</p>
                   
                   <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                      {repo.tech.map(t => (
                        <span key={t} className="text-cyan-300 font-mono text-[10px] md:text-xs bg-slate-950 px-3 py-1 rounded-md border border-slate-800 group-hover:border-slate-600 transition-colors uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                   </div>
                 </div>
               </a>
             ))}
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto scroll-mt-32 text-center pb-12 mt-20 px-4 md:px-0">
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 md:p-14 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.05)] isolate group/contact">
            {/* Cyber Glow Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">¿Trabajamos juntos?</h2>
              
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                Busco integrarme en un equipo técnico donde <strong className="text-white font-semibold">aportar valor desde el primer día</strong>. Soy flexible, mantengo un aprendizaje continuo mediante proyectos propios y me adapto rápido a nuevos stacks. ¿Hablamos?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 w-full">
                
                {/* Email Button */}
                <a 
                  href={`mailto:${USER_INFO.email}`} 
                  className="group flex flex-1 w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-slate-300 font-bold rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:text-white hover:bg-slate-800/80 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] shadow-lg"
                >
                  <Mail className="group-hover:scale-110 transition-transform text-cyan-400 group-hover:text-white" />
                  <span>Email</span>
                </a>

                {/* LinkedIn Button */}
                <a 
                  href={USER_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex flex-1 w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-slate-300 font-bold rounded-2xl transition-all duration-300 hover:border-[#0A66C2] hover:text-white hover:bg-slate-800/80 hover:shadow-[0_0_25px_rgba(10,102,194,0.3)] shadow-lg"
                >
                  <Linkedin className="group-hover:scale-110 transition-transform text-[#0A66C2] group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/34644071074" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex flex-1 w-full sm:w-auto items-center justify-center gap-3 px-6 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-slate-300 font-bold rounded-2xl transition-all duration-300 hover:border-[#25D366] hover:text-white hover:bg-slate-800/80 hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] shadow-lg"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6 group-hover:scale-110 transition-transform text-[#25D366] group-hover:text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

              </div>

              <p className="text-sm text-slate-500 font-mono">
                &gt; Respondo habitualmente en menos de 24 horas _
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