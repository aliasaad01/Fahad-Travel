/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sliders, Search, Gift, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";

export const WhyChooseUs = () => {
  const { trust } = landingPageContent;

  const icons = [
    <Sliders
      key="sliders"
      className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-brand"
    />,
    <Search key="search" className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-brand" />,
    <Gift key="gift" className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-brand" />,
    <HeartHandshake
      key="handshake"
      className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-brand"
    />,
  ];

  return (
    <section
      className="py-12 sm:py-24 bg-luxury-cream text-stone-800 relative select-none"
      dir="rtl"
      id="trust-why-us-section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
          id="trust-header"
        >
          <span className="text-luxury-brand font-headline font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-amber-50 border border-luxury-accent/30 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4">
            الاعتناء اللامتناهي بالتفاصيل
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-luxury-dark mb-3 sm:mb-4 leading-tight">
            {trust.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">
            {trust.subtitle}
          </p>
        </div>

        {/* Bento Trust Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
          id="trust-factors-grid"
        >
          {trust.items.map((item, idx) => {
            const visualIcon = icons[idx] || (
              <Sliders className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-brand" />
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-stone-200/50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md hover:border-luxury-brand/30 transition-all duration-300 flex flex-col justify-between group"
                id={`trust-card-${item.id}`}
              >
                <div>
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                    {/* Icon Container with hover effect */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-luxury-accent/40 flex items-center justify-center shrink-0 text-luxury-brand shadow-sm transition-transform duration-300 group-hover:scale-103">
                      {visualIcon}
                    </div>
                    <div className="text-right">
                      <h3 className="font-headline font-bold text-sm sm:text-base text-luxury-dark leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-luxury-brand font-headline font-semibold mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Details with solid border decoration */}
                  <p className="text-xs text-stone-500 font-sans leading-relaxed text-right border-r-2 border-amber-200/60 pr-3 sm:pr-4 mb-2">
                    {item.details}
                  </p>
                </div>

                {/* Footer labels */}
                <div className="mt-4 flex items-center justify-between text-[9px] sm:text-[10px] text-stone-400 font-sans border-t border-stone-100 pt-3">
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
