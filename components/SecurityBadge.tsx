
import React from 'react';
import { SecurityType } from '../types';

interface SecurityBadgeProps {
  type: SecurityType;
}

const SecurityBadge: React.FC<SecurityBadgeProps> = ({ type }) => {
  const getColors = (t: SecurityType) => {
    switch (t) {
      case SecurityType.CULTURAL: return "bg-red-100 text-red-700 border-red-200";
      case SecurityType.FOOD: return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case SecurityType.ECOLOGICAL: return "bg-green-100 text-green-700 border-green-200";
      case SecurityType.TECHNOLOGICAL: return "bg-blue-100 text-blue-700 border-blue-200";
      case SecurityType.MILITARY: return "bg-slate-100 text-slate-700 border-slate-200";
      case SecurityType.POLITICAL: return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${getColors(type)}`}>
      {type}
    </span>
  );
};

export default SecurityBadge;
