import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Support = () => {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    priority: '',
    subject: '',
    description: ''
  });

  const supportChannels = [
    {
      name: 'Телефон',
      description: 'Прямая связь с нашими специалистами',
      contact: '+7 (495) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      responseTime: 'Мгновенно',
      icon: 'Phone',
      color: 'blue'
    },
    {
      name: 'Email',
      description: 'Подробные консультации по email',
      contact: 'support@chemstore.ru',
      hours: '24/7',
      responseTime: 'До 2 часов',
      icon: 'Mail',
      color: 'green'
    },
    {
      name: 'Онлайн-чат',
      description: 'Быстрые ответы в режиме реального времени',
      contact: 'Чат на сайте',
      hours: 'Пн-Пт: 9:00-20:00',
      responseTime: 'До 5 минут',
      icon: 'MessageCircle',
      color: 'purple'
    },
    {
      name: 'WhatsApp',
      description: 'Удобное общение в мессенджере',
      contact: '+7 (999) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      responseTime: 'До 15 минут',
      icon: 'MessageSquare',
      color: 'orange'
    }
  ];

  const ticketCategories = [
    'Вопрос по продукции',
    'Техническая поддержка',
    'Заказ и доставка',
    'Возврат товара',
    'Сотрудничество',
    'Жалоба',
    'Предложение'
  ];

  const priorities = [
    { value: 'low', label: 'Низкий', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Средний', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'Высокий', color: 'bg-orange-100 text-orange-800' },
    { value: 'urgent', label: 'Срочный', color: 'bg-red-100 text-red-800' }
  ];

  const knowledgeBase = [
    {
      category: 'Часто задаваемые вопросы',
      articles: [
        { title: 'Как правильно разводить концентраты?', views: 1250 },
        { title: 'Какие средства подходят для детских учреждений?', views: 980 },
        { title: 'Как рассчитать расход средства?', views: 850 },
        { title: 'Можно ли смешивать разные средства?', views: 720 }
      ]
    },
    {
      category: 'Инструкции по применению',
      articles: [
        { title: 'Дезинфекция поверхностей в медучреждениях', views: 1100 },
        { title: 'Уборка кухонь ресторанов', views: 890 },
        { title: 'Мытье полов в торговых центрах', views: 650 },
        { title: 'Чистка ковров и мебели', views: 580 }
      ]
    },
    {
      category: 'Техника безопасности',
      articles: [
        { title: 'Средства индивидуальной защиты', views: 950 },
        { title: 'Первая помощь при попадании химии', views: 780 },
        { title: 'Правила хранения химических средств', views: 670 },
        { title: 'Вентиляция при работе с химией', views: 520 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ticket submitted:', ticketForm);
    // Здесь будет логика отправки тикета
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Техническая поддержка</h1>
          <p className="text-xl text-blue-100">
            Мы готовы помочь вам с любыми вопросами 24/7
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Способы связи</h2>
          <p className="text-xl text-gray-600">
            Выберите удобный способ получения поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(channel.color)}`}>
                  <Icon name={channel.icon} size={32} />
                </div>
                <CardTitle className="text-lg">{channel.name}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">{channel.contact}</span>
                  </div>
                  <div className="text-gray-600">
                    {channel.hours}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Ответ: {channel.responseTime}
                  </Badge>
                </div>
                <Button className="w-full mt-4">
                  <Icon name={channel.icon} size={16} className="mr-2" />
                  Связаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="ticket" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ticket">Создать обращение</TabsTrigger>
            <TabsTrigger value="knowledge">База знаний</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ticket" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileText" size={24} className="mr-2" />
                    Создать тикет
                  </CardTitle>
                  <CardDescription>
                    Опишите вашу проблему, и мы поможем ее решить
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={ticketForm.name}
                          onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={ticketForm.phone}
                        onChange={(e) => setTicketForm({...ticketForm, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Категория *</Label>
                        <Select 
                          value={ticketForm.category} 
                          onValueChange={(value) => setTicketForm({...ticketForm, category: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            {ticketCategories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="priority">Приоритет *</Label>
                        <Select 
                          value={ticketForm.priority} 
                          onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите приоритет" />
                          </SelectTrigger>
                          <SelectContent>
                            {priorities.map((priority) => (
                              <SelectItem key={priority.value} value={priority.value}>
                                {priority.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Тема *</Label>
                      <Input
                        id="subject"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                        placeholder="Краткое описание проблемы"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Описание *</Label>
                      <Textarea
                        id="description"
                        value={ticketForm.description}
                        onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                        placeholder="Подробно опишите вашу проблему или вопрос..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить обращение
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={24} className="mr-2" />
                      Время ответа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {priorities.map((priority) => (
                        <div key={priority.value} className="flex items-center justify-between">
                          <Badge className={priority.color}>
                            {priority.label}
                          </Badge>
                          <span className="text-sm text-gray-600">
                            {priority.value === 'urgent' ? 'До 1 часа' :
                             priority.value === 'high' ? 'До 4 часов' :
                             priority.value === 'medium' ? 'До 24 часов' : 'До 48 часов'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="HelpCircle" size={24} className="mr-2" />
                      Советы для быстрого решения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 mt-0.5" />
                        Укажите точное название продукта
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 mt-0.5" />
                        Опишите условия использования
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 mt-0.5" />
                        Приложите фото, если возможно
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={14} className="text-green-500 mr-2 mt-0.5" />
                        Укажите номер заказа
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Star" size={24} className="mr-2" />
                      Экспресс-консультация
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Нужна срочная помощь? Закажите обратный звонок, и наш эксперт свяжется с вами в течение 15 минут.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Icon name="PhoneCall" size={16} className="mr-2" />
                      Заказать звонок
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="knowledge" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {knowledgeBase.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Icon name="BookOpen" size={24} className="mr-2" />
                          {section.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {section.articles.map((article, articleIndex) => (
                            <div key={articleIndex} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                              <div className="flex-1">
                                <h4 className="font-medium text-blue-600 hover:text-blue-800">
                                  {article.title}
                                </h4>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Icon name="Eye" size={16} className="mr-1" />
                                {article.views}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Search" size={24} className="mr-2" />
                      Поиск по базе знаний
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Input placeholder="Введите ваш вопрос..." />
                      <Button className="w-full">
                        <Icon name="Search" size={16} className="mr-2" />
                        Найти ответ
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="TrendingUp" size={24} className="mr-2" />
                      Популярные темы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {['Дозировка средств', 'Совместимость', 'Хранение', 'Безопасность', 'Сертификаты'].map((topic, index) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2 cursor-pointer hover:bg-blue-50">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Download" size={24} className="mr-2" />
                      Полезные материалы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="FileText" size={16} className="mr-2" />
                        Руководство по применению
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Shield" size={16} className="mr-2" />
                        Инструкции по безопасности
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Calculator" size={16} className="mr-2" />
                        Калькулятор расхода
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли ответ?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Наши эксперты готовы помочь вам с любыми вопросами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Открыть чат
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;