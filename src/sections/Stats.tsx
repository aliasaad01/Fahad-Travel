/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, CalendarCheck, Smile, Award } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";

export const Stats = () => {
  const { stats } = landingPageContent;

  const icons = [
    <Users key="users" className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand" />,
    <CalendarCheck
      key="calendar"
      className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand"
    />,
    <Smile key="smile" className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand" />,
    <Award key="award" className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand" />,
  ];

  return (
    <section
      className="py-12 sm:py-16 bg-[#0E0E10] text-white relative overflow-hidden border-y border-white/5 select-none"
      dir="rtl"
      id="statistics-section"
    >
      {/* Decorative vertical lines and blurs to simulate high end dark UI */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-white/5 to-transparent pointer-events-none hidden sm:block"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-white/5 to-transparent pointer-events-none hidden sm:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Statistics Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
          id="statistics-grid-display"
        >
          {stats.map((stat, idx) => {
            const visualIcon = icons[idx] || (
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand" />
            );
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="text-center flex flex-col items-center group bg-white/1 sm:bg-transparent p-4 sm:p-0 rounded-xl border border-white/3 sm:border-none"
              >
                {/* Visual Icon circle with gold ring hover effect */}
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-800 border border-white/10 flex items-center justify-center mb-3 sm:mb-4 text-luxury-brand shadow-md group-hover:border-luxury-brand group-hover:bg-luxury-brand/5 transition-all duration-500"
                  id={`stat-circle-${idx}`}
                >
                  {visualIcon}
                </div>

                {/* Big metric text */}
                <span
                  className="block font-headline font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-1 sm:mb-2 group-hover:text-luxury-brand transition-colors duration-500"
                  id={`stat-value-${idx}`}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <h3 className="font-headline font-bold text-xs sm:text-sm text-luxury-accent mb-1 sm:mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-[11px] text-stone-400 font-sans max-w-xs leading-relaxed px-2 sm:px-0">
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
