import React from 'react';
import { SavingsData } from '../types/savings';

interface SavingsFormProps {
  data: SavingsData;
  onChange: (data: SavingsData) => void;
}

const SavingsForm: React.FC<SavingsFormProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof SavingsData, value: string | number) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monto Inicial ($)
        </label>
        <input
          type="number"
          min="0"
          step="100"
          value={data.initialAmount}
          onChange={(e) => handleChange('initialAmount', parseFloat(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Contribución Mensual ($)
        </label>
        <input
          type="number"
          min="0"
          step="10"
          value={data.monthlyContribution}
          onChange={(e) => handleChange('monthlyContribution', parseFloat(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tasa de Interés Anual (%)
        </label>
        <input
          type="number"
          min="0"
          max="30"
          step="0.1"
          value={data.annualInterestRate}
          onChange={(e) => handleChange('annualInterestRate', parseFloat(e.target.value) || 0)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="5.0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Período de Tiempo (años)
        </label>
        <input
          type="number"
          min="1"
          max="50"
          step="1"
          value={data.timePeriodYears}
          onChange={(e) => handleChange('timePeriodYears', parseFloat(e.target.value) || 1)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="10"
        />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Modo de Cálculo
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="calculationMode"
              value="standard"
              checked={data.calculationMode === 'standard'}
              onChange={(e) => handleChange('calculationMode', e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              Cálculo Estándar
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="calculationMode"
              value="target"
              checked={data.calculationMode === 'target'}
              onChange={(e) => handleChange('calculationMode', e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              Meta de Ahorro
            </span>
          </label>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-xs text-blue-800">
          <strong>Nota:</strong> Los cálculos asumen interés compuesto mensual y contribuciones realizadas al inicio de cada mes.
        </p>
      </div>
    </div>
  );
};

export default SavingsForm;