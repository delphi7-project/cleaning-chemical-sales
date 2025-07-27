import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Ecology = () => {
  const ecoProducts = [
    {
      id: 1,
      name: 'EcoClean Universal',
      description: 'Универсальное средство на основе растительных компонентов',
      ecoRating: 95,
      biodegradable: 100,
      renewable: 85,
      packaging: 'Переработанный пластик',
      certifications: ['EU Ecolabel', 'Nordic Swan', 'Cradle to Cradle'],
      price: 349,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 2,
      name: 'Green Glass Cleaner',
      description: 'Средство для стекол без аммиака и фосфатов',
      ecoRating: 90,
      biodegradable: 95,
      renewable: 80,
      packaging: 'Биоразлагаемая упаковка',
      certifications: ['Green Seal', 'EcoLogo'],
      price: 279,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      id: 3,
      name: 'Bio Floor Cleaner',
      description: 'Концентрат для полов с пробиотиками',
      ecoRating: 92,
      biodegradable: 100,
      renewable: 90,
      packaging: 'Картон из переработанного сырья',
      certifications: ['USDA BioPreferred', 'Green Seal'],
      price: 425,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const initiatives = [
    {
      title: 'Программа утилизации упаковки',
      description: 'Принимаем пустые контейнеры для переработки',
      icon: 'Recycle',
      status: 'Активна',
      impact: '2.5 тонн пластика переработано в 2023 году'
    },
    {
      title: 'Углеродно-нейтральная доставка',
      description: 'Компенсируем выбросы CO₂ от транспорта',
      icon: 'Truck',
      status: 'В разработке',
      impact: 'Планируем снизить выбросы на 40%'
    },
    {
      title: 'Партнерство с экопроизводителями',
      description: 'Работаем только с сертифицированными поставщиками',
      icon: 'Handshake',
      status: 'Активна',
      impact: '85% поставщиков имеют экосертификаты'
    },
    {
      title: 'Образовательные программы',
      description: 'Обучаем клиентов экологичным методам уборки',
      icon: 'BookOpen',
      status: 'Активна',
      impact: 'Обучено более 500 специалистов'
    }
  ];

  const certifications = [
    {
      name: 'EU Ecolabel',
      description: 'Европейский экологический знак',
      logo: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      criteria: 'Строгие требования к воздействию на окружающую среду'
    },
    {
      name: 'Nordic Swan',
      description: 'Скандинавский экологический стандарт',
      logo: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      criteria: 'Оценка полного жизненного цикла продукта'
    },
    {
      name: 'Green Seal',
      description: 'Американский стандарт экологичности',
      logo: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      criteria: 'Научно обоснованные экологические стандарты'
    },
    {
      name: 'Cradle to Cradle',
      description: 'Сертификация циркулярной экономики',
      logo: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      criteria: 'Безопасность материалов и возобновляемая энергия'
    }
  ];

  const tips = [
    {
      title: 'Используйте концентраты',
      description: 'Концентрированные средства снижают количество упаковки и транспортные расходы',
      icon: 'Droplets',
      savings: 'До 80% меньше упаковки'
    },
    {
      title: 'Правильное дозирование',
      description: 'Соблюдайте рекомендованные пропорции - больше не значит лучше',
      icon: 'Beaker',
      savings: 'Экономия до 30% средства'
    },
    {
      title: 'Микрофибра вместо бумаги',
      description: 'Используйте многоразовые салфетки из микрофибры',
      icon: 'Shirt',
      savings: 'Замена 1000 бумажных салфеток'
    },
    {
      title: 'Планируйте закупки',
      description: 'Оптовые закупки снижают количество доставок',
      icon: 'Calendar',
      savings: 'Снижение выбросов CO₂ на 25%'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активна': return 'bg-green-100 text-green-800';
      case 'В разработке': return 'bg-yellow-100 text-yellow-800';
      case 'Планируется': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Экология и устойчивое развитие</h1>
          <p className="text-xl text-green-100">
            Наша ответственность перед планетой и будущими поколениями
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Экологичная продукция</h2>
          <p className="text-xl text-gray-600">
            Средства, безопасные для человека и окружающей среды
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ecoProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge className="bg-green-100 text-green-800">
                    Эко {product.ecoRating}%
                  </Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Биоразлагаемость</span>
                      <span>{product.biodegradable}%</span>
                    </div>
                    <Progress value={product.biodegradable} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Возобновляемые ресурсы</span>
                      <span>{product.renewable}%</span>
                    </div>
                    <Progress value={product.renewable} className="h-2" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Упаковка:</h4>
                    <p className="text-xs text-gray-600">{product.packaging}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Сертификаты:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-green-600 mb-4">
                      {product.price} ₽
                    </div>
                    <Button className="w-full">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши экологические инициативы</h2>
            <p className="text-xl text-gray-600">
              Конкретные действия для защиты окружающей среды
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Icon name={initiative.icon} size={24} className="text-green-600" />
                    </div>
                    <Badge className={getStatusColor(initiative.status)}>
                      {initiative.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Результат:</h4>
                    <p className="text-green-600 text-sm">{initiative.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Экологические сертификаты</h2>
            <p className="text-xl text-gray-600">
              Международные стандарты, которым соответствует наша продукция
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-4 overflow-hidden">
                    <img 
                      src={cert.logo} 
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">{cert.criteria}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Советы по экологичной уборке</h2>
            <p className="text-xl text-gray-600">
              Как сделать уборку более экологичной и экономичной
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={tip.icon} size={32} className="text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-center">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-green-700 font-semibold text-sm">{tip.savings}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш вклад в экологию</h2>
            <p className="text-xl text-gray-600">
              Конкретные цифры нашего воздействия на окружающую среду
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2.5т</div>
              <p className="text-gray-600">пластика переработано</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-gray-600">снижение выбросов CO₂</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600">экосертифицированных товаров</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-600">обученных специалистов</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к экодвижению</h2>
          <p className="text-xl mb-6 text-green-100">
            Вместе мы можем сделать уборку более экологичной и безопасной
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Leaf" size={20} className="mr-2" />
              Каталог экотоваров
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Icon name="Download" size={20} className="mr-2" />
              Гид по экоуборке
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecology;