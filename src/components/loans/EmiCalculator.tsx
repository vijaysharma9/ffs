"use client";

import { useState, useMemo } from "react";
import { Calculator, ArrowRight, ShieldCheck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const { monthlyEmi, totalInterest, totalAmount } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    if (monthlyRate === 0) {
      const emi = loanAmount / totalMonths;
      return {
        monthlyEmi: Math.round(emi),
        totalInterest: 0,
        totalAmount: loanAmount,
      };
    }

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayable = emi * totalMonths;
    const interest = totalPayable - loanAmount;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(interest),
      totalAmount: Math.round(totalPayable),
    };
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <div className="bg-white rounded-2xl border border-surface-line shadow-card p-6 sm:p-8">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-light text-blue-brand flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-display font-extrabold text-navy-900">
            Interactive Loan EMI Calculator
          </h3>
          <p className="text-xs text-ink-muted">
            Estimate your monthly repayment before applying
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-navy-900">Loan Amount</label>
              <span className="text-sm font-extrabold text-blue-brand">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min={50000}
              max={10000000}
              step={25000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-brand"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹50,000</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-navy-900">
                Indicative Interest Rate (% p.a.)
              </label>
              <span className="text-sm font-extrabold text-blue-brand">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={7.5}
              max={24}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-brand"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>7.5%</span>
              <span>14%</span>
              <span>24%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-navy-900">Tenure (Years)</label>
              <span className="text-sm font-extrabold text-blue-brand">
                {tenureYears} {tenureYears === 1 ? "Year" : "Years"} ({tenureYears * 12} Months)
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-brand"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-brand block mb-1">
              Estimated Monthly EMI
            </span>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6">
              {formatCurrency(monthlyEmi)}
              <span className="text-xs font-normal text-slate-300 ml-1">/ month</span>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-4 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-300">Principal Amount:</span>
                <span className="font-bold">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Total Interest Payable:</span>
                <span className="font-bold text-cyan-brand">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10">
                <span className="text-slate-200 font-bold">Total Amount Payable:</span>
                <span className="font-bold text-white">{formatCurrency(totalAmount)}</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button variant="cyan" size="md" href="/#contact" className="w-full">
              <span>Apply for this Loan</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <p className="text-[10px] text-slate-300 text-center mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-brand" />
              <span>Calculations are indicative. Lender terms apply.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
