import React from 'react';

const StatsPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Trophies - Full Width */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[800px] flex justify-center">
            <img 
              src="https://github-profile-trophy.vercel.app/?username=mariotc1&theme=tokyonight&no-frame=true&no-bg=true&column=7&margin-w=15&margin-h=15&rank=-C,-B&cache_seconds=86400" 
              alt="GitHub Trophies"
              className="h-32 object-contain"
            />
        </div>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Profile Stats */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex justify-center items-center hover:border-brand-accent/50 transition-colors shadow-lg">
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=mariotc1&theme=tokyonight"
            alt="GitHub Stats"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Productive Time */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex justify-center items-center hover:border-brand-accent/50 transition-colors shadow-lg">
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=mariotc1&theme=tokyonight&utcOffset=1"
            alt="Productive Time"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Languages & Commits */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex justify-center items-center hover:border-brand-accent/50 transition-colors shadow-lg">
           <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=mariotc1&theme=tokyonight"
            alt="Repos per Language"
            className="w-full h-auto rounded-lg"
            loading="lazy"
           />
        </div>

        {/* Streak Stats (Nirzak) */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex justify-center items-center hover:border-brand-accent/50 transition-colors shadow-lg">
           <img
            src="https://nirzak-streak-stats.vercel.app?user=mariotc1&theme=tokyonight&hide_border=true&background=0d1117&stroke=6366F1&ring=6366F1&fire=F59E0B&currStreakLabel=6366F1&date_format=j%20M%5B%20Y%5D"
            alt="GitHub Streak"
            className="w-full h-auto"
            loading="lazy"
           />
        </div>
      </div>

      {/* Activity Graph - Full Width */}
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-lg">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          Actividad Reciente
        </h3>
        <div className="w-full flex justify-center overflow-x-auto">
           <img 
             src="https://github-readme-activity-graph.vercel.app/graph?username=mariotc1&custom_title=Actividad%20de%20Contribuciones&hide_border=true&bg_color=00000000&color=6366F1&line=6366F1&point=FFFFFF&area_color=6366F1&area=true&height=300" 
             alt="GitHub Activity Graph"
             className="min-w-[600px] w-full" 
           />
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
