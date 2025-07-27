import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Wholesale = () => {
  const benefits = [
    {
      icon: 'Percent',
      title: 'Скидки до 25%',
      description: 'Гибкая система скидок в зависимости от объема заказа'
    },
    {
      icon: 'Clock',
      title: 'Приоритетная обработка',
      description: 'Ваши заказы обрабатываются в первую очередь'
    },
    {
      icon: 'Truck',
      title: 'Бесплатная доставка',
      description: 'Бесплатная доставка при заказе от 10 000 ₽'
    },
    {
      icon: 'Calendar',
      title: 'Отсрочка платежа',
      description: 'Возможность работы с отсрочкой до 30 дней'
    },
    {
      icon: 'Users',
      title: 'Персональный менеджер',
      description: 'Закрепленный менеджер для решения всех вопросов'
    },
    {
      icon: 'FileText',
      title: 'Полный пакет документов',
      description: 'Все необходимые документы для юридических лиц'
    }
  ];

  const discountTiers = [
    { from: 50000, to: 99999, discount: 5 },
    { from: 100000, to: 249999, discount: 10 },
    { from: 250000, to: 499999, discount: 15 },
    { from: 500000, to: 999999, discount: 20 },
    { from: 1000000, to: null, discount: 25 }
  ];

  const services = [
    {
      name: 'Консультации экспертов',
      description: 'Помощь в выборе оптимальных средств для ваших задач',
      included: true
    },
    {
      name: 'Образцы для тестирования',
      description: 'Бесплатные образцы для проверки эффективности',
      included: true
    },
    {
      name: 'Обучение персонала',
      description: 'Обучение правильному использованию химических средств',
      included: false,
      price: 'от 5000 ₽'
    },
    {
      name: 'Техническая поддержка',
      description: '24/7 поддержка по вопросам использования продукции',
      included: true
    },
    {
      name: 'Индивидуальная упаковка',
      description: 'Возможность нанесения вашего логотипа на упаковку',
      included: false,
      price: 'по запросу'
    },
    {
      name: 'Складские программы',
      description: 'Хранение товара на наших складах с поэтапной отгрузкой',
      included: false,
      price: 'по договоренности'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Оптовые продажи</h1>
          <p className="text-xl text-violet-100">
            Специальные условия для бизнеса и крупных покупателей
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Преимущества оптовых покупок</h2>
          <p className="text-xl text-gray-600">
            Выгодные условия для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} className="text-violet-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="TrendingUp" size={24} className="mr-2" />
                Система скидок
              </CardTitle>
              <CardDescription>
                Размер скидки зависит от годового оборота
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discountTiers.map((tier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">
                        от {tier.from.toLocaleString()} ₽
                        {tier.to && ` до ${tier.to.toLocaleString()} ₽`}
                      </div>
                      <div className="text-sm text-gray-600">годовой оборот</div>
                    </div>
                    <Badge className="bg-violet-100 text-violet-800 text-lg px-3 py-1">
                      -{tier.discount}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Settings" size={24} className="mr-2" />
                Дополнительные услуги
              </CardTitle>
              <CardDescription>
                Расширенный сервис для оптовых клиентов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-medium">{service.name}</h4>
                        {service.included ? (
                          <Icon name="Check" size={16} className="text-green-500 ml-2" />
                        ) : (
                          <Badge variant="outline" className="ml-2 text-xs">
                            {service.price}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Заявка на оптовое сотрудничество</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами для обсуждения условий
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Название компании *</Label>
                    <Input id="company" placeholder="ООО Ваша компания" />
                  </div>
                  <div>
                    <Label htmlFor="inn">ИНН *</Label>
                    <Input id="inn" placeholder="1234567890" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Контактное лицо *</Label>
                    <Input id="contact-name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input id="position" placeholder="Директор" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="info@company.ru" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="activity">Сфера деятельности</Label>
                  <Input id="activity" placeholder="Клининговые услуги" />
                </div>
                <div>
                  <Label htmlFor="volume">Планируемый объем закупок в месяц</Label>
                  <Input id="volume" placeholder="100 000 ₽" />
                </div>
                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Дополнительная информация..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FileText" size={24} className="mr-2" />
                  Необходимые документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Свидетельство о регистрации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Справка о постановке на налоговый учет
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Карточка предприятия с образцами подписей
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Справка из банка о расчетном счете
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={24} className="mr-2" />
                  Этапы сотрудничества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-violet-100 text-violet-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Подача заявки</h4>
                      <p className="text-sm text-gray-600">Заполнение формы и отправка документов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-violet-100 text-violet-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Рассмотрение</h4>
                      <p className="text-sm text-gray-600">Анализ заявки и проверка документов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-violet-100 text-violet-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Переговоры</h4>
                      <p className="text-sm text-gray-600">Обсуждение условий сотрудничества</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-violet-100 text-violet-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Заключение договора</h4>
                      <p className="text-sm text-gray-600">Подписание договора и начало работы</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-6 text-violet-100">
            Свяжитесь с нами для обсуждения индивидуальных условий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600">
              <Icon name="Mail" size={20} className="mr-2" />
              wholesale@chemstore.ru
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;