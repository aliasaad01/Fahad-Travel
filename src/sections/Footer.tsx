/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
      className="bg-[#111112] text-stone-300 py-10 sm:py-12 border-t border-[#8A6F48]/30 select-none"
      dir="rtl"
      id="app-footer"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div className="shrink-0 scale-95 sm:scale-100">
            <Logo light />
          </div>

          <div className="grid grid-cols-2 gap-y-3 gap-x-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 md:gap-6 text-xs font-headline font-bold text-white text-center sm:text-right w-full md:w-auto px-4 sm:px-0">
            <button
              className="hover:text-luxury-brand transition-colors duration-200 cursor-pointer focus:outline-none"
              onClick={() =>
                handleScrollToSection("packages-experiences-section")
              }
            >
              باقات رحلات فهد
            </button>
            <span className="hidden sm:inline text-stone-600">•</span>
            <button
              className="hover:text-luxury-brand transition-colors duration-200 cursor-pointer focus:outline-none"
              onClick={() =>
                handleScrollToSection("corporate-licenses-section")
              }
            >
              الامتثال والموثوقية
            </button>
            <span className="hidden sm:inline text-stone-600">•</span>
            <button
              className="hover:text-luxury-brand transition-colors duration-200 cursor-pointer focus:outline-none"
              onClick={() => handleScrollToSection("why-us-section")}
            >
              الثقة والأمان
            </button>
            <span className="hidden sm:inline text-stone-600">•</span>
            <button
              className="hover:text-luxury-brand transition-colors duration-200 cursor-pointer focus:outline-none"
              onClick={() => handleScrollToSection("faq-accordion-section")}
            >
              أسئلة شائعة
            </button>
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-luxury-brand hover:text-[#111112] border border-white/20 flex items-center justify-center transition-all text-white cursor-pointer"
              aria-label="الرجوع لأعلى الصفحة"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 sm:pt-8 text-[11px] text-stone-300 font-sans text-center lg:text-right">
          <div className="space-y-1">
            <p className="leading-relaxed font-medium">
              © {currentYear} رحلات فهد للأزواج - وكالة سفر وسياحة رقمية معتمدة.
              جميع الحقوق محفوظة.
            </p>
            <p className="text-stone-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              نهتم بكل تفاصيل رحلتكم الاستكشافية من لحظة الاستشارة الأولى وحتى
              العودة لتسافروا بطمأنينة مطلقة وحجوزات رسمية مؤكدة 100٪.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 text-stone-400 font-medium">
            <span className="hover:text-white cursor-pointer transition-colors duration-200">
              سياسة الخصوصية والسرية
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="hover:text-white cursor-pointer transition-colors duration-200">
              شروط الحجز والموافقات
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="text-stone-200 hover:text-luxury-brand select-all pt-1 sm:pt-0 font-bold font-sans tracking-wide transition-colors duration-200">
              مؤسسة عبدالله فهد مانع الدوسري (س.ت: 7038990573)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
