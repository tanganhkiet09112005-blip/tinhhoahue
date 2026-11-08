import { useState } from 'react';
import { Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface ArticlesPageProps {
  onNavigate: (tab: string, param?: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả bài viết' },
    { id: 'cong-thuc', label: 'Công thức nấu nướng' },
    { id: 'cung-dinh', label: 'Cung đình Huế' },
    { id: 'goi-y-qua', label: 'Gợi ý chọn quà' },
    { id: 'van-hoa', label: 'Văn hóa Cố Đô' },
  ];

  const filteredArticles = ARTICLES.filter(a => 
    selectedCat === 'all' ? true : a.category === selectedCat
  );

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6F605D]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#4B2A7B] transition-colors">
          Trang chủ
        </button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <span className="font-semibold text-[#4B2A7B]">Cẩm nang ẩm thực</span>
      </nav>

      {/* Editorial Header */}
      <div className="pb-8 border-b border-[#E6DBC6] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>Tạp chí ẩm thực di sản</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#352B29] tracking-tight">
            Ghi chép món Huế & Hương vị Cố đô
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#6F605D] max-w-md leading-relaxed">
          Tổng hợp những công thức gia truyền, kinh nghiệm ủ mắm nấu bún bò và nghệ thuật thưởng trà lưu giữ qua nhiều thế hệ.
        </p>
      </div>

      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 uppercase tracking-wide transition-colors rounded-xs ${
              selectedCat === cat.id
                ? 'bg-[#4B2A7B] text-white font-semibold shadow-xs'
                : 'bg-[#FFFCF5] border border-[#E6DBC6] text-[#6F605D] hover:text-[#352B29] hover:border-[#AD8648]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Featured Lead Article */}
      {filteredArticles.length > 0 && (
        <article
          onClick={() => onNavigate('article-detail', filteredArticles[0].slug)}
          className="bg-[#FFFCF5] border border-[#E6DBC6] rounded-sm shadow-sm overflow-hidden hover:border-[#AD8648] transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto bg-white overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E6DBC6]">
            <img
              src={filteredArticles[0].image}
              alt={filteredArticles[0].title}
              className="w-full h-full object-cover hover:scale-104 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[11px] text-[#6F605D] uppercase tracking-wider">
                <span className="text-[#4B2A7B] font-semibold">{filteredArticles[0].categoryName}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#AD8648]" />
                  {filteredArticles[0].readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#352B29] hover:text-[#4B2A7B] transition-colors leading-snug font-medium">
                {filteredArticles[0].title}
              </h2>

              <p className="text-xs sm:text-sm text-[#423735] font-light leading-relaxed line-clamp-4">
                {filteredArticles[0].excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6DBC6] flex items-center justify-between text-xs font-semibold text-[#4B2A7B]">
              <span className="uppercase tracking-wider">Đọc toàn bộ ghi chép</span>
              <ArrowRight className="w-4 h-4 text-[#AD8648]" />
            </div>
          </div>
        </article>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.slice(1).map(article => (
          <article
            key={article.id}
            onClick={() => onNavigate('article-detail', article.slug)}
            className="group bg-[#FFFCF5] border border-[#E6DBC6] hover:border-[#AD8648] rounded-sm shadow-sm overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-white border-b border-[#E6DBC6]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[#6F605D]">
                  <span className="uppercase tracking-wider font-semibold text-[#4B2A7B]">
                    {article.categoryName}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#AD8648]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#352B29] group-hover:text-[#4B2A7B] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#6F605D] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-[#E6DBC6]/70 flex items-center justify-between text-xs font-semibold text-[#4B2A7B] group-hover:text-[#AD8648]">
                <span>Xem chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
