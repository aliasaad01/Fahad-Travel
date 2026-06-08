/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { cn } from "../utils/cn"; // دالة الدمج المعتمدة بمشروعنا

interface LogoProps {
  className?: string;
  light?: boolean;
  href?: string; // إضافة خيار لتمرير رابط إذا كان الشعار قابلاً للنقر
}

export const Logo = ({ className = "", light = false, href }: LogoProps) => {
  // المحتوى الداخلي للشعار
  const logoContent = (
    <>
      {/* الدائرة المكتوب فيها الحرف */}
      <div
        className={cn(
          "w-9 h-9 rounded-full flex items-center justify-center font-semibold text-lg transition-transform duration-500 hover:rotate-12 shrink-0",
          light
            ? "bg-luxury-brand text-luxury-dark shadow-[0_4px_12px_rgba(197,168,128,0.2)]"
            : "bg-luxury-dark text-luxury-brand shadow-[0_4px_12px_rgba(25,22,20,0.15)]",
        )}
      >
        ت
      </div>

      {/* النصوص والتاغلاين */}
      <div className="flex flex-col items-start leading-tight">
        <span
          className={cn(
            "font-headline font-bold text-xl tracking-tight",
            light ? "text-luxury-cream" : "text-luxury-dark",
          )}
        >
          تآلُف
        </span>
        <span
          className={cn(
            "text-[9px] tracking-[0.15em] font-sans font-medium uppercase",
            light ? "text-luxury-accent/80" : "text-luxury-brand",
          )}
        >
          Luxury Couples Travel
        </span>
      </div>
    </>
  );

  const containerClasses = cn(
    "flex items-center gap-2 select-none group", // إضافة group لعمل حركات تفاعلية عند تمرير الماوس مستقبلاً
    className,
  );

  // إذا تم تمرير رابط href، يتم رندرة الشعار كعنصر تفاعلي (رابط)
  if (href) {
    return (
      <a href={href} className={containerClasses}>
        {logoContent}
      </a>
    );
  }

  // وإلا يتم رندرته كـ div عادي
  return <div className={containerClasses}>{logoContent}</div>;
};
