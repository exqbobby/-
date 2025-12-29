
import React, { useState } from 'react';
import { FESTIVALS } from './constants.ts';
import Calendar from './components/Calendar.tsx';
import FestivalDetail from './components/FestivalDetail.tsx';
import { Festival } from './types.ts';

const App: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  const festivalsInMonth = FESTIVALS.filter(f => f.month === currentMonth);
  const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  return (
    <div className="min-h-screen pb-20">
      {/* 頂部裝飾 */}
      <div className="h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 w-full sticky top-0 z-[60]"></div>
      
      {/* 導航欄 */}
      <header className="bg-white/90 backdrop-blur-md border-b-2 border-stone-100 sticky top-2 z-50 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-yellow-400 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              <span className="text-3xl calligraphy">馬</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-stone-900 kids-font tracking-tight">歲月護航 <span className="text-red-600">2026</span></h1>
              <p className="text-stone-400 text-[10px] font-bold tracking-widest uppercase">My Safety & Culture Calendar</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide px-2 w-full lg:w-auto">
            {months.map((name, i) => (
              <button
                key={i}
                onClick={() => setCurrentMonth(i + 1)}
                className={`flex-shrink-0 px-4 py-2 rounded-2xl text-xs font-black transition-all ${
                  currentMonth === i + 1 
                  ? 'bg-red-600 text-white shadow-lg scale-110' 
                  : 'bg-stone-50 text-stone-400 hover:bg-red-50 hover:text-red-400'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 主體內容 */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        
        {/* 卡通導讀區 */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-3 bg-white border-4 border-stone-800 p-8 rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-[-20px] right-[-20px] opacity-5">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"/></svg>
              </div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-black serif kids-font flex items-center gap-3">
                   <span className="text-red-600">★</span> 我們一起護航國土
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-red-50 p-5 rounded-[2rem] border-2 border-red-100 flex flex-col gap-2">
                      <span className="text-2xl">🏮</span>
                      <h3 className="font-black text-red-700 kids-font text-sm">熱愛文化</h3>
                      <p className="text-[11px] text-stone-500 font-medium">了解我們的傳統，守護共同的根！</p>
                   </div>
                   <div className="bg-blue-50 p-5 rounded-[2rem] border-2 border-blue-100 flex flex-col gap-2">
                      <span className="text-2xl">🛡️</span>
                      <h3 className="font-black text-blue-700 kids-font text-sm">保衛家園</h3>
                      <p className="text-[11px] text-stone-500 font-medium">記住歷史英雄，保護每一寸土地！</p>
                   </div>
                   <div className="bg-emerald-50 p-5 rounded-[2rem] border-2 border-emerald-100 flex flex-col gap-2">
                      <span className="text-2xl">🌱</span>
                      <h3 className="font-black text-emerald-700 kids-font text-sm">守護未來</h3>
                      <p className="text-[11px] text-stone-500 font-medium">環保、消防與法治，人人有責！</p>
                   </div>
                </div>
              </div>
           </div>

           <div className="bg-[#e67e22] text-white p-8 rounded-[3rem] shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute -bottom-6 -right-6 text-9xl opacity-20 font-black calligraphy transform group-hover:scale-125 transition-transform">馬</div>
              <div className="relative z-10">
                 <div className="text-[10px] font-black opacity-80 mb-2 kids-font tracking-widest">2026 丙午年</div>
                 <span className="text-7xl font-black kids-font block">{currentMonth}月</span>
                 <div className="mt-4 text-xs font-bold leading-relaxed px-4">
                   本月有 <span className="text-2xl font-black">{festivalsInMonth.length}</span> 個節慶<br/>等你去發現！
                 </div>
              </div>
           </div>
        </section>

        {/* 日曆主體 */}
        <section className="relative">
           {/* 卡通吉祥物小馬 */}
           <div className="absolute -left-16 top-40 hidden xl:block animate-float">
              <div className="relative">
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-stone-200 text-[10px] font-black text-red-600 mb-2 whitespace-nowrap">
                   我是小馬安安！🐴<br/>點點看日曆吧！
                </div>
                <div className="w-32 h-32 bg-yellow-400 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-6xl">🐴</div>
              </div>
           </div>

           <Calendar 
            month={currentMonth} 
            festivals={festivalsInMonth} 
            onSelectFestival={setSelectedFestival} 
          />
        </section>
      </main>

      {/* 詳情視窗 */}
      {selectedFestival && (
        <FestivalDetail 
          festival={selectedFestival} 
          onClose={() => setSelectedFestival(null)} 
        />
      )}

      {/* 底部 */}
      <footer className="text-center py-20 mt-10">
        <div className="flex justify-center gap-10 opacity-30 grayscale mb-8">
           <span className="text-4xl">🧧</span>
           <span className="text-4xl">🎋</span>
           <span className="text-4xl">🏮</span>
        </div>
        <p className="text-stone-400 text-xs font-black kids-font tracking-widest uppercase">© 2026 歲月護航 · 小朋友國家安全教育專案</p>
        <div className="mt-4 flex justify-center gap-4 text-[9px] font-black text-stone-300 tracking-[0.3em]">
           <span>文化自信</span>
           <span>•</span>
           <span>領土主權</span>
           <span>•</span>
           <span>安全第一</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
