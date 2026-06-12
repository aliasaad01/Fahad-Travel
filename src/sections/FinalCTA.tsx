/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { InquiryForm } from "../components/InquiryForm";
import { Button } from "../components/Button";
import { FaWhatsapp } from "react-icons/fa";

type PackageIdType =
  | "pkg-memory"
  | "pkg-honeymoon"
  | "pkg-luxury"
  | "pkg-custom";

interface FinalCTAProps {
  selectedPackageId?: PackageIdType;
  onSuccessSubmit?: (data: any) => void;
}

export const FinalCTA = ({
  selectedPackageId = "pkg-memory",
  onSuccessSubmit,
}: FinalCTAProps) => {
  const handleWhatsAppDirect = () => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: "conversion_whatsapp_click",
        buttonLocation: "FinalCTA Section", // أو الفوتر حسب الكرت
      });
    }

    // نص الرسالة متوافق تماماً مع رغبة العميل بالتخلص من الحيرة والبحث
    const baseMsg =
      "مرحباً رحلات فهد، أود التخلص من حيرة البحث وتصميم رحلة زوجية فاخرة ومخصصة لنا.";
    const encoded = encodeURIComponent(baseMsg);
    window.open(`https://wa.me/966567000039?text=${encoded}`, "_blank");
  };

  return (
    <section
      className="py-12 sm:py-24 bg-linear-to-b from-luxury-dark via-stone-900 to-[#12100E] text-white relative overflow-hidden select-none"
      dir="rtl"
      id="final-closing-section"
    >
      {/* الخلفيات الجمالية المحيطة */}
      <div className="absolute top-0 right-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-luxury-brand/10 rounded-full filter blur-[80px] sm:blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-rose-900/10 rounded-full filter blur-[80px] sm:blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* عمود المحتوى النصي والإقناعي - الموبايل أولاً */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-right order-2 lg:order-1"
          >
            {/* الشارة العلوية مستوحاة من كلمات العميل */}
            <div className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/30 rounded-full px-3 py-1 text-rose-300 mb-4 sm:mb-6 font-headline font-bold text-[10px] sm:text-xs">
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
              <span>استعيدوا دفء القرب والراحة الأبدية</span>
              <span>❤️</span>
            </div>

            {/* العنوان الموجه لإنهاء مشكلة الحيرة في البحث */}
            <h2 className="font-headline font-extrabold text-xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4 sm:mb-6">
              احجز الآن وتخلص من كثرة البحث والحيرة
            </h2>

            {/* الوصف الفرعي المعبر عن الشغف والانسجام والراحة */}
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-lg font-sans">
              ودعوا عناء التنسيق وساعات الضياع بين المواقع؛ دعوا خبراء رحلات فهد
              يرسمون لكم فصلاً استثنائياً من الراحة والأمان يرافقكما منذ لحظة
              وصولكما إلى المطار وحتى العودة.
            </p>

            {/* كروت القيمة المضافة لتوثيق الأمان والترتيب المضمون */}
            <div className="space-y-3 max-w-md mb-6 sm:mb-8">
              {/* الكرت الأول: الموثوقية السعودية الرسمية المنظمة */}
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand shrink-0 mt-0.5" />
                <div className="text-right">
                  <h4 className="font-headline font-bold text-xs text-white">
                    وكالة سعودية رقمية معتمدة
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-400 font-sans mt-0.5 leading-relaxed">
                    نعمل برخص رسمية ومعايير تنظيمية صارمة لتضمنوا أعلى درجات
                    الأمان المالي والقانوني لرحلتكم.
                  </p>
                </div>
              </div>

              {/* الكرت الثاني: ضمان الترتيب الكامل 100% لإزالة مخاوف البحث */}
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand shrink-0 mt-0.5" />
                <div className="text-right">
                  <h4 className="font-headline font-bold text-xs text-white">
                    تسافر بثقة وحجوزات مرتبة 100٪
                  </h4>
                  <p className="text-[10px] sm:text-xs text-stone-400 font-sans mt-0.5 leading-relaxed">
                    نعتني بكامل تفاصيل الطيران، الفنادق الفاخرة، والتنقلات الخاص
                    لتنعم بحضور واثق وذهن صافٍ طوال الرحلة.
                  </p>
                </div>
              </div>
            </div>

            {/* الخيار البديل للتواصل عبر الواتساب مباشرة وبشكل ودي */}
            <div className="flex flex-col gap-2 relative max-w-sm">
              <p className="text-[10px] sm:text-xs text-stone-400 font-sans">
                تفضل النقاش المباشر والودي دون نماذج؟
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppDirect}
                rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
                className="text-white text-xs py-3 sm:py-3.5 font-bold shadow-[0_4px_15px_rgba(37,211,102,0.1)] active:scale-[0.99] transition-all"
              >
                استشارة فورية عبر الواتساب
              </Button>
            </div>
          </motion.div>

          {/* نموذج الطلب الذهبي - الموضع الثاني في شاشات العرض الكبيرة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 mb-4 lg:mb-0"
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

export default FinalCTA;
