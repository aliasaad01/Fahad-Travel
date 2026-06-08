/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react"; // تنظيف الأيقونات غير المستخدمة
import { motion, AnimatePresence } from "framer-motion"; // استخدام الحزمة المعتمدة القياسية
import { landingPageContent } from "../data/content";
import { cn } from "../utils/cn"; // دالة الدمج المعتمدة بمشروعنا

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
      className="py-24 bg-luxury-sand text-stone-800 relative"
      dir="rtl"
      id="faq-accordion-section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-luxury-brand font-headline font-bold text-xs uppercase tracking-wider bg-amber-50 border border-luxury-accent/30 rounded-full px-4 py-1.5 inline-block mb-4">
            تساؤلات تهمكما
          </span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-luxury-dark mb-4">
            {faqs.title}
          </h2>
          <p className="text-sm text-stone-500 font-sans max-w-xl mx-auto">
            {faqs.subtitle}
          </p>
        </div>

        {/* Accordion Box */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "bg-white border border-stone-200/60 rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen && "border-luxury-accent/40 shadow-sm", // تمييز خفيف للبطاقة المفتوحة حالياً
                )}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-right py-5 px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg bg-amber-50/60 flex items-center justify-center text-stone-400 border border-stone-200 shrink-0 transition-colors duration-300",
                        isOpen &&
                          "text-luxury-brand bg-amber-50/60 border-luxury-accent/30",
                      )}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span
                      className={cn(
                        "font-headline font-bold text-xs sm:text-sm text-stone-700 transition-colors",
                        isOpen && "text-luxury-dark",
                      )}
                    >
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-stone-400 transition-transform duration-300 shrink-0",
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-stone-50/50 border-t border-stone-100"
                    >
                      <div className="p-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans text-right">
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
