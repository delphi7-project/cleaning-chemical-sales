import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Sustainability = () => {
  const sustainabilityGoals = [
    {
      id: 1,
      title: 'Углеродная нейтральность к 2030 году',
      description: 'Полная компенсация выбросов CO₂ от нашей деятельности',
      progress: 45,
      target: '100% к 2030',
      currentStatus: '45% снижение с 2020 года',
      actions: [
        'Переход на возобновляемую энергию',
        'Оптимизация логистики',
        'Компенсация выбросов через лесопосадки'
      ],
      icon: 'Leaf',
      color: 'green'
    },
    {
      id: 2,
      title: 'Безотходное производство',
      description: 'Переработка и повторное использование всех отходов',
      progress: 70,
      target: '95% переработки к 2027',
      currentStatus: '70% отходов перерабатывается',
      actions: [
        'Программа возврата упаковки',
        'Партнерство с переработчиками',
        'Разработка биоразлагаемой упаковки'
      ],
      icon: 'Recycle',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Экологичная продукция',
      description: 'Увеличение доли экосертифицированных товаров',
      progress: 85,
      target: '100% экопродукции к 2026',
      currentStatus: '85% товаров имеют экосертификаты',
      actions: [
        'Сертификация по EU Ecolabel',
        'Разработка биоразлагаемых формул',
        'Отказ от вредных компонентов'
      ],
      icon: 'Award',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Социальная ответственность',
      description: 'Поддержка сообществ и справедливые условия труда',
      progress: 90,
      target: 'Постоянное улучшение',
      currentStatus: 'Высокие стандарты соблюдены',
      actions: [
        'Справедливая оплата труда',
        'Программы развития персонала',
        'Поддержка местных сообществ'
      ],
      icon: 'Users',
      color: 'orange'
    }
  ];

  const initiatives = [
    {
      title: 'Зеленая логистика',
      description: 'Оптимизация маршрутов доставки и использование экологичного транспорта',
      impact: 'Снижение выбросов CO₂ на 30%',
      investment: '5 млн ₽',
      timeline: '2023-2025',
      status: 'В процессе'
    },
    {
      title: 'Лаборатория устойчивых технологий',
      description: 'Исследование и разработка экологичных химических формул',
      impact: '15 новых экопродуктов',
      investment: '8 млн ₽',
      timeline: '2022-2024',
      status: 'Активна'
    },
    {
      title: 'Программа "Чистая планета"',
      description: 'Образовательные программы по экологичной уборке для клиентов',
      impact: '1000+ обученных специалистов',
      investment: '2 млн ₽',
      timeline: '2021-2026',
      status: 'Активна'
    },
    {
      title: 'Солнечная энергетика',
      description: 'Установка солнечных панелей на складах и офисах',
      impact: '40% энергии из возобновляемых источников',
      investment: '12 млн ₽',
      timeline: '2024-2025',
      status: 'Планируется'
    }
  ];

  const certifications = [
    {
      name: 'ISO 14001',
      description: 'Система экологического менеджмента',
      validUntil: '2025-12-31',
      scope: 'Вся деятельность компании'
    },
    {
      name: 'B Corp Certification',
      description: 'Сертификация социально ответственного бизнеса',
      validUntil: '2026-06-30',
      scope: 'Социальное и экологическое воздействие'
    },
    {
      name: 'Carbon Trust Standard',
      description: 'Стандарт управления углеродным следом',
      validUntil: '2025-03-15',
      scope: 'Измерение и снижение выбросов CO₂'
    },
    {
      name: 'FSC Chain of Custody',
      description: 'Ответственное лесопользование',
      validUntil: '2025-09-20',
      scope: 'Упаковочные материалы'
    }
  ];

  const impactMetrics = [
    {
      metric: 'Снижение выбросов CO₂',
      value: '45%',
      baseline: 'с 2020 года',
      icon: 'TrendingDown',
      color: 'green'
    },
    {
      metric: 'Переработка отходов',
      value: '70%',
      baseline: 'всех отходов',
      icon: 'Recycle',
      color: 'blue'
    },
    {
      metric: 'Экосертифицированная продукция',
      value: '85%',
      baseline: 'от ассортимента',
      icon: 'Leaf',
      color: 'green'
    },
    {
      metric: 'Возобновляемая энергия',
      value: '25%',
      baseline: 'от потребления',
      icon: 'Zap',
      color: 'yellow'
    },
    {
      metric: 'Водосбережение',
      value: '35%',
      baseline: 'снижение потребления',
      icon: 'Droplets',
      color: 'blue'
    },
    {
      metric: 'Биоразлагаемая упаковка',
      value: '60%',
      baseline: 'от общего объема',
      icon: 'Package',
      color: 'brown'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      brown: 'bg-amber-100 text-amber-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активна': return 'bg-green-100 text-green-800';
      case 'В процессе': return 'bg-blue-100 text-blue-800';
      case 'Планируется': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Устойчивое развитие</h1>
          <p className="text-xl text-green-100">
            Наша ответственность перед планетой и будущими поколениями
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши цели устойчивого развития</h2>
          <p className="text-xl text-gray-600">
            Конкретные обязательства по защите окружающей среды и социальной ответственности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sustainabilityGoals.map((goal) => (
            <Card key={goal.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${getColorClasses(goal.color)}`}>
                    <Icon name={goal.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Прогресс</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Цель:</span>
                      <p className="font-medium">{goal.target}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Текущий статус:</span>
                      <p className="font-medium">{goal.currentStatus}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Ключевые действия:</h4>
                    <ul className="space-y-1">
                      {goal.actions.map((action, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <Icon name="ArrowRight" size={14} className="text-green-500 mr-2 mt-0.5" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ключевые инициативы</h2>
            <p className="text-xl text-gray-600">
              Конкретные проекты для достижения целей устойчивого развития
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                    <Badge className={getStatusColor(initiative.status)}>
                      {initiative.status}
                    </Badge>
                  </div>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Воздействие:</span>
                        <p className="font-medium text-green-600">{initiative.impact}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Инвестиции:</span>
                        <p className="font-medium">{initiative.investment}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Сроки:</span>
                      <p className="font-medium">{initiative.timeline}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наше воздействие в цифрах</h2>
            <p className="text-xl text-gray-600">
              Измеримые результаты наших усилий по устойчивому развитию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(metric.color)}`}>
                    <Icon name={metric.icon} size={32} />
                  </div>
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600 text-sm">{metric.baseline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Certificate" size={24} className="mr-2" />
                Сертификации и стандарты
              </CardTitle>
              <CardDescription>
                Международные стандарты устойчивого развития
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{cert.description}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Действует до: {cert.validUntil}</div>
                      <div>Область: {cert.scope}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Target" size={24} className="mr-2" />
                Цели ООН в области устойчивого развития
              </CardTitle>
              <CardDescription>
                Наш вклад в достижение глобальных целей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Icon name="Droplets" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Цель 6: Чистая вода и санитария</h4>
                    <p className="text-sm text-gray-600">Разработка экологичных средств</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon name="Leaf" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Цель 12: Ответственное потребление</h4>
                    <p className="text-sm text-gray-600">Циркулярная экономика и переработка</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Icon name="Zap" size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Цель 13: Борьба с изменением климата</h4>
                    <p className="text-sm text-gray-600">Снижение углеродного следа</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon name="Users" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Цель 8: Достойная работа</h4>
                    <p className="text-sm text-gray-600">Справедливые условия труда</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши обязательства</h2>
            <p className="text-xl text-gray-600">
              Публичные обещания по устойчивому развитию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2030</div>
              <p className="text-gray-600">Углеродная нейтральность</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Переработка отходов к 2027</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">Экопродукция к 2026</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <p className="text-gray-600">Возобновляемая энергия к 2028</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нашей миссии</h2>
          <p className="text-xl mb-6 text-green-100">
            Вместе мы можем создать более устойчивое будущее для всех
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Download" size={20} className="mr-2" />
              Отчет об устойчивости
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;