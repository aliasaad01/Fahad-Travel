/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  ShieldCheck,
  CornerDownLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // تعديل الحزمة المعتمدة القياسية لـ Framer Motion

interface WhatsAppButtonProps {
  phoneNumber?: string; // صيغة الرقم الدولي الخليجي أو السعودي
  defaultMessage?: string;
}

export const WhatsAppButton = ({
  phoneNumber = "+966500000000",
  defaultMessage = "السلام عليكم، أرغب في الاستفسار عن برامج تآلُف الفاخرة للأزواج.",
}: WhatsAppButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [typing, setTyping] = useState(true);

  // الخيارات السريعة والمعدة مسبقاً لراحة عملاء النخبة
  const presets = [
    {
      text: "عسل ملكي 💍 (شهر العسل)",
      message:
        "السلام عليكم، مهتم بتفاصيل باقة الميثاق الأبدي لشهر العسل الملكي في إسطنبول والبوسفور.",
    },
    {
      text: "تجديد وِصال ❤️ (كابادوكيا)",
      message:
        "السلام عليكم، مهتم بمعرفة تفاصيل باقة تجديد الوصال للأزواج في كابادوكيا وجناح الكهف.",
    },
    {
      text: "خصوصية مطلقة 🌌 (بودروم)",
      message:
        "السلام عليكم، أود استشارة حول فيلا خاصة في بودروم وتصميم رحلة خصوصية تامة.",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setShowBadge(false);
      const timer = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(timer);
    } else {
      setTyping(true); // إعادة الضبط ليعمل تأثير الكتابة في المرة القادمة
    }
  }, [isOpen]);

  const handleSend = (text: string) => {
    // تنظيف رقم الهاتف من الرموز والمسافات بشكل آمن تماماً
    const cleanNumber = phoneNumber.replace(/[+\s-]/g, "");
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* نافذة المحادثة التفاعلية المنبثقة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-85 max-w-[calc(100vw-2.5rem)] bg-luxury-cream border border-luxury-accent/30 rounded-2xl shadow-2xl overflow-hidden mb-4 text-right"
            dir="rtl"
          >
            {/* الهيدر الخاص بصندوق المحادثة */}
            <div className="bg-luxury-dark p-4 flex items-center justify-between text-luxury-cream">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-luxury-dark border-2 border-luxury-brand">
                    ن
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-luxury-dark rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-luxury-cream">
                    نورة الحامد
                  </h4>
                  <p className="text-[10px] text-luxury-brand/90 font-sans">
                    مستشارة السفر وتجارب النخبة
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="إغلاق المحادثة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* منطقة رسائل المحادثة */}
            <div className="p-4 bg-stone-50 min-h-35 max-h-55 overflow-y-auto flex flex-col gap-2.5">
              <div className="bg-white rounded-2xl rounded-tr-none p-3 shadow-sm border border-stone-100 max-w-[85%] text-xs text-stone-700 leading-relaxed self-start">
                <p className="font-semibold text-luxury-brand mb-1">
                  تآلُف لرحلات النخبة
                </p>
                {typing ? (
                  <div className="flex items-center gap-1 py-1.5">
                    <span className="w-1.5 h-1.5 bg-luxury-brand rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-luxury-brand rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-luxury-brand rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                ) : (
                  <p>
                    أهلاً بكما في تآلُف. نهدف لجعل رحلتكما تذكرتكم الوحيدة
                    لميلاد حب متجدد. هل تودان التخطيط لشهر عسل، أم تجديد لوصال
                    معًا بفيلات فاخرة؟ تواصل معي لأهديكما أفضل الخيارات.
                  </p>
                )}
              </div>

              {!typing && (
                <div className="self-end bg-[#E2F7CB] text-stone-800 text-xs rounded-2xl rounded-tl-none p-2.5 shadow-sm max-w-[80%]">
                  أود أن أستشير في رحلتنا القادمة لتركيا ✨
                </div>
              )}
            </div>

            {/* الخيارات السريعة وأزرار الإرسال */}
            <div className="p-4 border-t border-stone-100 bg-luxury-cream flex flex-col gap-2">
              <p className="text-[10px] text-stone-400 font-sans font-medium mb-1">
                اختر استفسارًا سريعًا لتواصل فوري:
              </p>
              <div className="flex flex-col gap-1.5">
                {presets.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(p.message)}
                    className="flex items-center justify-between text-right text-xs bg-white hover:bg-stone-50 border border-stone-200/80 px-3 py-2 rounded-xl text-stone-700 font-headline font-semibold transition-all hover:border-luxury-brand duration-200 group active:scale-[0.99]"
                  >
                    <span>{p.text}</span>
                    <CornerDownLeft className="w-3.5 h-3.5 text-luxury-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* زر الإرسال المباشر للرسالة العامة */}
              <button
                onClick={() => handleSend(defaultMessage)}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-4 rounded-xl text-xs font-semibold shadow-md shadow-green-500/10 transition-colors"
              >
                <Send className="w-4 h-4 rotate-180" />{" "}
                {/* تم تعديل الكلاس إلى rotate-180 لـ Tailwind */}
                <span>إرسال استفسار عام مباشر</span>
              </button>

              <div className="flex items-center justify-center gap-1 mt-2 text-[9px] text-stone-400 font-sans">
                <ShieldCheck className="w-3 h-3 text-luxury-brand" />
                <span>جميع مناقشاتكم مشفرة ومحاطة بالسرية التامة</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* الزر العائم الأساسي (الدائرة الخضراء) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300/30"
        aria-label="تواصل معنا عبر الواتساب"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-30 animate-ping group-hover:animate-none"></span>

        {showBadge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-sans font-bold text-white shadow-sm">
            1
          </span>
        )}

        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
