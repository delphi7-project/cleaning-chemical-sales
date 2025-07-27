import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Training = () => {
  const courses = [
    {
      id: 1,
      title: 'Основы профессиональной уборки',
      duration: '8 часов',
      format: 'Очно',
      price: 5000,
      level: 'Начальный',
      description: 'Базовый курс для новичков в сфере клининга',
      topics: [
        'Виды загрязнений и способы их удаления',
        'Классификация моющих средств',
        'Техника безопасности при работе с химией',
        'Основные инструменты и оборудование'
      ],
      audience: 'Новые сотрудники клининговых компаний',
      certificate: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 2,
      title: 'Дезинфекция и санитария',
      duration: '6 часов',
      format: 'Очно/Онлайн',
      price: 7000,
      level: 'Средний',
      description: 'Специализированный курс по дезинфекции помещений',
      topics: [
        'Микробиология и инфекционный контроль',
        'Дезинфицирующие средства и их применение',
        'Протоколы дезинфекции различных объектов',
        'Контроль качества дезинфекции'
      ],
      audience: 'Сотрудники медицинских учреждений, детских садов',
      certificate: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 3,
      title: 'Уборка пищевых производств',
      duration: '10 часов',
      format: 'Очно',
      price: 8500,
      level: 'Продвинутый',
      description: 'Специфика уборки предприятий пищевой промышленности',
      topics: [
        'Требования HACCP к уборке',
        'Специальные моющие и дезинфицирующие средства',
        'Зонирование и цветовое кодирование',
        'Документооборот и контроль'
      ],
      audience: 'Персонал пищевых производств и ресторанов',
      certificate: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 4,
      title: 'Экологичная уборка',
      duration: '4 часа',
      format: 'Онлайн',
      price: 3500,
      level: 'Начальный',
      description: 'Использование экологически безопасных средств',
      topics: [
        'Принципы зеленой уборки',
        'Экологичные моющие средства',
        'Сертификация и стандарты',
        'Экономические преимущества'
      ],
      audience: 'Все категории персонала',
      certificate: false,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 5,
      title: 'Управление клининговой службой',
      duration: '12 часов',
      format: 'Очно',
      price: 12000,
      level: 'Экспертный',
      description: 'Курс для руководителей клининговых служб',
      topics: [
        'Планирование и организация работ',
        'Управление персоналом',
        'Контроль качества и стандарты',
        'Экономика клининга'
      ],
      audience: 'Руководители и супервайзеры',
      certificate: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 6,
      title: 'Техника безопасности в клининге',
      duration: '6 часов',
      format: 'Очно/Онлайн',
      price: 4500,
      level: 'Обязательный',
      description: 'Обязательный курс по охране труда',
      topics: [
        'Законодательство по охране труда',
        'Средства индивидуальной защиты',
        'Работа с химическими веществами',
        'Первая помощь при несчастных случаях'
      ],
      audience: 'Весь персонал клининговых компаний',
      certificate: true,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const trainers = [
    {
      name: 'Анна Петрова',
      position: 'Ведущий технолог',
      experience: '15 лет',
      specialization: 'Химические технологии',
      education: 'РХТУ им. Менделеева',
      courses: ['Основы профессиональной уборки', 'Дезинфекция и санитария']
    },
    {
      name: 'Михаил Сидоров',
      position: 'Эксперт по безопасности',
      experience: '12 лет',
      specialization: 'Охрана труда',
      education: 'МГУ им. Ломоносова',
      courses: ['Техника безопасности в клининге', 'Экологичная уборка']
    },
    {
      name: 'Елена Козлова',
      position: 'Консультант по HACCP',
      experience: '10 лет',
      specialization: 'Пищевая безопасность',
      education: 'МГУПП',
      courses: ['Уборка пищевых производств']
    }
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      'Начальный': 'bg-green-100 text-green-800',
      'Средний': 'bg-blue-100 text-blue-800',
      'Продвинутый': 'bg-purple-100 text-purple-800',
      'Экспертный': 'bg-red-100 text-red-800',
      'Обязательный': 'bg-orange-100 text-orange-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  const getFormatColor = (format: string) => {
    const colors = {
      'Очно': 'bg-blue-100 text-blue-800',
      'Онлайн': 'bg-green-100 text-green-800',
      'Очно/Онлайн': 'bg-purple-100 text-purple-800'
    };
    return colors[format] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Обучение и тренинги</h1>
          <p className="text-xl text-blue-100">
            Профессиональное обучение для повышения эффективности уборки
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши курсы</h2>
          <p className="text-xl text-gray-600">
            Комплексные программы обучения для всех уровней подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <Badge className={getFormatColor(course.format)}>
                    {course.format}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Длительность:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Цена:</span>
                    <span className="font-medium text-blue-600">{course.price.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Сертификат:</span>
                    <span className="font-medium">
                      {course.certificate ? (
                        <Icon name="Check" size={16} className="text-green-500" />
                      ) : (
                        <Icon name="X" size={16} className="text-red-500" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Программа курса:</h4>
                  <ul className="space-y-1">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {topic}
                      </li>
                    ))}
                    {course.topics.length > 3 && (
                      <li className="text-xs text-gray-500">
                        и еще {course.topics.length - 3} тем...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Целевая аудитория:</h4>
                  <p className="text-xs text-gray-600">{course.audience}</p>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Info" size={16} />
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
                <Icon name="Users" size={24} className="mr-2" />
                Наши преподаватели
              </CardTitle>
              <CardDescription>
                Опытные эксперты с многолетним стажем в индустрии
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trainers.map((trainer, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700">{trainer.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{trainer.position}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Опыт: {trainer.experience}</div>
                      <div>Образование: {trainer.education}</div>
                      <div>Специализация: {trainer.specialization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Award" size={24} className="mr-2" />
                Преимущества обучения
              </CardTitle>
              <CardDescription>
                Что вы получите от наших курсов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Icon name="BookOpen" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Актуальные знания</h4>
                    <p className="text-sm text-gray-600">
                      Современные методы и технологии уборки
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon name="Certificate" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Сертификация</h4>
                    <p className="text-sm text-gray-600">
                      Официальные сертификаты о прохождении курсов
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon name="Users" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Практический опыт</h4>
                    <p className="text-sm text-gray-600">
                      Отработка навыков на реальных примерах
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Icon name="HeadphonesIcon" size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Поддержка</h4>
                    <p className="text-sm text-gray-600">
                      Консультации после окончания курса
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Корпоративное обучение</h2>
            <p className="text-xl text-gray-600">
              Индивидуальные программы для вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">На вашей территории</h3>
              <p className="text-gray-600 text-sm">
                Проводим обучение в вашем офисе или на производстве
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Индивидуальная программа</h3>
              <p className="text-gray-600 text-sm">
                Адаптируем курс под специфику вашего бизнеса
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Выгодные условия</h3>
              <p className="text-gray-600 text-sm">
                Скидки при обучении группы от 10 человек
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Повысьте квалификацию своих сотрудников с помощью наших экспертов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог курсов
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;