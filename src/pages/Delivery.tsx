import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Доставка и оплата</h1>
          <p className="text-xl text-green-100">
            Удобные способы доставки и оплаты для вашего комфорта
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Способы доставки</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Truck" size={24} className="text-blue-600" />
                      <CardTitle>Курьерская доставка</CardTitle>
                    </div>
                    <Badge>Популярно</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Доставка курьером по Москве и Московской области
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>По Москве (в пределах МКАД):</span>
                      <span className="font-semibold">300 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>За МКАД (до 30 км):</span>
                      <span className="font-semibold">500 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время доставки:</span>
                      <span className="font-semibold">1-2 дня</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Package" size={24} className="text-green-600" />
                    <CardTitle>Пункты выдачи</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Получение в удобных пунктах выдачи по всей России
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span className="font-semibold">от 150 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время доставки:</span>
                      <span className="font-semibold">2-5 дней</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Количество пунктов:</span>
                      <span className="font-semibold">5000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Home" size={24} className="text-purple-600" />
                    <CardTitle>Самовывоз</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Забрать заказ из нашего офиса в Москве
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span className="font-semibold text-green-600">Бесплатно</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Готовность:</span>
                      <span className="font-semibold">В день заказа</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Режим работы:</span>
                      <span className="font-semibold">Пн-Пт 9:00-18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Способы оплаты</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="CreditCard" size={24} className="text-blue-600" />
                    <CardTitle>Банковские карты</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Visa, MasterCard, МИР - безопасная оплата онлайн
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Visa</Badge>
                    <Badge variant="secondary">MasterCard</Badge>
                    <Badge variant="secondary">МИР</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Banknote" size={24} className="text-green-600" />
                    <CardTitle>Наличные</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Оплата наличными курьеру при получении заказа
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Building" size={24} className="text-purple-600" />
                    <CardTitle>Безналичный расчет</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Для юридических лиц - оплата по счету с НДС
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Smartphone" size={24} className="text-orange-600" />
                    <CardTitle>Электронные кошельки</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Быстрая оплата через популярные сервисы
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">ЮMoney</Badge>
                    <Badge variant="secondary">QIWI</Badge>
                    <Badge variant="secondary">WebMoney</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Условия доставки</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Бесплатная доставка</h3>
              <p className="text-gray-600">
                При заказе от 3000 ₽ доставка по Москве бесплатно
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая обработка</h3>
              <p className="text-gray-600">
                Заказы обрабатываются в течение 2 часов в рабочее время
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Возврат товара в течение 14 дней при сохранении упаковки
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;