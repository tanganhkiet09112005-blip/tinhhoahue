import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  Store,
  Gift,
  UtensilsCrossed,
  ShieldCheck,
  PackageCheck,
  HeartHandshake
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types';

interface HomePageProps {
  onNavigate: (tab: string, param?: string) => void;
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onQuickView }) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');

  // Filter products for the showcase
  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategoryTab === 'all') return true;
    return p.category === selectedCategoryTab;
  }).slice(0, 8);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* =========================================================================
          1. HERO SECTION: TIỆM ĐẶC SẢN CỐ ĐÔ – TRUYỀN THỐNG HUẾ, TRÌNH BÀY TINH TẾ
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-22 border-b border-[#E6DBC6] bg-[#F6EEDD] overflow-hidden">
        
        {/* Subtle Traditional Imperial Lotus Watermark (3.5% Opacity) */}
        <div 
          className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.035]"
          aria-hidden="true"
        >
          <svg className="w-[850px] h-[850px] text-[#AD8648]" viewBox="0 0 400 400" fill="currentColor">
            {/* Imperial roof arc */}
            <path d="M 120 160 Q 200 130 280 160 Q 200 148 120 160 Z" />
            <path d="M 140 180 Q 200 155 260 180 Q 200 170 140 180 Z" />
            {/* Lotus petals */}
            <path d="M 200 170 C 185 210, 185 240, 200 270 C 215 240, 215 210, 200 170 Z" />
            <path d="M 175 190 C 150 220, 155 245, 190 268 C 178 245, 170 220, 175 190 Z" />
            <path d="M 225 190 C 250 220, 245 245, 210 268 C 222 245, 230 220, 225 190 Z" />
            <path d="M 145 220 C 120 240, 130 260, 175 268 C 155 255, 145 240, 145 220 Z" />
            <path d="M 255 220 C 280 240, 270 260, 225 268 C 245 255, 255 240, 255 220 Z" />
            {/* Lotus pedestal base */}
            <path d="M 130 275 Q 200 295 270 275 Q 200 285 130 275 Z" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 7 Columns: Typography & Traditional Shop Identity */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Overline with Hue identity */}
              <div className="flex items-center gap-2.5 mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4B2A7B]">
                <span className="w-5 h-[1.5px] bg-[#AD8648]" />
                <span className="text-[#AD8648] font-bold">TINH HOA HUẾ</span>
                <span className="text-[#6F605D]">·</span>
                <span>ẨM THỰC XỨ HUẾ</span>
              </div>

              {/* Headline with required text: "Hương vị Cố đô, đậm tình xứ Huế." */}
              <h1 className="font-serif font-medium text-3xl sm:text-5xl lg:text-[3.25rem] text-[#352B29] leading-[1.18] tracking-tight mb-5">
                Hương vị Cố đô, <br />
                <span className="italic font-serif font-normal text-[#4B2A7B]">
                  đậm tình xứ Huế.
                </span>
              </h1>

              {/* Evocative, genuine brand description */}
              <p className="text-sm sm:text-base text-[#423735] font-normal leading-relaxed max-w-xl mb-7">
                Từ ấm trà Cung Đình 16 vị thảo mộc Đức Phượng, mẻ mè xửng dẻo tay thợ Thuận Thành, đến hũ mắm ruốc Bà Mai ủ đượm nắng gió Thuận An — Tinh Hoa Huế gìn giữ nếp quà kinh kỳ, gói ghém chỉn chu và trao gửi tận nhà bạn.
              </p>

              {/* Primary Call to Action buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 pt-1 mb-8">
                <button
                  onClick={() => onNavigate('products')}
                  className="h-11 px-7 bg-[#4B2A7B] hover:bg-[#352044] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 active:scale-95 flex items-center gap-2.5 shadow-sm group rounded-sm"
                >
                  <span>Khám phá đặc sản</span>
                  <ArrowRight className="w-4 h-4 text-[#F2B705] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('imperial')}
                  className="h-11 px-5 text-xs sm:text-sm font-semibold text-[#352B29] hover:text-[#4B2A7B] tracking-wide uppercase transition-colors inline-flex items-center gap-1.5 underline decoration-[#AD8648]/40 hover:decoration-[#4B2A7B] underline-offset-8"
                >
                  <span>Câu chuyện Cung đình Huế</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AD8648]" />
                </button>
              </div>

              {/* Typographic tri-marker */}
              <div className="pt-6 border-t border-[#E6DBC6] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#6F605D]">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif font-bold text-[#AD8648] text-base">01</span>
                  <span className="font-medium text-[#352B29]">100% Chính gốc Cố đô</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="font-serif font-bold text-[#AD8648] text-base">02</span>
                  <span className="font-medium text-[#352B29]">Đóng gói chuẩn toàn quốc</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="font-serif font-bold text-[#AD8648] text-base">03</span>
                  <span className="font-medium text-[#352B29]">Lò nghề nghệ nhân Huế</span>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Traditional Hue Window Frame with Deep Plum Offset Backdrop Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* 1. Deep Plum (#352044) Offset Shadow Backdrop Card */}
                <div 
                  className="absolute inset-0 translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4 bg-[#352044] rounded-sm transition-transform duration-300"
                  aria-hidden="true"
                />

                {/* 2. Traditional Hue Double Window Frame with Brass Hairlines */}
                <div className="relative bg-[#FFFCF5] p-3 sm:p-3.5 border border-[#AD8648]/60 shadow-lg rounded-sm">
                  
                  {/* Subtle Corner Brass Accents */}
                  <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#AD8648] pointer-events-none" />
                  <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#AD8648] pointer-events-none" />
                  <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#AD8648] pointer-events-none" />
                  <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#AD8648] pointer-events-none" />

                  {/* Inner Image Container */}
                  <div className="aspect-[4/4.2] w-full overflow-hidden bg-white border border-[#E6DBC6] rounded-xs">
                    <img
                      src="/assets/images/hero-hue-specialties.jpg"
                      alt="Mâm quà Cố đô: Mè xửng Nam Thuận, trà Cung Đình, hạt sen Tịnh Tâm và thức bánh tao nhã xứ Huế"
                      className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Caption accurately reflecting authentic specialty platter */}
                  <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11.5px] text-[#6F605D]">
                    <span className="italic font-serif text-[#352B29]">
                      Mâm quà Cố đô: Mè xửng Nam Thuận, trà Cung Đình, hạt sen Tịnh Tâm và thức bánh tao nhã xứ Huế.
                    </span>
                    <span className="uppercase tracking-widest text-[10px] text-[#4B2A7B] font-semibold shrink-0">
                      tinhhoahue.com
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          2. KHU VỰC NGÀNH HÀNG — Ô TRƯNG BÀY ĐẶC SẢN (SHOWCASE COMPARTMENTS)
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-[#E6DBC6] mb-8">
          <div>
            <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>Gian hàng truyền thống</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
              Bốn thức cốt cách của ẩm thực Huế
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6F605D] max-w-md">
            Mỗi ô trưng bày đại diện cho một thức quà tinh hoa, gắn với lò nghề danh tiếng và thổ nhưỡng sông Hương núi Ngự.
          </p>
        </div>

        {/* 4 Showcase Compartments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('products', cat.id)}
              className="group cursor-pointer relative bg-[#FFFCF5] border border-[#E6DBC6] hover:border-[#AD8648] p-5 flex flex-col justify-between transition-all duration-300 rounded-sm shadow-sm hover:shadow-md"
            >
              {/* Corner Ornaments */}
              <div className="corner-bracket">
                
                {/* Compartment Header */}
                <div className="flex items-center justify-between text-xs text-[#6F605D] mb-3 pb-2.5 border-b border-[#E6DBC6]/70">
                  <span className="font-serif font-bold text-[#AD8648] text-base group-hover:text-[#4B2A7B] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-medium text-[#4B2A7B] bg-[#4B2A7B]/5 px-2 py-0.5 rounded-xs">
                    {cat.itemCount} sản phẩm
                  </span>
                </div>

                {/* Compartment Authentic Photo Frame */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-white border border-[#E6DBC6] mb-3.5 rounded-xs">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Category Title & Description */}
                <h3 className="font-serif text-lg font-medium text-[#352B29] group-hover:text-[#4B2A7B] transition-colors mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#6F605D] leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Action Rule */}
              <div className="mt-4 pt-3 border-t border-[#E6DBC6]/70 flex items-center justify-between text-xs font-semibold text-[#4B2A7B] group-hover:text-[#AD8648] transition-colors">
                <span>Vào xem gian hàng</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* =========================================================================
          3. SẢN PHẨM TUYỂN CHỌN — TRÌNH BÀY RÕ RÀNG, CHUẨN MỰC
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-5 border-b border-[#E6DBC6] mb-8">
          <div>
            <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>Thức quà mới ra lò</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
              Đặc sản tuyển chọn từ mẻ mới nhất
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium">
            <button
              onClick={() => setSelectedCategoryTab('all')}
              className={`px-3 py-1.5 transition-colors uppercase tracking-wide rounded-xs ${
                selectedCategoryTab === 'all'
                  ? 'text-[#4B2A7B] font-bold border-b-2 border-[#4B2A7B] bg-[#4B2A7B]/5'
                  : 'text-[#6F605D] hover:text-[#352B29]'
              }`}
            >
              Tất cả món
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryTab(cat.id)}
                className={`px-3 py-1.5 transition-colors uppercase tracking-wide rounded-xs ${
                  selectedCategoryTab === cat.id
                    ? 'text-[#4B2A7B] font-bold border-b-2 border-[#4B2A7B] bg-[#4B2A7B]/5'
                    : 'text-[#6F605D] hover:text-[#352B29]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: #FFFCF5 cards, #E6DBC6 borders, #AD8648 accents */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={(slug) => onNavigate('product-detail', slug)}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#4B2A7B] text-[#4B2A7B] hover:bg-[#4B2A7B] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-sm shadow-sm"
          >
            <span>Xem trọn bộ đặc sản Cố đô</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>


      {/* =========================================================================
          4. KHU VỰC CÂU CHUYỆN: “MỘT CHÚT HUẾ, GỬI ĐẾN NHÀ BẠN”
             NỀN TÍM MẬN SÂU #352044 · CHỮ NGÀ #F6EEDD · VÀNG ĐỒNG #AD8648
          ========================================================================= */}
      <section className="bg-[#352044] text-[#F6EEDD] py-16 sm:py-24 border-y border-[#261432] relative overflow-hidden">
        
        {/* Subtle decorative background border pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#AD8648 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 6 Columns: Pull-Quote & Cultural Story */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold text-[#AD8648] uppercase tracking-wider">
                <span className="w-6 h-[1px] bg-[#AD8648]" />
                <span>Một chút Huế, gửi đến nhà bạn</span>
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2rem] text-[#F6EEDD] leading-snug">
                “Người Huế ăn bằng mắt, bằng mũi, bằng tai, rồi mới đến bằng miệng. Mỗi thức quà là sự hòa quyện giữa thổ nhưỡng, đất trời và tấm lòng người thợ xứ kinh kỳ.”
              </blockquote>

              <p className="text-xs sm:text-sm text-[#F6EEDD]/85 leading-relaxed font-light">
                Trong mỗi gói quà Tinh Hoa Huế gửi đi là sự kỹ lưỡng của những lò nghề nức tiếng: từ hạt sen hồ Tịnh Tâm thơm bùi, mè xửng dẻo bùi Nam Thuận, đến hũ mắm ruốc Bà Mai đượm mùi nắng biển Thuận An. Chúng tôi đóng gói hai lớp hút chân không, chèn xốp chống va đập chuyên dụng để dù vượt hàng nghìn cây số ra Hà Nội hay vào Sài Gòn, khi mở ra, người nhận vẫn thấy vẹn nguyên hương vị đậm đà xứ Huế.
              </p>

              {/* Cultural Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-2 text-xs text-[#F6EEDD]/90 border-y border-[#F6EEDD]/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#AD8648] shrink-0" />
                  <span>Chuẩn vị nghệ nhân</span>
                </div>
                <div className="flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-[#AD8648] shrink-0" />
                  <span>Hút chân không 2 lớp</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#AD8648] shrink-0" />
                  <span>Cam kết đền bù 100%</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('imperial')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F2B705] hover:text-white transition-colors underline decoration-[#AD8648] underline-offset-8"
                >
                  <span>Khám phá chuyên khảo Cung đình Huế</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 6 Columns: Paired Authentic Cultural Photography with Brass Framing */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                
                {/* Photo 1: Chợ Đông Ba bên bờ sông Hương */}
                <div className="space-y-2.5">
                  <div className="aspect-[3/4] overflow-hidden bg-black/40 border border-[#AD8648]/40 shadow-lg p-1.5 bg-[#352044] rounded-sm group">
                    <img
                      src="/assets/images/story-cho-dong-ba.jpg"
                      alt="Chợ Đông Ba Huế – Nơi hội tụ các lò nghề đặc sản trăm năm"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[11.5px] text-[#F6EEDD]/80 italic font-serif">
                    Chợ Đông Ba bên bờ sông Hương xứ Huế.
                  </div>
                </div>

                {/* Photo 2: Chè hẻm Hùng Vương (Offset vertically) */}
                <div className="space-y-2.5 pt-8">
                  <div className="aspect-[3/4] overflow-hidden bg-black/40 border border-[#AD8648]/40 shadow-lg p-1.5 bg-[#352044] rounded-sm group">
                    <img
                      src="/assets/images/story-che-hem.jpg"
                      alt="Quán chè hẻm Hùng Vương – Nét ẩm thực dân dã Cố đô"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[11.5px] text-[#F6EEDD]/80 italic font-serif">
                    Chè hẻm Hùng Vương – Nét tao nhã xứ Huế.
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. GỢI Ý THEO NHỊP SỐNG & NHU CẦU
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        <div className="pb-5 border-b border-[#E6DBC6] mb-8">
          <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider mb-1 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>Gợi ý theo dịp</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
            Chọn đặc sản đúng nhu cầu của bạn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Gia đình */}
          <div className="border border-[#E6DBC6] bg-[#FFFCF5] p-6 sm:p-7 flex flex-col justify-between rounded-sm shadow-sm hover:border-[#AD8648] transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#4B2A7B]/10 text-[#4B2A7B] flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#6F605D] mb-1 font-semibold">
                Thường nhật tại gia
              </div>
              <h3 className="font-serif text-xl font-medium text-[#352B29] mb-2.5">
                Cho bữa cơm sum họp
              </h3>
              <p className="text-xs text-[#6F605D] leading-relaxed mb-5">
                Mắm ruốc Bà Mai chuẩn vị nấu bún bò Huế thơm lừng, tôm chua chấm thịt luộc ba chỉ, bánh bột lọc và bánh nậm hấp nóng cho ngày sum họp gia đình.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products', 'mam-dac-san')}
              className="text-xs font-semibold text-[#4B2A7B] uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all pt-3 border-t border-[#E6DBC6]/70"
            >
              <span>Xem đặc sản mắm & bánh</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
            </button>
          </div>

          {/* Card 2: Quà biếu */}
          <div className="border border-[#E6DBC6] bg-[#FFFCF5] p-6 sm:p-7 flex flex-col justify-between rounded-sm shadow-sm hover:border-[#AD8648] transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#AD8648]/15 text-[#AD8648] flex items-center justify-center mb-4">
                <Gift className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#6F605D] mb-1 font-semibold">
                Trang trọng & Ý nghĩa
              </div>
              <h3 className="font-serif text-xl font-medium text-[#352B29] mb-2.5">
                Lễ vật & Quà biếu Cố đô
              </h3>
              <p className="text-xs text-[#6F605D] leading-relaxed mb-5">
                Hộp Quà Tinh Hoa Cố Đô kết hợp hạt sen Tịnh Tâm, mè xửng dẻo Nam Thuận và trà Cung Đình Đức Phượng 16 vị, sang trọng và đầy ân tình để trao tặng đối tác, người thân.
              </p>
            </div>
            <button
              onClick={() => onNavigate('product-detail', 'hop-qua-tinh-hoa-co-do')}
              className="text-xs font-semibold text-[#4B2A7B] uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all pt-3 border-t border-[#E6DBC6]/70"
            >
              <span>Xem hộp quà Cố đô</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
            </button>
          </div>

          {/* Card 3: Bán sỉ & Nhà hàng */}
          <div className="border border-[#E6DBC6] bg-[#FFFCF5] p-6 sm:p-7 flex flex-col justify-between rounded-sm shadow-sm hover:border-[#AD8648] transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#4B2A7B]/10 text-[#4B2A7B] flex items-center justify-center mb-4">
                <Store className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#6F605D] mb-1 font-semibold">
                Quy mô thương mại
              </div>
              <h3 className="font-serif text-xl font-medium text-[#352B29] mb-2.5">
                Nhà hàng & Đại lý phân phối
              </h3>
              <p className="text-xs text-[#6F605D] leading-relaxed mb-5">
                Cung cấp sỉ mắm ruốc, hạt sen, trà cung đình, bánh ép và dầu tràm nguyên chất số lượng lớn, chiết khấu hấp dẫn trực tiếp từ các cơ sở nghề truyền thống.
              </p>
            </div>
            <button
              onClick={() => onNavigate('wholesale')}
              className="text-xs font-semibold text-[#4B2A7B] uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all pt-3 border-t border-[#E6DBC6]/70"
            >
              <span>Nhận chính sách bán sỉ</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
            </button>
          </div>

        </div>

      </section>


      {/* =========================================================================
          6. CẨM NANG ẨM THỰC: ẢNH BÚN BÒ & TRÀ CHUẨN XÁC
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#E6DBC6] mb-8">
          <div>
            <div className="text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#AD8648]" />
              <span>Ghi chép bếp Huế</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
              Cẩm nang văn hóa & Công thức món
            </h2>
          </div>
          <button
            onClick={() => onNavigate('articles')}
            className="text-xs font-semibold text-[#4B2A7B] uppercase tracking-wider inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            <span>Tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
          </button>
        </div>

        {/* 1 Lead Story + 2 Companion Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Lead Story: Bún bò Huế chuẩn vị */}
          <article 
            onClick={() => onNavigate('article-detail', ARTICLES[0].slug)}
            className="lg:col-span-7 group cursor-pointer bg-[#FFFCF5] border border-[#E6DBC6] hover:border-[#AD8648] p-5 sm:p-6 rounded-sm shadow-sm transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden bg-white border border-[#E6DBC6] mb-4 rounded-xs">
              <img
                src={ARTICLES[0].image}
                alt={ARTICLES[0].title}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#4B2A7B] font-semibold mb-1.5">
              Bí quyết nấu nướng · {ARTICLES[0].readTime}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#352B29] group-hover:text-[#4B2A7B] transition-colors mb-2.5 leading-snug">
              {ARTICLES[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#6F605D] leading-relaxed line-clamp-3 mb-4">
              {ARTICLES[0].excerpt}
            </p>
            <span className="text-xs font-semibold text-[#4B2A7B] uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
              Đọc tiếp bài viết <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
            </span>
          </article>

          {/* 2 Companion Articles */}
          <div className="lg:col-span-5 space-y-5">
            {ARTICLES.slice(1, 3).map(art => (
              <article
                key={art.id}
                onClick={() => onNavigate('article-detail', art.slug)}
                className="group cursor-pointer bg-[#FFFCF5] border border-[#E6DBC6] hover:border-[#AD8648] p-4 sm:p-5 flex gap-4 items-center rounded-sm shadow-sm transition-all"
              >
                <div className="w-24 sm:w-28 aspect-square shrink-0 overflow-hidden bg-white border border-[#E6DBC6] rounded-xs">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#4B2A7B] font-semibold mb-1">
                    {art.categoryName} · {art.readTime}
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-medium text-[#352B29] group-hover:text-[#4B2A7B] transition-colors leading-snug line-clamp-2 mb-2">
                    {art.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-[#6F605D] group-hover:text-[#4B2A7B] inline-flex items-center gap-1">
                    Xem chi tiết <ArrowRight className="w-3 h-3 text-[#AD8648]" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
};
