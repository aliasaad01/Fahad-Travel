/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, CalendarCheck, Smile, Award } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";

export const Stats = () => {
  const { stats } = landingPageContent;

  const icons = [
    <Users key="users" className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48]" />,
    <CalendarCheck
      key="calendar"
      className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48]"
    />,
    <Smile key="smile" className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48]" />,
    <Award key="award" className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48]" />,
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-linear-to-b from-[#EBE5D8] to-[#FAF8F5] text-[#1A1A1E] relative overflow-hidden border-y border-[#D6CFC4]/50 select-none"
      dir="rtl"
      id="statistics-section"
    >
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-luxury-brand/15 to-transparent pointer-events-none hidden sm:block"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-luxury-brand/15 to-transparent pointer-events-none hidden sm:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1E] mb-3 tracking-tight">
            الريادة في تصميم رحلات الأزواج الفاخرة
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5A5A60] leading-relaxed">
            تجارب استثنائية وراحة بال مطلقة ترافقكما طوال المسير مع باقاتنا
            المبتكرة
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
          id="statistics-grid-display"
        >
          {stats.map((stat, idx) => {
            const visualIcon = icons[idx] || (
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48]" />
            );
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="text-center flex flex-col items-center group bg-white/40 sm:bg-transparent p-5 sm:p-0 rounded-2xl border border-white/60 sm:border-none shadow-xs sm:shadow-none"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-luxury-brand/30 flex items-center justify-center mb-3 sm:mb-4 text-[#8A6F48] shadow-sm group-hover:border-[#8A6F48] group-hover:bg-luxury-brand/10 transition-all duration-500"
                  id={`stat-circle-${idx}`}
                >
                  {visualIcon}
                </div>

                <span
                  className="block font-headline font-extrabold text-3xl sm:text-5xl text-[#1A1A1E] tracking-tight mb-1 sm:mb-2 group-hover:text-[#8A6F48] transition-colors duration-500"
                  id={`stat-value-${idx}`}
                >
                  {stat.value}
                </span>

                <h3 className="font-headline font-bold text-xs sm:text-sm text-[#8A6F48] mb-1 sm:mb-2">
                  {stat.label}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#5A5A60] font-sans max-w-xs leading-relaxed px-2 sm:px-0">
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
