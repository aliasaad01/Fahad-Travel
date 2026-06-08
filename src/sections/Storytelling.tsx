/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Quote, Star } from "lucide-react"; // تنظيف الأيقونات غير المستخدمة كلياً لتقليص الوزن
import { motion } from "framer-motion"; // الاعتماد الحصري على الحزمة القياسية المستقرة بمشروعنا
import { landingPageContent } from "../data/content";

export const Storytelling = () => {
  const { storytelling } = landingPageContent;

  return (
    <section
      className="py-24 bg-[#0A0A0B] text-stone-300 relative overflow-hidden select-none"
      dir="rtl"
      id="story-emotional-section"
    >
      {/* Decorative floral elements backgrounds or ambient blurs */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-luxury-brand/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Visual Frame Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
            id="storytelling-image-wrapper"
          >
            {/* Soft decorative shadow framing */}
            <div className="absolute -inset-2 bg-linear-to-tr from-luxury-brand/10 to-transparent rounded-3xl -rotate-2 scale-102 filter blur-sm pointer-events-none"></div>

            <div
              className="relative rounded-3xl overflow-hidden aspect-3/4 shadow-2xl border border-white/5 bg-stone-900"
              id="story-cover"
            >
              <img
                src={storytelling.imageUrl}
                alt={storytelling.imageAlt}
                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Sticker with a deep emotional spark */}
            <div
              className="absolute -bottom-6 -right-6 bg-[#141416]/95 backdrop-blur-md border border-luxury-brand/15 rounded-2xl p-4 shadow-2xl max-w-60 text-right transition-transform duration-300 group-hover:-translate-y-0.5"
              id="story-floating-badge"
            >
              <div className="flex items-center gap-1 text-luxury-brand mb-1">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider">
                  الأثر الحقيقي
                </span>
              </div>
              <p className="text-stone-300 font-headline text-xs font-semibold leading-relaxed">
                عودة الارتياح الزوجي ليس ترفاً، بل هو شريان الحياة في زمن كثرت
                فيه المشغلات الرقمية.
              </p>
            </div>
          </motion.div>

          {/* Emotional Copy Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-right"
            id="storytelling-narrative-column"
          >
            <span className="text-luxury-brand font-headline font-bold text-xs uppercase tracking-wider bg-luxury-brand/10 border border-luxury-brand/20 rounded-full px-4 py-1.5 inline-block mb-4">
              فلسفتنا وراء الرحلة
            </span>

            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#F5F2ED] mb-4">
              {storytelling.title}
            </h2>

            <h3 className="font-headline font-semibold text-base sm:text-lg text-luxury-brand mb-6 leading-relaxed">
              {storytelling.subtitle}
            </h3>

            {/* Interactive Narrative paragraphs with elegant padding */}
            <div
              className="space-y-4 text-stone-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl font-sans"
              id="narrative-paragraphs"
            >
              {storytelling.paragraphs.map((p, idx) => (
                <p key={idx} className="text-stone-300">
                  {p}
                </p>
              ))}
            </div>

            {/* Premium Blockquote Card */}
            <div
              className="bg-[#141416]/80 border-r-4 border-luxury-brand p-5 rounded-l-2xl text-right max-w-xl shadow-2xl border relative"
              id="editorial-quote-frame"
            >
              <Quote className="w-8 h-8 text-luxury-brand/10 absolute -top-3 -left-2 transform" />
              <p className="italic text-stone-300 text-xs sm:text-sm font-sans leading-relaxed mb-2">
                " {storytelling.quote.text} "
              </p>
              <span className="text-[10px] font-headline font-bold text-luxury-brand block">
                — {storytelling.quote.author}
              </span>
            </div>
          </motion.div>

          {/* Decorative end line block separator */}
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
