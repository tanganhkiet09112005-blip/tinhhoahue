import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import type { ProductCategory, WholesaleForm } from '../types';

interface WholesalePageProps {
  onNavigate: (tab: string, param?: string) => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<WholesaleForm>({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: 'dai-ly',
    categories: ['mam-dac-san', 'tra-thao-moc'],
    estimatedVolume: '10 - 50 kg/tháng',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCategoryToggle = (cat: ProductCategory) => {
    setFormData(prev => {
      const exists = prev.categories.includes(cat);
      if (exists) {
        return { ...prev, categories: prev.categories.filter(c => c !== cat) };
      } else {
        return { ...prev, categories: [...prev.categories, cat] };
      }
    });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    if (!formData.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại liên hệ';
    else if (!/^(0[3|5|7|8|9])+([0-9]{8})$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại không đúng định dạng (VD: 0936566044)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate wholesale inquiry storage
    try {
      const savedInquiries = JSON.parse(localStorage.getItem('tinhhoahue_wholesale_inquiries') || '[]');
      savedInquiries.push({ ...formData, submittedAt: new Date().toLocaleString('vi-VN') });
      localStorage.setItem('tinhhoahue_wholesale_inquiries', JSON.stringify(savedInquiries));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 text-left">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6F605D]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#4B2A7B] transition-colors">
          Trang chủ
        </button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <span className="font-semibold text-[#4B2A7B]">Hợp tác & Bán sỉ</span>
      </nav>

      {/* Editorial Header */}
      <div className="pb-8 border-b border-[#E6DBC6] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>Cung ứng chuyên nghiệp cho đối tác</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#352B29] tracking-tight">
            Chính sách phân phối & Bán sỉ
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#6F605D] max-w-md leading-relaxed">
          Cung cấp nguồn đặc sản Huế ổn định, chiết khấu trực tiếp từ lò nghệ nhân cho các nhà hàng bún bò, khách sạn và chuỗi quà tặng.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-[#FFFCF5] border border-[#E6DBC6] p-6 sm:p-10 rounded-sm shadow-sm">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#352B29]">
                Yêu cầu báo giá đã được ghi nhận!
              </h3>
              <p className="text-xs sm:text-sm text-[#6F605D] max-w-md mx-auto leading-relaxed">
                (Thao tác mô phỏng demo) Chúng tôi đã tiếp nhận thông tin từ anh/chị <strong>{formData.fullName}</strong> ({formData.phone}). Quản lý đối tác sẽ liên hệ lại trong vòng 24 giờ làm việc.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 border border-[#4B2A7B] text-[#4B2A7B] text-xs font-semibold uppercase tracking-wider hover:bg-[#4B2A7B] hover:text-white transition-colors rounded-xs"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#E6DBC6] pb-4">
                <h3 className="font-serif text-xl font-medium text-[#352B29] mb-1">
                  Đăng ký nhận báo giá & chiết khấu sỉ
                </h3>
                <p className="text-xs text-[#6F605D]">
                  Vui lòng cung cấp nhu cầu để đội ngũ Tinh Hoa Huế gửi bảng giá chi tiết.
                </p>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#352B29] mb-1">
                    Họ và tên người đại diện *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2.5 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#352B29] mb-1">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0936 566 044"
                    className="w-full px-3 py-2.5 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#352B29] mb-1">
                    Tên cơ sở / Nhà hàng
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Quán bún bò Huế An Cựu"
                    className="w-full px-3 py-2.5 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#352B29] mb-1">
                    Mô hình kinh doanh
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                    className="w-full px-3 py-2.5 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                  >
                    <option value="nha-hang">Nhà hàng / Quán ăn bún bò</option>
                    <option value="dai-ly">Đại lý đặc sản / Tiệm quà</option>
                    <option value="qua-tang">Doanh nghiệp đặt quà biếu</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>
              </div>

              {/* Volume & Notes */}
              <div>
                <label className="block text-xs font-medium text-[#352B29] mb-1">
                  Sản lượng ước tính hàng tháng
                </label>
                <select
                  value={formData.estimatedVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                >
                  <option value="duoi-10kg">Dưới 10 kg / tháng (Dùng thử)</option>
                  <option value="10-50kg">10 - 50 kg / tháng</option>
                  <option value="50-100kg">50 - 100 kg / tháng</option>
                  <option value="tren-100kg">Trên 100 kg / tháng</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#352B29] mb-1">
                  Ghi chú yêu cầu đặc biệt
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Yêu cầu đóng can 5 lít, gửi mẫu thử mắm ruốc, xuất hóa đơn..."
                  className="w-full px-3 py-2.5 bg-white border border-[#E6DBC6] text-xs sm:text-sm text-[#352B29] focus:outline-none focus:border-[#4B2A7B] rounded-xs"
                />
              </div>

              {/* Simulated notice banner */}
              <div className="bg-[#F6EEDD] border border-[#E6DBC6] p-3 text-[11px] text-[#6F605D] flex items-start gap-2 rounded-xs">
                <AlertCircle className="w-4 h-4 text-[#4B2A7B] shrink-0 mt-0.5" />
                <span>
                  Lưu ý: Đây là biểu mẫu mô phỏng phục vụ đánh giá bài môn học & portfolio. Không gửi email thật.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#4B2A7B] hover:bg-[#352044] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs shadow-sm"
              >
                <span>Gửi thông tin nhận bảng giá</span>
                <ArrowRight className="w-4 h-4 text-[#F2B705]" />
              </button>
            </form>
          )}

        </div>

        {/* Benefits Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFFCF5] border border-[#E6DBC6] p-6 sm:p-8 space-y-6 rounded-sm shadow-sm">
            <h3 className="font-serif text-xl font-medium text-[#352B29] pb-4 border-b border-[#E6DBC6]">
              Quyền lợi đối tác phân phối
            </h3>

            <div className="space-y-4 text-xs text-[#6F605D] leading-relaxed font-light">
              <div className="flex items-start gap-3">
                <span className="font-serif font-bold text-[#AD8648] text-base">01</span>
                <div>
                  <strong className="font-semibold text-[#352B29] block mb-0.5">Chiết khấu trực tiếp tới 25–40%</strong>
                  Giá gốc từ các cơ sở nghề Bà Mai, Nam Thuận, Đức Phượng mà không qua trung gian.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-serif font-bold text-[#AD8648] text-base">02</span>
                <div>
                  <strong className="font-semibold text-[#352B29] block mb-0.5">Cung ứng liên tục, ổn định</strong>
                  Kho hàng sẵn tại Huế và Hà Nội, điều phối vận chuyển nhanh chóng bằng đường bộ và đường bay.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-serif font-bold text-[#AD8648] text-base">03</span>
                <div>
                  <strong className="font-semibold text-[#352B29] block mb-0.5">Đóng gói quy cách công nghiệp</strong>
                  Có quy cách can 5L, xô 10kg cho mắm ruốc, bao tải 25kg cho hạt sen phục vụ bếp ăn lớn.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6DBC6] text-xs">
              <div className="font-medium text-[#352B29] mb-1">Trao đổi trực tiếp qua Hotline:</div>
              <div className="text-[#4B2A7B] font-serif text-lg font-bold">0936.566.044 – 0906.5555.12</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
