"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type DiscountCode = {
  id: number;
  code: string;
  course: string;
  amount: number;
  expiry: string;
  status: "Active" | "Expired";
};

export default function DiscountCodesPage() {
  const [codes, setCodes] = useState<DiscountCode[]>([
    { id: 1, code: "SAVE100", course: "Introduction to Programming", amount: 100, expiry: "2025-10-01", status: "Active" },
    { id: 2, code: "REACT50", course: "Web Development Bootcamp", amount: 50, expiry: "2025-09-25", status: "Expired" },
    // ...more codes
  ]);
  const [code, setCode] = useState("");
  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState("");
  const [expiry, setExpiry] = useState("");

  function handleAddCode() {
    if (code && course && amount && expiry) {
      setCodes([
        {
          id: codes.length + 1,
          code,
          course,
          amount: Number(amount),
          expiry,
          status: new Date(expiry) > new Date() ? "Active" : "Expired",
        },
        ...codes,
      ]);
      setCode("");
      setCourse("");
      setAmount("");
      setExpiry("");
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Discount Codes</h1>
      <div className="mb-8 bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Add Discount Code</h2>
        <input
          className="border rounded p-2 w-full mb-2"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Code (e.g. SAVE100)"
        />
        <input
          className="border rounded p-2 w-full mb-2"
          value={course}
          onChange={e => setCourse(e.target.value)}
          placeholder="Course Name"
        />
        <input
          className="border rounded p-2 w-full mb-2"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Discount Amount"
        />
        <input
          className="border rounded p-2 w-full mb-2"
          type="date"
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          placeholder="Expiry Date"
        />
        <Button onClick={handleAddCode}>Add Code</Button>
      </div>
      <div className="space-y-4">
        {codes.map(dc => (
          <div key={dc.id} className="bg-card rounded shadow p-4 flex justify-between items-center">
            <div>
              <span className="font-semibold">{dc.code}</span>
              <span className="mx-2 text-muted-foreground">{dc.course}</span>
              <span className="mx-2 text-muted-foreground">₹{dc.amount}</span>
              <span className="mx-2 text-muted-foreground">Expires: {dc.expiry}</span>
              <span className={`ml-2 text-xs font-semibold ${dc.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                {dc.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
