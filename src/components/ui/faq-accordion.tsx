"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`faq-${i}`}
          className="rounded-xl border bg-card overflow-hidden"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-foreground transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180">
              {item.question}
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className={cn(
            "overflow-hidden text-sm text-muted-foreground",
            "data-[state=open]:animate-[slideDown_200ms_ease-out]",
            "data-[state=closed]:animate-[slideUp_200ms_ease-out]"
          )}>
            <div className="px-5 pb-5">{item.answer}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
