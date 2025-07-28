import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';
import { Product } from '@/components/types';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    title: '',
    text: ''
  });

  // Моковые данные товара
  const product: Product = {
    id: id || '1',
    name: 'Универсальный очиститель ProClean',
    price: 299,
    category: 'Универсальные',
    composition: ['Анионные ПАВ 5-15%', 'Неионные ПАВ <5%', 'Консерванты'],
    effectiveness: 95,
    volume: '500 мл',
    usage: 'Для всех поверхностей',
    image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
    description: 'Профессиональное средство для ежедневной уборки всех типов поверхностей. Эффективно удаляет загрязнения, не оставляет разводов. Подходит для использования в офисах, торговых центрах, медицинских учреждениях.',
    instructions: 'Нанести на поверхность, протереть влажной тканью. Для сильных загрязнений оставить на 2-3 минуты.',
    storage: 'Хранить при температуре от +5°C до +25°C в недоступном для детей месте.',
    warnings: ['Не смешивать с другими средствами', 'Избегать попадания в глаза', 'Использовать перчатки']
  };

  const images = [
    '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
    '/img/2dc2978d-c467-4578-a9de-193e9656a454.jpg',
    '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
    '/img/2dc2978d-c467-4578-a9de-193e9656a454.jpg'
  ];

  const specifications = [
    { label: 'Объем', value: product.volume },
    { label: 'Эффективность', value: `${product.effectiveness}%` },
    { label: 'Категория', value: product.category },
    { label: 'pH', value: '7.5' },
    { label: 'Концентрация', value: '1:10' },
    { label: 'Срок годности', value: '3 года' },
    { label: 'Производитель', value: 'ProClean Industries' },
    { label: 'Страна', value: 'Германия' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '2024-01-15',
      title: 'Отличное средство!',
      text: 'Использую уже полгода для уборки офиса. Очень довольна результатом - убирает все загрязнения, не оставляет разводов.',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 4,
      date: '2024-01-10',
      title: 'Хорошее качество',
      text: 'Качественное средство, но хотелось бы более экономичный расход. В целом рекомендую.',
      verified: false,
      helpful: 8
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 5,
      date: '2024-01-08',
      title: 'Превосходно!',
      text: 'Лучшее средство из всех, что пробовала. Отлично справляется с жиром на кухне.',
      verified: true,
      helpful: 15
    }
  ];

  const relatedProducts = [
    {
      id: '2',
      name: 'Средство для стекол CrystalShine',
      price: 199,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4.8
    },
    {
      id: '3',
      name: 'Антибактериальный гель CleanGuard',
      price: 249,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4.9
    },
    {
      id: '4',
      name: 'Концентрат для полов FloorMaster',
      price: 349,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4.6
    },
    {
      id: '5',
      name: 'Средство для сантехники LimeAway',
      price: 279,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4.7
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const addToCart = () => {
    console.log('Добавлено в корзину:', { productId: product.id, quantity });
  };

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отзыв отправлен:', reviewForm);
    setShowReviewForm(false);
    setReviewForm({ name: '', rating: 5, title: '', text: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-800">
              Главная
            </button>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <button onClick={() => navigate('/catalog')} className="text-blue-600 hover:text-blue-800">
              Каталог
            </button>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-600">{product.category}</span>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Галерея изображений */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="flex items-center">
                  {renderStars(Math.round(averageRating))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({reviews.length} отзывов)
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {product.price} ₽
              </div>
              <div className="text-sm text-gray-600">
                Цена за {product.volume}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Эффективность:</span>
                <span className="font-semibold text-green-600">{product.effectiveness}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${product.effectiveness}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <Label htmlFor="quantity" className="text-base font-medium">Количество:</Label>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center border-0"
                    min="1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
                <div className="text-lg font-semibold">
                  Итого: {(product.price * quantity).toLocaleString()} ₽
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <Button size="lg" className="flex-1" onClick={addToCart}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Heart" size={20} className="mr-2" />
                В избранное
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Share" size={20} />
              </Button>
            </div>

            <Alert>
              <Icon name="Truck" size={16} />
              <AlertDescription>
                <strong>Бесплатная доставка</strong> при заказе от 3000 ₽ по Москве
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Подробная информация */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specifications">Характеристики</TabsTrigger>
            <TabsTrigger value="composition">Состав</TabsTrigger>
            <TabsTrigger value="instructions">Инструкция</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Описание товара</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <h4 className="font-semibold mb-2">Применение:</h4>
                  <p className="text-gray-700 mb-4">{product.usage}</p>
                  <h4 className="font-semibold mb-2">Преимущества:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Высокая эффективность очистки</li>
                    <li>Безопасность для поверхностей</li>
                    <li>Экономичный расход</li>
                    <li>Приятный аромат</li>
                    <li>Быстрое действие</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Технические характеристики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{spec.label}:</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="composition" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Состав</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.composition.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="Circle" size={8} className="text-blue-500 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Icon name="AlertTriangle" size={16} className="text-yellow-600 mr-2" />
                    Предупреждения:
                  </h4>
                  <ul className="space-y-1">
                    {product.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-yellow-800">
                        • {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Инструкция по применению</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Способ применения:</h4>
                    <p className="text-gray-700">{product.instructions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Условия хранения:</h4>
                    <p className="text-gray-700">{product.storage}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="Info" size={16} className="text-blue-600 mr-2" />
                      Рекомендации:
                    </h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Перед использованием встряхните флакон</li>
                      <li>• Тестируйте на незаметном участке</li>
                      <li>• Используйте при температуре от +5°C до +40°C</li>
                      <li>• Избегайте попадания прямых солнечных лучей</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Сводка отзывов */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Отзывы покупателей</span>
                    <Button onClick={() => setShowReviewForm(!showReviewForm)}>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Написать отзыв
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {averageRating.toFixed(1)}
                      </div>
                      <div className="flex justify-center mb-2">
                        {renderStars(Math.round(averageRating))}
                      </div>
                      <p className="text-gray-600">на основе {reviews.length} отзывов</p>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map(rating => {
                        const count = reviews.filter(r => r.rating === rating).length;
                        const percentage = (count / reviews.length) * 100;
                        return (
                          <div key={rating} className="flex items-center space-x-2 mb-1">
                            <span className="text-sm w-8">{rating}</span>
                            <Icon name="Star" size={14} className="text-yellow-400" />
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-8">{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Форма отзыва */}
                  {showReviewForm && (
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle>Написать отзыв</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={submitReview} className="space-y-4">
                          <div>
                            <Label htmlFor="review-name">Имя</Label>
                            <Input
                              id="review-name"
                              value={reviewForm.name}
                              onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                              placeholder="Ваше имя"
                              required
                            />
                          </div>
                          <div>
                            <Label>Оценка</Label>
                            <div className="flex space-x-1 mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  onClick={() => setReviewForm({...reviewForm, rating: star})}
                                >
                                  <Icon 
                                    name="Star" 
                                    size={24} 
                                    className={star <= reviewForm.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="review-title">Заголовок</Label>
                            <Input
                              id="review-title"
                              value={reviewForm.title}
                              onChange={(e) => setReviewForm({...reviewForm, title: e.target.value})}
                              placeholder="Краткое описание"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="review-text">Отзыв</Label>
                            <Textarea
                              id="review-text"
                              value={reviewForm.text}
                              onChange={(e) => setReviewForm({...reviewForm, text: e.target.value})}
                              placeholder="Расскажите о своем опыте использования..."
                              className="min-h-[100px]"
                              required
                            />
                          </div>
                          <div className="flex space-x-2">
                            <Button type="submit">Отправить отзыв</Button>
                            <Button type="button" variant="outline" onClick={() => setShowReviewForm(false)}>
                              Отмена
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  )}

                  {/* Список отзывов */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <Avatar>
                                <AvatarFallback>
                                  {review.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-semibold">{review.name}</h4>
                                  {review.verified && (
                                    <Badge variant="secondary" className="text-xs">
                                      <Icon name="CheckCircle" size={12} className="mr-1" />
                                      Проверен
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                  <div className="flex">
                                    {renderStars(review.rating)}
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{review.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">{review.text}</p>
                          <div className="flex items-center justify-between">
                            <Button variant="ghost" size="sm">
                              <Icon name="ThumbsUp" size={16} className="mr-2" />
                              Полезно ({review.helpful})
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Flag" size={16} className="mr-2" />
                              Пожаловаться
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Похожие товары */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Похожие товары</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card 
                key={relatedProduct.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <CardHeader className="pb-3">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(Math.round(relatedProduct.rating))}
                    </div>
                    <span className="text-sm text-gray-600">({relatedProduct.rating})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {relatedProduct.price} ₽
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;