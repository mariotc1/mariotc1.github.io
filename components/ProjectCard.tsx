import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Lock, Code2, PlayCircle } from 'lucide-react';
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

  // Dynamic Color Mapping for Premium Tags
  const getTagColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('tfg')) {
      return "text-purple-300 border-purple-500/40 bg-slate-950/80 shadow-[0_0_15px_rgba(168,85,247,0.3)]";
    }
    if (s.includes('desarrollo')) {
      return "text-emerald-300 border-emerald-500/40 bg-slate-950/80 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
    }
    if (s.includes('data') || s.includes('scraping')) {
      return "text-amber-300 border-amber-500/40 bg-slate-950/80 shadow-[0_0_15px_rgba(245,158,11,0.3)]";
    }
    if (s.includes('api')) {
      return "text-rose-300 border-rose-500/40 bg-slate-950/80 shadow-[0_0_15px_rgba(225,29,72,0.3)]";
    }
    // Default / Landing Page
    return "text-cyan-300 border-cyan-500/40 bg-slate-950/80 shadow-[0_0_15px_rgba(6,182,212,0.3)]";
  };

  return (
    <>
      <motion.div
        className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-500/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] cursor-pointer flex flex-col h-full transform-gpu isolate"
        whileHover={{ y: -5 }}
        onClick={toggleModal}
      >
        <div className="h-52 overflow-hidden relative rounded-t-2xl">
            {project.private ? (
                 <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-10 border-b border-slate-700/50">
                     <span className="flex items-center gap-2 text-slate-300 font-semibold border border-slate-600/50 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-md">
                         <Lock size={16} className="text-brand-accent" /> Privado — en curso
                     </span>
                 </div>
            ) : null}
          {/* Enhanced Image Overlay for Premium Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 z-10 mix-blend-multiply" />
          <img
            src={thumbUrl}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03] ${project.private ? 'blur-sm grayscale' : ''}`}
            loading="lazy"
          />
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {project.status && (
              <span className={`border text-[10px] md:text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full backdrop-blur-md transition-colors duration-300 ${getTagColor(project.status)}`}>
                {project.status}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-brand-accent transition-colors duration-500 drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm md:text-base mb-6 flex-grow leading-relaxed font-light">
            {project.short}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] md:text-xs font-semibold bg-slate-800/80 text-cyan-300 px-3 py-1.5 rounded-full border border-slate-700/50 group-hover:bg-slate-800 transition-colors shadow-sm">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
               <span className="text-[10px] md:text-xs font-semibold bg-slate-800/50 text-slate-400 px-3 py-1.5 rounded-full border border-slate-700/30">
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
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={toggleModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all z-20 backdrop-blur-sm"
                aria-label="Cerrar"
              >
                ✕
              </button>

              <div className="relative h-64 w-full">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                 <img src={thumbUrl} alt="Demo" className="w-full h-full object-cover" />
                 <div className="absolute bottom-6 left-6 md:left-8 z-20">
                    <h2 className="text-4xl font-black text-white mb-2 drop-shadow-lg">{project.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-bold bg-white/10 backdrop-blur text-white px-3 py-1 rounded-full border border-white/10 shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="prose prose-invert max-w-none mb-8">
                  <h3 className="text-lg font-bold text-brand-accent mb-2 uppercase tracking-wide">Sobre el proyecto</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {project.description || project.short}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-800">
                  {project.private ? (
                    <div className="w-full bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
                       <p className="text-sm text-yellow-200 mb-3 flex items-center gap-2 font-medium">
                         <Lock size={16} /> Este repositorio es privado.
                       </p>
                       <div className="flex gap-3">
                          <button
                            onClick={handleCopyRequest}
                            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm"
                          >
                            Copiar solicitud
                          </button>
                          <a
                             href={`mailto:${USER_INFO.email}?subject=Solicitud acceso repo ${project.title}`}
                             className="flex-1 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2 text-sm"
                          >
                             Enviar Email
                          </a>
                       </div>
                    </div>
                  ) : (
                    <>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 bg-white text-brand-dark font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                        >
                          <PlayCircle size={20} />
                          Ver demo en vivo
                        </a>
                      )}
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl border border-slate-600 transition-all hover:border-brand-accent flex items-center justify-center gap-2"
                      >
                        <Code2 size={20} />
                        Ver código fuente
                      </a>
                    </>
                  )}
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
