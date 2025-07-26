import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональная химия для идеальной чистоты
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Качественные средства для уборки от проверенных производителей. 
              Сравните состав и эффективность, выберите лучшее решение.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать средство
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="#catalog">Каталог товаров</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/img/2dc2978d-c467-4578-a9de-193e9656a454.jpg" 
              alt="Профессиональная уборка" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;