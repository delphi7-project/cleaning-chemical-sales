import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Calculator = () => {
  const [areaCalculator, setAreaCalculator] = useState({
    area: '',
    frequency: 'daily',
    surfaceType: 'office',
    productType: 'universal'
  });

  const [costCalculator, setCostCalculator] = useState({
    currentCost: '',
    currentConsumption: '',
    newProductPrice: '',
    newProductConcentration: '1:10'
  });

  const [results, setResults] = useState<any>(null);

  const surfaceTypes = {
    office: { name: 'Офис', coefficient: 1.0 },
    retail: { name: 'Торговый центр', coefficient: 1.5 },
    medical: { name: 'Медицинское учреждение', coefficient: 2.0 },
    industrial: { name: 'Промышленное помещение', coefficient: 1.8 },
    restaurant: { name: 'Ресторан/Кафе', coefficient: 2.2 },
    hotel: { name: 'Гостиница', coefficient: 1.3 }
  };

  const frequencies = {
    daily: { name: 'Ежедневно', coefficient: 1.0 },
    weekly: { name: '2-3 раза в неделю', coefficient: 0.4 },
    biweekly: { name: 'Раз в неделю', coefficient: 0.2 },
    monthly: { name: 'Раз в месяц', coefficient: 0.05 }
  };

  const productTypes = {
    universal: { name: 'Универсальное средство', consumption: 50, price: 299 },
    glass: { name: 'Для стекол', consumption: 30, price: 199 },
    floor: { name: 'Для полов', consumption: 40, price: 349 },
    bathroom: { name: 'Для сантехники', consumption: 35, price: 279 },
    degreaser: { name: 'Обезжириватель', consumption: 45, price: 329 }
  };

  const calculateConsumption = () => {
    const area = parseFloat(areaCalculator.area);
    if (!area) return;

    const surface = surfaceTypes[areaCalculator.surfaceType as keyof typeof surfaceTypes];
    const freq = frequencies[areaCalculator.frequency as keyof typeof frequencies];
    const product = productTypes[areaCalculator.productType as keyof typeof productTypes];

    // Расход в мл на м² в день
    const dailyConsumption = product.consumption * surface.coefficient;
    const totalDailyConsumption = area * dailyConsumption * freq.coefficient;
    
    // Расчеты на разные периоды
    const monthlyConsumption = totalDailyConsumption * 30;
    const yearlyConsumption = monthlyConsumption * 12;
    
    // Количество упаковок
    const packageSize = 500; // мл
    const monthlyPackages = Math.ceil(monthlyConsumption / packageSize);
    const yearlyPackages = Math.ceil(yearlyConsumption / packageSize);
    
    // Стоимость
    const monthlyCost = monthlyPackages * product.price;
    const yearlyCost = yearlyPackages * product.price;

    setResults({
      type: 'consumption',
      dailyConsumption: totalDailyConsumption.toFixed(0),
      monthlyConsumption: monthlyConsumption.toFixed(0),
      yearlyConsumption: yearlyConsumption.toFixed(0),
      monthlyPackages,
      yearlyPackages,
      monthlyCost,
      yearlyCost,
      productName: product.name,
      surfaceName: surface.name,
      frequencyName: freq.name
    });
  };

  const calculateCostSavings = () => {
    const currentCost = parseFloat(costCalculator.currentCost);
    const currentConsumption = parseFloat(costCalculator.currentConsumption);
    const newPrice = parseFloat(costCalculator.newProductPrice);
    
    if (!currentCost || !currentConsumption || !newPrice) return;

    // Парсим концентрацию (например, "1:10" означает 1 часть средства на 10 частей воды)
    const [concentrate, water] = costCalculator.newProductConcentration.split(':').map(Number);
    const dilutionRatio = water / concentrate;
    
    // Эффективный объем с учетом разбавления
    const effectiveVolume = 500 * (1 + dilutionRatio); // 500 мл базовый объем
    
    // Стоимость за литр готового раствора
    const costPerLiter = (newPrice / effectiveVolume) * 1000;
    
    // Новая стоимость при том же потреблении
    const newMonthlyCost = (currentConsumption / 1000) * costPerLiter;
    
    // Экономия
    const monthlySavings = currentCost - newMonthlyCost;
    const yearlySavings = monthlySavings * 12;
    const savingsPercentage = (monthlySavings / currentCost) * 100;

    setResults({
      type: 'savings',
      currentCost,
      newMonthlyCost,
      monthlySavings,
      yearlySavings,
      savingsPercentage,
      costPerLiter,
      effectiveVolume
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Калькулятор расхода</h1>
          <p className="text-xl text-green-100">
            Рассчитайте оптимальный расход средств и экономию
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="consumption" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="consumption">Расчет расхода</TabsTrigger>
            <TabsTrigger value="savings">Расчет экономии</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consumption" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calculator" size={24} className="mr-2" />
                    Параметры расчета
                  </CardTitle>
                  <CardDescription>
                    Введите данные для расчета расхода средств
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="area">Площадь помещения (м²)</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="1000"
                      value={areaCalculator.area}
                      onChange={(e) => setAreaCalculator({...areaCalculator, area: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="surface-type">Тип помещения</Label>
                    <Select 
                      value={areaCalculator.surfaceType} 
                      onValueChange={(value) => setAreaCalculator({...areaCalculator, surfaceType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип помещения" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(surfaceTypes).map(([key, type]) => (
                          <SelectItem key={key} value={key}>{type.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="frequency">Частота уборки</Label>
                    <Select 
                      value={areaCalculator.frequency} 
                      onValueChange={(value) => setAreaCalculator({...areaCalculator, frequency: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите частоту" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(frequencies).map(([key, freq]) => (
                          <SelectItem key={key} value={key}>{freq.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="product-type">Тип средства</Label>
                    <Select 
                      value={areaCalculator.productType} 
                      onValueChange={(value) => setAreaCalculator({...areaCalculator, productType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите средство" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(productTypes).map(([key, product]) => (
                          <SelectItem key={key} value={key}>{product.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateConsumption} className="w-full">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать расход
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BarChart" size={24} className="mr-2" />
                    Результаты расчета
                  </CardTitle>
                  <CardDescription>
                    Прогнозируемый расход и стоимость
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {results && results.type === 'consumption' ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {results.dailyConsumption} мл
                          </div>
                          <div className="text-sm text-gray-600">в день</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {results.monthlyConsumption} мл
                          </div>
                          <div className="text-sm text-gray-600">в месяц</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Упаковок в месяц:</span>
                          <span className="font-semibold">{results.monthlyPackages} шт</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Упаковок в год:</span>
                          <span className="font-semibold">{results.yearlyPackages} шт</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Стоимость в месяц:</span>
                          <span className="font-semibold text-green-600">
                            {results.monthlyCost.toLocaleString()} ₽
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Стоимость в год:</span>
                          <span className="font-semibold text-green-600">
                            {results.yearlyCost.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Параметры расчета:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Средство: {results.productName}</li>
                          <li>• Тип помещения: {results.surfaceName}</li>
                          <li>• Частота уборки: {results.frequencyName}</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Icon name="Calculator" size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">
                        Заполните параметры и нажмите "Рассчитать расход"
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="savings" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="DollarSign" size={24} className="mr-2" />
                    Сравнение стоимости
                  </CardTitle>
                  <CardDescription>
                    Сравните текущие расходы с новым средством
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="current-cost">Текущие расходы в месяц (₽)</Label>
                    <Input
                      id="current-cost"
                      type="number"
                      placeholder="15000"
                      value={costCalculator.currentCost}
                      onChange={(e) => setCostCalculator({...costCalculator, currentCost: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="current-consumption">Текущий расход в месяц (мл)</Label>
                    <Input
                      id="current-consumption"
                      type="number"
                      placeholder="5000"
                      value={costCalculator.currentConsumption}
                      onChange={(e) => setCostCalculator({...costCalculator, currentConsumption: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="new-price">Цена нового средства (₽)</Label>
                    <Input
                      id="new-price"
                      type="number"
                      placeholder="299"
                      value={costCalculator.newProductPrice}
                      onChange={(e) => setCostCalculator({...costCalculator, newProductPrice: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="concentration">Концентрация разбавления</Label>
                    <Select 
                      value={costCalculator.newProductConcentration} 
                      onValueChange={(value) => setCostCalculator({...costCalculator, newProductConcentration: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите концентрацию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1:1">1:1 (готово к применению)</SelectItem>
                        <SelectItem value="1:5">1:5 (слабый раствор)</SelectItem>
                        <SelectItem value="1:10">1:10 (стандартный)</SelectItem>
                        <SelectItem value="1:20">1:20 (концентрат)</SelectItem>
                        <SelectItem value="1:50">1:50 (сильный концентрат)</SelectItem>
                        <SelectItem value="1:100">1:100 (супер концентрат)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateCostSavings} className="w-full">
                    <Icon name="TrendingDown" size={16} className="mr-2" />
                    Рассчитать экономию
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="PiggyBank" size={24} className="mr-2" />
                    Экономия
                  </CardTitle>
                  <CardDescription>
                    Потенциальная экономия от смены средства
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {results && results.type === 'savings' ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                          <div className="text-xl font-bold text-red-600">
                            {results.currentCost.toLocaleString()} ₽
                          </div>
                          <div className="text-sm text-gray-600">текущие расходы</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-xl font-bold text-green-600">
                            {results.newMonthlyCost.toFixed(0).toLocaleString()} ₽
                          </div>
                          <div className="text-sm text-gray-600">новые расходы</div>
                        </div>
                      </div>

                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {results.monthlySavings > 0 ? '+' : ''}{results.monthlySavings.toFixed(0).toLocaleString()} ₽
                        </div>
                        <div className="text-sm text-gray-600">экономия в месяц</div>
                        <div className="text-lg font-semibold text-blue-600 mt-2">
                          {results.savingsPercentage.toFixed(1)}%
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Экономия в год:</span>
                          <span className="font-semibold text-green-600">
                            {results.yearlySavings.toFixed(0).toLocaleString()} ₽
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Стоимость за литр:</span>
                          <span className="font-semibold">
                            {results.costPerLiter.toFixed(2)} ₽/л
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Эффективный объем:</span>
                          <span className="font-semibold">
                            {results.effectiveVolume} мл
                          </span>
                        </div>
                      </div>

                      {results.monthlySavings > 0 && (
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">
                            <Icon name="TrendingUp" size={16} className="inline mr-1" />
                            Рекомендация
                          </h4>
                          <p className="text-sm text-green-600">
                            Переход на новое средство позволит сэкономить{' '}
                            {results.yearlySavings.toFixed(0).toLocaleString()} ₽ в год!
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Icon name="PiggyBank" size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">
                        Заполните данные для расчета экономии
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Факторы, влияющие на расход</h2>
            <p className="text-xl text-gray-600">
              Что учитывается при расчете потребления средств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Тип помещения</h3>
              <p className="text-gray-600 text-sm">
                Офисы, медучреждения, рестораны требуют разного подхода
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Частота уборки</h3>
              <p className="text-gray-600 text-sm">
                Ежедневная или периодическая уборка влияет на расход
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplets" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Концентрация</h3>
              <p className="text-gray-600 text-sm">
                Возможность разбавления значительно снижает расход
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Степень загрязнения</h3>
              <p className="text-gray-600 text-sm">
                Сильные загрязнения требуют больше средства
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;