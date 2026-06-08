/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, CalendarCheck, Smile, Award } from "lucide-react"; // تنظيف الأيقونة غير المستخدمة
import { motion } from "framer-motion"; // استخدام الحزمة المعتمدة المستقرة بمشروعنا
import { landingPageContent } from "../data/content";

export const Stats = () => {
  const { stats } = landingPageContent;

  const icons = [
    <Users className="w-5 h-5 text-luxury-brand" />,
    <CalendarCheck className="w-5 h-5 text-luxury-brand" />,
    <Smile className="w-5 h-5 text-luxury-brand" />,
    <Award className="w-5 h-5 text-luxury-brand" />,
  ];

  return (
    <section
      className="py-16 bg-[#0E0E10] text-white relative overflow-hidden border-y border-white/5 select-none"
      dir="rtl"
      id="statistics-section"
    >
      {/* Decorative vertical lines and blurs to simulate high end dark UI */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Statistics Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          id="statistics-grid-display"
        >
          {stats.map((stat, idx) => {
            const visualIcon = icons[idx] || (
              <Users className="w-5 h-5 text-luxury-brand" />
            );
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center flex flex-col items-center group"
              >
                {/* Visual Icon circle with gold ring hover effect */}
                <div
                  className="w-10 h-10 rounded-full bg-stone-800 border border-white/10 flex items-center justify-center mb-4 text-luxury-brand shadow-md group-hover:border-luxury-brand group-hover:bg-luxury-brand/5 transition-all duration-500"
                  id={`stat-circle-${idx}`}
                >
                  {visualIcon}
                </div>

                {/* Big metric text */}
                <span
                  className="block font-headline font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-2 group-hover:text-luxury-brand transition-colors duration-500"
                  id={`stat-value-${idx}`}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <h3 className="font-headline font-bold text-sm text-luxury-accent mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-stone-400 font-sans max-w-xs leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
