/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp } from "lucide-react"; // تنظيف الأيقونات غير المستخدمة
import { Logo } from "../components/Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // دالة انتقال ذكية وآمنة تعتمد على الـ ID الخاص بكل سكشن
  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className="bg-[#12100E] text-stone-400 py-12 border-t border-white/5 select-none"
      dir="rtl"
      id="app-footer"
    >
      <div className="container mx-auto px-4">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Logo brand */}
          <Logo light />

          {/* Core values & Navigation links */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] sm:text-xs font-headline font-semibold text-stone-300">
            <span
              className="hover:text-luxury-brand transition-colors cursor-pointer"
              onClick={() =>
                handleScrollToSection("packages-experiences-section")
              }
            >
              الباقات الزوجية
            </span>
            <span>•</span>
            <span
              className="hover:text-luxury-brand transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("problem-empathy-section")}
            >
              الفلسفة
            </span>
            <span>•</span>
            <span
              className="hover:text-luxury-brand transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("fears-removal-section")}
            >
              الخصوصية والأمان
            </span>
            <span>•</span>
            <span
              className="hover:text-luxury-brand transition-colors cursor-pointer"
              onClick={() => handleScrollToSection("faq-accordion-section")}
            >
              شروح شائعة
            </span>
          </div>

          {/* Quick scroll up */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-brand/10 hover:text-luxury-brand border border-white/10 flex items-center justify-center transition-colors text-white cursor-pointer active:scale-95 focus:outline-none"
            aria-label="الرجوع لأعلى الصفحة"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom row copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[10px] text-stone-500 font-sans">
          <div className="text-right">
            <p>
              © {currentYear} تآلُف للسياحة الزوجية الفاخرة في تركيا. جميع
              الحقوق محفوظة.
            </p>
            <p className="mt-1 text-stone-600">
              نصمم برقي وحذر لتعودوا كأكثر الأزواج قرباً وأمتن حكاية.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-stone-600">
            <span className="hover:text-stone-400 cursor-pointer transition-colors">
              سياسة الخصوصية الأسرية
            </span>
            <span>|</span>
            <span className="hover:text-stone-400 cursor-pointer transition-colors">
              اتفاقية سرية البيانات
            </span>
            <span>|</span>
            <span className="text-stone-600 hover:text-stone-500 select-all">
              ترخيص السياحة رقم (KSA/TR-7281)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
