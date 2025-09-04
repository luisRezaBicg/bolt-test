import { SavingsData, CalculationResult, MonthlyBreakdown, YearlyBreakdown } from '../types/savings';

export function calculateSavings(data: SavingsData): CalculationResult {
  const { initialAmount, monthlyContribution, annualInterestRate, timePeriodYears } = data;
  
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const totalMonths = timePeriodYears * 12;
  
  let currentBalance = initialAmount;
  let totalContributions = initialAmount;
  
  const monthlyBreakdown: MonthlyBreakdown[] = [];
  const yearlyBreakdown: YearlyBreakdown[] = [];
  
  // Track yearly totals
  let yearlyContributions = 0;
  let yearlyInterestEarned = 0;
  let yearStartBalance = initialAmount;
  
  for (let month = 1; month <= totalMonths; month++) {
    // Add monthly contribution at the beginning of the month
    currentBalance += monthlyContribution;
    totalContributions += monthlyContribution;
    yearlyContributions += monthlyContribution;
    
    // Calculate monthly interest
    const monthlyInterest = currentBalance * monthlyInterestRate;
    currentBalance += monthlyInterest;
    yearlyInterestEarned += monthlyInterest;
    
    monthlyBreakdown.push({
      month,
      balance: currentBalance,
      contribution: monthlyContribution,
      interest: monthlyInterest
    });
    
    // At the end of each year, record yearly breakdown
    if (month % 12 === 0 || month === totalMonths) {
      const currentYear = Math.ceil(month / 12);
      const totalInterestToDate = currentBalance - totalContributions;
      
      yearlyBreakdown.push({
        year: currentYear,
        balance: currentBalance,
        totalContributions,
        totalInterest: totalInterestToDate,
        yearlyContribution: yearlyContributions,
        yearlyInterest: yearlyInterestEarned
      });
      
      // Reset yearly counters
      yearlyContributions = 0;
      yearlyInterestEarned = 0;
    }
  }
  
  const totalInterest = currentBalance - totalContributions;
  
  return {
    totalAmount: currentBalance,
    totalContributions,
    totalInterest,
    monthlyBreakdown,
    yearlyBreakdown
  };
}