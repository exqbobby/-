
import React, { useState } from 'react';
import { Festival } from '../types.ts';
import SecurityBadge from './SecurityBadge.tsx';
import { generateFestivalImage } from '../services/geminiService.ts';

interface FestivalCardProps {
  festival: Festival;
}

const FestivalCard: React.FC<FestivalCardProps> = ({ festival }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    setLoading(true);
    const url = await generateFestivalImage(festival.aiPrompt);
    setImageUrl(url);
    setLoading(false);
  };

  return (
    <div className={`flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200 ${festival.color}`}>
      <div className="p-5 flex-1">
        <div className="flex justify-between items-start mb-2">
          <div className="bg-white/80 backdrop-blur px-3 py-1 rounded-lg text-sm font-bold text-stone-600 shadow-sm">
            {festival.month}月
          </div>
          <SecurityBadge type={festival.securityType} />
        </div>
        
        <h3 className="text-xl font-bold text-stone-800 serif mb-1">{festival.name}</h3>
        <p className="text-xs text-stone-500 font-medium mb-4">
          日期：{festival.date2025} ({festival.lunarDate})
        </p>
        
        <div className="space-y-3">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">教育簡介</span>
            <p className="text-sm text-stone-700 leading-relaxed">{festival.intro}</p>
          </div>
          
          <div className="bg-white/40 p-3 rounded-xl border border-white/50">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">國安與文化教育點</span>
            <p className="text-sm text-stone-800 font-medium">{festival.securityPoint}</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white/60 backdrop-blur border-t border-stone-200">
        {!imageUrl ? (
          <button 
            onClick={handleGenerateImage}
            disabled={loading}
            className="w-full py-2 bg-stone-800 text-white rounded-xl text-sm font-bold hover:bg-stone-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                正在生成 AI 繪圖...
              </>
            ) : "生成 AI 教學繪圖"}
          </button>
        ) : (
          <div className="relative group">
            <img 
              src={imageUrl} 
              alt={festival.name} 
              className="w-full h-48 object-cover rounded-xl shadow-inner border border-stone-200"
            />
            <button 
              onClick={() => setImageUrl(null)}
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FestivalCard;
