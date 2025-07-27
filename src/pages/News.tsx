import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Новая линейка экологичных средств EcoClean',
      excerpt: 'Представляем революционную серию средств на основе натуральных компонентов',
      date: '15 января 2024',
      category: 'Новинки',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      readTime: '3 мин'
    },
    {
      id: 2,
      title: 'Скидки до 30% на антибактериальные средства',
      excerpt: 'Специальное предложение на всю линейку дезинфицирующих средств',
      date: '10 января 2024',
      category: 'Акции',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      readTime: '2 мин'
    },
    {
      id: 3,
      title: 'Открытие нового склада в Санкт-Петербурге',
      excerpt: 'Расширяем географию доставки и улучшаем сервис для клиентов',
      date: '5 января 2024',
      category: 'Компания',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      readTime: '4 мин'
    },
    {
      id: 4,
      title: 'Как правильно выбрать средство для уборки офиса',
      excerpt: 'Подробное руководство по выбору профессиональной химии для офисных помещений',
      date: '28 декабря 2023',
      category: 'Советы',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      readTime: '6 мин'
    },
    {
      id: 5,
      title: 'Партнерство с ведущими производителями Европы',
      excerpt: 'Заключили эксклюзивные договоры на поставку премиальной химии',
      date: '20 декабря 2023',
      category: 'Партнерство',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      readTime: '3 мин'
    },
    {
      id: 6,
      title: 'Зимние особенности уборки и дезинфекции',
      excerpt: 'Рекомендации по поддержанию чистоты в холодное время года',
      date: '15 декабря 2023',
      category: 'Советы',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      readTime: '5 мин'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Новинки': return 'bg-blue-100 text-blue-800';
      case 'Акции': return 'bg-red-100 text-red-800';
      case 'Компания': return 'bg-green-100 text-green-800';
      case 'Советы': return 'bg-purple-100 text-purple-800';
      case 'Партнерство': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Новости и статьи</h1>
          <p className="text-xl text-teal-100">
            Актуальная информация о продукции, акциях и полезные советы
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {news.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Icon name="Clock" size={16} className="mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl hover:text-teal-600 cursor-pointer">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Icon name="Calendar" size={16} className="mr-1" />
                            {article.date}
                          </div>
                          <Button variant="outline" size="sm">
                            Читать далее
                            <Icon name="ArrowRight" size={16} className="ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg">
                Загрузить еще
                <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Tag" size={20} className="mr-2" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Новинки', 'Акции', 'Компания', 'Советы', 'Партнерство'].map((category) => (
                    <div key={category} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span>{category}</span>
                      <Badge variant="secondary">
                        {news.filter(n => n.category === category).length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Популярные статьи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {news.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-3">
                      <div className="bg-teal-100 text-teal-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm hover:text-teal-600 cursor-pointer line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Bell" size={20} className="mr-2" />
                  Подписка на новости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте уведомления о новых статьях и акциях
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <Button className="w-full">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;