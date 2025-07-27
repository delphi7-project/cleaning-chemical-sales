import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании ChemStore</h1>
          <p className="text-xl text-blue-100">
            Ведущий поставщик профессиональной химии для уборки с 2010 года
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша история</h2>
            <p className="text-gray-600 mb-4">
              ChemStore была основана в 2010 году группой экспертов в области химической промышленности. 
              Мы начинали как небольшая компания, специализирующаяся на поставках качественных средств для уборки.
            </p>
            <p className="text-gray-600 mb-4">
              За более чем 13 лет работы мы выросли в одного из ведущих поставщиков профессиональной химии 
              в России, обслуживая тысячи клиентов от частных лиц до крупных корпораций.
            </p>
            <p className="text-gray-600">
              Сегодня мы гордимся тем, что предлагаем только проверенные и сертифицированные продукты 
              от лучших производителей мира.
            </p>
          </div>
          <div>
            <img 
              src="/img/2dc2978d-c467-4578-a9de-193e9656a454.jpg" 
              alt="О компании" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Target" size={32} className="text-blue-600" />
              </div>
              <CardTitle>Наша миссия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Обеспечивать клиентов высококачественными средствами для уборки, 
                способствуя созданию чистой и безопасной среды.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Eye" size={32} className="text-green-600" />
              </div>
              <CardTitle>Наше видение</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Стать ведущей компанией в области поставок профессиональной химии, 
                устанавливая стандарты качества и сервиса.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Heart" size={32} className="text-purple-600" />
              </div>
              <CardTitle>Наши ценности</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Качество, надежность, инновации и забота об окружающей среде - 
                основа всей нашей деятельности.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши достижения</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
              <p className="text-gray-600">лет на рынке</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
              <p className="text-gray-600">довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <p className="text-gray-600">видов продукции</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">городов доставки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;