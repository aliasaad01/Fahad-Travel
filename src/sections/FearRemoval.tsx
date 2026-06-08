/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  ShieldCheck,
  EyeOff,
  UserCheck,
  Languages,
  Banknote,
} from "lucide-react"; // أبقينا فقط الأيقونات المستخدمة فعلياً
import { motion, AnimatePresence } from "framer-motion"; // استخدام الحزمة المعتمدة القياسية
import { landingPageContent } from "../data/content";
import { cn } from "../utils/cn"; // دالة الدمج المعتمدة بمشروعنا

// تعريف الـ Type الخاص بمفاتيح الأيقونات لضمان الأمان البرمجي
type FearIconKey = "fr1" | "fr2" | "fr3" | "fr4";

export const FearRemoval = () => {
  const { fears } = landingPageContent;
  const [activeTab, setActiveTab] = useState<string>(fears.items[0]?.id || "");

  // ربط الأيقونات بمفاتيحها القياسية بشكل صارم
  const icons: Record<FearIconKey, React.ReactNode> = {
    fr1: <EyeOff className="w-5 h-5" />,
    fr2: <UserCheck className="w-5 h-5" />,
    fr3: <Languages className="w-5 h-5" />,
    fr4: <Banknote className="w-5 h-5" />,
  };

  return (
    <section
      className="py-24 bg-luxury-sand text-stone-800 relative overflow-hidden"
      dir="rtl"
      id="fears-removal-section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-rose-600 font-headline font-bold text-xs uppercase tracking-wider bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5 inline-block mb-4">
            الطمأنينة التامة وراحة البال
          </span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-luxury-dark mb-4">
            {fears.title}
          </h2>
          <p className="text-sm text-stone-500 font-sans max-w-xl mx-auto">
            {fears.subtitle}
          </p>
        </div>

        {/* Tab Interactive Structure */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tab buttons - Right column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {fears.items.map((item) => {
              // استخراج الأيقونة المقابلة بشكل آمن برمجياً
              const tabIcon = icons[item.id as FearIconKey] || (
                <ShieldCheck className="w-5 h-5" />
              );
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full text-right p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 select-none cursor-pointer",
                    isActive
                      ? "bg-luxury-dark border-luxury-dark text-white shadow-md shadow-stone-900/10"
                      : "bg-white border-stone-200 hover:bg-stone-50 text-stone-700",
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                      isActive
                        ? "bg-luxury-brand text-luxury-dark"
                        : "bg-stone-50 text-stone-500",
                    )}
                  >
                    {tabIcon}
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="font-headline font-bold text-xs sm:text-sm">
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab contents panel - Left column */}
          <div className="lg:col-span-8 bg-white border border-stone-200/60 rounded-3xl p-6 md:p-8 shadow-sm min-h-80 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {fears.items.map((item) => {
                if (item.id !== activeTab) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between h-full bug-fix-height"
                  >
                    <div>
                      {/* Fear block */}
                      <div className="mb-6 bg-rose-50/50 border border-rose-100 p-4 rounded-2xl">
                        <span className="text-[10px] text-rose-500 font-headline font-extrabold uppercase block mb-1">
                          الهاجس أو مصدر القلق:
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                          {item.fear}
                        </p>
                      </div>

                      {/* Assurance banner */}
                      <div className="flex items-center gap-2 mb-4 text-emerald-600">
                        <ShieldCheck className="w-5 h-5 fill-emerald-100" />
                        <h4 className="font-headline font-extrabold text-xs sm:text-sm">
                          {item.assurance}
                        </h4>
                      </div>

                      {/* Explanation */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-r-2 border-emerald-500 pr-4 mt-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-sans">
                      <span>ضمانة تآلُف الملكية للأمان والسرية</span>
                      <span>تآلُف حارس خصوصيتكم</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
