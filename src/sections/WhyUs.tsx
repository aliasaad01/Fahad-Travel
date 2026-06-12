/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Compass, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const WhyUs = () => {
  const features = [
    {
      badge: "الثقة والأمان",
      icon: <ShieldCheck className="w-5 h-5 text-[#634E32]" />, // تغميق لون الأيقونة
      points: [
        "نعتني بكل تفاصيل رحلتكم من لحظة الاستشارة الأولى وحتى العودة، مع فريق دعم يتابعكم خطوة بخطوة.",
        "خبرتنا الطويلة في تنظيم رحلات الأزواج تضمن لكم تجربة مريحة تماماً وذكريات محفورة في الوجدان.",
      ],
    },
    {
      badge: "هندسة التجربة",
      icon: <Compass className="w-5 h-5 text-[#634E32]" />,
      points: [
        "وداعاً لساعات البحث المجهدة، التخطيط العشوائي، والحيرة الدائمة بين خيارات المواقع الكثيرة.",
        "نصمم لكم رحلة متكاملة الفصول تتناغم مع تطلعاتكم الفاخرة وشغفكم الاستكشافي بكل سلاسة.",
      ],
    },
    {
      badge: "تكامل واستدامة",
      icon: <Clock className="w-5 h-5 text-[#634E32]" />,
      points: [
        "نوفر استثماركم الزمني والجهد الذهني من خلال صياغة وترتيب السكن، التنقلات، والأنشطة في مكان واحد.",
        "تحصلون على أفضل الأماكن الحصرية المختارة بعناية فائقة دون عناء التنسيق مع أطراف متعددة.",
      ],
    },
  ];

  return (
    <section
      className="pt-8 pb-16 bg-linear-to-b from-[#FAF8F5] to-[#E2D9C8] text-[#111112] relative overflow-hidden select-none border-y border-[#D6CFC4]/50 "
      dir="rtl"
      id="why-us-section"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#111112] mb-4 tracking-tight">
            لماذا يختار الأزواج باقات رحلات فهد؟
          </h2>
          <div className="w-12 h-0.5 bg-[#8A6F48] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              // تحسين الكرت: خلفية بيضاء صريحة بدلاً من الشفافة، وتعميق الحدود
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D6CFC4] shadow-md flex flex-col justify-between group hover:border-[#8A6F48] transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#8A6F48]/10 flex items-center justify-center border border-[#8A6F48]/30">
                    {item.icon}
                  </div>
                  {/* تغميق نص الشارة لزيادة الوضوح */}
                  <span className="inline-block bg-[#8A6F48]/10 text-[#544129] border border-[#8A6F48]/30 rounded-full px-4 py-1 text-xs font-headline font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  {item.points.map((text, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8A6F48] shrink-0 mt-1" />
                      {/* نص داكن جداً ومقروء بنسبة 100% */}
                      <p className="font-sans text-xs sm:text-sm text-[#222225] font-medium leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-0 h-0.5 bg-[#8A6F48] rounded-full mt-6 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
