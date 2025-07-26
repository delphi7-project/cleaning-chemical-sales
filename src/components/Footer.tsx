import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ChemStore</h3>
            <p className="text-gray-400">
              Профессиональная химия для идеальной чистоты
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Универсальные средства</li>
              <li>Для стекол и зеркал</li>
              <li>Антибактериальные</li>
              <li>Для полов</li>
              <li>Для сантехники</li>
              <li>Обезжириватели</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Доставка и оплата</li>
              <li>Гарантии</li>
              <li>Возврат товара</li>
              <li>Сертификаты</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@chemstore.ru</p>
              <p>Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 ChemStore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;