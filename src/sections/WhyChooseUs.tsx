/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sliders, Search, Gift, HeartHandshake } from "lucide-react"; // تنظيف الأيقونات غير المستخدمة
import { motion } from "framer-motion"; // الاعتماد الحصري على الحزمة القياسية المستقرة بمشروعنا
import { landingPageContent } from "../data/content";

export const WhyChooseUs = () => {
  const { trust } = landingPageContent;

  const icons = [
    <Sliders className="w-6 h-6 text-luxury-brand" />,
    <Search className="w-6 h-6 text-luxury-brand" />,
    <Gift className="w-6 h-6 text-luxury-brand" />,
    <HeartHandshake className="w-6 h-6 text-luxury-brand" />,
  ];

  return (
    <section
      className="py-24 bg-luxury-cream text-stone-800 relative select-none"
      dir="rtl"
      id="trust-why-us-section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="trust-header">
          <span className="text-luxury-brand font-headline font-bold text-xs uppercase tracking-wider bg-amber-50 border border-luxury-accent/30 rounded-full px-4 py-1.5 inline-block mb-4">
            الاعتناء اللامتناهي بالتفاصيل
          </span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-luxury-dark mb-4">
            {trust.title}
          </h2>
          <p className="text-sm text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">
            {trust.subtitle}
          </p>
        </div>

        {/* Bento Trust Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          id="trust-factors-grid"
        >
          {trust.items.map((item, idx) => {
            const visualIcon = icons[idx] || (
              <Sliders className="w-6 h-6 text-luxury-brand" />
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-stone-200/50 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-luxury-brand/30 transition-all duration-300 flex flex-col justify-between group"
                id={`trust-card-${item.id}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    {/* Icon Container with hover effect */}
                    <div className="w-12 h-12 rounded-2xl bg-amber-50/70 border border-luxury-accent/40 flex items-center justify-center shrink-0 text-luxury-brand shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {visualIcon}
                    </div>
                    <div className="text-right">
                      <h3 className="font-headline font-bold text-base text-luxury-dark leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-luxury-brand font-headline font-semibold mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Details with solid border decoration */}
                  <p className="text-xs text-stone-500 font-sans leading-relaxed text-right md:-mr-1 border-r-2 border-amber-200/60 pr-3.5 mb-2">
                    {item.details}
                  </p>
                </div>

                {/* Footer labels */}
                <div className="mt-4 flex items-center justify-between text-[9px] text-stone-400 font-sans border-t border-stone-100 pt-3">
                  <span>تم الفرز الميداني بوعي تام</span>
                  <span className="font-headline font-medium text-luxury-brand/80">
                    تآلُف للنخبة
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
