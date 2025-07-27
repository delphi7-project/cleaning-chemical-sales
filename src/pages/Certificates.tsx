import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      id: 'iso9001',
      name: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
      issuer: 'TÜV NORD',
      validUntil: '2025-12-31',
      type: 'Качество',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'iso14001',
      name: 'ISO 14001:2015',
      description: 'Система экологического менеджмента',
      issuer: 'Bureau Veritas',
      validUntil: '2025-08-15',
      type: 'Экология',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'gost',
      name: 'ГОСТ Р ИСО 9001-2015',
      description: 'Российский стандарт системы менеджмента качества',
      issuer: 'Росстандарт',
      validUntil: '2025-10-20',
      type: 'Качество',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'haccp',
      name: 'HACCP',
      description: 'Анализ рисков и критические контрольные точки',
      issuer: 'SGS',
      validUntil: '2025-06-30',
      type: 'Безопасность',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'eac',
      name: 'EAC',
      description: 'Евразийское соответствие',
      issuer: 'Евразийская комиссия',
      validUntil: '2026-03-15',
      type: 'Соответствие',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'ce',
      name: 'CE Marking',
      description: 'Европейское соответствие',
      issuer: 'Notified Body',
      validUntil: '2025-11-10',
      type: 'Соответствие',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const standards = [
    {
      name: 'ГОСТ 32478-2013',
      description: 'Средства моющие синтетические порошкообразные',
      scope: 'Стиральные порошки'
    },
    {
      name: 'ГОСТ 25644-96',
      description: 'Средства моющие синтетические жидкие',
      scope: 'Жидкие моющие средства'
    },
    {
      name: 'ГОСТ Р 51696-2000',
      description: 'Средства дезинфицирующие',
      scope: 'Дезинфицирующие средства'
    },
    {
      name: 'ТР ТС 005/2011',
      description: 'О безопасности упаковки',
      scope: 'Упаковка продукции'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Качество': return 'bg-blue-100 text-blue-800';
      case 'Экология': return 'bg-green-100 text-green-800';
      case 'Безопасность': return 'bg-red-100 text-red-800';
      case 'Соответствие': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Сертификаты и лицензии</h1>
          <p className="text-xl text-emerald-100">
            Подтверждение качества и безопасности нашей продукции
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши сертификаты</h2>
          <p className="text-xl text-gray-600">
            Все документы, подтверждающие соответствие международным стандартам
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <Badge className={getTypeColor(cert.type)}>
                    {cert.type}
                  </Badge>
                </div>
                <CardDescription>{cert.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Выдан:</span>
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Действует до:</span>
                    <span className="font-medium">{cert.validUntil}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Просмотр
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="Download" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="FileText" size={24} className="mr-2" />
                Стандарты качества
              </CardTitle>
              <CardDescription>
                Соблюдаем все необходимые стандарты и технические регламенты
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {standards.map((standard, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-emerald-700">{standard.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{standard.description}</p>
                    <p className="text-xs text-gray-500">{standard.scope}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Shield" size={24} className="mr-2" />
                Гарантии качества
              </CardTitle>
              <CardDescription>
                Что означают наши сертификаты для вас
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Проверенное качество</h4>
                    <p className="text-sm text-gray-600">
                      Все продукты проходят строгий контроль качества
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon name="Leaf" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Экологическая безопасность</h4>
                    <p className="text-sm text-gray-600">
                      Соответствие экологическим стандартам
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon name="Users" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Безопасность для людей</h4>
                    <p className="text-sm text-gray-600">
                      Безопасное использование в присутствии людей
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Icon name="Globe" size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Международное признание</h4>
                    <p className="text-sm text-gray-600">
                      Соответствие мировым стандартам качества
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужны документы?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Предоставим все необходимые сертификаты и документы для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Запросить документы
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;