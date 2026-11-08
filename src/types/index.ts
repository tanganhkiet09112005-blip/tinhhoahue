export type ProductCategory = 
  | 'banh-qua' 
  | 'mam-dac-san' 
  | 'tra-thao-moc' 
  | 'hat-sen'
  | 'hop-qua';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryName: string;
  price: number;
  originalPrice?: number;
  isSale?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  unit: string;
  rating: number;
  reviewCount: number;
  image: string;
  secondaryImage?: string;
  description: string;
  details: string;
  ingredients: string[];
  origin: string;
  shelfLife: string;
  usageInstructions: string;
  storageInstructions: string;
  tags: string[];
  stock: number;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  subTitle: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ArticleCategory = 'cong-thuc' | 'cung-dinh' | 'goi-y-qua' | 'van-hoa';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  categoryName: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  readTime: string;
  date: string;
  featured?: boolean;
  relatedProductId?: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  province: string;
  district: string;
  ward?: string;
  notes?: string;
  paymentMethod: 'cod' | 'banking' | 'momo';
}

export interface OrderRecord {
  orderId: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'shipping';
}

export interface WholesaleForm {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  businessType: 'dai-ly' | 'nha-hang' | 'qua-tang' | 'khac';
  categories: ProductCategory[];
  estimatedVolume: string;
  notes: string;
}
