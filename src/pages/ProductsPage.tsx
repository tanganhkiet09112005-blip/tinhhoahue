import { useState, useMemo } from 'react';
import { Search, RotateCcw, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types';

interface ProductsPageProps {
  initialCategory?: string;
  initialSearch?: string;
  onSelectProduct: (slug: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory,
  initialSearch = '',
  onSelectProduct,
  onQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<'bestseller' | 'price-asc' | 'price-desc' | 'newest'>('bestseller');
  const [priceRange, setPriceRange] = useState<'all' | 'under-50k' | '50k-150k' | 'above-150k'>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.categoryName.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchTags = p.tags.some(t => t.toLowerCase().includes(q));
        if (!matchName && !matchCat && !matchDesc && !matchTags) return false;
      }

      // Price filter
      if (priceRange === 'under-50k' && p.price >= 50000) return false;
      if (priceRange === '50k-150k' && (p.price < 50000 || p.price > 150000)) return false;
      if (priceRange === 'above-150k' && p.price <= 150000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('bestseller');
    setPriceRange('all');
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-8 sm:py-14 space-y-8">
      
      {/* Editorial Catalog Header */}
      <div className="pb-6 border-b border-[#E6DBC6] flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] mb-1.5 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>Mục lục đặc sản Cố đô</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#352B29] tracking-tight">
            Thức quà xứ Huế
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#6F605D] max-w-md leading-relaxed font-light">
          Tuyển chọn trực tiếp từ các lò nghề Kim Long, Thuận Thành, Đức Phượng và hồ Tịnh Tâm, cam kết 100% chuẩn vị truyền thống.
        </p>
      </div>

      {/* Filter & Search Navigation Bar */}
      <div className="space-y-4">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 uppercase tracking-wide transition-colors rounded-xs ${
              selectedCategory === 'all'
                ? 'bg-[#4B2A7B] text-white font-semibold shadow-xs'
                : 'bg-[#FFFCF5] border border-[#E6DBC6] text-[#6F605D] hover:text-[#352B29] hover:border-[#AD8648]'
            }`}
          >
            Tất cả ({PRODUCTS.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 uppercase tracking-wide transition-colors rounded-xs ${
                selectedCategory === cat.id
                  ? 'bg-[#4B2A7B] text-white font-semibold shadow-xs'
                  : 'bg-[#FFFCF5] border border-[#E6DBC6] text-[#6F605D] hover:text-[#352B29] hover:border-[#AD8648]'
              }`}
            >
              {cat.name} ({cat.itemCount})
            </button>
          ))}
        </div>

        {/* Secondary Bar: Search & Sort Controls */}
        <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Tìm theo tên món, nguyên liệu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-[#FFFCF5] border border-[#E6DBC6] text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
            />
            <Search className="w-4 h-4 text-[#AD8648] absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6F605D] hover:text-[#352B29]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Selectors for Price & Sort */}
          <div className="flex items-center gap-3">
            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as any)}
              className="px-3 py-2 bg-[#FFFCF5] border border-[#E6DBC6] text-xs text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
            >
              <option value="all">Khoảng giá: Tất cả</option>
              <option value="under-50k">Dưới 50.000₫</option>
              <option value="50k-150k">50.000₫ - 150.000₫</option>
              <option value="above-150k">Trên 150.000₫</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-[#FFFCF5] border border-[#E6DBC6] text-xs text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
            >
              <option value="bestseller">Sắp xếp: Bán chạy</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
              <option value="newest">Mới nhất</option>
            </select>

            {/* Reset Filter Button if active */}
            {(selectedCategory !== 'all' || searchQuery || priceRange !== 'all' || sortBy !== 'bestseller') && (
              <button
                onClick={handleResetFilters}
                className="p-2 text-xs text-[#6F605D] hover:text-[#4B2A7B] border border-[#E6DBC6] bg-[#FFFCF5] flex items-center gap-1 rounded-xs"
                title="Đặt lại bộ lọc"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#AD8648]" />
                <span className="hidden sm:inline">Đặt lại</span>
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-[#6F605D] border-t border-[#E6DBC6]/70 pt-3">
        <span>Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm</span>
        {selectedCategory !== 'all' && (
          <span className="text-[#4B2A7B] font-medium">
            Danh mục: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
          </span>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-[#E6DBC6] bg-[#FFFCF5] p-8 rounded-sm">
          <div className="font-serif text-lg text-[#352B29] mb-1.5">
            Không tìm thấy đặc sản phù hợp với bộ lọc
          </div>
          <p className="text-xs text-[#6F605D] mb-5 font-light">
            Hãy thử tìm với từ khóa khác hoặc xóa bớt các điều kiện lọc.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 bg-[#4B2A7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#352044] transition-colors rounded-xs shadow-sm"
          >
            Xem tất cả đặc sản
          </button>
        </div>
      )}

    </div>
  );
};
