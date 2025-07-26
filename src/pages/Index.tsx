import React, { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';
import { Product, CartItem } from '@/components/types';

const Index = () => {
  const [compareItems, setCompareItems] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Универсальный очиститель ProClean',
      price: 299,
      category: 'Универсальные',
      composition: ['Анионные ПАВ 5-15%', 'Неионные ПАВ <5%', 'Консерванты'],
      effectiveness: 95,
      volume: '500 мл',
      usage: 'Для всех поверхностей',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      description: 'Профессиональное средство для ежедневной уборки всех типов поверхностей. Эффективно удаляет загрязнения, не оставляет разводов.',
      instructions: 'Нанести на поверхность, протереть влажной тканью. Для сильных загрязнений оставить на 2-3 минуты.',
      storage: 'Хранить при температуре от +5°C до +25°C в недоступном для детей месте.',
      warnings: ['Не смешивать с другими средствами', 'Избегать попадания в глаза', 'Использовать перчатки']
    },
    {
      id: '2',
      name: 'Средство для стекол CrystalShine',
      price: 199,
      category: 'Для стекол',
      composition: ['Изопропиловый спирт 10-30%', 'Аммиак <5%', 'Красители'],
      effectiveness: 98,
      volume: '750 мл',
      usage: 'Стекла, зеркала, витрины',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      description: 'Специализированное средство для мытья стекол и зеркал. Обеспечивает кристальную чистоту без разводов.',
      instructions: 'Распылить на поверхность с расстояния 15-20 см, протереть сухой тканью.',
      storage: 'Хранить в прохладном месте, защищенном от прямых солнечных лучей.',
      warnings: ['Легковоспламеняющееся', 'Не распылять вблизи источников огня', 'Беречь от детей']
    },
    {
      id: '3',
      name: 'Антибактериальный гель CleanGuard',
      price: 249,
      category: 'Антибактериальные',
      composition: ['Хлоргексидин 0.1%', 'Изопропанол 70%', 'Глицерин'],
      effectiveness: 99,
      volume: '250 мл',
      usage: 'Дезинфекция поверхностей',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      description: 'Мощное антибактериальное средство для дезинфекции поверхностей. Уничтожает 99.9% бактерий и вирусов.',
      instructions: 'Нанести на чистую поверхность, оставить на 30 секунд для полной дезинфекции.',
      storage: 'Хранить при комнатной температуре в темном месте.',
      warnings: ['Только для наружного применения', 'Избегать попадания на кожу', 'Токсично при проглатывании']
    },
    {
      id: '4',
      name: 'Концентрат для полов FloorMaster',
      price: 349,
      category: 'Для полов',
      composition: ['Анионные ПАВ 15-30%', 'Фосфонаты <5%', 'Отдушка'],
      effectiveness: 92,
      volume: '1 л',
      usage: 'Все типы полов',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      description: 'Концентрированное средство для мытья всех типов полов. Экономичный расход, отличный результат.',
      instructions: 'Развести 50 мл концентрата в 5 л воды. Вымыть пол, дать высохнуть.',
      storage: 'Хранить в оригинальной упаковке при температуре от 0°C до +40°C.',
      warnings: ['Может вызывать раздражение кожи', 'Использовать в проветриваемом помещении']
    },
    {
      id: '5',
      name: 'Средство для сантехники LimeAway',
      price: 279,
      category: 'Для сантехники',
      composition: ['Соляная кислота 5-10%', 'Неионные ПАВ <5%', 'Загустители'],
      effectiveness: 97,
      volume: '500 мл',
      usage: 'Удаление налета и ржавчины',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      description: 'Мощное средство для удаления известкового налета, ржавчины и мыльных отложений в ванной и туалете.',
      instructions: 'Нанести на поверхность, оставить на 5-10 минут, смыть водой.',
      storage: 'Хранить в вертикальном положении при температуре не выше +30°C.',
      warnings: ['Кислотное средство', 'Не смешивать с хлорсодержащими средствами', 'Работать в перчатках']
    },
    {
      id: '6',
      name: 'Обезжириватель ProDegreaser',
      price: 329,
      category: 'Обезжириватели',
      composition: ['Щелочные компоненты 10-15%', 'Растворители <10%', 'Эмульгаторы'],
      effectiveness: 94,
      volume: '750 мл',
      usage: 'Удаление жировых загрязнений',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      description: 'Профессиональный обезжириватель для кухни и промышленных помещений. Эффективно удаляет жир и масла.',
      instructions: 'Распылить на поверхность, оставить на 3-5 минут, протереть или смыть.',
      storage: 'Хранить в сухом прохладном месте, избегать замораживания.',
      warnings: ['Щелочное средство', 'Может повредить некоторые поверхности', 'Тестировать на незаметном участке']
    }
  ];

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.usage.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [selectedCategory, priceRange, searchQuery]);

  const toggleCompare = (productId: string) => {
    setCompareItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.productId === productId);
      if (existingItem) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCompareProducts = () => {
    return products.filter(p => compareItems.includes(p.id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        cartItems={cartItems}
        compareItemsCount={compareItems.length}
        products={products}
        removeFromCart={removeFromCart}
        updateCartQuantity={updateCartQuantity}
        getCartTotal={getCartTotal}
        getCartItemsCount={getCartItemsCount}
      />
      
      <HeroSection />
      
      <Features />
      
      <ProductCatalog
        filteredProducts={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        compareItems={compareItems}
        toggleCompare={toggleCompare}
        addToCart={addToCart}
        getCompareProducts={getCompareProducts}
      />
      
      <Footer />
    </div>
  );
};

export default Index;