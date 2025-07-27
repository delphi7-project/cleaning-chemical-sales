import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Клининг Сервис Плюс',
      type: 'Клининговая компания',
      city: 'Москва',
      employees: '50-100',
      cooperation: '2020',
      description: 'Ведущая клининговая компания, специализирующаяся на уборке офисных и торговых центров',
      services: ['Офисная уборка', 'Торговые центры', 'Медицинские учреждения'],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 2,
      name: 'Гостиничная группа "Комфорт"',
      type: 'Гостиничная сеть',
      city: 'Санкт-Петербург',
      employees: '200+',
      cooperation: '2019',
      description: 'Сеть отелей премиум-класса с высокими стандартами чистоты и сервиса',
      services: ['Гостиничный сервис', 'Ресторанный бизнес', 'SPA-центры'],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 3,
      name: 'Медицинский центр "Здоровье+"',
      type: 'Медицинское учреждение',
      city: 'Екатеринбург',
      employees: '100-200',
      cooperation: '2021',
      description: 'Многопрофильный медицинский центр с строгими требованиями к дезинфекции',
      services: ['Дезинфекция', 'Стерилизация', 'Медицинская уборка'],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 4,
      name: 'Ресторанная группа "Вкус"',
      type: 'Ресторанный бизнес',
      city: 'Новосибирск',
      employees: '150+',
      cooperation: '2018',
      description: 'Сеть ресторанов с высокими стандартами пищевой безопасности',
      services: ['Кухонная уборка', 'Дезинфекция', 'Пищевая безопасность'],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 5,
      name: 'Автомойка "Блеск"',
      type: 'Автосервис',
      city: 'Казань',
      employees: '20-50',
      cooperation: '2022',
      description: 'Современная автомойка с полным спектром услуг детейлинга',
      services: ['Автомойка', 'Детейлинг', 'Химчистка салонов'],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 6,
      name: 'Производственная компания "Техно"',
      type: 'Промышленность',
      city: 'Челябинск',
      employees: '300+',
      cooperation: '2017',
      description: 'Крупное промышленное предприятие с собственной службой уборки',
      services: ['Промышленная уборка', 'Обезжиривание', 'Техническое обслуживание'],
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const partnerPrograms = [
    {
      title: 'Дилерская программа',
      description: 'Станьте официальным дилером ChemStore в вашем регионе',
      benefits: [
        'Эксклюзивные цены',
        'Маркетинговая поддержка',
        'Обучение персонала',
        'Защищенная территория'
      ],
      requirements: [
        'Опыт в сфере продаж',
        'Собственный склад',
        'Команда продавцов',
        'Финансовые гарантии'
      ]
    },
    {
      title: 'Партнерство для клининговых компаний',
      description: 'Специальные условия для профессиональных клининговых компаний',
      benefits: [
        'Скидки до 30%',
        'Техническая поддержка',
        'Обучение технологиям',
        'Приоритетная доставка'
      ],
      requirements: [
        'Лицензия на клининг',
        'Минимальный оборот',
        'Профессиональное оборудование',
        'Обученный персонал'
      ]
    },
    {
      title: 'Корпоративное партнерство',
      description: 'Долгосрочное сотрудничество для крупных корпораций',
      benefits: [
        'Индивидуальные условия',
        'Персональный менеджер',
        'Складские программы',
        'Консультации экспертов'
      ],
      requirements: [
        'Крупная компания',
        'Регулярные закупки',
        'Долгосрочные контракты',
        'Высокие объемы'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Клининговая компания': 'bg-blue-100 text-blue-800',
      'Гостиничная сеть': 'bg-purple-100 text-purple-800',
      'Медицинское учреждение': 'bg-red-100 text-red-800',
      'Ресторанный бизнес': 'bg-orange-100 text-orange-800',
      'Автосервис': 'bg-green-100 text-green-800',
      'Промышленность': 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши партнеры</h1>
          <p className="text-xl text-emerald-100">
            Успешное сотрудничество с ведущими компаниями России
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Компании, которые нам доверяют</h2>
          <p className="text-xl text-gray-600">
            Более 500 компаний выбрали ChemStore в качестве надежного поставщика
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner) => (
            <Card key={partner.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <Badge className={getTypeColor(partner.type)}>
                    {partner.type}
                  </Badge>
                </div>
                <CardDescription>{partner.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Город:</span>
                    <span className="font-medium">{partner.city}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Сотрудников:</span>
                    <span className="font-medium">{partner.employees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Партнеры с:</span>
                    <span className="font-medium">{partner.cooperation}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Услуги:</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Партнерские программы</h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий формат сотрудничества
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="Gift" size={16} className="mr-2 text-green-500" />
                        Преимущества
                      </h4>
                      <ul className="space-y-1">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <Icon name="Check" size={14} className="mr-2 text-green-500 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="FileText" size={16} className="mr-2 text-blue-500" />
                        Требования
                      </h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Стать партнером
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Преимущества партнерства</h2>
            <p className="text-xl text-gray-600">
              Почему компании выбирают нас в качестве поставщика
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Качество</h3>
              <p className="text-gray-600 text-sm">
                Только сертифицированная продукция от проверенных производителей
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Надежность</h3>
              <p className="text-gray-600 text-sm">
                Стабильные поставки и выполнение обязательств в срок
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600 text-sm">
                Техническая поддержка и консультации экспертов 24/7
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Развитие</h3>
              <p className="text-gray-600 text-sm">
                Совместное развитие бизнеса и достижение новых высот
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Станьте нашим партнером</h2>
          <p className="text-xl mb-6 text-emerald-100">
            Присоединяйтесь к успешным компаниям, которые уже работают с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;