/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, Heart, Sparkles, ShieldCheck } from "lucide-react"; // تنظيف الأيقونة الزائدة
import { motion } from "framer-motion"; // استخدام الحزمة المعتمدة القياسية لـ Framer Motion
import { landingPageContent } from "../data/content";
import { InquiryForm } from "../components/InquiryForm";
import { Button } from "../components/Button";

// استيراد أو تعريف نفس نوع الباقات المدعوم في ملف الـ LandingPage والـ Zod Schema
type PackageIdType =
  | "pkg-memory"
  | "pkg-honeymoon"
  | "pkg-luxury"
  | "pkg-custom";

interface FinalCTAProps {
  selectedPackageId?: PackageIdType; // تحديث الـ Type هنا ليكون متوافقاً ومحمياً
  onSuccessSubmit?: (data: any) => void;
}

export const FinalCTA = ({
  selectedPackageId = "pkg-memory",
  onSuccessSubmit,
}: FinalCTAProps) => {
  const { finalCta } = landingPageContent;

  const handleWhatsAppDirect = () => {
    const encoded = encodeURIComponent(
      "مرحباً تآلُف، أود استشارة فورية لترتيب رحلة للأزواج في تركيا.",
    );
    window.open(`https://wa.me/966500000000?text=${encoded}`, "_blank");
  };

  return (
    <section
      className="py-24 bg-linear-to-b from-luxury-dark via-stone-900 to-[#12100E] text-white relative overflow-hidden"
      dir="rtl"
      id="final-closing-section"
    >
      {/* Visual background ambient details */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-luxury-brand/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-900/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Verbal closing argument column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-right"
          >
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-1.5 text-rose-300 mb-6 font-headline font-bold text-xs">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>
                {finalCta.headline.split("❤️")[0] || "استعيدوا دفء القرب الآن"}
              </span>
              <span>❤️</span>
            </div>

            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-6">
              تبدأ فصول الحكاية بلمسة شجاعة من يديك
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-sans">
              {finalCta.subheadline}
            </p>

            {/* Micro value badges */}
            <div className="space-y-4 max-w-md mb-8">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-luxury-brand shrink-0 mt-0.5" />
                <div className="text-right">
                  <h4 className="font-headline font-bold text-xs text-white">
                    ضمان سرية وخصوصية العائلات
                  </h4>
                  <p className="text-[10px] text-stone-400 font-sans mt-0.5">
                    معلوماتكم الشخصية وخطوط سير رحلتكم في تآلُف مغلقة تمامًا
                    ومحاطة بالخصوصية المطلقة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <Sparkles className="w-5 h-5 text-luxury-brand shrink-0 mt-0.5" />
                <div className="text-right">
                  <h4 className="font-headline font-bold text-xs text-white">
                    تصميم مخصص ١٠٠٪ مجاناً
                  </h4>
                  <p className="text-[10px] text-stone-400 font-sans mt-0.5">
                    مستشار الأزواج يصمم لك مسارًا مرناً ومفاجآت مبدئية مجانًا
                    بالكامل قبل اتخاذ قرار الدفع.
                  </p>
                </div>
              </div>
            </div>

            {/* Swift WhatsApp secondary fallback under the verbal content */}
            <div className="flex flex-col gap-2 relative max-w-sm">
              <p className="text-[10px] text-stone-400 font-sans">
                تفضل النقاش المباشر والودي دون نماذج؟
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppDirect}
                rightIcon={<MessageSquare className="w-5 h-5 ml-1.5" />}
                className="text-white text-xs py-3.5"
              >
                {finalCta.whatsappCtaText}
              </Button>
            </div>
          </motion.div>

          {/* Golden inquiry card column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <InquiryForm
              initialPackageId={selectedPackageId}
              onSuccessSubmit={onSuccessSubmit}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
