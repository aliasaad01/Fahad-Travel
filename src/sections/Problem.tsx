/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Compass,
  HelpCircle,
  FileX,
  ShieldX,
  Hourglass,
  CheckCircle2,
} from "lucide-react"; // تصحيح الأيقونات المكررة والمغلوطة
import { motion } from "framer-motion"; // الحزمة القياسية والمستقرة في المشروع
import { landingPageContent } from "../data/content";

export const Problem = () => {
  const { problem } = landingPageContent;

  const icons = [
    <Hourglass className="w-6 h-6 text-rose-500" />,
    <HelpCircle className="w-6 h-6 text-rose-500" />,
    <FileX className="w-6 h-6 text-rose-500" />,
    <ShieldX className="w-6 h-6 text-rose-500" />,
  ];

  return (
    <section
      className="py-20 bg-[#0A0A0B] text-stone-300 relative select-none"
      dir="rtl"
      id="problem-empathy-section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {/* <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-rose-400 font-headline font-bold text-xs uppercase tracking-wider bg-rose-950/45 border border-rose-800/40 rounded-full px-4 py-1.5 inline-block mb-4">
            تحديات رحلات الأزواج المعتادة
          </span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#F5F2ED] leading-tight mb-4">
            {problem.title}
          </h2>
          <p className="text-sm text-stone-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {problem.introText}
          </p>
        </div> */}

        {/* Glowing Majestic Solution Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-linear-to-l from-[#141416] via-stone-900 to-[#141416] border border-luxury-brand/15 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl shadow-black/50"
          id="problem-solution-gold-card"
        >
          {/* Subtle gold shine in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-brand/5 rounded-full filter blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-luxury-brand/15 border border-luxury-brand/30 flex items-center justify-center mb-4 text-luxury-brand">
              <CheckCircle2 className="w-6 h-6 animate-pulse" />
            </div>

            <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mb-3">
              {problem.solutionSummary}
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-6 font-sans">
              سفينة واحدة، قبطان واحد خبير، ومسار سائل ينساب كالماء. نتحمل عنكم
              مرارة التنسيق والاتصالات والمناقشات لتدخلوا الباب معاً ممسكي
              الأيادي في سكينة لا تُشترى.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center text-[11px] text-luxury-brand font-headline font-medium">
              <span className="bg-luxury-brand/5 px-2 py-1 rounded-md">
                ✓ لا مجموعات سياحية خانقة
              </span>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span className="bg-luxury-brand/5 px-2 py-1 rounded-md">
                ✓ لا تكرار للخيارات التجارية
              </span>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span className="bg-luxury-brand/5 px-2 py-1 rounded-md">
                ✓ لا مفاجآت مالية غامضة
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
