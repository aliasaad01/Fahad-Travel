/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react"; // استخدام أيقونة المحادثة الدائرية للواتساب
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "../utils/cn";

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
      setScrolled(window.scrollY > 20); // الحساسية للموبايل تبدأ من 20 بكسل للتفاعل الأسرع
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppDirect = () => {
    const encoded = encodeURIComponent(
      "مرحباً تآلُف، أريد استشارتكم لتصميم رحلة استثنائية للأزواج بتركيا.",
    );
    window.open(`https://wa.me/963937237163?text=${encoded}`, "_blank");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-transparent py-4 select-none",
        scrolled &&
          "bg-[#1E1A17]/95 backdrop-blur-md py-2.5 shadow-md border-b border-white/5",
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding Logo - مرن ومتجاوب */}
        <div className="shrink-0 scale-90 sm:scale-100 origin-right">
          <Logo light href="#" />
        </div>

        {/* Action button menu - مرتب بنظام Mobile-First */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* زر اكتشف الباقات - مخفي افتراضياً في الموبايل الصغير ويظهر من شاشات sm */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onExplorePackages}
            className={cn(
              "text-[11px] sm:text-xs font-semibold text-white/80 hover:text-white hidden xs:inline-flex",
              scrolled && "text-stone-300",
            )}
          >
            اكتشف الباقات
          </Button>

          {/* زر صمم برنامجي المخصص - يظهر فقط في الشاشات المتوسطة والكبيرة */}
          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenInquiry}
            className="text-amber-950 text-[11px] sm:text-xs py-1.5 sm:py-2 font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all hidden md:inline-flex"
          >
            صمم برنامجي المخصص
          </Button>

          {/* زر استشارة واتساب - البطل الرئيسي المتاح دائماً لكل الشاشات والموبايل */}
          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppDirect}
            rightIcon={
              <MessageCircle className="w-4 h-4 ml-1 fill-white text-[#25D366]" />
            }
            className="text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-[0_4px_10px_rgba(37,211,102,0.15)] hover:scale-[1.02] active:scale-95 transition-all"
          >
            استشارة واتساب
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
