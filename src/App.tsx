import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ImperialPage } from './pages/ImperialPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { OrderingGuidePage } from './pages/OrderingGuidePage';
import { WholesalePage } from './pages/WholesalePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { CartProvider } from './context/CartContext';
import type { Product, OrderRecord } from './types';

export function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedSlug, setSelectedSlug] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [lastOrder, setLastOrder] = useState<OrderRecord | null>(null);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab, selectedSlug]);

  const handleNavigate = (tab: string, param?: string) => {
    if (tab === 'products') {
      setSelectedCategory(param || 'all');
      setSearchQuery('');
      setCurrentTab('products');
    } else if (tab === 'product-detail') {
      setSelectedSlug(param || '');
      setCurrentTab('product-detail');
    } else if (tab === 'article-detail') {
      setSelectedSlug(param || '');
      setCurrentTab('article-detail');
    } else {
      setCurrentTab(tab);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setCurrentTab('products');
  };

  const handleOrderCompleted = (order: OrderRecord) => {
    setLastOrder(order);
    setCurrentTab('order-success');
  };

  return (
    <div className="min-h-screen bg-[#F6EEDD] flex flex-col justify-between selection:bg-[#4B2A7B] selection:text-white">
      
      {/* Global Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
          {currentTab === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          )}

          {currentTab === 'products' && (
            <ProductsPage
              initialCategory={selectedCategory}
              initialSearch={searchQuery}
              onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          )}

          {currentTab === 'product-detail' && (
            <ProductDetailPage
              slug={selectedSlug}
              onNavigate={handleNavigate}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          )}

          {currentTab === 'imperial' && (
            <ImperialPage
              onNavigate={handleNavigate}
            />
          )}

          {currentTab === 'articles' && (
            <ArticlesPage
              onNavigate={handleNavigate}
            />
          )}

          {currentTab === 'article-detail' && (
            <ArticleDetailPage
              slug={selectedSlug}
              onNavigate={handleNavigate}
            />
          )}

          {currentTab === 'order-guide' && (
            <OrderingGuidePage
              onNavigate={handleNavigate}
            />
          )}

          {currentTab === 'wholesale' && (
            <WholesalePage
              onNavigate={handleNavigate}
            />
          )}

          {currentTab === 'checkout' && (
            <CheckoutPage
              onNavigate={handleNavigate}
              onOrderCompleted={handleOrderCompleted}
            />
          )}

          {currentTab === 'order-success' && lastOrder && (
            <OrderSuccessPage
              order={lastOrder}
              onNavigate={handleNavigate}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Cart Slide-in Drawer */}
        <CartDrawer
          onProceedToCheckout={() => handleNavigate('checkout')}
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onViewFullDetail={(slug) => handleNavigate('product-detail', slug)}
        />

        {/* Action Toast Notifications */}
        <Toast />

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
