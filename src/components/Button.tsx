import React from "react";
import { cn } from "../utils/cn";

// 1. نقل الكلاسات خارج المكون لمنع إعادة تعريفها في الذاكرة
const baseStyles =
  "inline-flex items-center justify-center font-headline font-semibold rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants = {
  primary:
    "bg-luxury-dark text-luxury-cream border-luxury-dark hover:bg-stone-800 hover:border-stone-800 shadow-sm focus:ring-luxury-dark",
  secondary:
    "bg-luxury-brand text-luxury-dark border-luxury-brand hover:bg-luxury-brand-hover hover:border-luxury-brand-hover shadow-sm focus:ring-luxury-brand",
  outline:
    "bg-transparent text-luxury-dark border-luxury-dark/20 hover:bg-luxury-dark hover:text-luxury-cream hover:border-luxury-dark focus:ring-luxury-dark",
  whatsapp:
    "bg-[#25D366] text-white border-[#24c15d] hover:bg-[#20ba5a] shadow-[0_4px_14px_rgba(37,211,102,0.3)] focus:ring-[#25D366]",
  ghost:
    "bg-transparent text-luxury-dark border-transparent hover:bg-luxury-dark/5 focus:ring-luxury-dark",
};

const sizes = {
  sm: "px-4 py-1.5 text-xs gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
  xl: "px-10 py-4.5 text-lg gap-3",
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
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className, // الـ cn تضمن أن أي كلاس ممرر هنا يلغي الكلاسات المتضاربة السابقة بأمان
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* مؤشر التحميل */}
      {isLoading && (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      )}

      {/* الأيقونة اليسرى (تظهر فقط إذا لم يكن هناك تحميل) */}
      {!isLoading && leftIcon && (
        <span className="flex items-center shrink-0">{leftIcon}</span>
      )}

      {/* نص الزر */}
      <span>{children}</span>

      {/* الأيقونة اليمنى */}
      {!isLoading && rightIcon && (
        <span className="flex items-center shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};
