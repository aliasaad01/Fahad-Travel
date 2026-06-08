/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { cn } from "../utils/cn";

interface LogoProps {
  className?: string;
  light?: boolean;
  href?: string;
}

export const Logo = ({ className = "", light = false, href }: LogoProps) => {
  // المحتوى الداخلي للشعار المصقول للأجهزة الذكية والمكتبية
  const logoContent = (
    <>
      {/* الدائرة المكتوب فيها الحرف مع حماية ثابتة ضد الانضغاط */}
      <div
        className={cn(
          "w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-headline font-bold text-base sm:text-lg transition-transform duration-500 md:group-hover:rotate-12 shrink-0 select-none",
          light
            ? "bg-luxury-brand text-luxury-dark shadow-[0_4px_12px_rgba(197,168,128,0.2)]"
            : "bg-luxury-dark text-luxury-brand shadow-[0_4px_12px_rgba(25,22,20,0.15)]",
        )}
      >
        ت
      </div>

      {/* النصوص والتاغلاين الموائم للمساحات الضيقة */}
      <div className="flex flex-col items-start leading-tight text-right select-none">
        <span
          className={cn(
            "font-headline font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-0.5",
            light ? "text-luxury-cream" : "text-luxury-dark",
          )}
        >
          تآلُف
        </span>
        <span
          className={cn(
            "text-[7.5px] sm:text-[9px] tracking-widest sm:tracking-[0.15em] font-sans font-semibold uppercase leading-none block whitespace-nowrap",
            light ? "text-luxury-accent/80" : "text-luxury-brand",
          )}
        >
          Luxury Couples Travel
        </span>
      </div>
    </>
  );

  const containerClasses = cn(
    "flex items-center gap-2 select-none group touch-manipulation shrink-0",
    className,
  );

  // إذا تم تمرير رابط href، يتم رندرة الشعار كعنصر تفاعلي آمن تلمسياً
  if (href) {
    return (
      <a href={href} className={containerClasses}>
        {logoContent}
      </a>
    );
  }

  return <div className={containerClasses}>{logoContent}</div>;
};

export default Logo;
