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
      className="py-16 sm:py-24 bg-linear-to-b from-[#FAF8F5] to-[#E2D9C8] text-[#111112] relative select-none"
      dir="rtl"
      id="faq-accordion-section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#4A3A25] font-headline font-bold text-xs bg-[#8A6F48]/15 border border-[#8A6F48]/40 rounded-full px-4 py-1 inline-block mb-3 sm:mb-4">
            تساؤلات تهمكما
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-[#111112] mb-3 sm:mb-4">
            {faqs.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#333338] font-sans font-medium max-w-xl mx-auto leading-relaxed">
            {faqs.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "bg-white border border-[#D6CFC4] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen && "border-[#8A6F48] shadow-md",
                )}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-right py-4 px-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#8A6F48] border border-[#D6CFC4] shrink-0 transition-colors duration-300 mt-0.5",
                        isOpen && "text-white bg-[#8A6F48] border-[#8A6F48]",
                      )}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    {/* تغميق نص السؤال المنسدل بالكامل */}
                    <span className="font-headline font-extrabold text-sm sm:text-base text-[#111112] pt-1 leading-normal">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-[#8A6F48] transition-transform duration-300 shrink-0 mt-1",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#FAF8F5] border-t border-[#D6CFC4]"
                    >
                      {/* تغميق الإجابة لتكون واضحة جداً للقراءة للعميل الفاخر */}
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#222225] font-medium leading-relaxed font-sans text-right">
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
