import React from 'react';
import { CalculationResult } from '../types/savings';
import { BarChart3 } from 'lucide-react';

interface ProgressChartProps {
  results: CalculationResult;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ results }) => {
  const maxAmount = Math.max(...results.yearlyBreakdown.map(y => y.balance));
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BarChart3 className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Evolución de tus Ahorros</h2>
      </div>

      <div className="space-y-4">
        {results.yearlyBreakdown.map((year, index) => {
          const contributionHeight = (year.totalContributions / maxAmount) * 100;
          const interestHeight = (year.totalInterest / maxAmount) * 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Año {year.year}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  ${year.balance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </span>
              </div>
              
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                {/* Contributions bar */}
                <div 
                  className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-500 ease-out"
                  style={{ 
                    width: `${contributionHeight}%`, 
                    height: '100%' 
                  }}
                />
                
                {/* Interest bar */}
                <div 
                  className="absolute bottom-0 left-0 bg-gradient-to-r from-purple-400 to-purple-500 transition-all duration-700 ease-out"
                  style={{ 
                    left: `${contributionHeight}%`,
                    width: `${interestHeight}%`, 
                    height: '100%' 
                  }}
                />
                
                {/* Amount label */}
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <span className="text-xs font-semibold text-white mix-blend-difference">
                    ${year.balance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4 text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Contribución: ${year.totalContributions.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span>Interés: ${year.totalInterest.toLocaleString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded"></div>
            <span className="text-sm text-gray-700">Tus Contribuciones</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded"></div>
            <span className="text-sm text-gray-700">Interés Compuesto</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;