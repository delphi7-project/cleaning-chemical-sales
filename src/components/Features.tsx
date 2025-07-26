import React from 'react';
import Icon from '@/components/ui/icon';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Сертифицированная продукция</h3>
            <p className="text-gray-600">Все товары имеют необходимые сертификаты качества и безопасности</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="GitCompare" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Сравнение составов</h3>
            <p className="text-gray-600">Подробная информация о составе и эффективности каждого средства</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Truck" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-gray-600">Доставляем заказы по всей России в кратчайшие сроки</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;