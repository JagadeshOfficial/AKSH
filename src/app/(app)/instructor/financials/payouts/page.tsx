"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Payout = {
  id: number;
  amount: number;
  status: "Pending" | "Completed" | "Rejected";
  date: string;
  method: string;
};

export default function PayoutsPage() {
  const [payouts, setPayouts] = useState<Payout[]>([
    { id: 1, amount: 3000, status: "Completed", date: "2025-09-01", method: "Bank Transfer" },
    { id: 2, amount: 1500, status: "Pending", date: "2025-09-15", method: "UPI" },
    // ...more payouts
  ]);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Bank Transfer");

  function handleRequestPayout() {
    if (amount) {
      setPayouts([
        {
          id: payouts.length + 1,
          amount: Number(amount),
          status: "Pending",
          date: new Date().toISOString().slice(0, 10),
          method,
        },
        ...payouts,
      ]);
      setAmount("");
      setMethod("Bank Transfer");
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Payouts</h1>
      <div className="mb-8 bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Request Payout</h2>
        <input
          className="border rounded p-2 w-full mb-2"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <select
          className="border rounded p-2 w-full mb-2"
          value={method}
          onChange={e => setMethod(e.target.value)}
        >
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="UPI">UPI</option>
          <option value="PayPal">PayPal</option>
        </select>
        <Button onClick={handleRequestPayout}>Request Payout</Button>
      </div>
      <div className="space-y-4">
        {payouts.map(p => (
          <div key={p.id} className="bg-card rounded shadow p-4 flex justify-between items-center">
            <div>
              <span className="font-semibold">₹{p.amount}</span>
              <span className="mx-2 text-muted-foreground">{p.method}</span>
              <span className={`ml-2 text-xs font-semibold ${p.status === "Completed" ? "text-green-600" : p.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                {p.status}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{p.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
