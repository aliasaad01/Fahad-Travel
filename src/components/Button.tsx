/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { cn } from "../utils/cn";

const baseStyles =
  "inline-flex items-center justify-center font-headline font-semibold rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] select-none touch-manipulation";

const variants = {
  primary:
    "bg-[#1A1A1E] text-[#FAF8F5] border-[#1A1A1E] md:hover:bg-[#2D2D32] md:hover:border-[#2D2D32] shadow-sm focus:ring-[#1A1A1E]",

  secondary:
    "bg-[#8A6F48] text-white border-[#8A6F48] md:hover:bg-[#735C3A] md:hover:border-[#735C3A] shadow-sm focus:ring-[#8A6F48]",

  outline:
    "bg-white/40 text-[#1A1A1E] border-[#C5A880]/40 md:hover:bg-[#1A1A1E] md:hover:text-[#FAF8F5] md:hover:border-[#1A1A1E] focus:ring-[#1A1A1E]",

  whatsapp:
    "bg-[#20aa52] text-white border-[#1c9648] md:hover:bg-[#198741] shadow-[0_4px_14px_rgba(32,170,82,0.18)] focus:ring-[#20aa52]",

  ghost:
    "bg-transparent text-[#1A1A1E] border-transparent md:hover:bg-[#8A6F48]/5 focus:ring-[#1A1A1E]",
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
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      )}

      {!isLoading && leftIcon && (
        <span className="flex items-center shrink-0 w-4 h-4 sm:w-5 sm:h-5 justify-center">
          {leftIcon}
        </span>
      )}

      <span className="whitespace-nowrap truncate max-w-full px-0.5">
        {children}
      </span>

      {!isLoading && rightIcon && (
        <span className="flex items-center shrink-0 w-4 h-4 sm:w-5 sm:h-5 justify-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
