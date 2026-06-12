/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Shield, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";
import { Button } from "../components/Button";
import { cn } from "../utils/cn";
import { FaWhatsapp } from "react-icons/fa";

interface PackagesProps {
  onSelectPackage: (packageId: string) => void;
}

export const Packages = ({ onSelectPackage }: PackagesProps) => {
  const { packages } = landingPageContent;

  const handleWhatsAppInquiry = (msg: string) => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Engagement",
        event_label: "WhatsApp Consultation Button",
      });
    }

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/966567000039?text=${encoded}`, "_blank");
  };

  const badgeIcons = [
    <Heart
      key="heart"
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-rose-500 text-rose-500"
    />,
    <Sparkles
      key="sparkle"
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-luxury-brand"
    />,
    <Shield
      key="shield"
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 fill-emerald-50"
    />,
  ];

  const badges = [
    "الأكثر تفضيلاً للأزواج وعن تجربة",
    "رفاهية ملكية متكاملة",
    "باقة مخصصة لتطلعاتكم",
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-[#FAF8F5] text-[#2D2D32] relative select-none"
      dir="rtl"
      id="packages-experiences-section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-wider bg-[#8A6F48]/10 border border-luxury-brand/30 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4 text-[#8A6F48] font-headline font-bold shadow-xs">
            تجاربنا المختارة بعناية للأزواج
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1E] font-headline mb-3 sm:mb-4 leading-tight tracking-tight">
            تجارب زوجية مصممة لبناء ذكريات خالدة
          </h2>

          <p className="text-xs sm:text-sm text-[#5A5A60] max-w-xl mx-auto font-sans leading-relaxed">
            نحن لا نبيع فنادق أو مقاعد طائرات.. نحن نصمم فصولاً مبهجة في قصة
            حبكما الفاخرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => {
            const visualBadge = badges[idx] || "باقة مخصصة";
            const visualBadgeIcon = badgeIcons[idx] || (
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-luxury-brand" />
            );

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white border border-[#D6CFC4]/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-[#C4BCB0]/15 flex flex-col justify-between hover:border-[#8A6F48]/60 transition-all duration-300"
              >
                <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-[6s] ease-out group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="absolute top-9 right-3 sm:top-12 sm:right-4 bg-white/95 backdrop-blur-md border border-[#D6CFC4]/40 py-1 px-2.5 sm:px-3 rounded-full flex items-center gap-1.5 text-[9px] sm:text-[10px] text-[#1A1A1E] font-sans font-bold max-w-[85%] sm:max-w-none truncate shadow-xs">
                    {visualBadgeIcon}
                    <span className="truncate">{visualBadge}</span>
                  </div>

                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#8A6F48] px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] text-white font-headline font-bold shadow-sm">
                    {pkg.duration}
                  </div>

                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right left-3 sm:left-4 z-10">
                    <span className="text-[10px] sm:text-[11px] text-luxury-brand uppercase block font-headline font-bold tracking-wider mb-0.5 drop-shadow-xs">
                      {pkg.vibe}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold font-headline truncate drop-shadow-sm">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 grow flex flex-col justify-start bg-white">
                  <p className="text-[10px] sm:text-[11px] text-[#8A6F48] mb-1.5 font-headline font-bold tracking-wide">
                    الغاية الوجدانية للرحلة:
                  </p>

                  <p className="text-xs text-[#2D2D32] bg-[#F4F0E6]/60 p-3 rounded-xl mb-4 sm:mb-5 font-sans font-medium leading-relaxed border-r-2 border-[#8A6F48]/60 pr-3">
                    {pkg.emotionalGoal}
                  </p>

                  <ul className="space-y-2.5 sm:space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-[#5A5A60]"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span
                          className={cn(
                            "font-sans leading-relaxed text-[#4A4A4F] text-[11px] sm:text-xs",
                            feat.isPremiumHighlight &&
                              "text-[#1A1A1E] font-bold",
                          )}
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 sm:p-6 border-t border-[#D6CFC4]/30 bg-[#FAF8F5]">
                  <div className="flex justify-between items-center mb-4 text-xs">
                    <span className="text-[#5A5A60] font-sans font-medium">
                      القيمة التقديرية للاستثمار:
                    </span>
                    <span className="text-[#8A6F48] font-extrabold font-headline text-sm sm:text-base">
                      {pkg.pricingPlaceholder}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      data-track="whatsapp-booking-cta"
                      variant="whatsapp"
                      size="md"
                      onClick={() => handleWhatsAppInquiry(pkg.whatsappMessage)}
                      className="w-full text-xs font-bold py-2.5 sm:py-3 transition-all duration-300 active:scale-[0.99] bg-[#20aa52] hover:bg-[#198741] text-white border-none shadow-md shadow-green-600/10"
                      rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
                    >
                      استشارة مخصصة عبر واتساب
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
