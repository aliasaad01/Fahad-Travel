/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export const AccreditationBanner = () => {
  return (
    <div
      className="w-full bg-[#F4F0E6] py-4 border-y border-luxury-brand/40 select-none overflow-hidden"
      dir="rtl"
      id="accreditation-trust-banner"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#8A6F48]/40 shadow-xs text-[#634E32]">
            <Award className="w-4 h-4" />
          </div>

          <h4 className="font-headline font-bold text-xs sm:text-sm lg:text-base text-[#111112] tracking-wide flex flex-wrap items-center justify-center gap-2">
            <span>وكالة سفر وسياحة سعودية معتمدة ومصرحة من</span>
            <div className="flex items-center gap-1.5">
              {/* شارات بنصوص واضحة وتكبير الخط قليلاً لراحة العين */}
              <span className="text-[#3E301E] bg-[#8A6F48]/15 px-2.5 py-0.5 rounded-md border border-[#8A6F48]/40 font-extrabold text-xs">
                وزارة التجارة
              </span>
              <span className="text-[#111112] font-sans text-xs font-bold">
                و
              </span>
              <span className="text-[#3E301E] bg-[#8A6F48]/15 px-2.5 py-0.5 rounded-md border border-[#8A6F48]/40 font-extrabold text-xs">
                وزارة السياحة
              </span>
            </div>
          </h4>

          <div className="hidden md:flex items-center gap-1.5 text-xs font-sans font-bold text-[#222225] bg-white px-3 py-1 rounded-full border border-luxury-brand/40">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>تعاملات رسمية وحجوزات آمنة 100%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccreditationBanner;
