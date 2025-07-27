import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const categories = [
    {
      id: 'universal',
      name: 'Универсальные средства',
      description: 'Для всех типов поверхностей',
      icon: 'Sparkles',
      count: 25,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'glass',
      name: 'Для стекол и зеркал',
      description: 'Кристальная чистота без разводов',
      icon: 'Mirror',
      count: 12,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'antibacterial',
      name: 'Антибактериальные',
      description: 'Дезинфекция и защита',
      icon: 'Shield',
      count: 18,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'floors',
      name: 'Для полов',
      description: 'Все типы напольных покрытий',
      icon: 'Home',
      count: 15,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'bathroom',
      name: 'Для сантехники',
      description: 'Удаление налета и ржавчины',
      icon: 'Droplets',
      count: 20,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'degreaser',
      name: 'Обезжириватели',
      description: 'Для кухни и промышленности',
      icon: 'Flame',
      count: 14,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'carpet',
      name: 'Для ковров и мебели',
      description: 'Глубокая очистка текстиля',
      icon: 'Sofa',
      count: 10,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'kitchen',
      name: 'Для кухни',
      description: 'Специальные средства для кухни',
      icon: 'ChefHat',
      count: 16,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Каталог продукции</h1>
          <p className="text-xl text-purple-100">
            Полный ассортимент профессиональной химии для уборки
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории товаров</h2>
          <p className="text-xl text-gray-600">
            Выберите категорию для просмотра доступных товаров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon name={category.icon} size={24} className="text-purple-600" />
                  </div>
                  <Badge variant="secondary">{category.count} товаров</Badge>
                </div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Перейти в категорию
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-gray-600">
              Преимущества работы с ChemStore
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертифицированная продукция</h3>
              <p className="text-gray-600">
                Все товары имеют необходимые сертификаты качества и безопасности
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем заказы по всей России в кратчайшие сроки
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">
                Наши специалисты готовы помочь в выборе подходящих средств
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;