/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react"; // أبقينا فقط الأيقونة المستخدمة فعلياً
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "../utils/cn"; // دالة الدمج المعتمدة بمشروعنا

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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // استخدام passive لتحسين أداء السكرول في المتصفح
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppDirect = () => {
    const encoded = encodeURIComponent(
      "مرحباً تآلُف، أريد استشارتكم لتصميم رحلة استثنائية للأزواج بتركيا.",
    );
    window.open(`https://wa.me/966500000000?text=${encoded}`, "_blank");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-all duration-300 bg-transparent py-5",
        scrolled &&
          "bg-[#1E1A17]/90 backdrop-blur-md py-3 shadow-md border-b border-white/5",
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding Logo - تم تمرير رابط للاستفادة من ميزته الجديدة */}
        <Logo light href="#" />

        {/* Action button menu */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onExplorePackages}
            className={cn(
              "text-xs font-semibold text-white/80 hover:text-white",
              scrolled && "text-stone-300",
            )}
          >
            اكتشف الباقات
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenInquiry}
            className="text-amber-950 text-xs py-2 shadow-md hover:scale-[1.02] hidden sm:inline-flex"
          >
            صمم برنامجي المخصص
          </Button>

          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppDirect}
            rightIcon={<MessageSquare className="w-4 h-4 ml-1" />}
            className="text-xs py-2 shadow-[0_4px_10px_rgba(37,211,102,0.15)] hover:scale-[1.02]"
          >
            استشارة واتساب
          </Button>
        </div>
      </div>
    </nav>
  );
};
