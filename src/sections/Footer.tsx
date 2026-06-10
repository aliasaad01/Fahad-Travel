/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp } from "lucide-react";
import { Logo } from "../components/Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className="bg-[#12100E] text-stone-400 py-10 sm:py-12 border-t border-white/5 select-none"
      dir="rtl"
      id="app-footer"
    >
      <div className="container mx-auto px-4">
        {/* Top footer row - Centered on Mobile / Justified on Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/5">
          {/* Logo brand */}
          <div className="shrink-0 scale-95 sm:scale-100">
            <Logo light />
          </div>

          {/* Core values & Navigation links - Mobile-First Layout */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 sm:flex sm:flex-wrap sm:items-center sm:gap-4 md:gap-6 text-[11px] sm:text-xs font-headline font-semibold text-stone-300 text-center sm:text-right w-full md:w-auto px-4 sm:px-0">
            <button
              className="hover:text-luxury-brand transition-colors cursor-pointer text-center focus:outline-none"
              onClick={() =>
                handleScrollToSection("packages-experiences-section")
              }
            >
              الباقات الزوجية
            </button>
            <span className="hidden sm:inline text-stone-600">•</span>
            <button
              className="hover:text-luxury-brand transition-colors cursor-pointer text-center focus:outline-none"
              onClick={() => handleScrollToSection("problem-empathy-section")}
            >
              الفلسفة
            </button>
            <span className="hidden sm:inline text-stone-600">•</span>
            <button
              className="hover:text-luxury-brand transition-colors cursor-pointer text-center focus:outline-none"
              onClick={() => handleScrollToSection("fears-removal-section")}
            >
              الخصوصية والأمان
            </button>
            <span className="hidden sm:inline text-stone-600">•</span>
            <button
              className="hover:text-luxury-brand transition-colors cursor-pointer text-center focus:outline-none"
              onClick={() => handleScrollToSection("faq-accordion-section")}
            >
              أسئلة شائعة
            </button>
          </div>

          {/* Quick scroll up */}
          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-luxury-brand/10 hover:text-luxury-brand border border-white/10 flex items-center justify-center transition-colors text-white cursor-pointer active:scale-95 focus:outline-none mt-2 md:mt-0"
            aria-label="الرجوع لأعلى الصفحة"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom row copyright details - Mobile Centered */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 sm:pt-8 text-[10px] text-stone-500 font-sans text-center md:text-right">
          <div className="space-y-1">
            <p className="leading-relaxed">
              © {currentYear} تآلُف للسياحة الزوجية الفاخرة في تركيا. جميع
              الحقوق محفوظة.
            </p>
            <p className="text-stone-600 leading-relaxed max-w-md mx-auto md:mx-0">
              نصمم برقي وحذر لتعودوا كأكثر الأزواج قرباً وأمتن حكاية.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 text-stone-600">
            <span className="hover:text-stone-400 cursor-pointer transition-colors">
              سياسة الخصوصية الأسرية
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="hover:text-stone-400 cursor-pointer transition-colors">
              اتفاقية سرية البيانات
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="text-stone-600 hover:text-stone-500 select-all pt-1 sm:pt-0">
              ترخيص السياحة رقم (KSA/TR-7281)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
