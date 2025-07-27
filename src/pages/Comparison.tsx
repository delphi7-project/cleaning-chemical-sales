import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Comparison = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const products = [
    {
      id: '1',
      name: 'Универсальный очиститель ProClean',
      price: 299,
      category: 'Универсальные',
      brand: 'ProClean',
      volume: '500 мл',
      effectiveness: 95,
      composition: ['Анионные ПАВ 5-15%', 'Неионные ПАВ <5%', 'Консерванты'],
      usage: 'Для всех поверхностей',
      concentration: '1:10',
      ph: '7.5',
      biodegradable: true,
      antibacterial: false,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: '2',
      name: 'Средство для стекол CrystalShine',
      price: 199,
      category: 'Для стекол',
      brand: 'CrystalShine',
      volume: '750 мл',
      effectiveness: 98,
      composition: ['Изопропиловый спирт 10-30%', 'Аммиак <5%', 'Красители'],
      usage: 'Стекла, зеркала, витрины',
      concentration: 'Готово к применению',
      ph: '8.0',
      biodegradable: false,
      antibacterial: false,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: '3',
      name: 'Антибактериальный гель CleanGuard',
      price: 249,
      category: 'Антибактериальные',
      brand: 'CleanGuard',
      volume: '250 мл',
      effectiveness: 99,
      composition: ['Хлоргексидин 0.1%', 'Изопропанол 70%', 'Глицерин'],
      usage: 'Дезинфекция поверхностей',
      concentration: 'Готово к применению',
      ph: '6.5',
      biodegradable: true,
      antibacterial: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: '4',
      name: 'Концентрат для полов FloorMaster',
      price: 349,
      category: 'Для полов',
      brand: 'FloorMaster',
      volume: '1 л',
      effectiveness: 92,
      composition: ['Анионные ПАВ 15-30%', 'Фосфонаты <5%', 'Отдушка'],
      usage: 'Все типы полов',
      concentration: '1:100',
      ph: '9.0',
      biodegradable: true,
      antibacterial: false,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: '5',
      name: 'Средство для сантехники LimeAway',
      price: 279,
      category: 'Для сантехники',
      brand: 'LimeAway',
      volume: '500 мл',
      effectiveness: 97,
      composition: ['Соляная кислота 5-10%', 'Неионные ПАВ <5%', 'Загустители'],
      usage: 'Удаление налета и ржавчины',
      concentration: 'Готово к применению',
      ph: '2.0',
      biodegradable: false,
      antibacterial: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: '6',
      name: 'Обезжириватель ProDegreaser',
      price: 329,
      category: 'Обезжириватели',
      brand: 'ProDegreaser',
      volume: '750 мл',
      effectiveness: 94,
      composition: ['Щелочные компоненты 10-15%', 'Растворители <10%', 'Эмульгаторы'],
      usage: 'Удаление жировых загрязнений',
      concentration: '1:5',
      ph: '11.0',
      biodegradable: true,
      antibacterial: false,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 4 ? [...prev, productId] : prev
    );
  };

  const getComparisonProducts = () => {
    return products.filter(p => selectedProducts.includes(p.id));
  };

  const clearComparison = () => {
    setSelectedProducts([]);
  };

  const comparisonData = [
    { label: 'Цена', key: 'price', format: (value: any) => `${value} ₽` },
    { label: 'Объем', key: 'volume' },
    { label: 'Эффективность', key: 'effectiveness', format: (value: any) => `${value}%` },
    { label: 'Применение', key: 'usage' },
    { label: 'Концентрация', key: 'concentration' },
    { label: 'pH', key: 'ph' },
    { label: 'Биоразлагаемое', key: 'biodegradable', format: (value: any) => value ? 'Да' : 'Нет' },
    { label: 'Антибактериальное', key: 'antibacterial', format: (value: any) => value ? 'Да' : 'Нет' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Сравнение товаров</h1>
          <p className="text-xl text-purple-100">
            Сравните характеристики и выберите лучшее решение
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Выберите товары</span>
                  <Badge variant="secondary">
                    {selectedProducts.length}/4
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Выберите до 4 товаров для сравнения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                      <Checkbox
                        id={`product-${product.id}`}
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProduct(product.id)}
                        disabled={!selectedProducts.includes(product.id) && selectedProducts.length >= 4}
                      />
                      <div className="flex-1">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded mb-2"
                        />
                        <label 
                          htmlFor={`product-${product.id}`}
                          className="text-sm font-medium cursor-pointer"
                        >
                          {product.name}
                        </label>
                        <p className="text-xs text-gray-500">{product.price} ₽</p>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedProducts.length > 0 && (
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={clearComparison}
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Очистить
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {selectedProducts.length === 0 ? (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="GitCompare" size={64} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Выберите товары для сравнения
                  </h3>
                  <p className="text-gray-500">
                    Отметьте товары в левой панели, чтобы начать сравнение
                  </p>
                </div>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Icon name="GitCompare" size={24} className="mr-2" />
                      Сравнение товаров
                    </CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={clearComparison}
                    >
                      Очистить все
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Обзор</TabsTrigger>
                      <TabsTrigger value="detailed">Подробно</TabsTrigger>
                      <TabsTrigger value="composition">Состав</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-semibold w-32">Товар</th>
                              {getComparisonProducts().map(product => (
                                <th key={product.id} className="text-left p-3 font-semibold min-w-48">
                                  <div className="space-y-2">
                                    <img 
                                      src={product.image} 
                                      alt={product.name}
                                      className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                      <h4 className="font-medium text-sm">{product.name}</h4>
                                      <Badge variant="outline" className="text-xs">
                                        {product.category}
                                      </Badge>
                                    </div>
                                  </div>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {comparisonData.slice(0, 4).map((item) => (
                              <tr key={item.key} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{item.label}</td>
                                {getComparisonProducts().map(product => (
                                  <td key={product.id} className="p-3">
                                    {item.format 
                                      ? item.format(product[item.key as keyof typeof product])
                                      : String(product[item.key as keyof typeof product])
                                    }
                                  </td>
                                ))}
                              </tr>
                            ))}
                            <tr>
                              <td className="p-3 font-medium">Действия</td>
                              {getComparisonProducts().map(product => (
                                <td key={product.id} className="p-3">
                                  <div className="space-y-2">
                                    <Button size="sm" className="w-full">
                                      <Icon name="ShoppingCart" size={14} className="mr-1" />
                                      В корзину
                                    </Button>
                                    <Button size="sm" variant="outline" className="w-full">
                                      <Icon name="Eye" size={14} className="mr-1" />
                                      Подробнее
                                    </Button>
                                  </div>
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="detailed" className="mt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-semibold">Характеристика</th>
                              {getComparisonProducts().map(product => (
                                <th key={product.id} className="text-left p-3 font-semibold min-w-48">
                                  {product.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {comparisonData.map((item) => (
                              <tr key={item.key} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{item.label}</td>
                                {getComparisonProducts().map(product => (
                                  <td key={product.id} className="p-3">
                                    {item.format 
                                      ? item.format(product[item.key as keyof typeof product])
                                      : String(product[item.key as keyof typeof product])
                                    }
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>

                    <TabsContent value="composition" className="mt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-semibold">Компонент</th>
                              {getComparisonProducts().map(product => (
                                <th key={product.id} className="text-left p-3 font-semibold min-w-48">
                                  {product.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Состав</td>
                              {getComparisonProducts().map(product => (
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
                              <td className="p-3 font-medium">Бренд</td>
                              {getComparisonProducts().map(product => (
                                <td key={product.id} className="p-3">{product.brand}</td>
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

            {selectedProducts.length > 0 && (
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="BarChart" size={24} className="mr-2" />
                      Анализ эффективности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {getComparisonProducts().map(product => (
                        <div key={product.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold">{product.name}</h4>
                            <div className="flex items-center space-x-2">
                              <Badge variant={product.effectiveness >= 95 ? "default" : "secondary"}>
                                {product.effectiveness}% эффективность
                              </Badge>
                              <Badge variant="outline">
                                {(product.price / parseInt(product.volume)).toFixed(1)} ₽/мл
                              </Badge>
                            </div>
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
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;