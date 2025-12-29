
import React from 'react';
import { Festival } from '../types.ts';
import SecurityBadge from './SecurityBadge.tsx';

interface FestivalDetailProps {
  festival: Festival;
  onClose: () => void;
}

const FestivalDetail: React.FC<FestivalDetailProps> = ({ festival, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300">
        
        {/* 圖片封面 */}
        <div className="relative h-56 w-full">
          <img src={festival.imageUrl} alt={festival.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
          
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 backdrop-blur text-white p-2 rounded-2xl transition-all">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl font-black text-white kids-font tracking-tight">{festival.icon} {festival.name}</h2>
            <p className="text-white/80 text-xs font-bold mt-1">📅 2026年{festival.month}月{festival.day}日 (農曆 {festival.lunarDate})</p>
          </div>
        </div>

        {/* 內容區域 */}
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-3">
            <SecurityBadge type={festival.securityType} />
            <span className="text-stone-300">|</span>
            <span className="text-stone-400 text-[10px] font-black tracking-widest uppercase">Safe & Happy</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-black text-stone-400 tracking-widest kids-font uppercase">節慶小知識</h4>
            <p className="text-stone-700 leading-relaxed text-lg font-medium serif">{festival.intro}</p>
          </div>

          <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-100 relative group">
            <div className="absolute -right-3 -top-3 w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg rotate-12 transition-transform">💡</div>
            <h4 className="text-[10px] font-black text-red-600 tracking-widest kids-font uppercase mb-2">安安熊提醒你：</h4>
            <p className="text-red-900 font-black text-md leading-relaxed serif">{festival.securityPoint}</p>
          </div>
        </div>

        {/* 下方按鈕 */}
        <div className="px-8 pb-8 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <span className="text-xl">🐴</span>
              <span className="text-[10px] text-stone-400 font-bold">2026 馬年伴你行</span>
           </div>
           <button onClick={onClose} className="px-8 py-3 bg-stone-900 text-white rounded-2xl font-black text-xs hover:bg-stone-800 transition-all active:scale-95 shadow-lg shadow-stone-200 kids-font tracking-widest">
             我懂了！回日曆
           </button>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetail;
