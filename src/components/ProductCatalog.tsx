import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Product } from './types';

interface ProductCatalogProps {
  filteredProducts: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  compareItems: string[];
  toggleCompare: (productId: string) => void;
  addToCart: (productId: string) => void;
  getCompareProducts: () => Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  filteredProducts,
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
  compareItems,
  toggleCompare,
  addToCart,
  getCompareProducts
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
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
  );
};

export default ProductCatalog;