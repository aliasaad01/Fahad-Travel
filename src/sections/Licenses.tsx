/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Landmark, ShieldCheck, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export const Licenses = () => {
  const licenseData = {
    companyName: "مؤسسة عبدالله فهد مانع الدوسري",
    unifiedNumber: "7038990573",
    issueDate: "29/04/2024",
    entityType: "مؤسسة فردية مسجلة رسمياً",
  };

  return (
    <section
      className="py-16 sm:py-20 bg-linear-to-b from-[#EBE5D8] to-[#FAF8F5] text-[#1A1A1E] relative overflow-hidden select-none"
      dir="rtl"
      id="corporate-licenses-section"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-[#8A6F48]/10 border border-luxury-brand/30 rounded-full px-3.5 py-1 mb-3 text-[#8A6F48] text-xs font-bold shadow-3xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8A6F48]" />
            تراخيص وتوثيقات رسمية معتمدة
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-[#1A1A1E] tracking-tight">
            الامتثال القانوني والموثوقية التجارية
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white shadow-xl shadow-[#C4BCB0]/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-5">
            <div className="flex items-center gap-3 border-b border-[#D6CFC4]/40 pb-4">
              <div className="w-9 h-9 rounded-xl bg-luxury-brand/15 flex items-center justify-center text-[#8A6F48] border border-luxury-brand/20">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base text-[#1A1A1E]">
                  شهادة السجل التجاري الرئيسي
                </h3>
                <p className="text-[11px] text-[#5A5A60] font-sans mt-0.5">
                  مسجلة ومعتمدة لدى وزارة التجارة بالمملكة العربية السعودية
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-1">
              <div>
                <span className="block text-[11px] text-[#8A6F48] font-bold font-headline mb-0.5">
                  الاسم التجاري للمنشأة:
                </span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-[#2D2D32]">
                  {licenseData.companyName}
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-[#8A6F48] font-bold font-headline mb-0.5">
                  الرقم الوطني الموحد:
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#2D2D32] tracking-wider">
                  {licenseData.unifiedNumber}
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-[#8A6F48] font-bold font-headline mb-0.5">
                  تاريخ إصدار السجل:
                </span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-[#2D2D32]">
                  {licenseData.issueDate}
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-[#8A6F48] font-bold font-headline mb-0.5">
                  نوع الكيان القانوني:
                </span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-[#2D2D32]">
                  {licenseData.entityType}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center bg-linear-to-b from-[#FAF8F5] to-[#F4F0E6]/70 p-5 rounded-xl border border-[#D6CFC4]/40 text-center">
            <div className="w-24 h-24 bg-white p-1.5 rounded-lg border border-[#D6CFC4]/50 shadow-2xs relative group mb-3 flex items-center justify-center overflow-hidden">
              <img
                src={"/images/qr-code.png"}
                alt="رمز التحقق الرقمي للسجل التجاري"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <span className="text-[10px] font-headline font-bold text-[#8A6F48] mb-0.5">
              التحقق الرقمي الفوري
            </span>
            <span className="text-[9px] font-sans text-[#5A5A60] max-w-40 leading-relaxed">
              يمكنكم مسح الرمز ضوئياً للتحقق من صلاحية وجودة الترخيص الساري عبر
              منصات وزارة التجارة.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licenses;
