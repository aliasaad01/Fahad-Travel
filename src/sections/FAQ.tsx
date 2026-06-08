/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { landingPageContent } from "../data/content";
import { cn } from "../utils/cn";

export const FAQ = () => {
  const { faqs } = landingPageContent;
  const [openId, setOpenId] = useState<string | null>(
    faqs.items[0]?.id || null,
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="py-16 sm:py-24 bg-luxury-sand text-stone-800 relative select-none"
      dir="rtl"
      id="faq-accordion-section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-luxury-brand font-headline font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-amber-50 border border-luxury-accent/30 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4">
            تساؤلات تهمكما
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-luxury-dark mb-3 sm:mb-4">
            {faqs.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">
            {faqs.subtitle}
          </p>
        </div>

        {/* Accordion Box */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "bg-white border border-stone-200/60 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen && "border-luxury-brand/30 shadow-sm",
                )}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-right py-4 px-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon Box */}
                    <div
                      className={cn(
                        "w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-stone-50 flex items-center justify-center text-stone-400 border border-stone-200/60 shrink-0 transition-colors duration-300 mt-0.5",
                        isOpen &&
                          "text-luxury-brand bg-amber-50/70 border-luxury-accent/20",
                      )}
                    >
                      <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {/* Question Text */}
                    <span
                      className={cn(
                        "font-headline font-bold text-xs sm:text-sm text-stone-700 transition-colors leading-tight sm:leading-normal pt-1",
                        isOpen && "text-luxury-dark",
                      )}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5 text-stone-400 transition-transform duration-300 shrink-0 mt-1",
                      isOpen && "rotate-180 text-luxury-brand",
                    )}
                  />
                </button>

                {/* Accordion Expandable Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden bg-stone-50/40 border-t border-stone-100"
                    >
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans text-right">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
