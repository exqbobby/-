
import React, { useState } from 'react';
import { FESTIVALS } from './constants.ts';
import FestivalCard from './components/FestivalCard.tsx';

const App: React.FC = () => {
  const [filterMonth, setFilterMonth] = useState<number | null>(null);

  const filteredFestivals = filterMonth 
    ? FESTIVALS.filter(f => f.month === filterMonth)
    : FESTIVALS;

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-stone-900 serif tracking-tight">歲月護航</h1>
              <p className="text-stone-500 font-medium">中華文化與國家安全年度日曆 (2025)</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilterMonth(null)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!filterMonth ? 'bg-red-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                全部月份
              </button>
              {months.map(m => (
                <button
                  key={m}
                  onClick={() => setFilterMonth(m)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all flex items-center justify-center ${filterMonth === m ? 'bg-red-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Intro Section */}
        <section className="mb-12 bg-stone-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 serif">總體國家安全觀教學指引</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-stone-300 text-sm">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  文化安全
                </h3>
                <p>慶祝傳統節日，守護中華民族文化認同，防止外部文化侵蝕，增強文化自信。</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  糧食與生態
                </h3>
                <p>教育學生明白「手中有糧，心中不慌」。護林保土即是守護國命脈。</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  科技與軍事
                </h3>
                <p>展現國家硬實力。航天科技、強大軍備是和平發展的堅實盾牌。</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-block px-3 py-1 bg-red-600 rounded-lg text-xs font-bold uppercase tracking-widest animate-pulse">
                觀課加分項
              </span>
              <p className="text-xs text-stone-400">使用「AI 賦能教學」將生成的提示語圖片印成大卡片，能有效展示前瞻教學能力。</p>
            </div>
          </div>
        </section>

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-20 bg-stone-100 rounded-3xl border-2 border-dashed border-stone-300">
            <p className="text-stone-500 font-medium">該月份暫無重點節慶資料。</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-stone-200">
        <p className="text-stone-400 text-sm">© 2024 中華文化與國家安全教育教材專項組</p>
        <p className="text-stone-300 text-xs mt-1 italic">「國土安全：警鐘長鳴。文化安全：守護根基。」</p>
      </footer>
    </div>
  );
};

export default App;
