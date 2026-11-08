import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/format';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (tab: string, param?: string) => void;
  onQuickView: (product: any) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onQuickView,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingredients' | 'guide' | 'shipping'>('desc');
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onNavigate('checkout');
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-14">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6F605D] flex-wrap">
        <button onClick={() => onNavigate('home')} className="hover:text-[#4B2A7B] transition-colors">
          Trang chủ
        </button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <button onClick={() => onNavigate('products')} className="hover:text-[#4B2A7B] transition-colors">
          Sản phẩm
        </button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <button onClick={() => onNavigate('products', product.category)} className="hover:text-[#4B2A7B] transition-colors">
          {product.categoryName}
        </button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <span className="font-semibold text-[#4B2A7B] truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left 6 Columns: Authentic Packshot Photography */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="aspect-square w-full bg-white border border-[#E6DBC6] overflow-hidden shadow-sm flex items-center justify-center p-6 sm:p-10 rounded-sm">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="p-3.5 bg-[#FFFCF5] border border-[#E6DBC6] flex items-center justify-between text-xs text-[#6F605D] rounded-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-medium text-[#352B29]">Sản phẩm mẻ mới xuất xưởng</span>
            </div>
            <span className="italic font-serif text-[#6F605D]">Đóng gói tiêu chuẩn Cố Đô</span>
          </div>
        </div>

        {/* Right 6 Columns: Typographic Details & Ordering Suite */}
        <div className="lg:col-span-6 space-y-5">
          
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#4B2A7B] font-semibold mb-1.5 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>{product.categoryName} · {product.origin}</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#352B29] font-medium leading-tight mb-3.5">
              {product.name}
            </h1>

            {/* Price display */}
            <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-[#E6DBC6]">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#4B2A7B]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-[#9E8E8A] line-through font-normal">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-xs text-[#6F605D] bg-[#F6EEDD] px-2.5 py-1 border border-[#E6DBC6] rounded-xs">
                Quy cách: {product.unit}
              </span>
            </div>

            <p className="text-sm text-[#423735] leading-relaxed mb-5 font-light">
              {product.description}
            </p>
          </div>

          {/* Specification Table */}
          <div className="border-t border-b border-[#E6DBC6] py-3.5 divide-y divide-[#E6DBC6]/60 text-xs">
            <div className="py-2 flex items-center justify-between">
              <span className="text-[#6F605D]">Xuất xứ & Lò sản xuất:</span>
              <span className="font-medium text-[#352B29]">{product.origin}</span>
            </div>
            <div className="py-2 flex items-center justify-between">
              <span className="text-[#6F605D]">Hạn sử dụng:</span>
              <span className="font-medium text-[#352B29]">{product.shelfLife}</span>
            </div>
            <div className="py-2 flex items-center justify-between">
              <span className="text-[#6F605D]">Tình trạng:</span>
              <span className="font-semibold text-emerald-800">Còn hàng mẻ mới trong tuần</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 space-y-3">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[#E6DBC6] bg-[#FFFCF5] h-11 rounded-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-[#6F605D] hover:text-[#4B2A7B]"
                  aria-label="Giảm số lượng"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-sm font-sans text-[#352B29]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-[#6F605D] hover:text-[#4B2A7B]"
                  aria-label="Tăng số lượng"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 h-11 px-6 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-xs ${
                  added 
                    ? 'bg-emerald-800 text-white' 
                    : 'bg-[#4B2A7B] hover:bg-[#352044] text-white shadow-sm'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Đã thêm vào giỏ hàng</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#F2B705]" />
                    <span>Thêm vào giỏ hàng</span>
                  </>
                )}
              </button>
            </div>

            {/* Buy Now Direct Button */}
            <button
              onClick={handleBuyNow}
              className="w-full h-11 border border-[#4B2A7B] text-[#4B2A7B] hover:bg-[#4B2A7B] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
            >
              Mua ngay với 1 thao tác
            </button>
          </div>

          {/* Reassurance Grid */}
          <div className="pt-3 grid grid-cols-3 gap-3 text-[11px] text-[#6F605D] border-t border-[#E6DBC6]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#4B2A7B]" />
              <span>Giao toàn quốc</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-[#AD8648]" />
              <span>Đổi trả 30 ngày</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Chính gốc 100%</span>
            </div>
          </div>

        </div>

      </div>

      {/* Editorial Detail Tabs */}
      <div className="border-t border-[#E6DBC6] pt-8">
        
        {/* Tab Headers */}
        <div className="flex border-b border-[#E6DBC6] gap-8 text-xs font-semibold uppercase tracking-wide overflow-x-auto">
          <button
            onClick={() => setActiveTab('desc')}
            className={`pb-3.5 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'desc' 
                ? 'border-[#4B2A7B] text-[#4B2A7B]' 
                : 'border-transparent text-[#6F605D] hover:text-[#352B29]'
            }`}
          >
            Mô tả di sản
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`pb-3.5 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'ingredients' 
                ? 'border-[#4B2A7B] text-[#4B2A7B]' 
                : 'border-transparent text-[#6F605D] hover:text-[#352B29]'
            }`}
          >
            Thành phần & Nguyên liệu
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`pb-3.5 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'guide' 
                ? 'border-[#4B2A7B] text-[#4B2A7B]' 
                : 'border-transparent text-[#6F605D] hover:text-[#352B29]'
            }`}
          >
            Cách thưởng thức & Bảo quản
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`pb-3.5 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'shipping' 
                ? 'border-[#4B2A7B] text-[#4B2A7B]' 
                : 'border-transparent text-[#6F605D] hover:text-[#352B29]'
            }`}
          >
            Chính sách giao nhận
          </button>
        </div>

        {/* Tab Contents */}
        <div className="py-7 max-w-3xl text-sm text-[#423735] leading-relaxed font-light">
          {activeTab === 'desc' && (
            <div className="space-y-3.5">
              <p>
                {product.details || product.description}
              </p>
              <p>
                Mỗi mẻ sản phẩm được tạo ra dưới sự chăm chút tỉ mẩn của những người thợ làm nghề có thâm niên trên ba thập kỷ tại Huế. Hương vị không chạy theo gia vị công nghiệp mà đề cao tính chân thật, tự nhiên của nguyên liệu bản địa.
              </p>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-3">
              <p>
                <strong className="font-semibold text-[#352B29]">Thành phần chính:</strong> {product.ingredients.join(', ')}
              </p>
              <p className="text-xs text-[#6F605D]">
                Hoàn toàn không sử dụng phẩm màu hóa học độc hại hay chất bảo quản vượt ngưỡng cho phép. Đảm bảo nguyên vẹn dinh dưỡng và phong vị ẩm thực Cố đô.
              </p>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-3.5">
              <div>
                <strong className="font-semibold text-[#352B29] block mb-1">Cách dùng gợi ý:</strong>
                <p>{product.usageInstructions}</p>
              </div>
              <div>
                <strong className="font-semibold text-[#352B29] block mb-1">Bảo quản:</strong>
                <p>{product.storageInstructions}</p>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-2.5">
              <p>
                - Giao hàng toàn quốc từ 2 đến 4 ngày làm việc tùy tỉnh thành.
              </p>
              <p>
                - Đóng gói tiêu chuẩn chống sốc, hút chân không kỹ càng đối với thực phẩm tươi và bánh lá.
              </p>
              <p>
                - Miễn phí vận chuyển cho đơn hàng từ 500.000₫ trở lên.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-[#E6DBC6] pt-10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-medium text-[#352B29]">
              Đặc sản cùng danh mục
            </h3>
            <button
              onClick={() => onNavigate('products', product.category)}
              className="text-xs font-semibold uppercase tracking-wider text-[#4B2A7B] hover:underline"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map(rel => (
              <ProductCard
                key={rel.id}
                product={rel}
                onSelectProduct={(slug) => onNavigate('product-detail', slug)}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
