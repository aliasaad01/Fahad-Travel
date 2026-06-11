/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";

export const Storytelling = () => {
  const { storytelling } = landingPageContent;

  return (
    <section
      className="py-12 sm:py-24 bg-[#0A0A0B] text-stone-300 relative overflow-hidden select-none"
      dir="rtl"
      id="story-emotional-section"
    >
      {/* هالات ضوئية جمالية خافتة في الخلفية */}
      <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 bg-luxury-brand/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* الإطار البصري الأيمن - الصورة تظهر في اليمين على الشاشات الكبيرة وأسفل النصوص في الهواتف */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group order-2 lg:order-1 mt-4 lg:mt-0"
            id="storytelling-image-wrapper"
          >
            {/* إطار ظلي ناعم محيط بحاوية الصورة */}
            <div className="absolute -inset-1.5 bg-linear-to-tr from-luxury-brand/5 to-transparent rounded-2xl sm:rounded-3xl -rotate-1 scale-101 filter blur-xs pointer-events-none" />

            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/5 sm:aspect-3/4 shadow-2xl border border-white/5 bg-stone-900 max-w-md mx-auto lg:mx-0"
              id="story-cover"
            >
              <img
                src={storytelling.imageUrl}
                alt={storytelling.imageAlt}
                className="w-full h-full object-cover transition-transform duration-[6s] md:group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* بطاقة الأثر العائمة المخصصة لتعزيز الأثر النفسي للرحلة */}
            <div
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-[#141416]/95 backdrop-blur-md border border-luxury-brand/15 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl max-w-55 sm:max-w-60 text-right transition-transform duration-300 md:group-hover:-translate-y-0.5"
              id="story-floating-badge"
            >
              <div className="flex items-center gap-1 text-luxury-brand mb-1">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider">
                  الأثر الحقيقي
                </span>
              </div>
              <p className="text-stone-300 font-headline text-[11px] sm:text-xs font-semibold leading-relaxed">
                مع رحلات فهد، عودة الارتياح والترابط الزوجي ليس ترفاً، بل هو
                شريان الحياة الأصيل لقصتكما.
              </p>
            </div>
          </motion.div>

          {/* العمود النصي الأيسر - يحتوي على العناوين الرئيسية والفلسفة العميقة للرحلة */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-right order-1 lg:order-2 lg:pr-6"
            id="storytelling-narrative-column"
          >
            <span className="text-luxury-brand font-headline font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-luxury-brand/10 border border-luxury-brand/20 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4">
              فلسفتنا وراء الرحلة
            </span>

            <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-[#F5F2ED] mb-3 sm:mb-4 leading-tight">
              {storytelling.title}
            </h2>

            <h3 className="font-headline font-semibold text-sm sm:text-lg text-luxury-brand mb-4 sm:mb-6 leading-relaxed">
              {storytelling.subtitle}
            </h3>

            {/* الفقرات السردية التفاعلية المأخوذة من ملف البيانات الموحد */}
            <div
              className="space-y-3.5 text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-xl font-sans"
              id="narrative-paragraphs"
            >
              {storytelling.paragraphs.map((p, idx) => (
                <p key={idx} className="text-stone-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* الكرت التحريري للاقتباس الفاخر */}
            <div
              className="bg-[#141416]/80 border-r-4 border-luxury-brand p-4 sm:p-5 rounded-l-2xl text-right max-w-xl shadow-2xl relative"
              id="editorial-quote-frame"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-luxury-brand/10 absolute -top-2.5 -left-1.5 transform scale-x-[-1]" />
              <p className="italic text-stone-300 text-xs sm:text-sm font-sans leading-relaxed mb-2">
                " {storytelling.quote.text} "
              </p>
              <span className="text-[10px] font-headline font-bold text-luxury-brand block">
                — {storytelling.quote.author}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
