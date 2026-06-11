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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { landingPageContent } from "../data/content";
import { cn } from "../utils/cn";

type FearIconKey = "fr1" | "fr2" | "fr3" | "fr4";

export const FearRemoval = () => {
  const { fears } = landingPageContent;
  const [activeTab, setActiveTab] = useState<string>(fears.items[0]?.id || "");

  // تنظيف وتصحيح قياسات الارتفاع والعرض للأيقونات لمنع التكرار
  const icons: Record<FearIconKey, React.ReactNode> = {
    fr1: <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />,
    fr2: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    fr3: <Languages className="w-4 h-4 sm:w-5 sm:h-5" />,
    fr4: <Banknote className="w-4 h-4 sm:w-5 sm:h-5" />,
  };

  return (
    <section
      className="py-16 sm:py-24 bg-luxury-sand text-stone-800 relative overflow-hidden"
      dir="rtl"
      id="fears-removal-section"
    >
      <div className="container mx-auto px-4">
        {/* هيدر القسم - الطمأنينة وراحة البال مع رحلات فهد */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-rose-600 font-headline font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-rose-50 border border-rose-100 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4">
            الطمانينة التامة وراحة البال
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-luxury-dark mb-3 sm:mb-4">
            {fears.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">
            {fears.subtitle}
          </p>
        </div>

        {/* الهيكل التفاعلي للتبويبات (Tabs) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* أزرار التبويبات - سكرول أفقي للموبايل وقائمة عمودية لنسخة المكتب */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 px-1 lg:px-0 scrollbar-none snap-x snap-mandatory">
            {fears.items.map((item) => {
              const tabIcon = icons[item.id as FearIconKey] || (
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              );
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "whitespace-nowrap lg:whitespace-normal snap-center shrink-0 text-right p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-2.5 sm:gap-3.5 select-none cursor-pointer focus:outline-none text-xs sm:text-sm font-semibold",
                    isActive
                      ? "bg-luxury-dark border-luxury-dark text-white shadow-sm"
                      : "bg-white border-stone-200/80 hover:bg-stone-50 text-stone-600",
                  )}
                >
                  {/* حاوية الأيقونة التفاعلية الموحدة */}
                  <div
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                      isActive
                        ? "bg-luxury-brand text-luxury-dark"
                        : "bg-stone-50 text-stone-400",
                    )}
                  >
                    {tabIcon}
                  </div>
                  <span className="font-headline tracking-wide">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* لوحة عرض محتوى التبويب النشط */}
          <div className="lg:col-span-8 bg-white border border-stone-200/60 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm min-h-70 sm:min-h-80 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {fears.items.map((item) => {
                if (item.id !== activeTab) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col justify-between h-full grow"
                  >
                    <div>
                      {/* عرض الهاجس أو القلق المتوقع */}
                      <div className="mb-4 sm:mb-6 bg-rose-50/40 border border-rose-100/70 p-4 rounded-xl sm:rounded-2xl">
                        <span className="text-[9px] sm:text-[10px] text-rose-500 font-headline font-extrabold uppercase block mb-1">
                          الهاجس أو مصدر القلق:
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                          {item.fear}
                        </p>
                      </div>

                      {/* بانر الضمان والتأكيد */}
                      <div className="flex items-center gap-2 mb-3 text-emerald-600">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-50" />
                        <h4 className="font-headline font-extrabold text-xs sm:text-sm">
                          {item.assurance}
                        </h4>
                      </div>

                      {/* شرح الحل والضمانة الفندقية/التنظيمية */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-r-2 border-emerald-500 pr-3.5 pt-0.5">
                        {item.description}
                      </p>
                    </div>

                    {/* التذييل النصي المحدث لهوية رحلات فهد */}
                    <div className="mt-6 sm:mt-8 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[9px] sm:text-[10px] text-stone-400 font-sans">
                      <span>ضمانة رحلات فهد الملكية للأمان والسرية</span>
                      <span className="text-luxury-brand/80 font-medium">
                        رحلات فهد حارس خصوصيتكم
                      </span>
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

export default FearRemoval;
