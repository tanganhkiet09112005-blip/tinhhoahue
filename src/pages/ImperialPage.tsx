import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface ImperialPageProps {
  onNavigate: (tab: string, param?: string) => void;
  onQuickView?: (product: any) => void;
}

export const ImperialPage: React.FC<ImperialPageProps> = ({ onNavigate, onQuickView }) => {
  const imperialProducts = PRODUCTS.filter(p => p.category === 'tra-thao-moc' || p.category === 'hat-sen');

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Editorial Header Feature: Tím mận sâu #352044 · Chữ ngà #F6EEDD */}
      <section className="bg-[#352044] text-[#F6EEDD] pt-14 sm:pt-20 pb-16 border-b border-[#261432] relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#F2B705]">
              <span className="w-5 h-[1.5px] bg-[#AD8648]" />
              <span>Chuyên khảo di sản triều Nguyễn</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium leading-[1.15] text-white">
              Cốt cách ẩm thực Cung đình xứ Huế
            </h1>
            <p className="text-sm sm:text-base text-[#F6EEDD]/85 leading-relaxed font-light">
              Nơi mỗi món ăn không chỉ là phong vị của đất trời miền Trung, mà còn là kết tinh của triết lý âm dương, sự cầu kỳ trong chế biến và phong thái tao nhã của bậc vương giả chốn hoàng thành.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: Trà Cung Đình 16 Vị */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>Chương 01 / Ngự Trà</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#352B29] font-medium leading-snug">
              Trà Cung Đình 16 Vị — Thức uống bồi bổ chốn Cung cấm
            </h2>
            <p className="text-xs sm:text-sm text-[#423735] leading-relaxed font-light">
              Theo sử liệu triều Nguyễn, các ngự y trong Thái Y Viện đã dày công phối kết mười sáu vị thảo mộc quý: Atiso, Cúc hoa, La hán quả, Cỏ ngọt, Hoài sơn, Kỷ tử, Táo tàu, Hạt sen, Tim sen, Cam thảo nam, Hoa nhài... tạo nên một thức trà thanh nhiệt, giúp an thần và dưỡng sinh.
            </p>
            <p className="text-xs sm:text-sm text-[#423735] leading-relaxed font-light">
              Khi thưởng trà, hương thơm thảo mộc lan tỏa dịu nhẹ, vị tiền chát nhẹ hậu ngọt sâu lắng, mang lại sự thư thái tuyệt đối sau những giờ làm việc mỏi mệt.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('product-detail', 'tra-cung-dinh-g10')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4B2A7B] hover:text-[#352044] underline decoration-[#AD8648] underline-offset-8 transition-colors"
              >
                <span>Xem chi tiết Trà Cung Đình G10</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden bg-[#FFFCF5] border border-[#E6DBC6] shadow-sm flex items-center justify-center p-4 rounded-sm">
              <img
                src="/assets/images/prod-tra-cung-dinh-g10.jpg"
                alt="Gói Trà Cung Đình Đức Phượng 16 vị tiến Vua"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-2 text-[11px] text-[#6F605D] italic font-serif text-right">
              Trà Cung Đình G10 Đức Phượng 16 vị thảo mộc thiên nhiên chính gốc 24 Nguyễn Huệ, TP. Huế.
            </div>
          </div>

        </div>
      </section>

      {/* Chapter 2: Sen Hồ Tịnh Tâm */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden bg-[#FFFCF5] border border-[#E6DBC6] shadow-sm flex items-center justify-center p-3 rounded-sm">
              <img
                src="/assets/images/cat-hat-sen.jpg"
                alt="Hạt sen hồ Tịnh Tâm Kinh Thành Huế"
                className="w-full h-full object-cover rounded-xs"
              />
            </div>
            <div className="mt-2 text-[11px] text-[#6F605D] italic font-serif">
              Hạt sen hồ Tịnh Tâm bách diệp – sản vật nức tiếng chốn Kinh thành.
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 text-left">
            <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>Chương 02 / Hương Sen Kinh Thành</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#352B29] font-medium leading-snug">
              Hạt Sen Hồ Tịnh Tâm — Tinh hoa thổ nhưỡng Cố đô
            </h2>
            <p className="text-xs sm:text-sm text-[#423735] leading-relaxed font-light">
              Hồ Tịnh Tâm nằm ở phía bắc Hoàng thành Huế, với tầng bùn giàu khoáng chất đặc thù tạo nên giống sen bách diệp có hạt tròn đều, màu trắng ngà. Khi nấu chín, hạt sen Tịnh Tâm mềm bở tơi xốp, bùi ngậy và tỏa hương thơm dịu mát đặc trưng mà không vùng sen nào khác có được.
            </p>
            <p className="text-xs sm:text-sm text-[#423735] leading-relaxed font-light">
              Xưa kia, chỉ có hạt sen tại hồ Tịnh Tâm mới đủ tiêu chuẩn dâng tiến ngự thiện để nấu chè hạt sen long nhãn hay làm món yến sào hầm sen phục vụ chốn triều nghi.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('product-detail', 'hat-sen-tinh-tam-kho')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4B2A7B] hover:text-[#352044] underline decoration-[#AD8648] underline-offset-8 transition-colors"
              >
                <span>Xem chi tiết Hạt sen Tịnh Tâm khô</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Imperial Products Showcase */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 border-t border-[#E6DBC6] pt-14">
        <div className="pb-6 mb-8 border-b border-[#E6DBC6] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>Tuyển tập cung đình</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
              Sản phẩm phong vị Hoàng gia
            </h3>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-semibold uppercase tracking-wider text-[#4B2A7B] hover:underline flex items-center gap-1.5"
          >
            <span>Xem toàn bộ đặc sản</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {imperialProducts.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onSelectProduct={(slug) => onNavigate('product-detail', slug)}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
