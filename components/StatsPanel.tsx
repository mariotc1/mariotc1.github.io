import React from 'react';
import { Activity, GitCommit, Trophy, Zap } from 'lucide-react';

const StatsPanel: React.FC = () => {
  return (
    <div className="relative bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl overflow-hidden group">
      {/* Decorative HUD corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-xl"></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>

      <div className="relative z-10 flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-700/50 pb-4">
            <Activity className="text-brand-accent animate-pulse" />
            <h3 className="text-xl font-bold text-white tracking-widest uppercase">
                GitHub Command Center
            </h3>
            <div className="ml-auto flex gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            </div>
        </div>

        {/* Trophies - "Hall of Fame" */}
        <div className="w-full bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden">
            <div className="absolute top-2 left-3 text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center gap-1">
                <Trophy size={12} /> Achievements
            </div>
            <div className="overflow-x-auto pb-2 pt-4 hide-scrollbar">
                 <div className="min-w-[800px] flex justify-center">
                    <img 
                    src="https://github-profile-trophy.vercel.app/?username=mariotc1&theme=tokyonight&no-frame=true&no-bg=true&column=7&margin-w=15&margin-h=15&rank=-C,-B&cache_seconds=86400" 
                    alt="GitHub Trophies"
                    className="h-28 object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Quick Stats */}
            <div className="md:col-span-5 flex flex-col gap-6">
                 <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-700/30 hover:border-brand-accent/30 transition-colors shadow-lg relative group/card">
                    <img
                        src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=mariotc1&theme=tokyonight"
                        alt="GitHub Stats"
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                    />
                 </div>
                 <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-700/30 hover:border-brand-accent/30 transition-colors shadow-lg">
                    <img
                        src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=mariotc1&theme=tokyonight&utcOffset=1"
                        alt="Productive Time"
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                    />
                 </div>
            </div>

            {/* Right Column: Activity & Languages */}
            <div className="md:col-span-7 flex flex-col gap-6">
                 {/* Activity Graph */}
                 <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-20">
                         <GitCommit size={100} />
                     </div>
                     <h4 className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                        <Zap size={14} className="text-yellow-400" /> Activity Stream
                     </h4>
                     <div className="w-full flex justify-center overflow-x-auto">
                        <img 
                            src="https://github-readme-activity-graph.vercel.app/graph?username=mariotc1&custom_title=Actividad%20de%20Contribuciones&hide_border=true&bg_color=00000000&color=6366F1&line=6366F1&point=FFFFFF&area_color=6366F1&area=true&height=300" 
                            alt="GitHub Activity Graph"
                            className="min-w-[500px] w-full mix-blend-screen" 
                        />
                    </div>
                 </div>

                 {/* Bottom Row */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-700/30 hover:border-brand-accent/30 transition-colors">
                        <img
                            src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=mariotc1&theme=tokyonight"
                            alt="Repos per Language"
                            className="w-full h-auto rounded-lg"
                            loading="lazy"
                        />
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-700/30 hover:border-brand-accent/30 transition-colors">
                        <img
                            src="https://nirzak-streak-stats.vercel.app?user=mariotc1&theme=tokyonight&hide_border=true&background=1e293b00&stroke=6366F1&ring=6366F1&fire=F59E0B&currStreakLabel=6366F1&date_format=j%20M%5B%20Y%5D"
                            alt="GitHub Streak"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
