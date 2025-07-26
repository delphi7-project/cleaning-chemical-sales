import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  composition: string[];
  effectiveness: number;
  volume: string;
  usage: string;
  image: string;
  description: string;
  instructions: string;
  storage: string;
  warnings: string[];
}

interface CartItem {
  productId: string;
  quantity: number;
}

const Index = () => {
  const [compareItems, setCompareItems] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">ChemStore</div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
                <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Доставка</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Оплата</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Cart Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Корзина
                    {getCartItemsCount() > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5">
                        {getCartItemsCount()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-96">
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                    <SheetDescription>
                      {cartItems.length === 0 ? 'Корзина пуста' : `Товаров: ${getCartItemsCount()}`}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cartItems.map(item => {
                      const product = products.find(p => p.id === item.productId);
                      if (!product) return null;
                      return (
                        <div key={item.productId} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{product.name}</h4>
                            <p className="text-blue-600 font-semibold">{product.price} ₽</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                            >
                              +
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeFromCart(item.productId)}
                            >
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                    {cartItems.length > 0 && (
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold">Итого:</span>
                          <span className="font-bold text-xl text-blue-600">{getCartTotal()} ₽</span>
                        </div>
                        <Button className="w-full">
                          <Icon name="CreditCard" size={16} className="mr-2" />
                          Оформить заказ
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Button variant="outline" size="sm">
                <Icon name="GitCompare" size={16} className="mr-2" />
                Сравнить ({compareItems.length})
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Профессиональная химия для идеальной чистоты
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Качественные средства для уборки от проверенных производителей. 
                Сравните состав и эффективность, выберите лучшее решение.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать средство
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <a href="#catalog">Каталог товаров</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/img/2dc2978d-c467-4578-a9de-193e9656a454.jpg" 
                alt="Профессиональная уборка" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертифицированная продукция</h3>
              <p className="text-gray-600">Все товары имеют необходимые сертификаты качества и безопасности</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="GitCompare" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сравнение составов</h3>
              <p className="text-gray-600">Подробная информация о составе и эффективности каждого средства</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем заказы по всей России в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог товаров</h2>
            <p className="text-xl text-gray-600">Выберите и сравните подходящие средства</p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Filter" size={24} className="mr-2" />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <Label htmlFor="search">Поиск</Label>
                  <Input
                    id="search"
                    placeholder="Название или назначение..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Категория</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      {categories.slice(1).map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Label>Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽</Label>
                  <div className="mt-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={500}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1" 
                          onClick={() => addToCart(product.id)}
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedProduct(product)}
                            >
                              <Icon name="Eye" size={16} />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{product.name}</DialogTitle>
                              <DialogDescription>{product.usage}</DialogDescription>
                            </DialogHeader>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold">Описание</h4>
                                  <p className="text-sm text-gray-600">{product.description}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold">Инструкция</h4>
                                  <p className="text-sm text-gray-600">{product.instructions}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold">Состав</h4>
                                  <ul className="text-sm text-gray-600">
                                    {product.composition.map((item, idx) => (
                                      <li key={idx}>• {item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold">Предупреждения</h4>
                                  <ul className="text-sm text-red-600">
                                    {product.warnings.map((warning, idx) => (
                                      <li key={idx}>⚠️ {warning}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="pt-4">
                                  <div className="text-2xl font-bold text-blue-600 mb-2">
                                    {product.price} ₽
                                  </div>
                                  <Button 
                                    className="w-full" 
                                    onClick={() => addToCart(product.id)}
                                  >
                                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                                    Добавить в корзину
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`compare-${product.id}`}
                          checked={compareItems.includes(product.id)}
                          onCheckedChange={() => toggleCompare(product.id)}
                        />
                        <label htmlFor={`compare-${product.id}`} className="text-sm text-gray-600">
                          Добавить к сравнению
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
            </div>
          )}

          {/* Comparison Table */}
          {compareItems.length > 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon name="GitCompare" size={24} className="mr-2" />
                    Сравнение товаров
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCompareItems([])}
                  >
                    Очистить
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="composition" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="composition">Состав</TabsTrigger>
                    <TabsTrigger value="effectiveness">Эффективность</TabsTrigger>
                    <TabsTrigger value="details">Детали</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="composition" className="mt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Параметр</th>
                            {getCompareProducts().map(product => (
                              <th key={product.id} className="text-left p-3 font-semibold min-w-48">
                                {product.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Состав</td>
                            {getCompareProducts().map(product => (
                              <td key={product.id} className="p-3">
                                <ul className="text-sm space-y-1">
                                  {product.composition.map((item, idx) => (
                                    <li key={idx} className="text-gray-600">• {item}</li>
                                  ))}
                                </ul>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Объем</td>
                            {getCompareProducts().map(product => (
                              <td key={product.id} className="p-3">{product.volume}</td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">Цена</td>
                            {getCompareProducts().map(product => (
                              <td key={product.id} className="p-3 font-semibold text-blue-600">
                                {product.price} ₽
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="effectiveness" className="mt-6">
                    <div className="space-y-6">
                      {getCompareProducts().map(product => (
                        <div key={product.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold">{product.name}</h4>
                            <Badge variant={product.effectiveness >= 95 ? "default" : "secondary"}>
                              {product.effectiveness}% эффективность
                            </Badge>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-4">
                            <div 
                              className={`h-4 rounded-full transition-all duration-500 ${
                                product.effectiveness >= 95 ? 'bg-green-500' : 
                                product.effectiveness >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${product.effectiveness}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="mt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Характеристика</th>
                            {getCompareProducts().map(product => (
                              <th key={product.id} className="text-left p-3 font-semibold min-w-48">
                                {product.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Применение</td>
                            {getCompareProducts().map(product => (
                              <td key={product.id} className="p-3 text-sm">{product.usage}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Инструкция</td>
                            {getCompareProducts().map(product => (
                              <td key={product.id} className="p-3 text-sm">{product.instructions}</td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">Хранение</td>
                            {getCompareProducts().map(product => (
                              <td key={product.id} className="p-3 text-sm">{product.storage}</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ChemStore</h3>
              <p className="text-gray-400">
                Профессиональная химия для идеальной чистоты
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Универсальные средства</li>
                <li>Для стекол и зеркал</li>
                <li>Антибактериальные</li>
                <li>Для полов</li>
                <li>Для сантехники</li>
                <li>Обезжириватели</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Доставка и оплата</li>
                <li>Гарантии</li>
                <li>Возврат товара</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@chemstore.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 ChemStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;