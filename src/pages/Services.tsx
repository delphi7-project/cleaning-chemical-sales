import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      id: 'consultation',
      name: 'Консультации по выбору',
      description: 'Поможем подобрать оптимальные средства для ваших задач',
      icon: 'MessageCircle',
      price: 'Бесплатно',
      features: ['Анализ потребностей', 'Рекомендации экспертов', 'Расчет расхода']
    },
    {
      id: 'training',
      name: 'Обучение персонала',
      description: 'Обучаем правильному использованию химических средств',
      icon: 'GraduationCap',
      price: 'от 5000 ₽',
      features: ['Теоретическая часть', 'Практические занятия', 'Сертификат']
    },
    {
      id: 'delivery',
      name: 'Регулярные поставки',
      description: 'Настроим автоматические поставки по графику',
      icon: 'Calendar',
      price: 'Скидка 10%',
      features: ['Гибкий график', 'Фиксированные цены', 'Приоритетная доставка']
    },
    {
      id: 'testing',
      name: 'Тестирование средств',
      description: 'Предоставляем образцы для тестирования',
      icon: 'TestTube',
      price: 'Бесплатно',
      features: ['Образцы 50-100 мл', 'Инструкции по применению', 'Техническая поддержка']
    },
    {
      id: 'custom',
      name: 'Индивидуальные решения',
      description: 'Разработка специальных составов под ваши задачи',
      icon: 'Settings',
      price: 'По запросу',
      features: ['Анализ требований', 'Разработка формулы', 'Производство']
    },
    {
      id: 'maintenance',
      name: 'Техническое обслуживание',
      description: 'Обслуживание оборудования для уборки',
      icon: 'Wrench',
      price: 'от 2000 ₽',
      features: ['Диагностика', 'Ремонт', 'Профилактика']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl text-indigo-100">
            Комплексные решения для вашего бизнеса
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Что мы предлагаем</h2>
          <p className="text-xl text-gray-600">
            Полный спектр услуг для эффективной работы с химическими средствами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Icon name={service.icon} size={24} className="text-indigo-600" />
                  </div>
                  <Badge variant="outline">{service.price}</Badge>
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Процесс работы</h2>
            <p className="text-xl text-gray-600">
              Как мы работаем с нашими клиентами
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600 text-sm">
                Анализируем ваши потребности и задачи
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Подбор решения</h3>
              <p className="text-gray-600 text-sm">
                Предлагаем оптимальные варианты
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Тестирование</h3>
              <p className="text-gray-600 text-sm">
                Проводим тестирование на ваших объектах
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Внедрение</h3>
              <p className="text-gray-600 text-sm">
                Поставляем продукцию и обучаем персонал
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Наши эксперты помогут подобрать оптимальное решение для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;