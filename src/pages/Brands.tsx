import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Brands = () => {
  const brands = [
    {
      id: 'ecolab',
      name: 'Ecolab',
      country: 'США',
      description: 'Мировой лидер в области технологий и услуг по очистке воды, гигиене и энергетике',
      specialization: 'Промышленная химия',
      productsCount: 45,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 5,
      established: 1923
    },
    {
      id: 'diversey',
      name: 'Diversey',
      country: 'США',
      description: 'Глобальный поставщик решений для гигиены и очистки',
      specialization: 'Профессиональная уборка',
      productsCount: 38,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 5,
      established: 1923
    },
    {
      id: 'kiehl',
      name: 'Kiehl',
      country: 'Германия',
      description: 'Немецкое качество профессиональных средств для уборки',
      specialization: 'Универсальные средства',
      productsCount: 32,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4,
      established: 1928
    },
    {
      id: 'taski',
      name: 'Taski',
      country: 'Швейцария',
      description: 'Инновационные решения для профессиональной уборки',
      specialization: 'Оборудование и химия',
      productsCount: 28,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 5,
      established: 1945
    },
    {
      id: 'johnson',
      name: 'Johnson Professional',
      country: 'США',
      description: 'Профессиональная линейка от Johnson & Johnson',
      specialization: 'Дезинфекция',
      productsCount: 25,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4,
      established: 1886
    },
    {
      id: 'cid',
      name: 'CID Lines',
      country: 'Бельгия',
      description: 'Специализированные решения для дезинфекции и очистки',
      specialization: 'Дезинфекция',
      productsCount: 22,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4,
      established: 1960
    },
    {
      id: 'buzil',
      name: 'Buzil',
      country: 'Германия',
      description: 'Немецкий производитель профессиональной химии',
      specialization: 'Экологичные средства',
      productsCount: 35,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4,
      established: 1956
    },
    {
      id: 'cleanclub',
      name: 'CleanClub',
      country: 'Россия',
      description: 'Российский производитель качественной химии для уборки',
      specialization: 'Бытовая химия',
      productsCount: 18,
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg',
      rating: 4,
      established: 2005
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши бренды</h1>
          <p className="text-xl text-orange-100">
            Работаем только с проверенными мировыми производителями
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Партнеры мирового уровня</h2>
          <p className="text-xl text-gray-600">
            Представляем продукцию ведущих производителей профессиональной химии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {brands.map((brand) => (
            <Card key={brand.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{brand.name}</CardTitle>
                  <Badge variant="outline">{brand.country}</Badge>
                </div>
                <div className="flex items-center mb-2">
                  {renderStars(brand.rating)}
                  <span className="ml-2 text-sm text-gray-600">({brand.rating}/5)</span>
                </div>
                <CardDescription className="text-sm">{brand.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Специализация:</span>
                    <span className="font-medium">{brand.specialization}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Товаров:</span>
                    <span className="font-medium">{brand.productsCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Основан:</span>
                    <span className="font-medium">{brand.established}</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Смотреть товары
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему мы выбираем лучших?</h2>
            <p className="text-xl text-gray-600">
              Критерии отбора наших партнеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Качество</h3>
              <p className="text-gray-600 text-sm">
                Международные сертификаты и стандарты качества
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Экология</h3>
              <p className="text-gray-600 text-sm">
                Безопасность для человека и окружающей среды
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Инновации</h3>
              <p className="text-gray-600 text-sm">
                Постоянное развитие и внедрение новых технологий
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Репутация</h3>
              <p className="text-gray-600 text-sm">
                Многолетний опыт и доверие профессионалов
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Стать партнером</h2>
          <p className="text-xl mb-6 text-orange-100">
            Вы производитель качественной химии? Давайте работать вместе!
          </p>
          <Button size="lg" variant="secondary">
            <Icon name="Handshake" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brands;