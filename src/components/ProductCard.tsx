import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../utils/format';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (slug: string) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onSelectProduct,
  onQuickView 
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    } else {
      onSelectProduct(product.slug);
    }
  };

  return (
    <article 
      onClick={() => onSelectProduct(product.slug)}
      className="group relative flex flex-col justify-between cursor-pointer transition-all duration-300 bg-[#FFFCF5] border border-[#E6DBC6] hover:border-[#AD8648] p-3 sm:p-4 rounded-sm shadow-sm hover:shadow-md"
    >
      {/* Product Image Frame: consistent ratio, white container, clear display */}
      <div className="relative aspect-[4/3.5] w-full bg-white overflow-hidden flex items-center justify-center border border-[#E6DBC6]/60 rounded-xs">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />

        {/* Real unit tag on photo */}
        <div className="absolute bottom-2 left-2 bg-[#F6EEDD]/95 px-2 py-0.5 text-[11px] font-medium text-[#352B29] border border-[#E6DBC6] rounded-xs shadow-xs">
          {product.unit}
        </div>

        {/* Quick view button on desktop hover */}
        <button
          onClick={handleQuickView}
          className="hidden sm:inline-flex absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 text-[#352B29] hover:text-[#4B2A7B] hover:bg-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#E6DBC6] shadow-xs"
          title="Xem chi tiết nhanh"
          aria-label="Xem chi tiết nhanh"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Product Information */}
      <div className="pt-3.5 pb-1 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#6F605D] mb-1">
            <span className="uppercase tracking-wider font-semibold text-[#4B2A7B]">
              {product.categoryName}
            </span>
            <span className="text-[10px] text-[#8C6831] font-medium">
              {product.origin.split(',')[0]}
            </span>
          </div>

          <h3 className="font-serif font-medium text-[15px] sm:text-base text-[#352B29] group-hover:text-[#4B2A7B] transition-colors leading-snug line-clamp-2 h-[2.6rem]">
            {product.name}
          </h3>
        </div>

        {/* Price & Action Row: stable alignment */}
        <div className="mt-3 pt-3 border-t border-[#E6DBC6]/70 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-[15px] font-bold text-[#352B29] font-sans">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#9E8E8A] line-through font-normal">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#4B2A7B] bg-[#4B2A7B]/5 hover:bg-[#4B2A7B] hover:text-white border border-[#4B2A7B]/20 hover:border-[#4B2A7B] transition-colors duration-200 active:scale-95 rounded-xs"
            aria-label={`Thêm ${product.name} vào giỏ hàng`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Chọn</span>
          </button>
        </div>
      </div>
    </article>
  );
};
