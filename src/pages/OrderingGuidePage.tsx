import { useState } from 'react';
import { 
  ChevronRight, 
  Phone, 
  ChevronDown, 
  ShoppingBag,
  CreditCard,
  PackageCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface OrderingGuidePageProps {
  onNavigate: (tab: string, param?: string) => void;
}

export const OrderingGuidePage: React.FC<OrderingGuidePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: '01',
      title: 'Chọn đặc sản',
      desc: 'Duyệt theo danh mục, xem công khai giá bán, nguồn gốc làng nghề và quy cách đóng gói.',
    },
    {
      num: '02',
      title: 'Thêm vào giỏ & kiểm tra',
      desc: 'Tùy chỉnh số lượng, kiểm tra tổng tiền và thanh tiến trình miễn phí giao hàng toàn quốc.',
    },
    {
      num: '03',
      title: 'Nhập địa chỉ giao nhận',
      desc: 'Điền thông tin người nhận. Chọn hình thức thanh toán COD hoặc Chuyển khoản ngân hàng.',
    },
    {
      num: '04',
      title: 'Nhận hàng & đồng kiểm',
      desc: 'Nhận hàng tận nhà, kiểm tra nguyên đai nguyên kiện trước khi thanh toán. Đổi trả an tâm trong 30 ngày.',
    },
  ];

  const faqs = [
    {
      q: 'Thời gian giao hàng đến các tỉnh thành mất bao lâu?',
      a: 'Tại TP. Huế: giao nhanh trong ngày (1-3 tiếng). Tại Hà Nội & TP. Hồ Chí Minh: từ 1 đến 2 ngày làm việc (vận chuyển bằng đường bay). Các tỉnh thành khác trên toàn quốc: từ 2 đến 3 ngày làm việc thông qua dịch vụ chuyển phát nhanh Viettel Post.',
    },
    {
      q: 'Phí vận chuyển được tính như thế nào?',
      a: 'Tinh Hoa Huế áp dụng cước phí đồng giá chỉ 30.000₫ cho tất cả các đơn hàng trên toàn quốc. ĐẶC BIỆT: Miễn phí vận chuyển 100% cho đơn hàng có tổng giá trị từ 500.000₫ trở lên.',
    },
    {
      q: 'Hướng dẫn bảo quản đặc sản sau khi nhận hàng?',
      a: 'Đối với mắm ruốc và tôm chua: sau khi mở nắp, vui lòng đậy kín và bảo quản trong ngăn mát tủ lạnh (dùng tốt nhất trong 6 tháng). Đối với bánh bột lọc hút chân không: bảo quản trong ngăn đông (-18°C), rã đông trước khi hấp. Đối với trà cung đình và mè xửng: để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
    },
    {
      q: 'Chính sách đổi trả trong 30 ngày được áp dụng ra sao?',
      a: 'Quý khách hoàn toàn yên tâm: nếu hàng hóa bị nứt vỡ hũ, rách bao bì hút chân không trong quá trình vận chuyển, hoặc không đúng chất lượng cam kết, Tinh Hoa Huế sẽ gửi bù sản phẩm mới miễn phí 100% hoặc hoàn tiền ngay trong ngày.',
    },
    {
      q: 'Tôi có thể đặt hàng qua điện thoại hoặc Zalo không?',
      a: 'Hoàn toàn được! Quý khách có thể bấm gọi trực tiếp số hotline: 0936.566.044 hoặc 0906.5555.12. Đội ngũ tư vấn sẽ hỗ trợ lên đơn nhanh chóng và xác nhận qua tin nhắn.',
    },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 text-left">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#6F605D]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#4B2A7B] transition-colors">
          Trang chủ
        </button>
        <ChevronRight className="w-3 h-3 text-[#AD8648]" />
        <span className="font-semibold text-[#4B2A7B]">Hướng dẫn đặt mua</span>
      </nav>

      {/* Editorial Header */}
      <div className="pb-8 border-b border-[#E6DBC6] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4B2A7B] mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#AD8648]" />
            <span>Quy trình mua hàng minh bạch</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#352B29] tracking-tight">
            Hướng dẫn đặt hàng
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#6F605D] max-w-md leading-relaxed">
          Chúng tôi đóng gói tiêu chuẩn từ Huế và chuyển phát nhanh tận nhà trên 63 tỉnh thành, hỗ trợ đồng kiểm trước khi nhận.
        </p>
      </div>

      {/* 4 Steps Section with Editorial Rhythm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FFFCF5] border border-[#E6DBC6] hover:border-[#AD8648] p-6 flex flex-col justify-between space-y-6 rounded-sm shadow-sm transition-all"
          >
            <div>
              <div className="font-serif text-2xl font-bold text-[#AD8648] mb-4">
                {item.num}
              </div>
              <h3 className="font-serif text-lg font-medium text-[#352B29] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#6F605D] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-[#E6DBC6]">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#352B29] font-medium">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xs text-[#6F605D] mt-1">
            Những thắc mắc phổ biến về vận chuyển, đóng gói và chính sách chất lượng.
          </p>
        </div>

        <div className="divide-y divide-[#E6DBC6] border-y border-[#E6DBC6]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-base text-[#352B29] group-hover:text-[#4B2A7B] font-medium transition-colors pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#AD8648] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#4B2A7B]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#423735] font-light leading-relaxed pr-6 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Call Banner */}
      <div className="bg-[#FFFCF5] border border-[#E6DBC6] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl text-[#352B29] font-medium">
            Cần tư vấn đặt hàng đặc sản ngay bây giờ?
          </h3>
          <p className="text-xs sm:text-sm text-[#6F605D]">
            Đội ngũ người Huế am hiểu từng món ăn sẵn sàng tư vấn và chuẩn bị mẻ mới cho bạn.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:0936566044"
            className="px-6 py-3 bg-[#4B2A7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#352044] transition-colors inline-flex items-center justify-center gap-2 rounded-xs shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#F2B705]" />
            <span>Gọi hotline: 0936.566.044</span>
          </a>
          <button
            onClick={() => onNavigate('products')}
            className="px-6 py-3 border border-[#4B2A7B] text-[#4B2A7B] text-xs font-semibold uppercase tracking-wider hover:bg-[#4B2A7B] hover:text-white transition-colors rounded-xs"
          >
            Xem danh mục đặc sản
          </button>
        </div>
      </div>

    </div>
  );
};
