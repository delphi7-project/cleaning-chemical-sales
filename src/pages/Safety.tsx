import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Safety = () => {
  const safetyRules = [
    {
      category: 'Общие правила',
      icon: 'Shield',
      color: 'blue',
      rules: [
        'Всегда читайте этикетку перед использованием',
        'Используйте средства индивидуальной защиты',
        'Обеспечьте хорошую вентиляцию помещения',
        'Не смешивайте разные химические средства',
        'Храните средства в недоступном для детей месте'
      ]
    },
    {
      category: 'При работе с кислотными средствами',
      icon: 'AlertTriangle',
      color: 'red',
      rules: [
        'Обязательно используйте резиновые перчатки',
        'Избегайте попадания на кожу и в глаза',
        'Не вдыхайте пары средства',
        'При попадании на кожу - промыть большим количеством воды',
        'Не использовать на металлических поверхностях'
      ]
    },
    {
      category: 'При работе со щелочными средствами',
      icon: 'Droplets',
      color: 'green',
      rules: [
        'Используйте защитные очки и перчатки',
        'Избегайте контакта с алюминием',
        'Не применять на деликатных поверхностях',
        'При попадании в глаза - промыть и обратиться к врачу',
        'Храните отдельно от кислотных средств'
      ]
    },
    {
      category: 'Дезинфицирующие средства',
      icon: 'Zap',
      color: 'purple',
      rules: [
        'Соблюдайте время экспозиции',
        'Не применять на пищевых поверхностях без смывания',
        'Избегайте попадания на слизистые оболочки',
        'Проветривайте помещение после обработки',
        'Используйте только в рекомендованных концентрациях'
      ]
    }
  ];

  const emergencyActions = [
    {
      situation: 'Попадание в глаза',
      icon: 'Eye',
      actions: [
        'Немедленно промыть большим количеством чистой воды',
        'Промывать не менее 15 минут',
        'Не тереть глаза руками',
        'Снять контактные линзы, если есть',
        'Обратиться к врачу'
      ]
    },
    {
      situation: 'Попадание на кожу',
      icon: 'Hand',
      actions: [
        'Снять загрязненную одежду',
        'Промыть пораженный участок водой',
        'Промывать не менее 10 минут',
        'При раздражении обратиться к врачу',
        'Не использовать нейтрализующие вещества'
      ]
    },
    {
      situation: 'Вдыхание паров',
      icon: 'Wind',
      actions: [
        'Вывести пострадавшего на свежий воздух',
        'Обеспечить покой и тепло',
        'При затрудненном дыхании дать кислород',
        'Не вызывать рвоту',
        'Вызвать скорую помощь'
      ]
    },
    {
      situation: 'Проглатывание',
      icon: 'AlertCircle',
      actions: [
        'Прополоскать рот водой',
        'Дать выпить большое количество воды',
        'Не вызывать рвоту',
        'Не давать молоко или масло',
        'Немедленно обратиться к врачу'
      ]
    }
  ];

  const protectiveEquipment = [
    {
      name: 'Резиновые перчатки',
      description: 'Защита рук от химических веществ',
      when: 'При работе с любыми средствами',
      type: 'Обязательно',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      name: 'Защитные очки',
      description: 'Защита глаз от брызг и паров',
      when: 'При работе с кислотами и щелочами',
      type: 'Рекомендуется',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      name: 'Респиратор',
      description: 'Защита дыхательных путей',
      when: 'В плохо проветриваемых помещениях',
      type: 'При необходимости',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    },
    {
      name: 'Защитная одежда',
      description: 'Фартук или халат для защиты одежды',
      when: 'При работе с агрессивными средствами',
      type: 'Рекомендуется',
      image: '/img/88ba1e4c-7338-406c-8433-1d1b0e7aafe7.jpg'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      red: 'bg-red-100 text-red-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      orange: 'bg-orange-100 text-orange-800'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Обязательно': 'bg-red-100 text-red-800',
      'Рекомендуется': 'bg-yellow-100 text-yellow-800',
      'При необходимости': 'bg-blue-100 text-blue-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Техника безопасности</h1>
          <p className="text-xl text-red-100">
            Правила безопасной работы с химическими средствами
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Alert className="mb-8 border-red-200 bg-red-50">
          <Icon name="AlertTriangle" size={20} className="text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Важно!</strong> Соблюдение правил техники безопасности обязательно при работе с любыми химическими средствами. 
            Пренебрежение может привести к серьезным последствиям для здоровья.
          </AlertDescription>
        </Alert>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Правила безопасности</h2>
          <p className="text-xl text-gray-600">
            Основные требования при работе с различными типами средств
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {safetyRules.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${getColorClasses(category.color)}`}>
                    <Icon name={category.icon} size={24} />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start">
                      <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Средства индивидуальной защиты</h2>
            <p className="text-xl text-gray-600">
              Необходимое защитное оборудование для безопасной работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectiveEquipment.map((equipment, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={equipment.image} 
                      alt={equipment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{equipment.name}</CardTitle>
                    <Badge className={getTypeColor(equipment.type)}>
                      {equipment.type}
                    </Badge>
                  </div>
                  <CardDescription>{equipment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Когда использовать:</span>
                    <p className="text-gray-600 mt-1">{equipment.when}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Первая помощь</h2>
            <p className="text-xl text-gray-600">
              Действия при несчастных случаях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emergencyActions.map((emergency, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                      <Icon name={emergency.icon} size={24} className="text-red-600" />
                    </div>
                    {emergency.situation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {emergency.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          {actionIndex + 1}
                        </span>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Хранение химических средств</h2>
            <p className="text-xl text-gray-600">
              Правила безопасного хранения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Thermometer" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Температурный режим</h3>
              <p className="text-gray-600 text-sm">
                Храните при температуре от +5°C до +25°C, избегайте замораживания
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sun" size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Защита от света</h3>
              <p className="text-gray-600 text-sm">
                Храните в темном месте, защищенном от прямых солнечных лучей
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ограничение доступа</h3>
              <p className="text-gray-600 text-sm">
                Храните в недоступном для детей и животных месте
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Экстренные контакты</h2>
          <p className="text-xl mb-6 text-red-100">
            В случае серьезного происшествия немедленно обращайтесь за помощью
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Скорая помощь</h3>
              <p className="text-2xl font-bold">103</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Служба экстренного реагирования</h3>
              <p className="text-2xl font-bold">112</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Наша горячая линия</h3>
              <p className="text-xl font-bold">+7 (495) 123-45-67</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;