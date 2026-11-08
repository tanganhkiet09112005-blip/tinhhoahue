import React from 'react';
import { CheckCircle2, ArrowRight, Printer, AlertCircle } from 'lucide-react';
import type { OrderRecord } from '../types';
import { formatPrice } from '../utils/format';

interface OrderSuccessPageProps {
  order: OrderRecord;
  onNavigate: (tab: string, param?: string) => void;
}

export const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({ order, onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-10 text-left">
      
      {/* Top Receipt Card */}
      <div className="bg-[#FFFCF5] border border-[#E6DBC6] rounded-sm shadow-sm p-6 sm:p-10 text-center space-y-5">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="inline-block bg-[#F6EEDD] border border-[#E6DBC6] px-3.5 py-1 text-[11px] font-semibold text-[#4B2A7B] uppercase tracking-wider rounded-xs">
          Đơn hàng mô phỏng DEMO thành công
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
          Cảm ơn bạn đã lựa chọn Tinh Hoa Huế
        </h1>

        <p className="text-xs sm:text-sm text-[#6F605D] max-w-md mx-auto leading-relaxed font-light">
          Mã đơn hàng của bạn là <strong className="text-[#4B2A7B] font-mono font-bold">{order.orderId}</strong>. Dữ liệu đã được lưu trữ trong trình duyệt để phục vụ báo cáo bài học & portfolio.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('products')}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#4B2A7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#352044] transition-colors flex items-center justify-center gap-2 rounded-xs shadow-sm"
          >
            <span>Tiếp tục xem đặc sản</span>
            <ArrowRight className="w-4 h-4 text-[#F2B705]" />
          </button>

          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#352B29] border border-[#E6DBC6] text-xs font-semibold uppercase tracking-wider hover:bg-[#F6EEDD] transition-colors flex items-center justify-center gap-2 rounded-xs"
          >
            <Printer className="w-4 h-4 text-[#AD8648]" />
            <span>In phiếu đơn hàng</span>
          </button>
        </div>
      </div>

      {/* Printable Receipt Summary Box */}
      <div className="bg-[#FFFCF5] border border-[#E6DBC6] rounded-sm shadow-sm p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#E6DBC6] pb-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4B2A7B]">
              Biên lai đơn hàng
            </div>
            <h3 className="font-serif text-xl font-medium text-[#352B29]">
              Mã #{order.orderId}
            </h3>
          </div>
          <span className="text-xs text-[#6F605D]">{order.createdAt}</span>
        </div>

        {/* Customer Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-[#6F605D] block">Thông tin người nhận:</span>
            <strong className="text-[#352B29] font-medium text-sm">{order.customer.fullName}</strong>
            <p className="text-[#6F605D]">SĐT: {order.customer.phone}</p>
            {order.customer.email && <p className="text-[#6F605D]">Email: {order.customer.email}</p>}
          </div>

          <div className="space-y-1">
            <span className="text-[#6F605D] block">Địa chỉ giao nhận:</span>
            <p className="text-[#352B29] font-medium">
              {order.customer.address}, {order.customer.district}, {order.customer.province}
            </p>
            <p className="text-[#6F605D]">
              Phương thức: <strong>{order.customer.paymentMethod === 'cod' ? 'Thanh toán COD khi nhận hàng' : order.customer.paymentMethod === 'banking' ? 'Chuyển khoản Vietcombank' : 'Ví MoMo'}</strong>
            </p>
          </div>
        </div>

        {/* Items summary */}
        <div className="pt-4 border-t border-[#E6DBC6] space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4B2A7B]">
            Danh sách đặc sản ({order.items.length})
          </h4>
          <div className="divide-y divide-[#E6DBC6]/60">
            {order.items.map(({ product, quantity }) => (
              <div key={product.id} className="py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-contain p-0.5 bg-white border border-[#E6DBC6] rounded-xs" />
                  <div>
                    <div className="font-serif font-medium text-[#352B29]">{product.name}</div>
                    <div className="text-[11px] text-[#6F605D]">{product.unit} × {quantity}</div>
                  </div>
                </div>
                <div className="font-bold text-[#352B29] font-sans">
                  {formatPrice(product.price * quantity)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="pt-4 border-t border-[#E6DBC6] space-y-2 text-xs">
          <div className="flex justify-between text-[#6F605D]">
            <span>Tiền hàng:</span>
            <span className="font-medium text-[#352B29]">{formatPrice(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-[#6F605D]">
            <span>Cước vận chuyển:</span>
            <span>{order.shippingFee === 0 ? <strong className="text-emerald-700">Miễn phí (Freeship)</strong> : formatPrice(order.shippingFee)}</span>
          </div>
          <div className="flex justify-between text-base font-serif font-bold text-[#4B2A7B] pt-2 border-t border-[#E6DBC6]">
            <span>Tổng số tiền:</span>
            <span className="text-xl">{formatPrice(order.total)}</span>
          </div>
        </div>

        {/* Demo Footer Note */}
        <div className="bg-[#F6EEDD] border border-[#E6DBC6] p-3 text-[11px] text-[#6F605D] flex items-start gap-2 rounded-xs">
          <AlertCircle className="w-4 h-4 text-[#4B2A7B] shrink-0 mt-0.5" />
          <span>
            Đơn hàng mô phỏng cho bài thuyết trình môn học & portfolio. Mọi thông tin được lưu trong bộ nhớ máy tính của bạn.
          </span>
        </div>

      </div>

    </div>
  );
};
