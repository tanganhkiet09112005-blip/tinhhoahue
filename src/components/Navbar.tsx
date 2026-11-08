import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  Phone, 
  Truck, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/format';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, param?: string) => void;
  onSearch: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onSearch }) => {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof PRODUCTS>([]);

  const navLinks = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'products', label: 'Sản phẩm' },
    { id: 'imperial', label: 'Cung đình Huế' },
    { id: 'articles', label: 'Cẩm nang ẩm thực' },
    { id: 'order-guide', label: 'Hướng dẫn đặt hàng' },
    { id: 'wholesale', label: 'Bán sỉ' },
  ];

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim().length > 1) {
      const q = val.toLowerCase();
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.categoryName.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchOpen(false);
    }
  };

  const handleSelectProduct = (slug: string) => {
    onNavigate('product-detail', slug);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6EEDD]/95 backdrop-blur-md border-b border-[#E6DBC6] transition-all duration-200">
      
      {/* 1. Top Editorial Dispatch Bar (Tím mận sâu #352044) */}
      <div className="bg-[#352044] text-[#F6EEDD] text-[11px] tracking-wide py-2 px-4 sm:px-8 border-b border-[#261432]">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-6">
          <div className="flex items-center gap-4 text-[#F6EEDD]/90">
            <span className="flex items-center gap-1.5 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#AD8648]" />
              <span>Chính gốc Cố đô Huế · Cơ sở tại Huế & Hà Nội</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#F6EEDD]/80">
              <Truck className="w-3.5 h-3.5 text-[#AD8648]" />
              Đóng gói tiêu chuẩn giao nhanh toàn quốc
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#F6EEDD]/90">
            <a 
              href="tel:0936566044" 
              className="inline-flex items-center gap-1.5 hover:text-[#F2B705] transition-colors font-medium font-sans"
              title="Hotline đặt hàng trực tiếp"
            >
              <Phone className="w-3.5 h-3.5 text-[#AD8648]" />
              <span>Hotline đặt hàng: <strong className="text-[#F2B705]">0936.566.044</strong> – 0906.5555.12</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Hairline Gold Accents */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-3.5">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Logo - Enhanced presence, pristine shape & original colors */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
            aria-label="Về trang chủ Tinh Hoa Huế"
          >
            <img 
              src="/assets/logo-horizontal.png" 
              alt="Tinh Hoa Huế – Ẩm thực xứ Huế" 
              className="h-11 sm:h-13 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </button>

          {/* Desktop Navigation Links: white-space nowrap, no split words */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-8">
            {navLinks.map(link => {
              const isActive = currentTab === link.id || (link.id === 'products' && currentTab === 'product-detail');
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative text-[13.5px] font-medium tracking-normal transition-colors py-1.5 whitespace-nowrap shrink-0 ${
                    isActive 
                      ? 'text-[#4B2A7B] font-semibold' 
                      : 'text-[#352B29]/85 hover:text-[#4B2A7B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4B2A7B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#352B29]/80 hover:text-[#4B2A7B] hover:bg-[#4B2A7B]/5 transition-colors rounded-sm border border-transparent hover:border-[#E6DBC6]"
              title="Tìm kiếm đặc sản"
              aria-label="Tìm kiếm đặc sản"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#352B29]" />
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 text-[#4B2A7B] bg-[#FFFCF5] hover:bg-white transition-colors rounded-sm border border-[#E6DBC6] shadow-sm"
              title="Xem giỏ hàng"
              aria-label={`Giỏ hàng có ${totalItems} món`}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#4B2A7B]" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wide text-[#352B29]">
                Giỏ hàng
              </span>
              <span className="bg-[#4B2A7B] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </button>

            {/* Mobile Hamburger Toggle (shows below xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#352B29] hover:text-[#4B2A7B] transition-colors"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Instant Search Drawer */}
      {searchOpen && (
        <div className="border-t border-[#E6DBC6] bg-[#F6EEDD] px-4 sm:px-8 py-5 shadow-lg transition-all">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-[#AD8648]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Tìm mè xửng, mắm ruốc, trà cung đình, hạt sen Tịnh Tâm..."
                autoFocus
                className="w-full pl-10 pr-24 py-2.5 bg-[#FFFCF5] border border-[#E6DBC6] text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] focus:ring-1 focus:ring-[#4B2A7B] rounded-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-4 py-1.5 bg-[#4B2A7B] text-white text-xs font-semibold hover:bg-[#352044] transition-colors rounded-sm"
              >
                Tìm
              </button>
            </form>

            {/* Quick Suggestions Dropdown */}
            {searchResults.length > 0 && (
              <div className="mt-3 bg-[#FFFCF5] border border-[#E6DBC6] divide-y divide-[#E6DBC6]/60 rounded-sm shadow-md">
                {searchResults.map(prod => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod.slug)}
                    className="w-full p-3 flex items-center justify-between text-left hover:bg-[#F6EEDD] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={prod.image} alt={prod.name} className="w-10 h-10 object-cover border border-[#E6DBC6] rounded-sm bg-white" />
                      <div>
                        <div className="font-serif text-sm text-[#352B29] group-hover:text-[#4B2A7B] font-medium">
                          {prod.name}
                        </div>
                        <div className="text-[11px] text-[#6F605D]">
                          {prod.categoryName} · {prod.unit}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-2">
                      <span className="text-xs font-bold text-[#352B29]">
                        {formatPrice(prod.price)}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#AD8648] group-hover:text-[#4B2A7B] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[105px] bottom-0 bg-[#F6EEDD] z-50 overflow-y-auto border-t border-[#E6DBC6] px-6 py-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="text-[11px] font-semibold text-[#AD8648] uppercase tracking-wider">
              Mục lục điều hướng
            </div>
            <nav className="flex flex-col divide-y divide-[#E6DBC6]">
              {navLinks.map(link => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-4 text-left font-serif text-lg flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#4B2A7B] font-bold' : 'text-[#352B29] hover:text-[#4B2A7B]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#AD8648]" />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E6DBC6] space-y-3 text-xs text-[#6F605D]">
            <div className="font-semibold text-[#352044]">Hỗ trợ khách hàng:</div>
            <div>Hotline: <a href="tel:0936566044" className="text-[#4B2A7B] font-bold">0936.566.044</a></div>
            <div>Địa chỉ tại Huế: 17/126 Nguyễn Trãi & 24 Nguyễn Huệ, TP. Huế</div>
            <div>Điểm phân phối Hà Nội: 47/42 Mộ Lao, Q. Hà Đông</div>
          </div>
        </div>
      )}
    </header>
  );
};
