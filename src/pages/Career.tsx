import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Career = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Менеджер по продажам',
      department: 'Продажи',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '2-5 лет',
      salary: '80 000 - 120 000 ₽',
      description: 'Ищем активного менеджера для работы с клиентами и развития продаж профессиональной химии.',
      requirements: [
        'Опыт продаж B2B от 2 лет',
        'Знание химической продукции приветствуется',
        'Коммуникабельность и нацеленность на результат',
        'Водительские права категории B'
      ],
      responsibilities: [
        'Поиск и привлечение новых клиентов',
        'Ведение переговоров и заключение сделок',
        'Консультирование клиентов по продукции',
        'Выполнение плана продаж'
      ]
    },
    {
      id: 2,
      title: 'Специалист по логистике',
      department: 'Логистика',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '1-3 года',
      salary: '60 000 - 80 000 ₽',
      description: 'Требуется специалист для организации доставки товаров и работы с транспортными компаниями.',
      requirements: [
        'Опыт работы в логистике от 1 года',
        'Знание 1С, Excel',
        'Внимательность и ответственность',
        'Умение работать в многозадачном режиме'
      ],
      responsibilities: [
        'Планирование и контроль доставок',
        'Работа с транспортными компаниями',
        'Ведение документооборота',
        'Оптимизация логистических процессов'
      ]
    },
    {
      id: 3,
      title: 'Химик-технолог',
      department: 'R&D',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '3+ лет',
      salary: '90 000 - 130 000 ₽',
      description: 'Ищем опытного химика-технолога для разработки новых продуктов и контроля качества.',
      requirements: [
        'Высшее химическое образование',
        'Опыт работы с моющими средствами от 3 лет',
        'Знание методов анализа и контроля качества',
        'Английский язык на уровне чтения технической литературы'
      ],
      responsibilities: [
        'Разработка новых рецептур',
        'Контроль качества продукции',
        'Проведение испытаний и анализов',
        'Техническая поддержка клиентов'
      ]
    },
    {
      id: 4,
      title: 'Кладовщик',
      department: 'Склад',
      location: 'Москва',
      type: 'Полная занятость',
      experience: 'Без опыта',
      salary: '45 000 - 55 000 ₽',
      description: 'Требуется кладовщик для работы на современном складе с химической продукцией.',
      requirements: [
        'Ответственность и внимательность',
        'Физическая выносливость',
        'Готовность к обучению',
        'Соблюдение техники безопасности'
      ],
      responsibilities: [
        'Приемка и размещение товара',
        'Комплектация заказов',
        'Ведение складского учета',
        'Поддержание порядка на складе'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда + премии за результат'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности профессионального и карьерного развития'
    },
    {
      icon: 'Heart',
      title: 'Медицинская страховка',
      description: 'ДМС для сотрудников и их семей'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Корпоративное обучение и повышение квалификации'
    },
    {
      icon: 'Coffee',
      title: 'Комфортный офис',
      description: 'Современный офис в центре Москвы'
    },
    {
      icon: 'Calendar',
      title: 'Гибкий график',
      description: 'Возможность удаленной работы для некоторых позиций'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Полная занятость': return 'bg-green-100 text-green-800';
      case 'Частичная занятость': return 'bg-blue-100 text-blue-800';
      case 'Стажировка': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Карьера в ChemStore</h1>
          <p className="text-xl text-rose-100">
            Присоединяйтесь к нашей команде профессионалов
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему стоит работать с нами?</h2>
          <p className="text-xl text-gray-600">
            Мы создаем комфортные условия для развития каждого сотрудника
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} className="text-rose-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Открытые вакансии</h2>
            <p className="text-xl text-gray-600">
              Найдите подходящую позицию для своего развития
            </p>
          </div>

          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{vacancy.department}</Badge>
                        <Badge className={getTypeColor(vacancy.type)}>{vacancy.type}</Badge>
                        <Badge variant="secondary">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {vacancy.location}
                        </Badge>
                      </div>
                      <CardDescription>{vacancy.description}</CardDescription>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-2xl font-bold text-rose-600 mb-1">
                        {vacancy.salary}
                      </div>
                      <div className="text-sm text-gray-600">
                        Опыт: {vacancy.experience}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                        Требования
                      </h4>
                      <ul className="space-y-1">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="Briefcase" size={16} className="mr-2 text-blue-500" />
                        Обязанности
                      </h4>
                      <ul className="space-y-1">
                        {vacancy.responsibilities.map((resp, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button className="flex-1">
                      <Icon name="Send" size={16} className="mr-2" />
                      Откликнуться
                    </Button>
                    <Button variant="outline">
                      <Icon name="Share" size={16} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Users" size={24} className="mr-2" />
                Наша команда
              </CardTitle>
              <CardDescription>
                Мы - это команда профессионалов, объединенных общими целями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon name="Target" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Общие цели</h4>
                    <p className="text-sm text-gray-600">
                      Работаем вместе для достижения общих результатов
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon name="Lightbulb" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Инновации</h4>
                    <p className="text-sm text-gray-600">
                      Поощряем новые идеи и творческий подход
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Icon name="Award" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Признание</h4>
                    <p className="text-sm text-gray-600">
                      Ценим вклад каждого сотрудника в общий успех
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Mail" size={24} className="mr-2" />
                Инициативные предложения
              </CardTitle>
              <CardDescription>
                Не нашли подходящую вакансию? Отправьте нам свое резюме
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Мы всегда рады рассмотреть кандидатуры талантливых специалистов, 
                  даже если у нас нет открытых вакансий в вашей области.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Icon name="Mail" size={16} className="mr-2 text-gray-500" />
                    <span>hr@chemstore.ru</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Phone" size={16} className="mr-2 text-gray-500" />
                    <span>+7 (495) 123-45-67 (доб. 123)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="MapPin" size={16} className="mr-2 text-gray-500" />
                    <span>г. Москва, ул. Примерная, 123</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Icon name="Upload" size={16} className="mr-2" />
                  Отправить резюме
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Career;