export interface SavingsData {
  initialAmount: number;
  monthlyContribution: number;
  annualInterestRate: number;
  timePeriodYears: number;
  calculationMode: 'standard' | 'target' | 'timeOptimized';
}

export interface CalculationResult {
  totalAmount: number;
  totalContributions: number;
  totalInterest: number;
  monthlyBreakdown: MonthlyBreakdown[];
  yearlyBreakdown: YearlyBreakdown[];
}

export interface MonthlyBreakdown {
  month: number;
  balance: number;
  contribution: number;
  interest: number;
}

export interface YearlyBreakdown {
  year: number;
  balance: number;
  totalContributions: number;
  totalInterest: number;
  yearlyContribution: number;
  yearlyInterest: number;
}