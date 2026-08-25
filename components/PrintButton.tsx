"use client";

import Icon from "./ui/Icon";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40 hover:text-gold sm:w-auto"
    >
      <span className="inline-flex items-center gap-2.5">
        <Icon name="print" className="h-5 w-5" />
        Print The Checklist
      </span>
    </button>
  );
}
