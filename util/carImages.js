// 汽车图片资源映射
// 使用高质量的免费图片服务和占位符

export const carImages = {
  // 主要汽车展示图片
  featured: [
    '/assets/images/unsplash/photo-1549317661-bd32c8ce0db2.jpeg',
    '/assets/images/unsplash/photo-1552519507-da3b142c6e3d.jpeg',
    '/assets/images/unsplash/photo-1563720223-b6283d3853b1.jpeg',
    '/assets/images/unsplash/photo-1606664515524-ed2f786a0bd6.jpeg',
    '/assets/images/unsplash/photo-1550355291-bbee04a92027.jpeg',
    '/assets/images/unsplash/photo-1511919884226-fd3cad34687c.jpeg'
  ],
  
  // 轿车类型
  sedan: [
    '/assets/images/unsplash/photo-1606220838315-056192d5e927.jpeg',
    '/assets/images/unsplash/photo-1565043666747-69f6646db940.jpeg',
    '/assets/images/unsplash/photo-1546026423-cc4642628d2b.jpeg'
  ],
  
  // SUV类型
  suv: [
    '/assets/images/unsplash/photo-1519641471654-76ce0107ad1b.jpeg',
    '/assets/images/unsplash/photo-1580273916550-e323be2ae537.jpeg',
    '/assets/images/unsplash/photo-1601362840469-51e4d8d58785.jpeg'
  ],
  
  // 跑车类型
  sports: [
    '/assets/images/unsplash/photo-1544636331-e26879cd4d9b.jpeg',
    '/assets/images/unsplash/photo-1506905925346-21bda4d32df4.jpeg',
    '/assets/images/unsplash/photo-1558618047-fcd5c85cd64b.jpeg'
  ],
  
  // 豪华车类型
  luxury: [
    '/assets/images/unsplash/photo-1550355291-bbee04a92027.jpeg',
    '/assets/images/unsplash/photo-1563720223-b6283d3853b1.jpeg',
    '/assets/images/unsplash/photo-1605559424843-9e4c228bf1c2.jpeg'
  ],
  
  // 背景图片
  backgrounds: {
    hero: '/assets/images/unsplash/photo-1492144534655-ae79c964c9d7.jpeg',
    showroom: '/assets/images/unsplash/photo-1582467819671-0c0e4b5e7f6a.jpeg',
    dealership: '/assets/images/unsplash/photo-1559526324-593bc054d377.jpeg'
  },
  
  // 团队成员图片
  team: [
    '/assets/images/unsplash/photo-1507003211169-0a1dd7228f2d.jpeg',
    '/assets/images/unsplash/sales manager.jpg',
    '/assets/images/unsplash/sales manager (2).jpg',
    '/assets/images/unsplash/photo-1542909168-82c3e7fdca5c.jpeg'
  ],
  
  // 品牌Logo (矢量图标)
  brands: {
    bmw: 'https://www.vectorlogo.zone/logos/bmw/bmw-icon.svg',
    mercedes: 'https://www.vectorlogo.zone/logos/mercedes-benz/mercedes-benz-icon.svg',
    audi: 'https://www.vectorlogo.zone/logos/audi/audi-icon.svg',
    toyota: 'https://www.vectorlogo.zone/logos/toyota/toyota-icon.svg',
    ford: 'https://www.vectorlogo.zone/logos/ford/ford-icon.svg',
    honda: 'https://www.vectorlogo.zone/logos/honda/honda-icon.svg'
  }
};

// 占位符图片生成函数
export const getPlaceholderImage = (width = 600, height = 400, text = '汽车图片') => {
  return `https://via.placeholder.com/${width}x${height}/2c3e50/ffffff?text=${encodeURIComponent(text)}`;
};

// 根据汽车类型获取图片
export const getCarImageByType = (type, index = 0) => {
  const images = carImages[type] || carImages.featured;
  return images[index % images.length];
};

// 高质量汽车图片集合（来自免费资源）
export const highQualityCarImages = [
  {
    url: '/assets/images/unsplash/photo-1549317661-bd32c8ce0db2.jpeg',
    alt: 'Luxury BMW Car',
    category: 'luxury'
  },
  {
    url: '/assets/images/unsplash/photo-1552519507-da3b142c6e3d.jpeg',
    alt: 'Mercedes Sports Car',
    category: 'sports'
  },
  {
    url: '/assets/images/unsplash/photo-1563720223-b6283d3853b1.jpeg',
    alt: 'Tesla Model S',
    category: 'electric'
  },
  {
    url: '/assets/images/unsplash/photo-1550355291-bbee04a92027.jpeg',
    alt: 'Porsche Sports Car',
    category: 'sports'
  },
  {
    url: '/assets/images/unsplash/photo-1511919884226-fd3cad34687c.jpeg',
    alt: 'Audi A8',
    category: 'luxury'
  },
  {
    url: '/assets/images/unsplash/photo-1580273916550-e323be2ae537.jpeg',
    alt: 'Range Rover SUV',
    category: 'suv'
  }
];