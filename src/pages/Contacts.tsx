import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-blue-100">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Наши контакты</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Icon name="Phone" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Телефон</h3>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                      <p className="text-gray-600">+7 (800) 555-01-23 (бесплатно)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Icon name="Mail" size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@chemstore.ru</p>
                      <p className="text-gray-600">sales@chemstore.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon name="MapPin" size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Адрес</h3>
                      <p className="text-gray-600">123456, г. Москва</p>
                      <p className="text-gray-600">ул. Примерная, д. 123, офис 456</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Icon name="Clock" size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Режим работы</h3>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-600">Сб-Вс: выходные</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Тема сообщения" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Ваше сообщение..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Как нас найти</CardTitle>
              <CardDescription>
                Мы находимся в центре Москвы, рядом с метро
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Здесь будет карта</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;