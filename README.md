# Tinh Hoa Huế – Ẩm thực xứ Huế

> **Website thương mại điện tử đặc sản Cố Đô chính gốc**  
> **Định hướng mỹ thuật:** *Tiệm Đặc Sản Cố Đô — Truyền Thống Huế, Trình Bày Tinh Tế*  
> **Repository:** [https://github.com/tanganhkiet09112005-blip/tinhhoahue](https://github.com/tanganhkiet09112005-blip/tinhhoahue)

---

## 1. Giới thiệu dự án

Website thương mại điện tử **Tinh Hoa Huế** tuyển chọn và giới thiệu những thức quà chuẩn vị kinh kỳ:
- **Bánh & Quà Huế:** Mè xửng dẻo Nam Thuận, mè xửng giòn, kẹo cau, mứt gừng Huế.
- **Mắm & Đặc Sản:** Mắm ruốc Bà Mai chuẩn vị bún bò, tôm chua nguyên con, tré Huế rơm Đắc Lộc, bánh bột lọc & bánh nậm.
- **Trà Cung Đình:** Trà thảo mộc 16 vị Đức Phượng ngự dụng (G8, G10).
- **Hạt Sen Huế:** Sen bách diệp hồ Tịnh Tâm bóc vỏ thông tâm sấy khô & tươi.

Toàn bộ dữ liệu sản phẩm, danh mục và hình ảnh được chuẩn hóa trực tiếp từ nguồn chính thống `tinhhoahue.com`.

---

## 2. Công nghệ sử dụng (Tech Stack)

- **Frontend:** React 19, TypeScript, Vite 8
- **Styling:** Tailwind CSS (Custom Imperial Palette: `#352044` plum, `#4B2A7B` purple, `#F6EEDD` parchment, `#FFFCF5` cream, `#AD8648` brass, `#352B29` ink)
- **Icons:** Lucide React
- **Typography:** Playfair Display (Serif) & Plus Jakarta Sans
- **State & Cart:** React Context API + LocalStorage persistence
- **Routing:** Client-side routing with `vercel.json` rewrite support

---

## 3. Cài đặt và chạy thử nghiệm tại Local

```bash
# Cài đặt dependencies
npm install

# Khởi chạy máy chủ phát triển
npm run dev

# Kiểm tra bản build production
npm run build
npm run preview
```

---

## 4. Cấu hình triển khai Vercel (Vercel Deployment)

Dự án đã sẵn sàng triển khai trên Vercel với cấu hình tự động:
- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Routing:** Đã cấu hình tại `vercel.json` (tự động rewrite mọi URL về `index.html`, không lỗi 404 khi tải lại trang).
