import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      id: 'general',
      name: 'Общие вопросы',
      icon: 'HelpCircle',
      questions: [
        {
          question: 'Как сделать заказ?',
          answer: 'Вы можете сделать заказ через наш сайт, добавив товары в корзину и оформив заказ, или позвонив нам по телефону +7 (495) 123-45-67. Наши менеджеры помогут вам с выбором и оформлением.'
        },
        {
          question: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), наличными при получении, безналичный расчет для юридических лиц, а также оплату через электронные кошельки (ЮMoney, QIWI, WebMoney).'
        },
        {
          question: 'Можно ли вернуть товар?',
          answer: 'Да, вы можете вернуть товар в течение 14 дней с момента получения при условии сохранения оригинальной упаковки и товарного вида. Возврат денежных средств осуществляется в течение 10 рабочих дней.'
        }
      ]
    },
    {
      id: 'delivery',
      name: 'Доставка',
      icon: 'Truck',
      questions: [
        {
          question: 'Сколько стоит доставка?',
          answer: 'Стоимость доставки зависит от региона: по Москве в пределах МКАД - 300₽, за МКАД до 30 км - 500₽. При заказе от 3000₽ доставка по Москве бесплатная. Доставка в регионы от 150₽.'
        },
        {
          question: 'Как быстро доставляете?',
          answer: 'По Москве доставляем в течение 1-2 дней, в регионы - 2-5 дней в зависимости от удаленности. Самовывоз из нашего офиса возможен в день заказа.'
        },
        {
          question: 'Доставляете ли в выходные?',
          answer: 'Да, мы осуществляем доставку в выходные дни по Москве с 10:00 до 18:00. Доставка в выходные оплачивается дополнительно - +200₽ к стоимости.'
        }
      ]
    },
    {
      id: 'products',
      name: 'О продукции',
      icon: 'Package',
      questions: [
        {
          question: 'Все ли товары сертифицированы?',
          answer: 'Да, вся наша продукция имеет необходимые сертификаты соответствия, санитарно-эпидемиологические заключения и декларации о соответствии техническим регламентам.'
        },
        {
          question: 'Можно ли получить образцы для тестирования?',
          answer: 'Конечно! Мы предоставляем бесплатные образцы объемом 50-100 мл для тестирования. Обратитесь к нашим менеджерам для получения образцов интересующих вас средств.'
        },
        {
          question: 'Как правильно хранить химические средства?',
          answer: 'Храните средства в оригинальной упаковке, в сухом прохладном месте при температуре от +5°C до +25°C, вдали от прямых солнечных лучей и в недоступном для детей месте.'
        }
      ]
    },
    {
      id: 'business',
      name: 'Для бизнеса',
      icon: 'Building',
      questions: [
        {
          question: 'Работаете ли с юридическими лицами?',
          answer: 'Да, мы активно работаем с юридическими лицами. Предоставляем все необходимые документы, работаем по договорам, предоставляем отсрочку платежа и индивидуальные условия для постоянных клиентов.'
        },
        {
          question: 'Есть ли скидки для оптовых покупателей?',
          answer: 'Да, для оптовых покупателей действует гибкая система скидок от 5% до 25% в зависимости от объема заказа. Также предоставляем специальные условия для постоянных клиентов.'
        },
        {
          question: 'Предоставляете ли обучение персонала?',
          answer: 'Да, мы проводим обучение персонала правильному использованию химических средств. Стоимость обучения от 5000₽, включает теоретическую и практическую части с выдачей сертификата.'
        }
      ]
    }
  ];

  const filteredFAQ = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Часто задаваемые вопросы</h1>
          <p className="text-xl text-cyan-100">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Поиск по вопросам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        <div className="space-y-8">
          {filteredFAQ.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="bg-cyan-100 p-2 rounded-lg mr-3">
                    <Icon name={category.icon} size={24} className="text-cyan-600" />
                  </div>
                  {category.name}
                </CardTitle>
                <CardDescription>
                  {category.questions.length} {category.questions.length === 1 ? 'вопрос' : 'вопросов'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQ.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Ничего не найдено</h3>
            <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
          </div>
        )}

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли ответ?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Наши специалисты готовы помочь вам с любыми вопросами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Mail" size={20} className="mr-2" />
              Отправить email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;