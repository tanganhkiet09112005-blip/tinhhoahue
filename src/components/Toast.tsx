import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#FFFCF5] border border-[#AD8648]/40 rounded-sm shadow-xl p-4 flex items-center justify-between gap-3 animate-slideUp">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-[#352B29] leading-snug">
          {toastMessage}
        </p>
      </div>

      <button
        onClick={clearToast}
        className="text-[#6F605D] hover:text-[#4B2A7B] p-1 transition-colors"
        aria-label="Đóng thông báo"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
