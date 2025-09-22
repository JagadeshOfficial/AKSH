"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// Transaction type
 type Transaction = {
  id: number;
  type: "income" | "expense";
  amount: number;
  description: string;
  date: string;
};

export default function FinancialPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, type: "income", amount: 5000, description: "Course Sale", date: "2025-09-01" },
    { id: 2, type: "expense", amount: 1200, description: "Marketing", date: "2025-09-10" },
    // ...more transactions
  ]);
  const [type, setType] = useState<"income" | "expense">("income");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);

  function handleAddTransaction() {
    if (amount && description) {
      setTransactions([
        {
          id: transactions.length + 1,
          type,
          amount: Number(amount),
          description,
          date: new Date().toISOString().slice(0, 10),
        },
        ...transactions,
      ]);
      setAmount("");
      setDescription("");
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Financial Management</h1>
      <div className="mb-8 grid grid-cols-2 gap-4">
        <div className="bg-card rounded shadow p-4">
          <h2 className="font-semibold text-lg mb-2">Total Income</h2>
          <p className="text-green-600 text-xl font-bold">₹{totalIncome}</p>
        </div>
        <div className="bg-card rounded shadow p-4">
          <h2 className="font-semibold text-lg mb-2">Total Expense</h2>
          <p className="text-red-600 text-xl font-bold">₹{totalExpense}</p>
        </div>
      </div>
      <div className="mb-8 bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Add Transaction</h2>
        <select
          className="border rounded p-2 w-full mb-2"
          value={type}
          onChange={e => setType(e.target.value as "income" | "expense")}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          className="border rounded p-2 w-full mb-2"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          className="border rounded p-2 w-full mb-2"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <Button onClick={handleAddTransaction}>Add</Button>
      </div>
      <div className="space-y-4">
        {transactions.map(t => (
          <div key={t.id} className="bg-card rounded shadow p-4 flex justify-between items-center">
            <div>
              <span className={`font-semibold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                {t.type === "income" ? "Income" : "Expense"}
              </span>
              <span className="mx-2">₹{t.amount}</span>
              <span className="text-muted-foreground">{t.description}</span>
            </div>
            <span className="text-xs text-muted-foreground">{t.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
