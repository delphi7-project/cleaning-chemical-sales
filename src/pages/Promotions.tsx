import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Promotions = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentPromotions = [
    {
      id: 1,
      title: 'Скидка 25% на антибактериальные средства',
      description: 'Специальное предложение на всю линейку дезинфицирующих средств',
      discount: 25,
      validUntil: '2024-02-29',
      category: 'Антибактериальные',
      minOrder: 2000,
      code: 'ANTIBAC25',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      type: 'discount',
      status: 'active'
    },
    {
      id: 2,
      title: 'Бесплатная доставка при заказе от 5000 ₽',
      description: 'Доставляем бесплатно по всей России при заказе от 5000 рублей',
      discount: 0,
      validUntil: '2024-03-31',
      category: 'Доставка',
      minOrder: 5000,
      code: 'FREEDEL5000',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      type: 'shipping',
      status: 'active'
    },
    {
      id: 3,
      title: '3+1 на средства для полов',
      description: 'При покупке 3 упаковок средств для полов - 4-я в подарок',
      discount: 0,
      validUntil: '2024-02-15',
      category: 'Для полов',
      minOrder: 0,
      code: 'FLOOR3PLUS1',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      type: 'gift',
      status: 'ending'
    },
    {
      id: 4,
      title: 'Новинка: скидка 15% на EcoClean',
      description: 'Попробуйте новую линейку экологичных средств со скидкой',
      discount: 15,
      validUntil: '2024-04-30',
      category: 'Экологичные',
      minOrder: 1000,
      code: 'ECOSTART15',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      type: 'new',
      status: 'active'
    }
  ];

  const upcomingPromotions = [
    {
      id: 5,
      title: 'Весенняя распродажа',
      description: 'Скидки до 40% на всю продукцию в честь начала весны',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      category: 'Все категории',
      type: 'seasonal'
    },
    {
      id: 6,
      title: 'День клининговых компаний',
      description: 'Специальные условия для профессиональных клининговых компаний',
      startDate: '2024-04-15',
      endDate: '2024-04-15',
      category: 'B2B',
      type: 'professional'
    }
  ];

  const loyaltyProgram = {
    levels: [
      { name: 'Бронзовый', minSpent: 0, discount: 3, color: 'bg-amber-100 text-amber-800' },
      { name: 'Серебряный', minSpent: 50000, discount: 5, color: 'bg-gray-100 text-gray-800' },
      { name: 'Золотой', minSpent: 150000, discount: 8, color: 'bg-yellow-100 text-yellow-800' },
      { name: 'Платиновый', minSpent: 300000, discount: 12, color: 'bg-purple-100 text-purple-800' }
    ],
    benefits: [
      'Накопительные скидки',
      'Приоритетная доставка',
      'Персональный менеджер',
      'Эксклюзивные предложения',
      'Бесплатные образцы',
      'Расширенная гарантия'
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'ending': return 'bg-red-100 text-red-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'discount': return 'Percent';
      case 'shipping': return 'Truck';
      case 'gift': return 'Gift';
      case 'new': return 'Sparkles';
      case 'seasonal': return 'Calendar';
      case 'professional': return 'Building';
      default: return 'Tag';
    }
  };

  const getDaysLeft = (date: string) => {
    const today = new Date();
    const endDate = new Date(date);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Акции и скидки</h1>
          <p className="text-xl text-pink-100">
            Выгодные предложения и специальные условия для наших клиентов
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Текущие акции</TabsTrigger>
            <TabsTrigger value="upcoming">Скоро</TabsTrigger>
            <TabsTrigger value="loyalty">Программа лояльности</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {currentPromotions.map((promo) => (
                <Card key={promo.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={promo.image} 
                        alt={promo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon name={getTypeIcon(promo.type)} size={20} className="text-pink-600" />
                        <Badge className={getStatusColor(promo.status)}>
                          {promo.status === 'active' ? 'Активна' : 'Заканчивается'}
                        </Badge>
                      </div>
                      {promo.discount > 0 && (
                        <Badge className="bg-pink-100 text-pink-800 text-lg px-3 py-1">
                          -{promo.discount}%
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <CardDescription>{promo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Категория:</span>
                          <p className="font-medium">{promo.category}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Действует до:</span>
                          <p className="font-medium">{promo.validUntil}</p>
                        </div>
                        {promo.minOrder > 0 && (
                          <div className="col-span-2">
                            <span className="text-gray-600">Минимальный заказ:</span>
                            <p className="font-medium">{promo.minOrder.toLocaleString()} ₽</p>
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Промокод:</span>
                          <Button variant="outline" size="sm">
                            <Icon name="Copy" size={14} className="mr-1" />
                            Копировать
                          </Button>
                        </div>
                        <code className="text-lg font-mono font-bold text-pink-600">
                          {promo.code}
                        </code>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          Осталось: {getDaysLeft(promo.validUntil)} дней
                        </div>
                        <Button>
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Применить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-6">
              {upcomingPromotions.map((promo) => (
                <Card key={promo.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Icon name={getTypeIcon(promo.type)} size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{promo.title}</CardTitle>
                          <CardDescription>{promo.description}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        Скоро
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Начало:</span>
                        <p className="font-medium">{promo.startDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Окончание:</span>
                        <p className="font-medium">{promo.endDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Категория:</span>
                        <p className="font-medium">{promo.category}</p>
                      </div>
                    </div>
                    <Button className="mt-4" variant="outline">
                      <Icon name="Bell" size={16} className="mr-2" />
                      Напомнить о начале
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="loyalty" className="mt-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Award" size={24} className="mr-2" />
                    Программа лояльности ChemStore
                  </CardTitle>
                  <CardDescription>
                    Покупайте больше - получайте больше выгод
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    {loyaltyProgram.levels.map((level, index) => (
                      <div key={index} className="text-center">
                        <div className={`p-4 rounded-lg mb-4 ${level.color}`}>
                          <h3 className="font-bold text-lg">{level.name}</h3>
                          <p className="text-sm">от {level.minSpent.toLocaleString()} ₽</p>
                        </div>
                        <div className="text-2xl font-bold text-pink-600 mb-2">
                          -{level.discount}%
                        </div>
                        <p className="text-sm text-gray-600">постоянная скидка</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Gift" size={24} className="mr-2" />
                      Преимущества участников
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {loyaltyProgram.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-3" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="TrendingUp" size={24} className="mr-2" />
                      Ваш прогресс
                    </CardTitle>
                    <CardDescription>
                      Текущий статус и до следующего уровня
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Текущий уровень: Серебряный</span>
                          <span>75 000 ₽ потрачено</span>
                        </div>
                        <Progress value={50} className="h-3" />
                        <p className="text-xs text-gray-600 mt-1">
                          До золотого уровня: 75 000 ₽
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Ваши привилегии:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Скидка 5% на все товары</li>
                          <li>• Приоритетная доставка</li>
                          <li>• Персональный менеджер</li>
                        </ul>
                      </div>

                      <Button className="w-full">
                        <Icon name="User" size={16} className="mr-2" />
                        Войти в личный кабинет
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как получить максимальную выгоду?</h2>
            <p className="text-xl text-gray-600">
              Советы по экономии при покупке химических средств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Подпишитесь на рассылку</h3>
              <p className="text-gray-600 text-sm">
                Получайте уведомления о новых акциях первыми
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingCart" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Планируйте покупки</h3>
              <p className="text-gray-600 text-sm">
                Объединяйте заказы для получения скидок
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Repeat" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Станьте постоянным клиентом</h3>
              <p className="text-gray-600 text-sm">
                Участвуйте в программе лояльности
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Share" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Приводите друзей</h3>
              <p className="text-gray-600 text-sm">
                Получайте бонусы за рекомендации
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Не пропустите выгодные предложения!</h2>
          <p className="text-xl mb-6 text-pink-100">
            Подпишитесь на нашу рассылку и получайте уведомления о новых акциях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button variant="secondary">
              <Icon name="Mail" size={16} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;