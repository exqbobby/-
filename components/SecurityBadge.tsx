
import React from 'react';
import { SecurityType } from '../types.ts';

interface SecurityBadgeProps {
  type: SecurityType;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({ type }) => {
  const getStyles = (t: SecurityType) => {
    switch (t) {
      case SecurityType.CULTURAL: return "bg-red-600 text-white shadow-red-100";
      case SecurityType.FOOD: return "bg-yellow-500 text-stone-900 shadow-yellow-100";
      case SecurityType.ECOLOGICAL: return "bg-emerald-600 text-white shadow-emerald-100";
      case SecurityType.TECHNOLOGICAL: return "bg-indigo-600 text-white shadow-indigo-100";
      case SecurityType.MILITARY: return "bg-stone-800 text-white shadow-stone-100";
      case SecurityType.POLITICAL: return "bg-rose-600 text-white shadow-rose-100";
      case SecurityType.TERRITORIAL: return "bg-blue-600 text-white shadow-blue-100";
      case SecurityType.LEGAL: return "bg-slate-700 text-white shadow-slate-100";
      default: return "bg-stone-200 text-stone-600 shadow-stone-50";
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black shadow-md flex items-center gap-1.5 tracking-tighter kids-font border-b-2 border-black/20 ${getStyles(type)}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
      {type}
    </span>
  );
};

export default SecurityBadge;
