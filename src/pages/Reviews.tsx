import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      company: 'ООО "Чистый офис"',
      rating: 5,
      date: '2024-01-15',
      title: 'Отличное качество и сервис',
      text: 'Заказываем химию для уборки офисов уже более года. Качество продукции на высоте, доставка всегда вовремя. Особенно нравится универсальный очиститель ProClean - отлично справляется с любыми загрязнениями.',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      company: 'Клининговая компания "Блеск"',
      rating: 5,
      date: '2024-01-10',
      title: 'Профессиональный подход',
      text: 'Работаем с ChemStore уже 3 года. Всегда помогают с выбором средств под конкретные задачи, предоставляют образцы для тестирования. Цены конкурентные, качество отличное.',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Елена Козлова',
      company: 'Частное лицо',
      rating: 4,
      date: '2024-01-08',
      title: 'Хорошие средства для дома',
      text: 'Покупаю средства для домашней уборки. Особенно понравилось средство для стекол CrystalShine - действительно не оставляет разводов. Доставка быстрая, упаковка качественная.',
      verified: false,
      helpful: 5
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      company: 'Ресторан "Вкус"',
      rating: 5,
      date: '2024-01-05',
      title: 'Идеально для ресторана',
      text: 'Заказывали обезжириватель для кухни ресторана. Средство отлично справляется с жировыми загрязнениями, безопасно для пищевого производства. Менеджеры очень компетентные.',
      verified: true,
      helpful: 15
    },
    {
      id: 5,
      name: 'Ольга Морозова',
      company: 'Медицинский центр "Здоровье"',
      rating: 5,
      date: '2024-01-03',
      title: 'Надежная дезинфекция',
      text: 'Покупаем антибактериальные средства для медицинского центра. Все сертифицировано, эффективно уничтожает патогены. Особенно важно, что средства безопасны для персонала.',
      verified: true,
      helpful: 20
    },
    {
      id: 6,
      name: 'Александр Новиков',
      company: 'Автосервис "Мотор"',
      rating: 4,
      date: '2023-12-28',
      title: 'Хорошо для промышленности',
      text: 'Используем промышленные обезжириватели в автосервисе. Качество хорошее, расход экономичный. Единственный минус - хотелось бы больше вариантов упаковки.',
      verified: true,
      helpful: 7
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h1>
          <p className="text-xl text-amber-100">
            Мнения наших клиентов о качестве продукции и сервиса
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Star" size={24} className="mr-2 text-yellow-400" />
                  Общая оценка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <p className="text-gray-600">на основе {reviews.length} отзывов</p>
                </div>

                <div className="space-y-2">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <span className="text-sm w-8">{rating}</span>
                      <Icon name="Star" size={14} className="text-yellow-400" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{count}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full mt-6"
                  onClick={() => setShowReviewForm(!showReviewForm)}
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Оставить отзыв
                </Button>
              </CardContent>
            </Card>

            {showReviewForm && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Написать отзыв</CardTitle>
                  <CardDescription>
                    Поделитесь своим опытом использования наших товаров
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="review-name">Имя</Label>
                      <Input id="review-name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="review-company">Компания (необязательно)</Label>
                      <Input id="review-company" placeholder="Название компании" />
                    </div>
                    <div>
                      <Label>Оценка</Label>
                      <div className="flex space-x-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon 
                            key={star}
                            name="Star" 
                            size={24} 
                            className="text-gray-300 hover:text-yellow-400 cursor-pointer" 
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="review-title">Заголовок</Label>
                      <Input id="review-title" placeholder="Краткое описание" />
                    </div>
                    <div>
                      <Label htmlFor="review-text">Отзыв</Label>
                      <Textarea 
                        id="review-text" 
                        placeholder="Расскажите о своем опыте..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit" className="flex-1">
                        Отправить отзыв
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setShowReviewForm(false)}
                      >
                        Отмена
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                Проверен
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{review.company}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{review.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{review.text}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm">
                        <Icon name="ThumbsUp" size={16} className="mr-2" />
                        Полезно ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Flag" size={16} className="mr-2" />
                        Пожаловаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Показать еще отзывы
                <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;