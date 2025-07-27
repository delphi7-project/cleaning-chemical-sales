import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Equipment = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const equipment = [
    {
      id: 1,
      name: 'Поломоечная машина Karcher B 40',
      category: 'Поломоечные машины',
      type: 'Аккумуляторная',
      price: 185000,
      description: 'Компактная поломоечная машина для уборки средних площадей',
      specifications: {
        'Ширина уборки': '40 см',
        'Производительность': '1440 м²/ч',
        'Объем бака': '35 л',
        'Время работы': '2.5 часа',
        'Вес': '45 кг'
      },
      features: [
        'Система рециркуляции воды',
        'Автоматическое отключение щетки',
        'Индикатор заряда батареи',
        'Складная ручка'
      ],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      inStock: true,
      warranty: '2 года'
    },
    {
      id: 2,
      name: 'Пылесос для сухой уборки Nilfisk VP300',
      category: 'Пылесосы',
      type: 'Профессиональный',
      price: 25000,
      description: 'Мощный пылесос для ежедневной уборки офисов и коммерческих помещений',
      specifications: {
        'Мощность': '1400 Вт',
        'Объем бака': '15 л',
        'Длина кабеля': '10 м',
        'Уровень шума': '56 дБ',
        'Вес': '6.5 кг'
      },
      features: [
        'HEPA фильтр',
        'Автоматическая намотка кабеля',
        'Телескопическая трубка',
        'Набор насадок'
      ],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      inStock: true,
      warranty: '3 года'
    },
    {
      id: 3,
      name: 'Моющий пылесос Karcher Puzzi 8/1',
      category: 'Пылесосы',
      type: 'Моющий',
      price: 45000,
      description: 'Профессиональный экстрактор для глубокой чистки ковров и мебели',
      specifications: {
        'Мощность': '1200 Вт',
        'Объем бака': '8 л',
        'Давление': '2 бар',
        'Производительность': '220 м²/ч',
        'Вес': '12 кг'
      },
      features: [
        'Система распыления и всасывания',
        'Подогрев воды',
        'Прозрачный бак',
        'Компактный дизайн'
      ],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      inStock: false,
      warranty: '2 года'
    },
    {
      id: 4,
      name: 'Тележка для уборки Vileda Professional',
      category: 'Тележки',
      type: 'Универсальная',
      price: 8500,
      description: 'Многофункциональная тележка для профессиональной уборки',
      specifications: {
        'Материал': 'Пластик/Металл',
        'Объем ведра': '25 л',
        'Размеры': '55x40x95 см',
        'Грузоподъемность': '50 кг',
        'Вес': '8 кг'
      },
      features: [
        'Отжим для швабры',
        'Отделения для инвентаря',
        'Поворотные колеса',
        'Держатель для мешков'
      ],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      inStock: true,
      warranty: '1 год'
    },
    {
      id: 5,
      name: 'Роторная машина Karcher BDP 43/1500',
      category: 'Роторные машины',
      type: 'Однодисковая',
      price: 95000,
      description: 'Универсальная роторная машина для различных видов обработки полов',
      specifications: {
        'Диаметр диска': '43 см',
        'Мощность': '1500 Вт',
        'Скорость вращения': '154 об/мин',
        'Давление': '43 кг',
        'Вес': '52 кг'
      },
      features: [
        'Регулировка скорости',
        'Защита от перегрузки',
        'Складная ручка',
        'Набор дисков'
      ],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      inStock: true,
      warranty: '2 года'
    },
    {
      id: 6,
      name: 'Генератор пара Karcher SG 4/4',
      category: 'Пароочистители',
      type: 'Профессиональный',
      price: 35000,
      description: 'Мощный пароочиститель для дезинфекции и глубокой очистки',
      specifications: {
        'Давление пара': '4 бар',
        'Объем бойлера': '4 л',
        'Время нагрева': '6 мин',
        'Расход пара': '3.5 кг/ч',
        'Вес': '18 кг'
      },
      features: [
        'Непрерывная подача пара',
        'Регулировка температуры',
        'Набор насадок',
        'Индикатор уровня воды'
      ],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      inStock: true,
      warranty: '2 года'
    }
  ];

  const categories = ['all', ...Array.from(new Set(equipment.map(e => e.category)))];

  const filteredEquipment = equipment.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const services = [
    {
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО для поддержания оборудования в рабочем состоянии',
      icon: 'Settings',
      price: 'от 2000 ₽'
    },
    {
      title: 'Ремонт оборудования',
      description: 'Квалифицированный ремонт с использованием оригинальных запчастей',
      icon: 'Wrench',
      price: 'по прайсу'
    },
    {
      title: 'Обучение персонала',
      description: 'Обучение правильной эксплуатации и обслуживанию техники',
      icon: 'GraduationCap',
      price: 'от 3000 ₽'
    },
    {
      title: 'Лизинг оборудования',
      description: 'Возможность приобретения техники в лизинг на выгодных условиях',
      icon: 'CreditCard',
      price: 'от 0.1%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Оборудование для уборки</h1>
          <p className="text-xl text-slate-100">
            Профессиональная техника от ведущих мировых производителей
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог оборудования</h2>
          <p className="text-xl text-gray-600">
            Выберите подходящую технику для эффективной уборки
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="all">Все</TabsTrigger>
            {categories.slice(1, 6).map(category => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEquipment.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <Badge variant={item.inStock ? "default" : "secondary"}>
                    {item.inStock ? 'В наличии' : 'Под заказ'}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Характеристики:</h4>
                    <div className="space-y-1">
                      {Object.entries(item.specifications).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {item.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <Icon name="Check" size={12} className="text-green-500 mr-1 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-slate-600">
                          {item.price.toLocaleString()} ₽
                        </div>
                        <div className="text-xs text-gray-500">
                          Гарантия: {item.warranty}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1" disabled={!item.inStock}>
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        {item.inStock ? 'В корзину' : 'Заказать'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Info" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по обслуживанию оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-slate-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-slate-600 mb-4">
                    {service.price}
                  </div>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают наше оборудование?</h2>
            <p className="text-xl text-gray-600">
              Преимущества работы с профессиональной техникой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Качество</h3>
              <p className="text-gray-600 text-sm">
                Только проверенные бренды с мировой репутацией
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600 text-sm">
                Официальная гарантия и сервисное обслуживание
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Эффективность</h3>
              <p className="text-gray-600 text-sm">
                Повышение производительности труда в 2-3 раза
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600 text-sm">
                Техническая поддержка и обучение персонала
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-6 text-slate-100">
            Наши эксперты помогут подобрать оптимальное оборудование для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-600">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;