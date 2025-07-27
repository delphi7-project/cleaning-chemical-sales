import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Как выбрать правильное средство для уборки офиса',
      excerpt: 'Подробное руководство по выбору профессиональной химии для офисных помещений с учетом типа поверхностей и интенсивности использования.',
      content: 'Полная статья о выборе средств...',
      author: 'Анна Петрова',
      date: '2024-01-20',
      category: 'Советы',
      readTime: '8 мин',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      tags: ['офис', 'уборка', 'профессиональная химия'],
      views: 1250
    },
    {
      id: 2,
      title: 'Экологичная уборка: мифы и реальность',
      excerpt: 'Разбираем популярные заблуждения об экологичных средствах для уборки и рассказываем о реальных преимуществах зеленой химии.',
      content: 'Полная статья об экологии...',
      author: 'Михаил Сидоров',
      date: '2024-01-18',
      category: 'Экология',
      readTime: '6 мин',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      tags: ['экология', 'зеленая химия', 'безопасность'],
      views: 980
    },
    {
      id: 3,
      title: 'Дезинфекция в медицинских учреждениях: стандарты и требования',
      excerpt: 'Обзор современных требований к дезинфекции в медицинских учреждениях и рекомендации по выбору подходящих средств.',
      content: 'Полная статья о дезинфекции...',
      author: 'Елена Козлова',
      date: '2024-01-15',
      category: 'Медицина',
      readTime: '10 мин',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      tags: ['дезинфекция', 'медицина', 'стандарты'],
      views: 1580
    },
    {
      id: 4,
      title: 'Уборка ресторанов: особенности и требования',
      excerpt: 'Специфика уборки предприятий общественного питания, требования санитарных норм и выбор подходящих средств.',
      content: 'Полная статья об уборке ресторанов...',
      author: 'Дмитрий Волков',
      date: '2024-01-12',
      category: 'HoReCa',
      readTime: '7 мин',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      tags: ['ресторан', 'санитария', 'пищевая безопасность'],
      views: 750
    },
    {
      id: 5,
      title: 'Химия для автомоек: что нужно знать',
      excerpt: 'Обзор специализированных средств для автомоек, их особенности и правила применения для достижения лучших результатов.',
      content: 'Полная статья о химии для автомоек...',
      author: 'Александр Новиков',
      date: '2024-01-10',
      category: 'Автомойки',
      readTime: '5 мин',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      tags: ['автомойка', 'автохимия', 'детейлинг'],
      views: 620
    },
    {
      id: 6,
      title: 'Правильное хранение химических средств',
      excerpt: 'Важные правила хранения профессиональной химии для обеспечения безопасности и сохранения эффективности средств.',
      content: 'Полная статья о хранении...',
      author: 'Ольга Морозова',
      date: '2024-01-08',
      category: 'Безопасность',
      readTime: '4 мин',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      tags: ['хранение', 'безопасность', 'склад'],
      views: 890
    }
  ];

  const categories = ['all', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Советы': 'bg-blue-100 text-blue-800',
      'Экология': 'bg-green-100 text-green-800',
      'Медицина': 'bg-red-100 text-red-800',
      'HoReCa': 'bg-purple-100 text-purple-800',
      'Автомойки': 'bg-orange-100 text-orange-800',
      'Безопасность': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const popularTags = ['уборка', 'дезинфекция', 'экология', 'безопасность', 'офис', 'ресторан'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог ChemStore</h1>
          <p className="text-xl text-indigo-100">
            Полезные статьи о профессиональной уборке и химических средствах
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Поиск статей..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="whitespace-nowrap"
                    >
                      {category === 'all' ? 'Все' : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {filteredArticles.map((article) => (
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
                            <Icon name="Eye" size={16} className="mr-1" />
                            {article.views}
                          </div>
                        </div>
                        <CardTitle className="text-xl hover:text-indigo-600 cursor-pointer">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Icon name="User" size={16} className="mr-1" />
                              {article.author}
                            </div>
                            <div className="flex items-center">
                              <Icon name="Calendar" size={16} className="mr-1" />
                              {article.date}
                            </div>
                            <div className="flex items-center">
                              <Icon name="Clock" size={16} className="mr-1" />
                              {article.readTime}
                            </div>
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

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Статьи не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить поисковый запрос или категорию</p>
              </div>
            )}

            <div className="mt-12 text-center">
              <Button size="lg">
                Загрузить еще статьи
                <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Популярные статьи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {articles.slice(0, 5).sort((a, b) => b.views - a.views).map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-3">
                      <div className="bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm hover:text-indigo-600 cursor-pointer line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Icon name="Eye" size={12} className="mr-1" />
                          {article.views}
                          <span className="mx-2">•</span>
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Hash" size={20} className="mr-2" />
                  Популярные теги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-indigo-100 hover:text-indigo-800"
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Bell" size={20} className="mr-2" />
                  Подписка на блог
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте уведомления о новых статьях и полезных советах
                </p>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Ваш email"
                  />
                  <Button className="w-full">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Рубрики
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <div 
                      key={category} 
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="text-sm">{category}</span>
                      <Badge variant="secondary">
                        {articles.filter(a => a.category === category).length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;