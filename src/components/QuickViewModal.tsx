import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../utils/format';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onViewFullDetail: (slug: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onViewFullDetail,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="relative bg-[#FFFCF5] border border-[#E6DBC6] rounded-sm w-full max-w-3xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 text-[#6F605D] hover:text-[#4B2A7B] transition-colors bg-white/90 rounded-full border border-[#E6DBC6]"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Container: Clean packshot display */}
          <div className="aspect-square md:aspect-auto md:h-full bg-white overflow-hidden flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#E6DBC6]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 max-w-full object-contain"
            />
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-7 flex flex-col justify-between bg-[#F6EEDD]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] mb-1 flex items-center gap-1.5">
                <span className="w-3 h-[1px] bg-[#AD8648]" />
                <span>{product.categoryName} · {product.origin}</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#352B29] mb-2.5 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-3.5">
                <span className="font-serif text-2xl font-bold text-[#4B2A7B]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-[#9E8E8A] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-[#6F605D] bg-white px-2 py-0.5 border border-[#E6DBC6] rounded-xs">
                  {product.unit}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#423735] leading-relaxed mb-5 font-light">
                {product.description}
              </p>

              {/* Specifications snippet */}
              <div className="border-t border-b border-[#E6DBC6] py-2.5 mb-5 text-xs space-y-1 text-[#6F605D]">
                <div><strong className="text-[#352B29]">Xuất xứ:</strong> {product.origin}</div>
                <div><strong className="text-[#352B29]">Hạn sử dụng:</strong> {product.shelfLife}</div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Quantity Stepper & Add */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#E6DBC6] bg-white h-10 rounded-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-full flex items-center justify-center text-[#6F605D] hover:text-[#4B2A7B]"
                    aria-label="Giảm"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-9 text-center font-bold text-sm font-sans text-[#352B29]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-full flex items-center justify-center text-[#6F605D] hover:text-[#4B2A7B]"
                    aria-label="Tăng"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 h-10 px-5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-xs shadow-xs ${
                    added 
                      ? 'bg-emerald-800 text-white' 
                      : 'bg-[#4B2A7B] hover:bg-[#352044] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Đã thêm vào giỏ!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#F2B705]" />
                      <span>Thêm vào giỏ</span>
                    </>
                  )}
                </button>
              </div>

              {/* View full detail link */}
              <button
                onClick={() => {
                  onClose();
                  onViewFullDetail(product.slug);
                }}
                className="w-full text-center text-xs font-medium text-[#6F605D] hover:text-[#4B2A7B] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Xem đầy đủ công thức & câu chuyện sản phẩm</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
