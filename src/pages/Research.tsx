import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: 'Разработка биоразлагаемых поверхностно-активных веществ',
      status: 'В процессе',
      progress: 75,
      startDate: '2023-06-01',
      expectedCompletion: '2024-08-01',
      team: 'Лаборатория экологических технологий',
      description: 'Создание новых ПАВ на основе растительного сырья с улучшенными экологическими характеристиками',
      goals: [
        'Снижение токсичности на 50%',
        'Увеличение биоразлагаемости до 95%',
        'Сохранение эффективности очистки'
      ],
      budget: '2.5 млн ₽',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 2,
      title: 'Нанотехнологии в дезинфекции',
      status: 'Завершен',
      progress: 100,
      startDate: '2022-01-15',
      expectedCompletion: '2023-12-31',
      team: 'Отдел микробиологии',
      description: 'Исследование применения наночастиц серебра для усиления антимикробного действия',
      goals: [
        'Увеличение эффективности против вирусов',
        'Пролонгированное действие',
        'Снижение концентрации активных веществ'
      ],
      budget: '3.2 млн ₽',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 3,
      title: 'Умные системы дозирования',
      status: 'Планируется',
      progress: 15,
      startDate: '2024-03-01',
      expectedCompletion: '2025-06-01',
      team: 'IT-отдел и химики-технологи',
      description: 'Разработка IoT-систем для автоматического контроля расхода и качества уборки',
      goals: [
        'Автоматизация процессов',
        'Снижение расхода средств на 30%',
        'Мониторинг качества в реальном времени'
      ],
      budget: '4.8 млн ₽',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const publications = [
    {
      title: 'Эффективность новых биоцидов против устойчивых штаммов бактерий',
      authors: 'Петрова А.В., Сидоров М.И.',
      journal: 'Журнал прикладной микробиологии',
      year: 2023,
      citations: 15,
      type: 'Статья'
    },
    {
      title: 'Экологические аспекты применения ПАВ в клининге',
      authors: 'Козлова Е.Н., Волков Д.А.',
      journal: 'Экология и промышленность России',
      year: 2023,
      citations: 8,
      type: 'Обзор'
    },
    {
      title: 'Инновационные подходы к дезинфекции медицинских учреждений',
      authors: 'Морозова О.С.',
      journal: 'Медицинская техника',
      year: 2022,
      citations: 22,
      type: 'Статья'
    }
  ];

  const laboratory = {
    equipment: [
      {
        name: 'Хроматограф ВЭЖХ',
        purpose: 'Анализ состава и чистоты веществ',
        specifications: 'Shimadzu LC-20AD'
      },
      {
        name: 'Спектрофотометр',
        purpose: 'Определение концентраций растворов',
        specifications: 'UV-Vis, диапазон 190-1100 нм'
      },
      {
        name: 'Микробиологический бокс',
        purpose: 'Тестирование антимикробной активности',
        specifications: 'Класс защиты II'
      },
      {
        name: 'pH-метр',
        purpose: 'Контроль кислотности растворов',
        specifications: 'Точность ±0.01 pH'
      }
    ],
    certifications: [
      'ISO 17025 (аккредитация лаборатории)',
      'GLP (надлежащая лабораторная практика)',
      'ГОСТ Р ИСО 9001 (система менеджмента качества)'
    ],
    staff: [
      { name: 'Петрова Анна', position: 'Заведующая лабораторией', degree: 'к.х.н.' },
      { name: 'Сидоров Михаил', position: 'Старший научный сотрудник', degree: 'к.б.н.' },
      { name: 'Козлова Елена', position: 'Химик-аналитик', degree: 'магистр' }
    ]
  };

  const partnerships = [
    {
      name: 'РХТУ им. Д.И. Менделеева',
      type: 'Университет',
      cooperation: 'Совместные исследования в области зеленой химии',
      duration: '2020-2025'
    },
    {
      name: 'НИИ Дезинфектологии',
      type: 'НИИ',
      cooperation: 'Разработка новых дезинфицирующих средств',
      duration: '2021-2024'
    },
    {
      name: 'Институт биохимии РАН',
      type: 'Академический институт',
      cooperation: 'Исследования биоразлагаемости химических соединений',
      duration: '2022-2026'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Завершен': return 'bg-green-100 text-green-800';
      case 'В процессе': return 'bg-blue-100 text-blue-800';
      case 'Планируется': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Исследования и разработки</h1>
          <p className="text-xl text-teal-100">
            Инновации в области химических технологий для будущего уборки
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="projects">Проекты</TabsTrigger>
            <TabsTrigger value="laboratory">Лаборатория</TabsTrigger>
            <TabsTrigger value="publications">Публикации</TabsTrigger>
            <TabsTrigger value="partnerships">Партнерства</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Текущие исследовательские проекты</h2>
              <p className="text-xl text-gray-600">
                Работаем над созданием более эффективных и экологичных решений
              </p>
            </div>

            <div className="space-y-8">
              {researchProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <div className="text-sm text-gray-500">
                            Бюджет: {project.budget}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Прогресс</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Команда:</span>
                              <p className="font-medium">{project.team}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">Завершение:</span>
                              <p className="font-medium">{project.expectedCompletion}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Цели проекта:</h4>
                            <ul className="space-y-1">
                              {project.goals.map((goal, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <Icon name="Target" size={14} className="text-teal-500 mr-2 mt-0.5" />
                                  {goal}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button variant="outline">
                            <Icon name="FileText" size={16} className="mr-2" />
                            Подробный отчет
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="laboratory" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша лаборатория</h2>
              <p className="text-xl text-gray-600">
                Современное оборудование и квалифицированные специалисты
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Microscope" size={24} className="mr-2" />
                    Оборудование
                  </CardTitle>
                  <CardDescription>
                    Современные приборы для анализа и тестирования
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {laboratory.equipment.map((equipment, index) => (
                      <div key={index} className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-semibold text-teal-700">{equipment.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{equipment.purpose}</p>
                        <p className="text-xs text-gray-500">{equipment.specifications}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" size={24} className="mr-2" />
                    Команда
                  </CardTitle>
                  <CardDescription>
                    Опытные специалисты с научными степенями
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {laboratory.staff.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.position}</p>
                          <Badge variant="outline" className="text-xs">{member.degree}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Award" size={24} className="mr-2" />
                  Сертификации и аккредитации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {laboratory.certifications.map((cert, index) => (
                    <div key={index} className="text-center p-4 bg-teal-50 rounded-lg">
                      <Icon name="Certificate" size={32} className="text-teal-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Научные публикации</h2>
              <p className="text-xl text-gray-600">
                Результаты наших исследований в ведущих научных журналах
              </p>
            </div>

            <div className="space-y-6">
              {publications.map((publication, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{publication.type}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="Quote" size={16} className="mr-1" />
                        {publication.citations} цитирований
                      </div>
                    </div>
                    <CardTitle className="text-lg">{publication.title}</CardTitle>
                    <CardDescription>
                      {publication.authors} • {publication.journal} • {publication.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Eye" size={14} className="mr-1" />
                        Читать
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={14} className="mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Share" size={14} className="mr-1" />
                        Поделиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Все публикации
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="partnerships" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Научные партнерства</h2>
              <p className="text-xl text-gray-600">
                Сотрудничество с ведущими научными учреждениями
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerships.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Building" size={32} className="text-teal-600" />
                    </div>
                    <CardTitle className="text-lg text-center">{partner.name}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline">{partner.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Направление сотрудничества:</h4>
                        <p className="text-sm text-gray-600">{partner.cooperation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Период:</h4>
                        <p className="text-sm text-gray-600">{partner.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Заинтересованы в сотрудничестве?</h3>
              <p className="text-gray-600 mb-6">
                Мы открыты для новых научных партнерств и совместных исследований
              </p>
              <Button size="lg">
                <Icon name="Handshake" size={20} className="mr-2" />
                Предложить сотрудничество
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Инвестируем в будущее</h2>
          <p className="text-xl mb-6 text-teal-100">
            Наши исследования направлены на создание более безопасных и эффективных решений
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">15%</div>
              <p className="text-teal-100">от оборота на R&D</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <p className="text-teal-100">активных проектов</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-teal-100">научных публикаций</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;