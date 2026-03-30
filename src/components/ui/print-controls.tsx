"use client";
import { Printer } from "lucide-react";

interface PrintControlsProps {
  targetId: string;
}

export function PrintControls({ targetId }: PrintControlsProps) {
  const handlePrint = (bw: boolean) => {
    const el = document.getElementById(targetId);
    if (bw && el) el.classList.add("print-bw");
    window.print();
    if (bw && el) el.classList.remove("print-bw");
  };

  return (
    <div className="flex items-center gap-2 print:hidden">
      <button
        onClick={() => handlePrint(false)}
        className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
      >
        <Printer className="w-4 h-4" />
        Print (Color)
      </button>
      <button
        onClick={() => handlePrint(true)}
        className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
      >
        <Printer className="w-4 h-4" />
        Print (B&W)
      </button>
    </div>
  );
}
