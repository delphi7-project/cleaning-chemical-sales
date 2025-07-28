import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  volume: string;
  category: string;
  inStock: boolean;
  maxQuantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderNotes, setOrderNotes] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Универсальный очиститель ProClean',
      price: 299,
      quantity: 2,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      volume: '500 мл',
      category: 'Универсальные',
      inStock: true,
      maxQuantity: 10
    },
    {
      id: '2',
      name: 'Средство для стекол CrystalShine',
      price: 199,
      quantity: 1,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      volume: '750 мл',
      category: 'Для стекол',
      inStock: true,
      maxQuantity: 5
    },
    {
      id: '3',
      name: 'Антибактериальный гель CleanGuard',
      price: 249,
      quantity: 3,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      volume: '250 мл',
      category: 'Антибактериальные',
      inStock: false,
      maxQuantity: 0
    }
  ]);

  const deliveryOptions = [
    { id: 'courier', name: 'Курьерская доставка', price: 300, time: '1-2 дня' },
    { id: 'pickup', name: 'Самовывоз', price: 0, time: 'Сегодня' },
    { id: 'post', name: 'Почта России', price: 250, time: '3-7 дней' }
  ];

  const paymentOptions = [
    { id: 'card', name: 'Банковская карта', description: 'Visa, MasterCard, МИР' },
    { id: 'cash', name: 'Наличные при получении', description: 'Оплата курьеру' },
    { id: 'transfer', name: 'Банковский перевод', description: 'Для юридических лиц' }
  ];

  const promoCodes = [
    { code: 'SAVE10', discount: 10, minOrder: 1000 },
    { code: 'NEWCLIENT', discount: 15, minOrder: 2000 },
    { code: 'BULK20', discount: 20, minOrder: 5000 }
  ];

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, Math.min(newQuantity, item.maxQuantity)) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const promo = promoCodes.find(p => p.code === promoCode);
    if (promo && subtotal >= promo.minOrder) {
      setPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCost = deliveryOptions.find(d => d.id === deliveryMethod)?.price || 0;
  const promoDiscount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + deliveryCost - promoDiscount;

  const inStockItems = cartItems.filter(item => item.inStock);
  const outOfStockItems = cartItems.filter(item => !item.inStock);

  const proceedToCheckout = () => {
    if (inStockItems.length === 0) return;
    if (!agreeToTerms) return;
    
    console.log('Оформление заказа:', {
      items: inStockItems,
      delivery: deliveryMethod,
      payment: paymentMethod,
      total,
      notes: orderNotes
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Корзина</h1>
          <p className="text-xl text-green-100">
            Оформление заказа и выбор способа доставки
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="ShoppingCart" size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Корзина пуста</h2>
            <p className="text-gray-500 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
            <Button size="lg" onClick={() => navigate('/catalog')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Товары в корзине */}
            <div className="lg:col-span-2 space-y-6">
              {/* Товары в наличии */}
              {inStockItems.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Package" size={24} className="mr-2" />
                      Товары в наличии ({inStockItems.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {inStockItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded cursor-pointer"
                            onClick={() => navigate(`/product/${item.id}`)}
                          />
                          <div className="flex-1">
                            <h3 
                              className="font-semibold text-lg cursor-pointer hover:text-blue-600"
                              onClick={() => navigate(`/product/${item.id}`)}
                            >
                              {item.name}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline">{item.category}</Badge>
                              <span className="text-sm text-gray-500">{item.volume}</span>
                            </div>
                            <div className="text-lg font-bold text-blue-600 mt-2">
                              {item.price} ₽
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                              className="w-16 text-center"
                              min="1"
                              max={item.maxQuantity}
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.maxQuantity}
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold">
                              {(item.price * item.quantity).toLocaleString()} ₽
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Товары не в наличии */}
              {outOfStockItems.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <Icon name="AlertCircle" size={24} className="mr-2" />
                      Товары временно отсутствуют ({outOfStockItems.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {outOfStockItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg bg-gray-50">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded opacity-50"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-500">{item.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline">{item.category}</Badge>
                              <span className="text-sm text-gray-500">{item.volume}</span>
                              <Badge variant="destructive">Нет в наличии</Badge>
                            </div>
                            <div className="text-lg font-bold text-gray-400 mt-2">
                              {item.price} ₽
                            </div>
                          </div>
                          <div className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              className="mb-2"
                            >
                              <Icon name="Bell" size={16} className="mr-2" />
                              Уведомить о поступлении
                            </Button>
                            <br />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Способ доставки */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" size={24} className="mr-2" />
                    Способ доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {deliveryOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id={`delivery-${option.id}`}
                          checked={deliveryMethod === option.id}
                          onCheckedChange={() => setDeliveryMethod(option.id)}
                        />
                        <div className="flex-1">
                          <label htmlFor={`delivery-${option.id}`} className="font-medium cursor-pointer">
                            {option.name}
                          </label>
                          <div className="text-sm text-gray-600">
                            {option.price === 0 ? 'Бесплатно' : `${option.price} ₽`} • {option.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Способ оплаты */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CreditCard" size={24} className="mr-2" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {paymentOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id={`payment-${option.id}`}
                          checked={paymentMethod === option.id}
                          onCheckedChange={() => setPaymentMethod(option.id)}
                        />
                        <div className="flex-1">
                          <label htmlFor={`payment-${option.id}`} className="font-medium cursor-pointer">
                            {option.name}
                          </label>
                          <div className="text-sm text-gray-600">
                            {option.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Комментарий к заказу */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageSquare" size={24} className="mr-2" />
                    Комментарий к заказу
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Дополнительные пожелания к заказу..."
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Итоги заказа */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calculator" size={24} className="mr-2" />
                    Итоги заказа
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Промокод */}
                  <div>
                    <Label htmlFor="promo">Промокод</Label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        id="promo"
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        disabled={promoApplied}
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyPromoCode}
                        disabled={promoApplied || !promoCode}
                      >
                        {promoApplied ? <Icon name="Check" size={16} /> : 'Применить'}
                      </Button>
                    </div>
                    {promoApplied && (
                      <div className="text-sm text-green-600 mt-1">
                        <Icon name="Check" size={14} className="inline mr-1" />
                        Промокод применен
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Расчет стоимости */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Товары ({inStockItems.reduce((sum, item) => sum + item.quantity, 0)} шт.):</span>
                      <span>{subtotal.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка по промокоду:</span>
                        <span>-{promoDiscount} ₽</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого:</span>
                      <span>{total.toLocaleString()} ₽</span>
                    </div>
                  </div>

                  {/* Условия */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreeToTerms}
                      onCheckedChange={setAgreeToTerms}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      Я согласен с{' '}
                      <button className="text-blue-600 hover:underline">
                        условиями использования
                      </button>
                      {' '}и{' '}
                      <button className="text-blue-600 hover:underline">
                        политикой конфиденциальности
                      </button>
                    </label>
                  </div>

                  {/* Кнопки действий */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={proceedToCheckout}
                      disabled={inStockItems.length === 0 || !agreeToTerms}
                    >
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate('/catalog')}
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Продолжить покупки
                    </Button>
                  </div>

                  {/* Информационные блоки */}
                  <div className="space-y-3 pt-4">
                    <Alert>
                      <Icon name="Truck" size={16} />
                      <AlertDescription>
                        <strong>Бесплатная доставка</strong> при заказе от 3000 ₽
                      </AlertDescription>
                    </Alert>

                    <Alert>
                      <Icon name="Shield" size={16} />
                      <AlertDescription>
                        <strong>Гарантия качества</strong> - возврат в течение 14 дней
                      </AlertDescription>
                    </Alert>

                    <Alert>
                      <Icon name="Clock" size={16} />
                      <AlertDescription>
                        <strong>Быстрая обработка</strong> - отправка в день заказа
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Способы оплаты */}
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Принимаем к оплате:</h4>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Visa</Badge>
                      <Badge variant="outline">MasterCard</Badge>
                      <Badge variant="outline">МИР</Badge>
                      <Badge variant="outline">Наличные</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;