import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      name: 'Медицинские учреждения',
      description: 'Больницы, клиники, стоматологии, лаборатории',
      icon: 'Heart',
      color: 'red',
      requirements: [
        'Высокий уровень дезинфекции',
        'Соответствие медицинским стандартам',
        'Безопасность для пациентов',
        'Эффективность против патогенов'
      ],
      products: [
        'Дезинфицирующие средства',
        'Антисептики для рук',
        'Средства для инструментов',
        'Моющие средства для полов'
      ],
      caseStudy: 'Медицинский центр "Здоровье" снизил количество внутрибольничных инфекций на 40%',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'horeca',
      name: 'HoReCa (рестораны, отели)',
      description: 'Рестораны, кафе, гостиницы, кейтеринг',
      icon: 'UtensilsCrossed',
      color: 'orange',
      requirements: [
        'Пищевая безопасность',
        'Удаление жировых загрязнений',
        'Быстрое действие',
        'Отсутствие запаха'
      ],
      products: [
        'Обезжириватели для кухни',
        'Средства для посуды',
        'Дезинфектанты для столов',
        'Средства для полов'
      ],
      caseStudy: 'Сеть ресторанов "Вкус" повысила оценки санитарных проверок до 100%',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'education',
      name: 'Образовательные учреждения',
      description: 'Школы, детские сады, университеты',
      icon: 'GraduationCap',
      color: 'blue',
      requirements: [
        'Безопасность для детей',
        'Гипоаллергенность',
        'Эффективная дезинфекция',
        'Экологичность'
      ],
      products: [
        'Безопасные дезинфектанты',
        'Средства для игрушек',
        'Моющие средства для полов',
        'Средства для туалетов'
      ],
      caseStudy: 'Детский сад "Солнышко" обеспечил 100% безопасность уборки',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'retail',
      name: 'Торговые центры',
      description: 'ТЦ, супермаркеты, магазины, склады',
      icon: 'ShoppingBag',
      color: 'green',
      requirements: [
        'Большие площади',
        'Высокая проходимость',
        'Быстрое высыхание',
        'Экономичность'
      ],
      products: [
        'Концентраты для полов',
        'Средства для стекол',
        'Универсальные очистители',
        'Средства для туалетов'
      ],
      caseStudy: 'ТЦ "Мега" сократил расходы на уборку на 30% при улучшении качества',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'office',
      name: 'Офисные здания',
      description: 'Бизнес-центры, офисы, коворкинги',
      icon: 'Building',
      color: 'purple',
      requirements: [
        'Поддержание имиджа',
        'Комфорт сотрудников',
        'Регулярная уборка',
        'Универсальность'
      ],
      products: [
        'Универсальные средства',
        'Средства для стекол',
        'Освежители воздуха',
        'Средства для техники'
      ],
      caseStudy: 'Бизнес-центр "Москва-Сити" повысил удовлетворенность арендаторов на 25%',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 'industrial',
      name: 'Промышленные предприятия',
      description: 'Заводы, фабрики, производства',
      icon: 'Factory',
      color: 'gray',
      requirements: [
        'Удаление сложных загрязнений',
        'Промышленная концентрация',
        'Устойчивость к нагрузкам',
        'Экономичность'
      ],
      products: [
        'Промышленные обезжириватели',
        'Кислотные очистители',
        'Щелочные средства',
        'Специальные растворители'
      ],
      caseStudy: 'Завод "Техно" увеличил эффективность уборки в 3 раза',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const solutions = [
    {
      title: 'Аудит текущей системы уборки',
      description: 'Анализируем ваши процессы и находим точки оптимизации',
      icon: 'Search',
      duration: '1-2 дня'
    },
    {
      title: 'Подбор оптимальных средств',
      description: 'Рекомендуем продукцию, идеально подходящую для ваших задач',
      icon: 'Target',
      duration: '3-5 дней'
    },
    {
      title: 'Тестирование на объекте',
      description: 'Проводим пробную уборку с нашими средствами',
      icon: 'TestTube',
      duration: '1 неделя'
    },
    {
      title: 'Обучение персонала',
      description: 'Обучаем ваших сотрудников правильному применению',
      icon: 'Users',
      duration: '1 день'
    },
    {
      title: 'Внедрение и поддержка',
      description: 'Помогаем внедрить новую систему и обеспечиваем поддержку',
      icon: 'Settings',
      duration: 'Постоянно'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-100 text-red-600',
      orange: 'bg-orange-100 text-orange-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      gray: 'bg-gray-100 text-gray-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Отраслевые решения</h1>
          <p className="text-xl text-indigo-100">
            Специализированные решения для различных сфер деятельности
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши отрасли</h2>
          <p className="text-xl text-gray-600">
            Мы понимаем специфику каждой отрасли и предлагаем оптимальные решения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry) => (
            <Card key={industry.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-3 ${getColorClasses(industry.color)}`}>
                    <Icon name={industry.icon} size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Ключевые требования:</h4>
                    <ul className="space-y-1">
                      {industry.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <Icon name="Check" size={12} className="text-green-500 mr-1 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Рекомендуемые продукты:</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.products.slice(0, 2).map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Кейс:</h4>
                    <p className="text-xs text-gray-600">{industry.caseStudy}</p>
                  </div>

                  <Button className="w-full">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш подход к решению задач</h2>
            <p className="text-xl text-gray-600">
              Пошаговый процесс внедрения оптимальных решений
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={solution.icon} size={32} className="text-indigo-600" />
                  </div>
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{solution.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Преимущества отраслевого подхода</h2>
            <p className="text-xl text-gray-600">
              Почему важно учитывать специфику вашей отрасли
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Точное попадание</h3>
              <p className="text-gray-600 text-sm">
                Средства подобраны именно под ваши задачи и требования
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Экономия</h3>
              <p className="text-gray-600 text-sm">
                Оптимизация расходов за счет правильного выбора продукции
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Соответствие стандартам</h3>
              <p className="text-gray-600 text-sm">
                Полное соответствие отраслевым нормам и требованиям
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Эффективность</h3>
              <p className="text-gray-600 text-sm">
                Максимальная эффективность уборки при минимальных затратах
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Award" size={24} className="mr-2" />
                Наши достижения
              </CardTitle>
              <CardDescription>
                Результаты работы с различными отраслями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Медицинские учреждения:</span>
                  <span className="font-semibold">150+ объектов</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Рестораны и отели:</span>
                  <span className="font-semibold">200+ заведений</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Образовательные учреждения:</span>
                  <span className="font-semibold">80+ школ и садов</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Торговые центры:</span>
                  <span className="font-semibold">50+ ТЦ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Офисные здания:</span>
                  <span className="font-semibold">300+ офисов</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Промышленные объекты:</span>
                  <span className="font-semibold">25+ предприятий</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Получить консультацию
              </CardTitle>
              <CardDescription>
                Обсудим специфику вашей отрасли и подберем решение
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Наши эксперты имеют многолетний опыт работы в различных отраслях 
                  и готовы предложить оптимальное решение для ваших задач.
                </p>
                <div className="space-y-3">
                  <Button className="w-full">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать консультацию
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Скачать отраслевые решения
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Industries;