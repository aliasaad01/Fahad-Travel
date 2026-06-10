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
      "نخبة السياحة الراقية للأزواج. أود استشارة حول تنظيم رحلة فاخرة للأزواج.",
    );
    window.open(`https://wa.me/963937237163?text=${encoded}`, "_blank");
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-linear-to-b from-[#1E1A17] via-stone-900 to-luxury-dark text-white pt-24 pb-12 sm:pb-16 overflow-hidden md:px-6 select-none"
      dir="rtl"
      id="hero-travel-section"
    >
      {/* Absolute decorative backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.14),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-72 h-72 sm:w-96 sm:h-96 bg-luxury-brand/10 rounded-full filter blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* الكتلة النصية اليمنى - تحتوي على العنوان والتفاصيل التمهيدية */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-center sm:text-right justify-center order-1"
          >
            {/* مؤشر النخبة والموثوقية */}
            <div className="inline-flex items-center gap-1.5 bg-luxury-brand/10 border border-luxury-brand/30 rounded-full px-3.5 py-1 self-center sm:self-start mb-5 text-luxury-brand shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] sm:text-xs font-headline font-semibold tracking-wide">
                {hero.badge}
              </span>
            </div>

            {/* العنوان الرئيسي الجذاب والمخصص بناءً على طلبك */}
            <h1
              className="font-headline font-extrabold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight sm:leading-[1.15] mb-4 sm:mb-6 tracking-tight drop-shadow-sm"
              id="hero-main-title"
            >
              لأن حبكما استثنائي.. يستحق رحلة تفوق الخيال
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-6 sm:mb-8 font-sans">
              نبتكر لأجلكما تفاصيل تفوق التوقعات، لتبدأ قصة جديدة من السعادة
              المشتركة والانسجام المطلق في أرقى بقاع العالم.
            </p>

            {/* الأزرار التفاعلية (CTA) وضعت أسفل النصوص والكتل المظهرية للتحويل المباشر */}
            <div className="flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md sm:max-w-none mx-auto sm:mx-0 w-full hidden lg:flex">
              <Button
                variant="whatsapp"
                size="lg"
                shimmer
                onClick={handleWhatsAppClick}
                rightIcon={<FaWhatsapp className="w-6 h-6 text-white" />}
                className="text-white text-xs sm:text-sm py-3.5 sm:py-4 px-6 sm:px-8 border border-[#24c15d] shadow-[0_8px_24px_rgba(37,211,102,0.2)] font-bold transition-all"
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
                className="text-luxury-brand border-luxury-brand/30 md:hover:bg-luxury-brand md:hover:text-luxury-dark md:hover:border-luxury-brand text-xs sm:text-sm py-3 sm:py-4 font-bold"
              >
                {hero.ctaSecondaryText}
              </Button>
            </div>

            {/* عوامل الثقة والأمان - للديسكتوب */}
            <div className="grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/5 pt-5 text-stone-400 text-[11px] sm:text-xs font-medium text-right max-w-md sm:max-w-none mx-auto sm:mx-0 w-full hidden lg:grid">
              <div className="flex items-center gap-2 justify-center sm:justify-start md:hover:text-luxury-brand transition-colors">
                <ShieldCheck className="w-4 h-4 text-luxury-brand shrink-0" />
                <span>{hero.trustBullet1.replace("★ ", "")}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start md:hover:text-luxury-brand transition-colors">
                <Heart className="w-4 h-4 text-luxury-brand shrink-0" />
                <span>{hero.trustBullet2.replace("★ ", "")}</span>
              </div>
            </div>
          </motion.div>

          {/* الكتلة البصرية اليسرى - تحتوي على الصورة الحالمة مع معالجة الترتيب الرأسي للهواتف */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col justify-center items-center order-2 mt-2 lg:mt-0"
          >
            {/* توهج الخلفية المحيط بالصورة */}
            <div className="absolute inset-0 bg-linear-to-tr from-luxury-brand/10 filter blur-2xl rounded-3xl opacity-50 pointer-events-none" />

            {/* حاوية الصورة الفاخرة */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/5 w-full max-w-72.5 sm:max-w-md shadow-2xl border-2 sm:border-4 border-luxury-dark/60 shadow-black/80 mb-6 lg:mb-0">
              <img
                src={hero.heroImageUrl}
                alt="الأزواج في رحلة حالمة فريدة"
                className="w-full h-full object-cover transition-all duration-1000 md:hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* البطاقة النصية العائمة الملهمة للأزواج */}
              <div className="absolute bottom-2 right-4 left-4 sm:bottom-4 sm:right-6 sm:left-6 bg-luxury-dark/80 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-right">
                <p className="text-luxury-brand text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider mb-0.5">
                  لحظة حية للأزواج
                </p>
                <p className="text-white font-headline text-[11px] sm:text-xs font-semibold leading-relaxed">
                  استيقظ برفقة شريك حياتك على إطلالة ساحرة وصباح هادئ، وسط أجواء
                  من الراحة والرومانسية المطلقة التي تليق بكما وتتحول فوراً إلى
                  ذكريات لا تُنسى.
                </p>
              </div>
            </div>

            {/* إظهار كتل الأزرار والـ CTA تحت الصورة مباشرة في شاشات الجوال لاتباع الترتيب المقترح بدقة */}
            <div className="flex flex-col gap-3 w-full max-w-72.5 sm:max-w-md lg:hidden">
              <Button
                variant="whatsapp"
                size="lg"
                shimmer
                onClick={handleWhatsAppClick}
                rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
                className="text-white text-xs py-3.5 px-6 border border-[#24c15d] shadow-[0_8px_24px_rgba(37,211,102,0.2)] font-bold w-full"
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
                className="text-luxury-brand border-luxury-brand/30 text-xs py-3.5 font-bold w-full"
              >
                {hero.ctaSecondaryText}
              </Button>

              {/* وثائق الثقة تحت أزرار الجوال */}
              <div className="grid grid-cols-2 gap-2 pt-4 text-stone-400 text-[10px] font-medium text-right w-full border-t border-white/5 mt-2">
                <div className="flex items-center gap-1.5 justify-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-luxury-brand shrink-0" />
                  <span>{hero.trustBullet1.replace("★ ", "")}</span>
                </div>
                <div className="flex items-center gap-1.5 justify-start">
                  <Heart className="w-3.5 h-3.5 text-luxury-brand shrink-0" />
                  <span>{hero.trustBullet2.replace("★ ", "")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave separator to blend seamlessly with Problem Section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-linear-to-t from-luxury-sand/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
