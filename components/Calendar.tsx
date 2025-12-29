
import React from 'react';
import { Festival } from '../types.ts';

interface CalendarProps {
  month: number;
  festivals: Festival[];
  onSelectFestival: (f: Festival) => void;
}

const Calendar: React.FC<CalendarProps> = ({ month, festivals, onSelectFestival }) => {
  // 2026 年 (1月1日是週四)
  const getDaysInMonth = (m: number) => new Date(2026, m, 0).getDate();
  const getStartDay = (m: number) => new Date(2026, m - 1, 1).getDay();

  const days = getDaysInMonth(month);
  const startDay = getStartDay(month);
  const calendarDays = Array.from({ length: 42 }, (_, i) => i - startDay + 1);

  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <div className="relative p-2 md:p-4 bg-white/40 backdrop-blur-md rounded-[2.5rem] border-4 border-[#c0392b]/20 shadow-xl overflow-hidden paper-texture">
      {/* 傳統角隅裝飾 */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-red-600/20 rounded-tl-[2rem]"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-red-600/20 rounded-br-[2rem]"></div>

      {/* 星期 */}
      <div className="grid grid-cols-7 mb-4">
        {weekdays.map((d, i) => (
          <div key={d} className={`py-3 text-center text-xs font-black kids-font tracking-widest ${i === 0 || i === 6 ? 'text-red-500' : 'text-stone-400'}`}>
            {d}
          </div>
        ))}
      </div>

      {/* 格子 */}
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {calendarDays.map((day, idx) => {
          const isCurrentMonth = day > 0 && day <= days;
          const dayFestivals = festivals.filter(f => f.day === day);

          return (
            <div key={idx} className={`relative min-h-[80px] md:min-h-[120px] p-2 rounded-2xl transition-all duration-300 ${!isCurrentMonth ? 'opacity-0 pointer-events-none' : 'bg-white shadow-sm hover:shadow-md hover:-translate-y-1'}`}>
              {isCurrentMonth && (
                <div className="h-full flex flex-col">
                  <span className={`text-sm md:text-lg font-black kids-font ${dayFestivals.length > 0 ? 'text-red-600' : 'text-stone-300'}`}>{day}</span>
                  <div className="mt-1 flex flex-col gap-1">
                    {dayFestivals.map(f => (
                      <button key={f.id} onClick={() => onSelectFestival(f)} className={`w-full text-left px-2 py-1.5 rounded-xl text-[10px] font-bold shadow-sm border border-black/5 ${f.color} transition-transform active:scale-95`}>
                         <div className="truncate flex items-center gap-1">
                            <span>{f.icon}</span>
                            <span className="hidden md:inline">{f.name}</span>
                         </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
