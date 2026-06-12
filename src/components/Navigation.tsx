/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "../utils/cn";
import { FaWhatsapp } from "react-icons/fa";

interface NavigationProps {
  onExplorePackages: () => void;
  onOpenInquiry: () => void;
}

export const Navigation = ({
  onExplorePackages,
  onOpenInquiry,
}: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // الحساسية للموبايل تبدأ من 20 بكسل للتفاعل الأسرع في موقع رحلات فهد
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppDirect = () => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: "conversion_whatsapp_click",
        buttonLocation: "Navigation Section", // أو الفوتر حسب الكرت
      });
    }

    const encoded = encodeURIComponent(
      "مرحباً رحلات فهد للأزواج، أريد استشارتكم لتصميم رحلة استثنائية راقية تضمن لنا الخصوصية والرفاهية المطلقة.",
    );
    window.open(`https://wa.me/966567000039?text=${encoded}`, "_blank");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-transparent py-4 select-none shadow-lg",
        // Refactor: إزالة الظلال الداكنة واستبدالها بتأثير زجاجي بحدود عاجية بالغة النعومة والجمال
        scrolled && "bg-[#FAF8F5]/95 backdrop-blur-md py-2.5 shadow-lg",
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding Logo - تم ضبط اللوجو ليتغير بناءً على التمرير أو ليلائم الثيم الفاتح */}
        <div className="shrink-0 scale-90 sm:scale-100 origin-right">
          <Logo light={!scrolled} href="#" />
        </div>

        {/* Action button menu - مرتب بنظام Mobile-First */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* زر اكتشف الباقات - تم توحيد اللون الحجري الداكن لتسهيل الرؤية التامة على الخلفية العاجية */}
          <Button
            data-track="whatsapp-booking-cta"
            variant="ghost"
            size="sm"
            onClick={onExplorePackages}
            className={cn(
              "text-[11px] sm:text-xs font-bold transition-colors hidden xs:inline-flex",
              // التناوب بين اللون الحجري الملكي والبرونزي الدافئ عند التحويم
              scrolled
                ? "text-[#1A1A1E] hover:text-[#8A6F48]"
                : "text-[#1A1A1E] hover:text-[#8A6F48]",
            )}
          >
            اكتشف الباقات الملهمة
          </Button>

          {/* زر استشارة واتساب - البطل الرئيسي المتاح دائماً لكل الشاشات والموبايل لرحلات فهد */}
          <Button
            data-track="whatsapp-booking-cta"
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppDirect}
            rightIcon={<FaWhatsapp className="w-4 h-4 sm:w-5 text-white" />}
            className="text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-[0_4px_12px_rgba(32,170,82,0.18)] hover:scale-[1.02] active:scale-95 transition-all font-bold"
          >
            استشارة واتساب فورية
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
