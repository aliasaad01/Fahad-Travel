/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { cn } from "../utils/cn";

interface LogoProps {
  className?: string;
  light?: boolean;
  href?: string;
}

export const Logo = ({ className = "", light = false, href }: LogoProps) => {
  const logoContent = (
    <>
      <div
        className={cn(
          "w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-500 md:group-hover:rotate-6 shrink-0 select-none",
          light
            ? "bg-[#8A6F48] text-white shadow-[0_4px_12px_rgba(138,111,72,0.15)]"
            : "bg-white text-[#1A1A1E] shadow-[0_4px_12px_rgba(26,26,30,0.06)] border border-luxury-brand/20",
        )}
      >
        <img
          src="/favicon.png"
          alt="رحلات فهد - Luxury Couples Travel Logo"
          className="w-full h-full object-cover rounded-full pointer-events-none"
        />
      </div>

      <div className="flex flex-col items-start leading-tight text-right select-none">
        <span
          className={cn(
            "font-headline font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-0.5 transition-colors duration-300 text-[#8A6F48]",
          )}
        >
          رحلات فهد للأزواج
        </span>
      </div>
    </>
  );

  const containerClasses = cn(
    "flex items-center gap-2 select-none group touch-manipulation shrink-0",
    className,
  );

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
