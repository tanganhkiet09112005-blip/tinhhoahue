import React from 'react';
import { Clock, ArrowLeft, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/format';
import { useCart } from '../context/CartContext';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (tab: string, param?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onNavigate }) => {
  const { addToCart } = useCart();
  const article = ARTICLES.find(a => a.slug === slug) || ARTICLES[0];
  const relatedProduct = PRODUCTS.find(p => p.id === article.relatedProductId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-10 text-left">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6F605D] flex-wrap">
        <button onClick={() => onNavigate('home')} className="hover:text-[#4B2A7B] transition-colors">Trang chủ</button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <button onClick={() => onNavigate('articles')} className="hover:text-[#4B2A7B] transition-colors">Cẩm nang ẩm thực</button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <span className="font-semibold text-[#4B2A7B] truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Main Editorial Article Spread */}
      <article className="bg-[#FFFCF5] border border-[#E6DBC6] rounded-sm shadow-sm p-6 sm:p-12 space-y-8">
        
        {/* Article Meta & Headline */}
        <div className="space-y-4 pb-6 border-b border-[#E6DBC6]">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>{article.categoryName}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#352B29] font-medium leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-xs text-[#6F605D] flex-wrap">
            <span>Biên soạn: <strong className="text-[#352B29] font-medium">{article.author}</strong></span>
            <span>·</span>
            <span>Ngày lưu trữ: {article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#4B2A7B] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#AD8648]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Lead Pullquote */}
        <div className="p-5 sm:p-6 bg-[#F6EEDD] border-l-2 border-[#AD8648] text-sm sm:text-base font-serif italic text-[#352B29] leading-relaxed rounded-xs">
          “{article.excerpt}”
        </div>

        {/* Hero Article Image */}
        <div className="overflow-hidden bg-white border border-[#E6DBC6] rounded-xs shadow-xs">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[460px] object-cover"
          />
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#423735] font-light">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Embedded Specialty Recommendation */}
        {relatedProduct && (
          <div className="mt-8 p-5 sm:p-6 bg-[#F6EEDD]/70 border border-[#E6DBC6] flex flex-col sm:flex-row items-center justify-between gap-5 rounded-sm">
            <div className="flex items-center gap-4">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain p-1 border border-[#E6DBC6] bg-white rounded-xs shrink-0"
              />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4B2A7B]">
                  Đặc sản sử dụng trong bài viết
                </div>
                <h4 className="font-serif text-base font-medium text-[#352B29]">{relatedProduct.name}</h4>
                <div className="text-xs text-[#6F605D] mt-0.5">{relatedProduct.unit}</div>
                <div className="text-sm font-bold text-[#4B2A7B] mt-1">{formatPrice(relatedProduct.price)}</div>
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('product-detail', relatedProduct.slug)}
                className="flex-1 sm:flex-none px-4 py-2 bg-white border border-[#4B2A7B] text-[#4B2A7B] text-xs font-semibold uppercase tracking-wider hover:bg-[#4B2A7B] hover:text-white transition-colors rounded-xs"
              >
                Chi tiết món
              </button>
              <button
                onClick={() => addToCart(relatedProduct, 1)}
                className="flex-1 sm:flex-none px-4 py-2 bg-[#4B2A7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#352044] transition-colors flex items-center justify-center gap-1.5 rounded-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#F2B705]" />
                <span>Mua ngay</span>
              </button>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-6 border-t border-[#E6DBC6] flex items-center justify-between">
          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4B2A7B] hover:text-[#352044] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#AD8648]" />
            <span>Quay lại cẩm nang</span>
          </button>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#352B29] hover:text-[#4B2A7B] transition-colors"
          >
            <span>Khám phá sản phẩm Cố đô</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#AD8648]" />
          </button>
        </div>

      </article>

    </div>
  );
};
