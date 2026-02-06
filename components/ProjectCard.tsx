import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Lock, Code2, PlayCircle, Star, Award, Layers } from 'lucide-react';
import { Project } from '../types';
import { USER_INFO } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  // Fallback for demo/thumb images using placeholder if local asset missing
  const thumbUrl = project.image || `https://picsum.photos/seed/${project.slug}/800/600`;

  const handleCopyRequest = () => {
    const text = `Hola, soy Mario Tomé. Estoy interesado en mostrarte el código privado de ${project.title}. ¿Podrías darme acceso o concertar una llamada para explicar el proyecto?`;
    navigator.clipboard.writeText(text);
    alert('Mensaje copiado al portapapeles');
  };

  return (
    <>
      <motion.div
        className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-all duration-500 shadow-xl cursor-pointer flex flex-col h-full"
        whileHover={{ y: -8, boxShadow: "0 0 40px rgba(56, 189, 248, 0.2)" }}
        onClick={toggleModal}
      >
          {/* Holographic overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 via-violet-500/0 to-fuchsia-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-0"></div>
        
        <div className="h-52 overflow-hidden relative">
            {project.private ? (
                 <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-10 border-b border-slate-700/50">
                     <span className="flex items-center gap-2 text-slate-300 font-semibold border border-slate-600/50 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-md">
                         <Lock size={16} className="text-brand-accent" /> Privado — en curso
                     </span>
                 </div>
            ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 z-10" />
          <img
            src={thumbUrl}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.private ? 'blur-sm grayscale' : ''}`}
            loading="lazy"
          />
          <div className="absolute top-3 right-3 flex flex-col items-end gap-2 z-20">
            {project.status === 'Destacado' && (
              <span className="bg-amber-500/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-400/50 flex items-center gap-1">
                <Star size={10} fill="white" /> Destacado
              </span>
            )}
             {project.status === 'TFG' && (
              <span className="bg-purple-600/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/50 flex items-center gap-1">
                <Award size={10} /> TFG - Excelencia
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-10">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-5 flex-grow leading-relaxed font-light">{project.short}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-medium bg-slate-800/80 text-cyan-300 px-3 py-1.5 rounded-full border border-slate-700/50 shadow-inner shadow-black/30">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
               <span className="text-xs font-medium bg-slate-800/80 text-slate-400 px-3 py-1.5 rounded-full border border-slate-700/50">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              onClick={toggleModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all z-30 backdrop-blur-md border border-white/10"
                aria-label="Cerrar"
              >
                ✕
              </button>

              <div className="relative h-72 w-full">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                 <img src={thumbUrl} alt="Demo" className="w-full h-full object-cover" />
                 <div className="absolute bottom-6 left-6 md:left-8 z-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-3 drop-shadow-2xl tracking-tight">
                        {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-bold bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 shadow-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>

              <div className="p-8 md:p-10 bg-slate-900">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <div className="prose prose-invert max-w-none mb-8">
                        <h3 className="text-sm font-bold text-brand-accent mb-4 uppercase tracking-wider flex items-center gap-2">
                            <Layers size={16} /> Sobre el proyecto
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg font-light">
                            {project.description || project.short}
                        </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 min-w-[250px]">
                        {project.private ? (
                            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-2xl">
                                <p className="text-sm text-yellow-200 mb-4 flex items-center gap-2 font-medium">
                                    <Lock size={16} /> Repositorio Privado
                                </p>
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={handleCopyRequest}
                                        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-colors text-center text-sm shadow-md"
                                    >
                                        Copiar solicitud
                                    </button>
                                    <a
                                        href={`mailto:${USER_INFO.email}?subject=Solicitud acceso repo ${project.title}`}
                                        className="w-full bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors text-center text-sm shadow-lg shadow-brand-accent/20"
                                    >
                                        Enviar Email
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {project.demo && (
                                    <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full bg-white text-slate-900 font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    >
                                    <PlayCircle size={22} />
                                    <span className="text-base">Ver demo en vivo</span>
                                    </a>
                                )}
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-xl border border-slate-600 transition-all hover:border-brand-accent flex items-center justify-center gap-3 group"
                                >
                                    <Code2 size={22} className="group-hover:rotate-12 transition-transform" />
                                    <span className="text-base">Ver código fuente</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
