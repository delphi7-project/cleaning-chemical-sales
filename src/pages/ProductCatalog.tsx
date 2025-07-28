import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Icon from '@/components/ui/icon';
import { Product } from '@/components/types';

const ProductCatalogPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState([
    parseInt(searchParams.get('minPrice') || '0'),
    parseInt(searchParams.get('maxPrice') || '1000')
  ]);
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'));
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [itemsPerPage] = useState(12);

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
  const brands = Array.from(new Set(products.map(p => p.name.split(' ').pop() || '')));
  const features = ['Концентрат', 'Антибактериальное', 'Экологичное', 'Без запаха'];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesBrands = selectedBrands.length === 0 || selectedBrands.some(brand => product.name.includes(brand));
      
      return matchesSearch && matchesCategory && matchesPrice && matchesBrands;
    });

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'effectiveness':
          return b.effectiveness - a.effectiveness;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedBrands, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (priceRange[0] !== 0) params.set('minPrice', priceRange[0].toString());
    if (priceRange[1] !== 1000) params.set('maxPrice', priceRange[1].toString());
    if (sortBy !== 'name') params.set('sort', sortBy);
    if (currentPage !== 1) params.set('page', currentPage.toString());
    setSearchParams(params);
  };

  React.useEffect(() => {
    updateSearchParams();
  }, [searchQuery, selectedCategory, priceRange, sortBy, currentPage]);

  const addToCart = (productId: string) => {
    console.log('Добавлено в корзину:', productId);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Каталог товаров</h1>
          <p className="text-xl text-blue-100">
            Полный ассортимент профессиональной химии для уборки
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Фильтры</span>
                  <Button variant="ghost" size="sm" onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 1000]);
                    setSelectedBrands([]);
                    setCurrentPage(1);
                  }}>
                    Сбросить
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Поиск */}
                <div>
                  <Label htmlFor="search">Поиск</Label>
                  <Input
                    id="search"
                    placeholder="Название или назначение..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Категории */}
                <div>
                  <Label>Категория</Label>
                  <div className="space-y-2 mt-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                        />
                        <label htmlFor={`category-${category}`} className="text-sm">
                          {category === 'all' ? 'Все категории' : category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Цена */}
                <div>
                  <Label>Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽</Label>
                  <div className="mt-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Бренды */}
                <div>
                  <Label>Бренды</Label>
                  <div className="space-y-2 mt-2">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <label htmlFor={`brand-${brand}`} className="text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Особенности */}
                <div>
                  <Label>Особенности</Label>
                  <div className="space-y-2 mt-2">
                    {features.map(feature => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={`feature-${feature}`}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={() => {
                            setSelectedFeatures(prev => 
                              prev.includes(feature) 
                                ? prev.filter(f => f !== feature)
                                : [...prev, feature]
                            );
                          }}
                        />
                        <label htmlFor={`feature-${feature}`} className="text-sm">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            {/* Панель управления */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Найдено: {filteredProducts.length} товаров
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Icon name="Grid3X3" size={16} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <Icon name="List" size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Label htmlFor="sort">Сортировка:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    <SelectItem value="effectiveness">По эффективности</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Товары */}
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
              </div>
            ) : (
              <>
                <div className={viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'space-y-4'
                }>
                  {paginatedProducts.map((product) => (
                    <Card 
                      key={product.id} 
                      className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {viewMode === 'grid' ? (
                        <>
                          <CardHeader className="pb-3">
                            <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <CardDescription>{product.usage}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <Badge variant="secondary">{product.category}</Badge>
                                <span className="text-sm text-gray-500">{product.volume}</span>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Эффективность:</span>
                                  <span className="font-semibold text-green-600">{product.effectiveness}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${product.effectiveness}%` }}
                                  ></div>
                                </div>
                              </div>

                              <div className="text-2xl font-bold text-blue-600 mb-4">
                                {product.price} ₽
                              </div>

                              <div className="flex space-x-2">
                                <Button 
                                  className="flex-1" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product.id);
                                  }}
                                >
                                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                                  В корзину
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/product/${product.id}`);
                                  }}
                                >
                                  <Icon name="Eye" size={16} />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </>
                      ) : (
                        <>
                          <div className="w-48 flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-l-lg"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <div className="flex items-center space-x-4">
                                  <Badge variant="secondary">{product.category}</Badge>
                                  <span className="text-sm text-gray-500">{product.volume}</span>
                                  <span className="text-sm text-green-600">{product.effectiveness}% эффективность</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-600 mb-4">
                                  {product.price} ₽
                                </div>
                                <div className="flex space-x-2">
                                  <Button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      addToCart(product.id);
                                    }}
                                  >
                                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                                    В корзину
                                  </Button>
                                  <Button 
                                    variant="outline"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate(`/product/${product.id}`);
                                    }}
                                  >
                                    <Icon name="Eye" size={16} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </Card>
                  ))}
                </div>

                {/* Пагинация */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => setCurrentPage(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogPage;