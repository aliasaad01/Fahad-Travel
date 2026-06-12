/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { X, Send, ShieldCheck, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton = ({
  phoneNumber = "966567000039",
  defaultMessage = "السلام عليكم، أرغب في الاستفسار عن برامج رحلات فهد الفاخرة للأزواج.",
}: WhatsAppButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [typing, setTyping] = useState(true);

  const presets = [
    {
      text: "باقة ذِكرى",
      message:
        "السلام عليكم، مهتم بتفاصيل باقة ذِكرى، ما تفاصيل هذه الباقة وما ميزاتها لدى رحلات فهد.",
    },
    {
      text: "باقة شهر العسل",
      message:
        "السلام عليكم، مهتم بمعرفة تفاصيل باقة شهر العسل، ما تفاصيل هذه الباقة والخصوصية المتاحة بها.",
    },
    {
      text: "باقة فهد الخاصة",
      message:
        "السلام عليكم، مهتم بمعرفة تفاصيل باقة فهد الخاصة الاستثنائية والخدمات النخبوية المتاحة معها.",
    },
    {
      text: "أحتاج استشارة لاختيار الباقة المناسبة لي",
      message:
        "السلام عليكم، أريد استشارة بخصوص برامج رحلات فهد للأزواج ونصيحة لاختيار الباقة المناسبة لنا.",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setShowBadge(false);
      const timer = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(timer);
    } else {
      setTyping(true);
    }
  }, [isOpen]);

  const handleSend = (text: string) => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: "conversion_whatsapp_click",
        buttonLocation: "WhatsAppButton Section", // أو الفوتر حسب الكرت
      });
    }

    const cleanNumber = phoneNumber.replace(/[+\s-]/g, "");
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none max-w-[calc(100vw-2rem)]">
      {/* نافذة المحادثة التفاعلية المنبثقة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            // Refactor: تعديل الخلفية والحدود لتدعم أسلوب العاج الفخم النقي الفاتح للموقع
            className="w-80 sm:w-85 max-w-[calc(100vw-2rem)] bg-[#FAF8F5] border border-[#D6CFC4]/60 rounded-2xl shadow-2xl overflow-hidden mb-3 text-right flex flex-col"
            dir="rtl"
          >
            {/* الهيدر الخاص بصندوق المحادثة لرحلات فهد - لون حجري ملكي داكن */}
            <div className="bg-[#1A1A1E] p-3 sm:p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative">
                  {/* تعديل ألوان الـ Avatar ليتوافق مع ألوان النخبة البرونزية */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8A6F48]/15 flex items-center justify-center font-bold font-headline text-sm sm:text-base text-luxury-brand border border-[#8A6F48]/40">
                    ف
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#20aa52] border-2 border-[#1A1A1E] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xs sm:text-sm text-[#FAF8F5]">
                    مستشار رحلات فهد
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-luxury-brand font-sans font-medium">
                    مستشار السفر وتجارب النخبة للأزواج
                  </p>
                </div>
              </div>
              <button
                data-track="whatsapp-booking-cta"
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="إغلاق المحادثة"
              >
                <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* منطقة رسائل المحادثة - خلفية ناعمة مريحة جداً للعين */}
            <div className="p-3 sm:p-4 bg-[#FAF8F5] min-h-28 max-h-48 sm:max-h-55 overflow-y-auto flex flex-col gap-2.5">
              <div className="bg-white rounded-xl sm:rounded-2xl rounded-tr-none p-2.5 sm:p-3 shadow-xs border border-[#D6CFC4]/30 max-w-[90%] sm:max-w-[85%] text-[11px] sm:text-xs text-[#2D2D32] leading-relaxed self-start">
                <p className="font-headline font-bold text-[#8A6F48] mb-0.5 sm:mb-1">
                  رحلات فهد للأزواج
                </p>
                {typing ? (
                  <div className="flex items-center gap-1 py-1">
                    <span className="w-1.5 h-1.5 bg-[#8A6F48] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#8A6F48] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#8A6F48] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                ) : (
                  <p>
                    أهلاً بكما في رحلات فهد. نهدف لجعل رحلتكما فصلاً استثنائياً
                    لا يُنسى في منتهى الرفاهية والخصوصية. هل تودان التخطيط لشهر
                    عسل حالم، أم رحلة تجديد ذكريات ساحرة؟ تواصل معي لأصمم لكما
                    الخيار المثالي.
                  </p>
                )}
              </div>

              {!typing && (
                <div className="self-end bg-[#E2F7CB] text-[#1A1A1E] text-[11px] sm:text-xs rounded-xl sm:rounded-2xl rounded-tl-none p-2 sm:p-2.5 shadow-xs max-w-[85%] sm:max-w-[80%] font-medium">
                  أرغب في اختيار أحد البرامج وأحتاج استشارة سريعة ✨
                </div>
              )}
            </div>

            {/* الخيارات السريعة وأزرار الإرسال */}
            <div className="p-3 sm:p-4 border-t border-[#D6CFC4]/40 bg-[#FAF8F5] flex flex-col gap-2">
              <p className="text-[9px] sm:text-[10px] text-stone-400 font-sans font-semibold mb-0.5">
                اختر استفسارًا سريعًا لتواصل فوري معنا:
              </p>
              <div className="flex flex-col gap-1.5">
                {presets.map((p, idx) => (
                  <button
                    data-track="whatsapp-booking-cta"
                    key={idx}
                    onClick={() => handleSend(p.message)}
                    // Refactor: تحويل تفتيح كرت الخيار السريع عند الحث ليأخذ لون البراند البرونزي الأنيق
                    className="flex items-center justify-between text-right text-[11px] sm:text-xs bg-white hover:bg-[#FAF8F5] border border-[#D6CFC4]/50 px-2.5 py-1.5 sm:py-2 rounded-xl text-[#2D2D32] font-headline font-bold transition-all hover:border-[#8A6F48] duration-200 group active:scale-[0.99] touch-manipulation shadow-xs"
                  >
                    <span>{p.text}</span>
                    <CornerDownLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8A6F48] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* زر الإرسال المباشر للرسالة العامة - لون واتساب الأساسي النقي */}
              <button
                data-track="whatsapp-booking-cta"
                onClick={() => handleSend(defaultMessage)}
                className="mt-1.5 w-full flex items-center justify-center gap-2 bg-[#20aa52] hover:bg-[#198741] text-white py-1.5 sm:py-2 px-4 rounded-xl text-[11px] sm:text-xs font-bold shadow-md shadow-green-600/10 transition-colors touch-manipulation"
              >
                <Send className="w-3.5 h-3.5 rotate-180" />
                <span>إرسال استفسار عام مباشر عبر الواتساب</span>
              </button>

              <div className="flex items-center justify-center gap-1 mt-1.5 text-[8px] sm:text-[9px] text-stone-400 font-sans font-medium">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#8A6F48]" />
                <span>
                  جميع تفاصيلكم ومناقشاتكم محاطة بالسرية والخصوصية التامة
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* الزر العائم الأساسي (الدائرة الخضراء للواتساب) */}
      <button
        data-track="whatsapp-booking-cta"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-12 h-12 sm:w-14 sm:h-14 bg-[#20aa52] hover:bg-[#198741] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300/30 touch-manipulation"
        aria-label="تواصل معنا عبر الواتساب"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#20aa52] opacity-30 animate-ping group-hover:animate-none"></span>

        {showBadge && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-rose-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-sans font-bold text-white shadow-sm">
            1
          </span>
        )}
        <FaWhatsapp className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
