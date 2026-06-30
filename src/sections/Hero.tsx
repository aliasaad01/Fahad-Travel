/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Heart, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";
import Button from "../components/Button";
import { FaWhatsapp } from "react-icons/fa";

interface HeroProps {
  onExplorePackages: () => void;
  onOpenInquiry: () => void;
}

export const Hero = ({ onExplorePackages, onOpenInquiry }: HeroProps) => {
  const { hero } = landingPageContent;

  const handleWhatsAppClick = () => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Engagement",
        event_label: "WhatsApp Consultation Button",
      });
    }

    const encoded = encodeURIComponent(
      "رحلات فهد للأزواج. أود الحصول على استشارة حول تنظيم وتصميم رحلة فاخرة لنا.",
    );
    window.open(`https://wa.me/966567000039?text=${encoded}`, "_blank");
  };

  const destinations = [
    { name: "لندن", code: "GB" },
    { name: "روسيا", code: "RU" },
    { name: "تركيا", code: "TR" },
    { name: "أذربيجان", code: "AZ" },
    { name: "المالديف", code: "MV" },
    { name: "الهند", code: "IN" },
    { name: "البوسنه", code: "BA" },
    { name: "جورجيا", code: "GE" },
    { name: "ألبانيا", code: "AL" },
    { name: "موريشيوس", code: "MU" },
    { name: "سريلانكا", code: "LK" },
    { name: "إندونيسيا", code: "ID" },
    { name: "تايلند", code: "TH" },
    { name: "كازاخستان", code: "KZ" },
    { name: "بولندا", code: "PL" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center bg-[#FAF8F5] text-[#1A1A1E] pt-12 pb-12 md:pt-16 lg:pt-24 overflow-hidden select-none"
      dir="rtl"
      id="hero-travel-section"
    >
      {/* 🖼️ صورة الخلفية للشاشات الصغيرة والمتوسطة (Mobile & Tablet) مع تأثير التلاشي للأسفل */}
      <div className="absolute top-0 left-0 right-0 h-[45vh] sm:h-[50vh] md:h-[55vh] lg:hidden z-0 overflow-hidden">
        <img
          src={hero.heroImageUrl}
          alt="رحلات فهد للأزواج"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* قناع التدرج الذي يدمج الصورة بلون الخلفية الأساسي (#FAF8F5) */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-[#FAF8F5]" />
      </div>

      {/* 💻 خلفية الشاشات الكبيرة فقط (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 bg-linear-to-b from-[#FAF8F5] via-[#F4F0E6] to-[#EBE5D8] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.2),transparent_55%)] pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#8A6F48]/10 rounded-full filter blur-[120px] pointer-events-none" />
      </div>

      {/* 🟢 حاوية المحتوى المشتركة الموزعة بذكاء لجميع الشاشات */}
      <div className="container mx-auto px-4 relative z-10 w-full mt-[15vh] sm:mt-[22vh] md:mt-[28vh] lg:mt-0">
        <div className="grid grid-cols-12 gap-y-6 md:gap-y-8 lg:gap-12 items-center">
          {/* العمود الرئيسي للنصوص والعناصر التفاعلية */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 flex flex-col text-center lg:text-right items-center lg:items-start justify-center max-w-xl mx-auto lg:mx-0"
          >
            {/* الشارة العلوية (Badge) */}
            <div className="inline-flex items-center gap-1.5 bg-white/90 lg:bg-luxury-brand/15 border border-[#D6CFC4]/60 lg:border-luxury-brand/30 rounded-full px-3.5 py-1.5 mb-4 text-[#1A1A1E] lg:text-[#8A6F48] shadow-xs backdrop-blur-xs">
              <span className="text-[11px] sm:text-xs font-headline font-bold tracking-wide">
                تخاف تحجز رحلة غير مناسبة وتفقد متعة إجازتك؟
              </span>
            </div>

            {/* النص الوصفي */}
            <p className="text-white/90 sm:text-[#4A4A4F] text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md lg:max-w-xl leading-relaxed mb-3 font-sans drop-shadow-xs lg:drop-shadow-none">
              في رحلات فهد نخطط لك كل تفاصيل رحلتك بعناية، لتسافر براحة وثقة،
              وتستمتع بتجربة تستحق الذكرى.
            </p>

            {/* العنوان الرئيسي - متجاوب الألوان والحجم عبر الشاشات المختلفة */}
            <h1 className="font-headline font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white lg:text-[#1A1A1E] leading-tight md:leading-snug lg:leading-tight mb-4 md:mb-6 tracking-tight drop-shadow-md lg:drop-shadow-none">
              باقات رحلات فهد مخصصة <br className="sm:hidden lg:block" />
              للأزواج
            </h1>

            {/* أزرار العمل التفاعلية - عمودية للهواتف وأفقية للتابلت والديسكتوب */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:max-w-md md:max-w-xl lg:max-w-none">
              <Button
                data-track="whatsapp-booking-cta"
                variant="whatsapp"
                size="lg"
                shimmer
                onClick={handleWhatsAppClick}
                rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
                className="text-white text-xs sm:text-sm py-3.5 px-3 sm:px-6 border border-[#20aa52] shadow-md font-bold transition-all w-full sm:w-1/2 lg:w-auto justify-center rounded-full"
              >
                تواصل عبر الواتساب للاستشارة
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onExplorePackages}
                leftIcon={
                  <ArrowLeft className="w-4 h-4 mr-1.5 transform rotate-180" />
                }
                className="text-gray-800 lg:text-[#8A6F48] border-[#D6CFC4] lg:border-luxury-brand/50 hover:bg-white lg:hover:bg-[#8A6F48] hover:text-black lg:hover:text-white text-xs sm:text-sm py-3.5 px-3 sm:px-6 font-bold bg-white/80 lg:bg-white/40 backdrop-blur-md transition-all duration-300 w-full sm:w-1/2 lg:w-auto justify-center rounded-full shadow-xs"
              >
                اكتشف الباقات الملهمة
              </Button>
            </div>

            {/* بطاقة ضمانات الثقة */}
            <div className="grid grid-cols-2 gap-3 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-4 lg:p-2 mt-6 lg:mt-8 border-y border-[#D6CFC4]/60 lg:border-[#D6CFC4] text-[#1A1A1E] lg:text-[#5A5A60] text-[10px] sm:text-xs font-bold lg:font-medium w-full shadow-xs lg:shadow-none text-right">
              <div className="flex flex-row items-center text-center sm:text-right gap-2 pl-1 sm:pl-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48] shrink-0" />
                <span className="leading-snug">
                  تنظيم خاص بالكامل بروح الخصوصية المطلقة للأزواج
                </span>
              </div>
              <div className="flex lex-row items-center text-center sm:text-right gap-2 sm:pr-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A6F48] shrink-0" />
                <span className="leading-snug">
                  رعاية مستمرة 24/7 لمرافقتكم من المطار والعودة للديار
                </span>
              </div>
            </div>

            {/* قسم الوجهات السياحية المتجاوب (ثنائي في الموبايل، ثلاثي في التابلت، مرن في الشاشات الكبيرة) */}
            <div className="flex flex-col gap-2.5 pt-4 w-full mt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A1E] justify-center lg:justify-start">
                <Globe className="w-4 h-4 text-[#8A6F48]" />
                <span>الوجهات المتاحة</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:flex lg:flex-wrap gap-2 w-full">
                {destinations.map((dest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center lg:justify-start gap-2 bg-white border border-[#E5E0D5] rounded-full px-3 py-2 lg:py-1.5 text-xs text-[#2D2D32] hover:border-[#8A6F48]/50 shadow-2xs hover:shadow-xs transition-all duration-200"
                  >
                    <span className="font-bold lg:font-medium truncate order-2">
                      {dest.name}
                    </span>
                    <img
                      src={`https://flagcdn.com/${dest.code.toLowerCase()}.svg`}
                      alt={dest.name}
                      className="w-4 h-3 object-cover rounded-xs order-1 shrink-0"
                      fetchPriority="high"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* بوابات الدفع تابي وتمارا */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 md:mt-8 border-t border-[#D6CFC4] pt-4 w-full justify-center lg:justify-start text-xs font-bold lg:font-medium text-[#5A5A60]">
              <span>تابي وتمارا - سافر الآن وادفع لاحقاً</span>
              <div className="flex gap-3">
                <div className="bg-white border border-[#EBE5D8]/50 px-6 py-2 rounded-2xl shadow-2xs flex items-center justify-center h-11 w-28 text-[#08b684] font-sans font-black text-xl tracking-tight select-none">
                  tabby
                </div>
                <div className="bg-white border border-[#EBE5D8]/50 px-3 py-2 rounded-2xl shadow-2xs flex items-center justify-center h-11 w-28 select-none">
                  <div className="bg-linear-to-r from-[#FFC3A0] via-[#FFAFBD] to-[#C9BBFF] px-4 py-0.5 rounded-full text-black font-sans font-extrabold text-xs tracking-tight shadow-3xs">
                    tamara
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* عمود البطاقة الإعلانية الجانبية - يظهر فقط في الشاشات الكبيرة (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:flex col-span-5 relative flex-col justify-center items-center"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 w-full shadow-2xl border-[6px] border-white shadow-[#C4BCB0]/40">
              <img
                src={hero.heroImageUrl}
                alt="الأزواج في رحلة حالمة فريدة مع رحلات فهد"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute bottom-4 right-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl text-right">
                <p className="text-[#8A6F48] text-[10px] font-sans font-bold uppercase tracking-wider mb-1">
                  لحظة حب للأزواج
                </p>
                <p className="text-[#2D2D32] font-headline text-xs font-semibold leading-relaxed">
                  استيقظ برفقة شريك حياتك على إطلالة ساحرة وصباح هادئ، وسط أجواء
                  من الراحة الرومانسية المطلقة التي تليق بكما وتتحول فوراً إلى
                  ذكريات لا تُنسى مع رحلات فهد.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
