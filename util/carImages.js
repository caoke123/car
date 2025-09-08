// 汽车图片资源映射
// 使用高质量的免费图片服务和占位符

export const carImages = {
  // 主要汽车展示图片
  featured: [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1563720223-b6283d3853b1?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop&crop=center'
  ],
  
  // 轿车类型
  sedan: [
    'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=400&fit=crop&crop=center'
  ],
  
  // SUV类型
  suv: [
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop&crop=center'
  ],
  
  // 跑车类型
  sports: [
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1558618047-fcd5c85cd64b?w=600&h=400&fit=crop&crop=center'
  ],
  
  // 豪华车类型
  luxury: [
    'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1563720223-b6283d3853b1?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop&crop=center'
  ],
  
  // 背景图片
  backgrounds: {
    hero: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&crop=center',
    showroom: 'https://images.unsplash.com/photo-1582467819671-0c0e4b5e7f6a?w=1920&h=1080&fit=crop&crop=center',
    dealership: 'https://images.unsplash.com/photo-1559526324-593bc054d377?w=1920&h=1080&fit=crop&crop=center'
  },
  
  // 团队成员图片
  team: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616c4e73dfe?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=300&fit=crop&crop=face'
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
    url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
    alt: 'Luxury BMW Car',
    category: 'luxury'
  },
  {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
    alt: 'Mercedes Sports Car',
    category: 'sports'
  },
  {
    url: 'https://images.unsplash.com/photo-1563720223-b6283d3853b1?w=800&h=600&fit=crop',
    alt: 'Tesla Model S',
    category: 'electric'
  },
  {
    url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop',
    alt: 'Porsche Sports Car',
    category: 'sports'
  },
  {
    url: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=600&fit=crop',
    alt: 'Audi A8',
    category: 'luxury'
  },
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
    alt: 'Range Rover SUV',
    category: 'suv'
  }
];