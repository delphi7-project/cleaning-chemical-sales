import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [compareItems, setCompareItems] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const products = [
    {
      id: '1',
      name: 'Универсальный очиститель ProClean',
      price: 299,
      category: 'Универсальные',
      composition: ['Анионные ПАВ 5-15%', 'Неионные ПАВ <5%', 'Консерванты'],
      effectiveness: 95,
      volume: '500 мл',
      usage: 'Для всех поверхностей',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
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
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
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
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
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
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const toggleCompare = (productId: string) => {
    setCompareItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
  };

  const getCompareProducts = () => {
    return products.filter(p => compareItems.includes(p.id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">ChemStore</div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Доставка</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Оплата</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина ({cartItems.length})
              </Button>
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
                  Каталог товаров
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог товаров</h2>
            <p className="text-xl text-gray-600">Выберите и сравните подходящие средства</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
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
                      <Button 
                        className="w-full" 
                        onClick={() => addToCart(product.id)}
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                      
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

          {/* Comparison Table */}
          {compareItems.length > 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="GitCompare" size={24} className="mr-2" />
                  Сравнение товаров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="composition" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="composition">Состав</TabsTrigger>
                    <TabsTrigger value="effectiveness">Эффективность</TabsTrigger>
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