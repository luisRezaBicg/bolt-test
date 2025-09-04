import React, { useState, useEffect } from 'react';
import { Calculator, PiggyBank, TrendingUp, DollarSign, Calendar, Target } from 'lucide-react';
import SavingsForm from './components/SavingsForm';
import ResultsDisplay from './components/ResultsDisplay';
import ProgressChart from './components/ProgressChart';
import { SavingsData, CalculationResult } from './types/savings';
import { calculateSavings } from './utils/calculations';

function App() {
  const [savingsData, setSavingsData] = useState<SavingsData>({
    initialAmount: 1000,
    monthlyContribution: 200,
    annualInterestRate: 5,
    timePeriodYears: 10,
    calculationMode: 'standard'
  });

  const [results, setResults] = useState<CalculationResult | null>(null);

  useEffect(() => {
    const calculatedResults = calculateSavings(savingsData);
    setResults(calculatedResults);
  }, [savingsData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <PiggyBank className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Calculadora de Ahorros</h1>
              <p className="text-gray-600 text-sm">Planifica tu futuro financiero</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Inversión Inicial</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${savingsData.initialAmount.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Ahorro Mensual</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${savingsData.monthlyContribution.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Tasa Anual</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savingsData.annualInterestRate}%
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Tiempo</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savingsData.timePeriodYears} años
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Target className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Calculator className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">Parámetros de Cálculo</h2>
              </div>
              <SavingsForm data={savingsData} onChange={setSavingsData} />
            </div>
          </div>

          {/* Results and Chart */}
          <div className="lg:col-span-2 space-y-6">
            {results && (
              <>
                <ResultsDisplay results={results} />
                <ProgressChart results={results} />
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-600 text-sm">
              💡 <strong>Tip:</strong> Aumentar tu contribución mensual aunque sea en pequeñas cantidades
              puede tener un impacto significativo en tus ahorros a largo plazo debido al interés compuesto.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;