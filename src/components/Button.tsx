/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { cn } from "../utils/cn";

// 1. كلاسات القاعدة العامة التفاعلية مع دعم حماية الإبهام (Touch Devices) لباقات رحلات فهد
const baseStyles =
  "inline-flex items-center justify-center font-headline font-semibold rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] select-none touch-manipulation";

const variants = {
  primary:
    "bg-luxury-dark text-luxury-cream border-luxury-dark md:hover:bg-stone-800 md:hover:border-stone-800 shadow-sm focus:ring-luxury-dark",
  secondary:
    "bg-luxury-brand text-luxury-dark border-luxury-brand md:hover:bg-luxury-brand-hover md:hover:border-luxury-brand-hover shadow-sm focus:ring-luxury-brand",
  outline:
    "bg-transparent text-luxury-dark border-luxury-dark/20 md:hover:bg-luxury-dark md:hover:text-luxury-cream md:hover:border-luxury-dark focus:ring-luxury-dark",
  whatsapp:
    "bg-[#25D366] text-white border-[#24c15d] md:hover:bg-[#20ba5a] shadow-[0_4px_14px_rgba(37,211,102,0.2)] focus:ring-[#25D366]",
  ghost:
    "bg-transparent text-luxury-dark border-transparent md:hover:bg-luxury-dark/5 focus:ring-luxury-dark",
};

const sizes = {
  sm: "px-3.5 py-1.5 text-xs gap-1.5",
  md: "px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm gap-2",
  lg: "px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base gap-2.5",
  xl: "px-7 py-3.5 sm:px-10 sm:py-4.5 text-base sm:text-lg gap-3",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  shimmer?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  shimmer = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        shimmer &&
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/15 before:to-transparent",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* مؤشر التحميل - متناسق تلمسياً وحجمياً مع مقاس الأيقونة في واجهة رحلات فهد */}
      {isLoading && (
        <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      )}

      {/* الأيقونة اليسرى */}
      {!isLoading && leftIcon && (
        <span className="flex items-center shrink-0 w-4 h-4 sm:w-5 sm:h-5 justify-center">
          {leftIcon}
        </span>
      )}

      {/* نص الزر مع كسر السطور الآمن بالهواتف لتجربة حجز سلسة */}
      <span className="whitespace-nowrap truncate max-w-full px-0.5">
        {children}
      </span>

      {/* الأيقونة اليمنى */}
      {!isLoading && rightIcon && (
        <span className="flex items-center shrink-0 w-4 h-4 sm:w-5 sm:h-5 justify-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
