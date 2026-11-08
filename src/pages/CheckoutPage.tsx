import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Lock, 
  Truck, 
  AlertCircle, 
  Building,
  Smartphone,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import type { CustomerInfo, OrderRecord } from '../types';

interface CheckoutPageProps {
  onNavigate: (tab: string, param?: string) => void;
  onOrderCompleted: (order: OrderRecord) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ 
  onNavigate, 
  onOrderCompleted 
}) => {
  const { items, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    province: 'Thừa Thiên Huế',
    district: '',
    notes: '',
    paymentMethod: 'cod',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingFee = subtotal >= 500000 ? 0 : 30000;
  const total = subtotal + shippingFee;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên người nhận';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Họ tên phải có ít nhất 3 ký tự';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại nhận hàng';
    } else if (!/^(0[3|5|7|8|9])+([0-9]{8})$/.test(formData.phone.trim())) {
      newErrors.phone = 'Số điện thoại không đúng định dạng (VD: 0936566044)';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Vui lòng nhập số nhà, tên đường hoặc thôn xóm';
    }

    if (!formData.district.trim()) {
      newErrors.district = 'Vui lòng nhập quận/huyện';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate demo order processing
    setTimeout(() => {
      const demoOrderId = 'THH-' + Math.floor(100000 + Math.random() * 900000);
      const newOrder: OrderRecord = {
        orderId: demoOrderId,
        customer: formData,
        items: [...items],
        subtotal,
        shippingFee,
        discount: 0,
        total,
        createdAt: new Date().toLocaleString('vi-VN'),
        status: 'pending',
      };

      try {
        const existingOrders = JSON.parse(localStorage.getItem('tinhhoahue_orders') || '[]');
        existingOrders.unshift(newOrder);
        localStorage.setItem('tinhhoahue_orders', JSON.stringify(existingOrders));
      } catch (err) {
        console.error('Error saving order', err);
      }

      clearCart();
      setIsSubmitting(false);
      onOrderCompleted(newOrder);
    }, 700);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-medium text-[#352B29]">Giỏ hàng đang trống</h2>
        <p className="text-xs text-[#6F605D]">Bạn chưa chọn sản phẩm nào để tiến hành đặt hàng.</p>
        <button
          onClick={() => onNavigate('products')}
          className="px-6 py-2.5 bg-[#4B2A7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#352044] transition-colors rounded-xs shadow-sm"
        >
          Khám phá đặc sản ngay
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12 text-left">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6F605D]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#4B2A7B] transition-colors">Trang chủ</button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <span className="font-semibold text-[#4B2A7B]">Đặt hàng demo</span>
      </nav>

      {/* Editorial Header */}
      <div className="pb-6 border-b border-[#E6DBC6] flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] mb-1 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>Quy trình thanh toán an toàn</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#352B29] tracking-tight">
            Xác nhận đơn hàng
          </h1>
        </div>
        
        {/* Explicit Demo Notification */}
        <div className="bg-[#4B2A7B]/5 border border-[#4B2A7B]/20 px-4 py-2 text-xs text-[#4B2A7B] flex items-center gap-2 rounded-xs">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#AD8648]" />
          <span>Biểu mẫu đặt hàng thử nghiệm (DEMO) · Không thu phí thật</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left 7 Cols: Customer Information & Payment Method */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: Customer Info */}
          <div className="bg-[#FFFCF5] border border-[#E6DBC6] p-6 sm:p-8 space-y-5 rounded-sm shadow-sm">
            <h3 className="font-serif text-lg font-medium text-[#352B29] pb-3 border-b border-[#E6DBC6]">
              1. Địa chỉ nhận hàng
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#352B29] mb-1">
                  Họ và tên người nhận *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-3 py-2 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                />
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#352B29] mb-1">
                  Số điện thoại nhận hàng *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0936 566 044"
                  className="w-full px-3 py-2 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#352B29] mb-1">
                  Tỉnh / Thành phố *
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                >
                  <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Khác">Các tỉnh thành khác toàn quốc</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#352B29] mb-1">
                  Quận / Huyện / Thị xã *
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  placeholder="VD: Quận Hà Đông, TP. Huế..."
                  className="w-full px-3 py-2 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                />
                {errors.district && <p className="text-xs text-red-600 mt-1">{errors.district}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#352B29] mb-1">
                Địa chỉ chi tiết (Số nhà, ngõ ngách, tên đường) *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="VD: 17/126 Nguyễn Trãi hoặc 47/42 Mộ Lao..."
                className="w-full px-3 py-2 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
              />
              {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-[#352B29] mb-1">
                Ghi chú giao hàng (Không bắt buộc)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Giao giờ hành chính, gọi trước khi đến..."
                className="w-full px-3 py-2 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
              />
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="bg-[#FFFCF5] border border-[#E6DBC6] p-6 sm:p-8 space-y-4 rounded-sm shadow-sm">
            <h3 className="font-serif text-lg font-medium text-[#352B29] pb-3 border-b border-[#E6DBC6]">
              2. Phương thức thanh toán (Demo)
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3.5 border border-[#E6DBC6] cursor-pointer hover:bg-[#F6EEDD] transition-colors rounded-xs">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className="text-[#4B2A7B] focus:ring-[#4B2A7B]"
                />
                <div>
                  <div className="text-xs font-semibold text-[#352B29]">Thanh toán khi nhận hàng (COD)</div>
                  <div className="text-[11px] text-[#6F605D]">Đồng kiểm tra hàng trước khi gửi tiền cho nhân viên bưu tá.</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 border border-[#E6DBC6] cursor-pointer hover:bg-[#F6EEDD] transition-colors rounded-xs">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="banking"
                  checked={formData.paymentMethod === 'banking'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'banking' })}
                  className="text-[#4B2A7B] focus:ring-[#4B2A7B]"
                />
                <div>
                  <div className="text-xs font-semibold text-[#352B29]">Chuyển khoản Vietcombank (Mô phỏng)</div>
                  <div className="text-[11px] text-[#6F605D]">Số tài khoản mẫu: 0011004123456 – Vietcombank Huế</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 border border-[#E6DBC6] cursor-pointer hover:bg-[#F6EEDD] transition-colors rounded-xs">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="momo"
                  checked={formData.paymentMethod === 'momo'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'momo' })}
                  className="text-[#4B2A7B] focus:ring-[#4B2A7B]"
                />
                <div>
                  <div className="text-xs font-semibold text-[#352B29]">Ví MoMo (Mô phỏng)</div>
                  <div className="text-[11px] text-[#6F605D]">Mã QR chuyển tiền demo khi hoàn tất đơn.</div>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right 5 Cols: Order Summary & Action */}
        <div className="lg:col-span-5 bg-[#FFFCF5] border border-[#E6DBC6] p-6 sm:p-8 space-y-6 rounded-sm shadow-sm">
          <h3 className="font-serif text-lg font-medium text-[#352B29] pb-3 border-b border-[#E6DBC6]">
            Đặc sản trong đơn ({items.length})
          </h3>

          <div className="divide-y divide-[#E6DBC6]/60 max-h-80 overflow-y-auto pr-1">
            {items.map(item => (
              <div key={item.product.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-contain p-0.5 bg-white border border-[#E6DBC6] rounded-xs" />
                  <div>
                    <div className="font-serif font-medium text-[#352B29] line-clamp-1">{item.product.name}</div>
                    <div className="text-[#6F605D] text-[11px]">SL: {item.quantity} · {item.product.unit}</div>
                  </div>
                </div>
                <div className="font-bold text-[#352B29] font-sans shrink-0">
                  {formatPrice(item.product.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing calculations */}
          <div className="border-t border-[#E6DBC6] pt-4 space-y-2 text-xs">
            <div className="flex justify-between text-[#6F605D]">
              <span>Tạm tính tiền hàng:</span>
              <span className="font-medium text-[#352B29]">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#6F605D]">
              <span>Phí vận chuyển toàn quốc:</span>
              <span>{shippingFee === 0 ? <strong className="text-emerald-700">Miễn phí (Freeship)</strong> : formatPrice(shippingFee)}</span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-[#4B2A7B] pt-2 border-t border-[#E6DBC6]">
              <span>Tổng thanh toán:</span>
              <span className="text-xl">{formatPrice(total)}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#4B2A7B] hover:bg-[#352044] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs shadow-sm disabled:opacity-70"
          >
            {isSubmitting ? 'Đang tạo đơn hàng...' : 'Xác nhận đặt hàng mô phỏng'}
          </button>

          <p className="text-[11px] text-[#6F605D] text-center leading-relaxed">
            Nhấn xác nhận để hoàn tất đơn hàng demo. Không có tiền thật bị trừ.
          </p>
        </div>

      </form>

    </div>
  );
};
