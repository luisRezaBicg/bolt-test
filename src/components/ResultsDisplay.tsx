import React from 'react';
import { TrendingUp, DollarSign, Percent, ArrowUpRight } from 'lucide-react';
import { CalculationResult } from '../types/savings';

interface ResultsDisplayProps {
  results: CalculationResult;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const interestPercentage = results.totalContributions > 0 
    ? (results.totalInterest / results.totalContributions) * 100 
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-semibold text-gray-900">Resultados de tu Ahorro</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Amount */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="h-6 w-6 text-blue-100" />
            <ArrowUpRight className="h-4 w-4 text-blue-100" />
          </div>
          <p className="text-blue-100 text-sm font-medium">Total Final</p>
          <p className="text-3xl font-bold">
            ${results.totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        {/* Total Contributions */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="h-6 w-6 text-green-100" />
            <ArrowUpRight className="h-4 w-4 text-green-100" />
          </div>
          <p className="text-green-100 text-sm font-medium">Total Aportado</p>
          <p className="text-3xl font-bold">
            ${results.totalContributions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        {/* Interest Earned */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Percent className="h-6 w-6 text-purple-100" />
            <ArrowUpRight className="h-4 w-4 text-purple-100" />
          </div>
          <p className="text-purple-100 text-sm font-medium">Interés Ganado</p>
          <p className="text-3xl font-bold">
            ${results.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Análisis de Rentabilidad</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Rendimiento total:</span>
              <span className="font-semibold text-gray-900">
                {interestPercentage.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ganancia vs. aportación:</span>
              <span className="font-semibold text-green-600">
                +${(results.totalInterest).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Composición Final</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Tus aportaciones:</span>
              <span className="font-semibold text-gray-900">
                {((results.totalContributions / results.totalAmount) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interés compuesto:</span>
              <span className="font-semibold text-purple-600">
                {((results.totalInterest / results.totalAmount) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;