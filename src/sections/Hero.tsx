/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowLeft, Heart, Sparkles, ShieldCheck } from "lucide-react";
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
    const encoded = encodeURIComponent(
      "رحلات فهد للأزواج. أود الحصول على استشارة حول تنظيم وتصميم رحلة فاخرة لنا.",
    );
    window.open(`https://wa.me/966567000039?text=${encoded}`, "_blank");
  };

  return (
    <section
      // تدرج لوني دافئ وفخم يبدأ من العاجي الناعم ويمر بالرمادي الرملي لمنح طابع اتساع وانشراح
      className="relative min-h-screen flex items-center bg-linear-to-b from-[#FAF8F5] via-[#F4F0E6] to-[#EBE5D8] text-[#1A1A1E] pt-24 pb-12 sm:pb-16 overflow-hidden md:px-6 select-none"
      dir="rtl"
      id="hero-travel-section"
    >
      {/* توهجات ضوئية ناعمة لكسر حدة الخلفية الفاتحة وإعطاء عمق بصري رومانسي */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.2),transparent_55%)] pointer-events-none" />
      {/* Refactor: استبدال المتغير القديم بلون البراند البرونزي المدعوم بدقة للبلور */}
      <div className="absolute -bottom-48 -left-48 w-72 h-72 sm:w-96 sm:h-96 bg-[#8A6F48]/10 rounded-full filter blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 sm:gap-12 items-center">
          {/* الكتلة النصية اليمنى */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-center sm:text-right justify-center order-1"
          >
            {/* شارة التميز العلوية - خلفية برونزية شفافة مع نص واضح متناسق */}
            <div className="inline-flex items-center gap-1.5 bg-luxury-brand/15 border border-luxury-brand/30 rounded-full px-4 py-1.5 self-center sm:self-start mb-5 text-[#8A6F48] shadow-xs">
              <span className="text-[10px] sm:text-xs font-headline font-bold tracking-wide">
                هل تعبت من كثر البحث في المواقع؟
              </span>
            </div>

            {/* العنوان الرئيسي: تم توحيد الدرجة الداكنة الملكية العميقة #1A1A1E لتبرز بوضوح مذهل فوق الكريمي */}
            <h1
              className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1E] leading-tight sm:leading-[1.2] mb-4 sm:mb-6 tracking-tight"
              id="hero-main-title"
            >
              باقات رحلات فهد مخصصة للأزواج
            </h1>

            {/* النص الفرعي التمهيدي: رمادي فخم داكن يحقق أعلى درجات التباين والراحة أثناء القراءة */}
            <p className="text-[#4A4A4F] text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed mb-6 sm:mb-8 font-sans">
              باقات فهد تفكك من كثر البحث في المواقع وتخليك مرتاح وواثق بنفسك
              طول الرحلة.
            </p>

            {/* الأزرار التفاعلية لشاشات الكمبيوتر */}
            <div className="flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md sm:max-w-none mx-auto sm:mx-0 w-full hidden lg:flex">
              <Button
                variant="whatsapp"
                size="lg"
                shimmer
                onClick={handleWhatsAppClick}
                rightIcon={<FaWhatsapp className="w-6 h-6 text-white" />}
                className="text-white text-xs sm:text-sm py-3.5 sm:py-4 px-6 sm:px-8 border border-[#20aa52] shadow-[0_8px_20px_rgba(32,170,82,0.15)] font-bold transition-all"
              >
                {hero.ctaPrimaryText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onExplorePackages}
                leftIcon={
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 transform rotate-180" />
                }
                // تعديل زر الـ Outline ليصبح بلون برونزي غامق متناغم تماماً مع هوية البراند الفاتحة
                className="text-[#8A6F48] border-luxury-brand/50 hover:bg-[#8A6F48] hover:text-white hover:border-[#8A6F48] text-xs sm:text-sm py-3 sm:py-4 font-bold bg-white/40 backdrop-blur-xs transition-all duration-300"
              >
                {hero.ctaSecondaryText}
              </Button>
            </div>

            {/* عناصر الثقة والأمان - خط فاصل ناعم باللون الرمادي الدافئ */}
            <div className="grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#D6CFC4] pt-5 text-[#5A5A60] text-[11px] sm:text-xs font-medium text-right max-w-md sm:max-w-none mx-auto sm:mx-0 w-full hidden lg:grid">
              <div className="flex items-center gap-2 justify-center sm:justify-start hover:text-[#8A6F48] transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#8A6F48] shrink-0" />
                <span>{hero.trustBullet1.replace("★ ", "")}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start hover:text-[#8A6F48] transition-colors">
                <Heart className="w-4 h-4 text-[#8A6F48] shrink-0" />
                <span>{hero.trustBullet2.replace("★ ", "")}</span>
              </div>
            </div>
          </motion.div>

          {/* الكتلة البصرية اليسرى (الصورة والبطاقة العائمة) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col justify-center items-center order-2 mt-2 lg:mt-0"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-luxury-brand/15 filter blur-2xl rounded-3xl opacity-40 pointer-events-none" />

            {/* إطار الصورة بلون أبيض ناصع نقي وظل ناعم جداً لفصلها عن الخلفية بشكل راقٍ */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/5 w-full max-w-72.5 sm:max-w-md shadow-2xl border-[3px] sm:border-[6px] border-white shadow-[#C4BCB0]/40 mb-6 lg:mb-0">
              <img
                src={hero.heroImageUrl}
                alt="الأزواج في رحلة حالمة فريدة مع رحلات فهد"
                className="w-full h-full object-cover transition-all duration-1000 hover:scale-103"
                referrerPolicy="no-referrer"
              />

              {/* البطاقة العائمة: خلفية بيضاء بلورية فائقة النقاء مع نصوص متباينة للغاية وفخمة */}
              <div className="absolute bottom-2 right-2 left-2 sm:bottom-4 sm:right-4 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white shadow-xl text-right">
                <p className="text-[#8A6F48] text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider mb-1">
                  لحظة حية للأزواج
                </p>
                <p className="text-[#2D2D32] font-headline text-[11px] sm:text-xs font-semibold leading-relaxed">
                  استيقظ برفقة شريك حياتك على إطلالة ساحرة وصباح هادئ، وسط أجواء
                  من الراحة الرومانسية المطلقة التي تليق بكما وتتحول فوراً إلى
                  ذكريات لا تُنسى مع رحلات فهد.
                </p>
              </div>
            </div>

            {/* أزرار وعناصر الجوال متناسقة ومريحة للمس والعين */}
            <div className="flex flex-col gap-3 w-full max-w-72.5 sm:max-w-md lg:hidden">
              <Button
                variant="whatsapp"
                size="lg"
                shimmer
                onClick={handleWhatsAppClick}
                rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
                className="text-white text-xs py-3.5 px-6 border border-[#20aa52] shadow-[0_8px_20px_rgba(32,170,82,0.15)] font-bold w-full"
              >
                {hero.ctaPrimaryText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onExplorePackages}
                leftIcon={
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5 transform rotate-180" />
                }
                className="text-[#8A6F48] border-luxury-brand/50 text-xs py-3.5 font-bold w-full bg-white/60"
              >
                {hero.ctaSecondaryText}
              </Button>

              {/* عوامل ثقة الجوال */}
              <div className="grid grid-cols-2 gap-2 pt-4 text-[#5A5A60] text-[10px] font-medium text-right w-full border-t border-[#D6CFC4] mt-2">
                <div className="flex items-center gap-1.5 justify-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A6F48] shrink-0" />
                  <span>{hero.trustBullet1.replace("★ ", "")}</span>
                </div>
                <div className="flex items-center gap-1.5 justify-start">
                  <Heart className="w-3.5 h-3.5 text-[#8A6F48] shrink-0" />
                  <span>{hero.trustBullet2.replace("★ ", "")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* نهاية القسم المتلاشية بنعومة تامّة مع الأقسام التالية */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-linear-to-t from-white/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
