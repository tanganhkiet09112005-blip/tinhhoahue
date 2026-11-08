import React from 'react';
import { 
  MapPin, 
  Phone, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface FooterProps {
  onNavigate: (tab: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#352044] text-[#F6EEDD] border-t border-[#AD8648]/30 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative hairline accent at top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#AD8648]/60 to-transparent" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Top Brand & Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#F6EEDD]/15">
          
          {/* Brand Identity Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo-emblem.png" 
                alt="Biểu tượng Tinh Hoa Huế" 
                className="w-12 h-12 rounded-full border border-[#AD8648]/60 p-0.5 object-cover bg-[#F6EEDD]"
              />
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-wide block">
                  Tinh Hoa Huế
                </span>
                <span className="text-[11px] text-[#F2B705] uppercase tracking-widest block font-medium">
                  Ẩm thực Cố đô xưa
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F6EEDD]/80 leading-relaxed font-light">
              Nền tảng tuyển chọn và giới thiệu những thức quà chuẩn vị kinh kỳ: từ mè xửng Kim Long, mắm ruốc Thuận An đến trà Cung Đình 16 vị và hạt sen Tịnh Tâm. Gìn giữ trọn vẹn cốt cách và hương vị Cố đô trong từng sản phẩm.
            </p>

            <div className="pt-2 text-xs text-[#F6EEDD]/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#F2B705]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Nguồn tham khảo thương hiệu: <a href="https://tinhhoahue.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">tinhhoahue.com</a></span>
              </div>
              <div>Cơ sở sản xuất tại Huế & Điểm phân phối tiêu chuẩn Hà Nội</div>
            </div>
          </div>

          {/* Quick Category Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#AD8648]">
              Danh mục đặc sản
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6EEDD]/85">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('products', cat.id)}
                    className="hover:text-[#F2B705] transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#AD8648] rounded-full group-hover:scale-125 transition-transform" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left text-[#F2B705] font-medium pt-1.5 flex items-center gap-1.5"
                >
                  <span>Xem tất cả đặc sản</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#AD8648]">
              Khám phá
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6EEDD]/85">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('imperial')} className="hover:text-white transition-colors">
                  Cung đình Huế
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">
                  Cẩm nang ẩm thực
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('order-guide')} className="hover:text-white transition-colors">
                  Hướng dẫn đặt mua
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wholesale')} className="hover:text-white transition-colors">
                  Chính sách bán sỉ
                </button>
              </li>
            </ul>
          </div>

          {/* Authentic Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#AD8648]">
              Địa chỉ & Liên hệ
            </h4>
            
            <div className="space-y-3 text-xs text-[#F6EEDD]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#AD8648] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Tại TP. Huế:</span>
                  <div className="text-[#F6EEDD]/75">17/126 Nguyễn Trãi & 24 Nguyễn Huệ, TP. Huế</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#AD8648] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Tại Hà Nội:</span>
                  <div className="text-[#F6EEDD]/75">47/42 Mộ Lao, Q. Hà Đông, Hà Nội</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#AD8648] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Hotline tư vấn đặt hàng:</span>
                  <div className="mt-0.5">
                    <a href="tel:0936566044" className="text-[#F2B705] font-bold hover:underline">0936.566.044</a>
                    {' – '}
                    <a href="tel:0906555512" className="text-[#F2B705] font-bold hover:underline">0906.5555.12</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Portfolio Badge */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F6EEDD]/60">
          <div>
            © 2026 Tinh Hoa Huế – Ẩm thực xứ Huế. Tất cả quyền được bảo lưu.
          </div>

          <div className="bg-[#261432] border border-[#AD8648]/30 px-4 py-2 text-[11px] text-[#F6EEDD]/90 text-center rounded-xs">
            Bản trình bày portfolio thiết kế UX/UI & Đồ án môn học · Dữ liệu tham khảo chính thống tinhhoahue.com
          </div>
        </div>

      </div>
    </footer>
  );
};
