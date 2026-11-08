import type { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Bí quyết nấu Bún Bò Huế chuẩn vị Cố Đô với Mắm Ruốc Bà Mai',
    slug: 'bi-quyet-nau-bun-bo-hue-chuan-vi-mam-ruoc-ba-mai',
    category: 'cong-thuc',
    categoryName: 'Công thức nấu nướng',
    excerpt: 'Học cách hòa mắm ruốc lấy nước trong, ninh xương ống cùng sả đập dập để tạo nên nồi nước dùng bún bò Huế thơm ngát, dậy vị ngọt hậu tự nhiên.',
    image: '/assets/images/hero-bun-bo.jpg',
    author: 'Nghệ nhân ẩm thực Huế',
    readTime: '6 phút đọc',
    date: '15/10/2026',
    featured: true,
    relatedProductId: 'mam-ruoc-hue-ba-mai',
    content: [
      'Bún bò Huế không chỉ là một món ăn, mà là bản hòa tấu tinh tế của vị cay, vị ngọt béo từ xương và đặc biệt là mùi thơm nồng nàn không thể thiếu của mắm ruốc ủ truyền thống.',
      'Bí quyết cốt tử của người Huế nằm ở cách xào mắm ruốc: Mắm ruốc Bà Mai lấy khoảng 2 thìa canh, hòa tan với nước lạnh trong một chiếc bát nhỏ, để lắng cặn trong 15 phút. Khi nấu, chỉ gạn lấy phần nước mắm trong bên trên cho vào nồi nước hầm xương đang sôi cùng vài nhánh sả đập dập.',
      'Nước dùng khi hoàn thiện phải đạt độ trong vừa phải, màu cam đỏ tự nhiên của ớt màu xào hạt điều, hương thơm thoang thoảng của mắm ruốc hòa quyện cùng mùi sả tươi, vị đậm đà không gắt cổ.',
      'Ăn kèm với bún bò chuẩn Huế là đĩa rau sống thái mỏng gồm hoa chuối non bào sợi, bắp chuối, rau thơm, xà lách và giá đỗ sống, thêm lát ớt cay chỉ thiên xứ Huế.'
    ],
  },
  {
    id: '2',
    title: 'Nghệ thuật thưởng thức Trà Cung Đình 16 vị đúng phong thái xưa',
    slug: 'nghe-thuat-thuong-thuc-tra-cung-dinh-16-vi',
    category: 'cung-dinh',
    categoryName: 'Cung đình Huế',
    excerpt: 'Tìm hiểu cách phối ngự dược 16 vị thảo mộc và phương thức hãm trà ấm đất giữ trọn công dụng an thần, dưỡng nhan tiến Vua triều Nguyễn.',
    image: '/assets/images/prod-tra-cung-dinh-g10.jpg',
    author: 'Đức Phượng Trà Quán',
    readTime: '5 phút đọc',
    date: '02/10/2026',
    relatedProductId: 'tra-cung-dinh-g10',
    content: [
      'Trà Cung Đình Huế không dùng búp chè xanh như trà mạn phương Bắc, mà là sự phối ngũ tài tình của 16 vị thảo mộc thiên nhiên được ghi chép trong y bạ Thái Y Viện triều Nguyễn.',
      'Trước khi hãm trà, cần trộn đều gói trà để các vị thảo mộc nặng như hoài sơn, kỷ tử, đại táo hòa lẫn cùng các vị hoa nhẹ như cúc hoa, hoa lài. Dùng ấm sứ hoặc ấm đất, tráng ấm bằng nước sôi 100°C.',
      'Cho khoảng 30g trà vào ấm, rót một chút nước sôi tráng nhanh rồi đổ đi để đánh thức thảo mộc. Sau đó rót ngập nước sôi và ủ kín trong 5-7 phút.',
      'Nước trà có màu vàng óng như mật ong rừng, thơm lừng vị hoa cỏ, nhấp một ngụm cảm nhận vị thanh mát đầu lưỡi và ngọt sâu nơi cuống họng.'
    ],
  },
  {
    id: '3',
    title: 'Hồ Tịnh Tâm & Giống Sen Bách Diệp — Đệ nhất phẩm vật Cố Đô',
    slug: 'ho-tinh-tam-giong-sen-bach-diep-de-nhat-phan-vat',
    category: 'van-hoa',
    categoryName: 'Văn hóa Cố Đô',
    excerpt: 'Khám phá thổ nhưỡng phù sa cổ hồ Tịnh Tâm nằm trong Kinh thành Huế tạo nên những hạt sen tròn ngà, bở bùi không nơi nào sánh được.',
    image: '/assets/images/cat-hat-sen.jpg',
    author: 'Nhà nghiên cứu Huế',
    readTime: '8 phút đọc',
    date: '28/09/2026',
    relatedProductId: 'hat-sen-tinh-tam-kho',
    content: [
      '“Hồ Tịnh Tâm giàu sen bách diệp / Đất Thần Kinh ngát một mùi hương” — từ thế kỷ 19, vua Thiệu Trị đã xếp hồ Tịnh Tâm là một trong 20 thắng cảnh đất Kinh kỳ.',
      'Nằm ở phía bắc Hoàng thành, hồ Tịnh Tâm đón nhận dòng nước mát lành từ sông Ngự Hà cùng lớp bùn trầm tích ngàn năm giàu khoáng chất hữu cơ.',
      'Sen Tịnh Tâm có hoa nhiều cánh (bách diệp), hạt tròn trịa, vỏ lụa mỏng dính. Khi bóc bỏ tâm sen và nấu chín, hạt sen mềm tơi xốp, bùi ngậy béo và thoang thoảng mùi hương hoa sen thanh khiết.',
      'Người sành ăn ở Huế chỉ cần ăn một hạt là nhận ra ngay sen Tịnh Tâm chính gốc, khác biệt hoàn toàn với sen các vùng khác.'
    ],
  },
  {
    id: '4',
    title: 'Gợi ý chọn quà đặc sản Huế trang trọng gửi biếu người phương xa',
    slug: 'goi-y-chon-qua-dac-san-hue-trang-trong',
    category: 'goi-y-qua',
    categoryName: 'Gợi ý chọn quà',
    excerpt: 'Kinh nghiệm chọn lựa mè xửng Nam Thuận, hạt sen khô và trà G10 đóng hộp trang nhã để gửi gắm ân tình và cốt cách Cố đô trọn vẹn.',
    image: '/assets/images/hero-hue-specialties.jpg',
    author: 'Ban Biên Tập Tinh Hoa Huế',
    readTime: '4 phút đọc',
    date: '18/09/2026',
    relatedProductId: 'hop-qua-tinh-hoa-co-do',
    content: [
      'Tặng quà người Huế xưa trọng ở sự tinh tế và ý nghĩa chân thành hơn là giá trị vật chất phô trương.',
      'Một món quà xứ Huế chuẩn mực thường kết hợp đủ “Hương - Sắc - Vị”: một ấm trà Cung Đình G10 tốt cho sức khỏe, gói mè xửng dẻo Nam Thuận thơm ngọt mùi mè rang, cùng hộp hạt sen Tịnh Tâm bồi bổ tinh thần.',
      'Tại Tinh Hoa Huế, các bộ quà tặng đều được đóng gói hút chân không hai lớp cẩn thận, bao bì hộp cứng sang trọng in hoa văn Cung đình nhã nhặn, giúp giữ trọn chất lượng sản phẩm khi vận chuyển đường dài.'
    ],
  },
];
