import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
  onExploreProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  onProceedToCheckout,
  onExploreProducts 
}) => {
  const { 
    items, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    subtotal, 
    totalItems 
  } = useCart();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 500000;
  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShipPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={closeCart}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#F6EEDD] border-l border-[#E6DBC6] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E6DBC6] bg-[#FFFCF5] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4B2A7B] flex items-center gap-1.5">
                <span className="w-3 h-[1px] bg-[#AD8648]" />
                <span>Giỏ hàng đặc sản</span>
              </div>
              <h2 className="font-serif font-medium text-lg text-[#352B29]">
                Món đã chọn ({totalItems})
              </h2>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-[#6F605D] hover:text-[#4B2A7B] transition-colors rounded-xs"
              aria-label="Đóng giỏ hàng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Freeship Progress Note */}
          <div className="bg-[#FFFCF5] px-4 py-2.5 border-b border-[#E6DBC6] text-xs">
            {remainingForFreeShip > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[#352B29] font-medium">
                  <span>Mua thêm <strong className="text-[#4B2A7B]">{formatPrice(remainingForFreeShip)}</strong> để Freeship</span>
                  <span className="font-bold text-[#4B2A7B]">{freeShipPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#E6DBC6] overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-[#4B2A7B] transition-all duration-300"
                    style={{ width: `${freeShipPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#AD8648]" />
                <span>Đơn hàng của bạn đủ điều kiện MIỄN PHÍ VẬN CHUYỂN</span>
              </div>
            )}
          </div>

          {/* Items list */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#E6DBC6]/70">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FFFCF5] border border-[#E6DBC6] flex items-center justify-center text-[#4B2A7B]/40">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-base text-[#352B29]">Giỏ hàng đang trống</h3>
                  <p className="text-xs text-[#6F605D] mt-1 max-w-xs font-light">
                    Hãy dạo quanh gian hàng để chọn những thức quà chuẩn vị Cố đô bạn nhé.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    onExploreProducts();
                  }}
                  className="px-6 py-2.5 bg-[#4B2A7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#352044] transition-colors rounded-xs shadow-sm"
                >
                  Khám phá đặc sản ngay
                </button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.product.id} className="py-3.5 first:pt-0 last:pb-0 flex gap-3.5">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 object-contain bg-white border border-[#E6DBC6] p-1 shrink-0 rounded-xs"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-[#352B29] leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#9E8E8A] hover:text-red-700 transition-colors p-1"
                          title="Xóa món này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#6F605D] mt-0.5">
                        {item.product.unit} · {formatPrice(item.product.price)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#E6DBC6] bg-white rounded-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#6F605D] hover:text-[#4B2A7B] hover:bg-[#F6EEDD] transition-colors"
                          aria-label="Giảm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold font-sans text-[#352B29]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#6F605D] hover:text-[#4B2A7B] hover:bg-[#F6EEDD] transition-colors"
                          aria-label="Tăng"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-xs sm:text-sm text-[#352B29] font-sans">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E6DBC6] bg-[#FFFCF5] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-[#6F605D]">
                  Tạm tính ({totalItems} sản phẩm):
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-[#4B2A7B]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="text-[11px] text-[#6F605D] font-light">
                Phí vận chuyển và ưu đãi sẽ được tính toán chi tiết tại bước Đặt hàng.
              </p>

              <button
                onClick={() => {
                  closeCart();
                  onProceedToCheckout();
                }}
                className="w-full py-3 bg-[#4B2A7B] hover:bg-[#352044] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs shadow-sm"
              >
                <span>Tiến hành đặt hàng</span>
                <ArrowRight className="w-4 h-4 text-[#F2B705]" />
              </button>

              <button
                onClick={closeCart}
                className="w-full py-1.5 text-center text-xs text-[#6F605D] hover:text-[#4B2A7B] underline underline-offset-4 transition-colors"
              >
                Tiếp tục chọn thêm đặc sản
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
