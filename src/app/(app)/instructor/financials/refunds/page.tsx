"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Refund = {
  id: number;
  amount: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  date: string;
  user: string;
};

export default function RefundsPage() {
  const [refunds, setRefunds] = useState<Refund[]>([
    { id: 1, amount: 1200, reason: "Course not as expected", status: "Approved", date: "2025-09-05", user: "John Smith" },
    { id: 2, amount: 800, reason: "Duplicate payment", status: "Pending", date: "2025-09-18", user: "Jane Doe" },
    // ...more refunds
  ]);
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [user, setUser] = useState("");

  function handleRequestRefund() {
    if (amount && reason && user) {
      setRefunds([
        {
          id: refunds.length + 1,
          amount: Number(amount),
          reason,
          status: "Pending",
          date: new Date().toISOString().slice(0, 10),
          user,
        },
        ...refunds,
      ]);
      setAmount("");
      setReason("");
      setUser("");
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Refunds</h1>
      <div className="mb-8 bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Request Refund</h2>
        <input
          className="border rounded p-2 w-full mb-2"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          className="border rounded p-2 w-full mb-2"
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="User Name"
        />
        <input
          className="border rounded p-2 w-full mb-2"
          value={reason}
          onChange={e => setReason(e.target.value)}
          placeholder="Reason"
        />
        <Button onClick={handleRequestRefund}>Request Refund</Button>
      </div>
      <div className="space-y-4">
        {refunds.map(r => (
          <div key={r.id} className="bg-card rounded shadow p-4 flex justify-between items-center">
            <div>
              <span className="font-semibold">₹{r.amount}</span>
              <span className="mx-2 text-muted-foreground">{r.user}</span>
              <span className="mx-2 text-muted-foreground">{r.reason}</span>
              <span className={`ml-2 text-xs font-semibold ${r.status === "Approved" ? "text-green-600" : r.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                {r.status}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
