/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, Heart, Shield, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";
import { landingPageContent } from "../data/content";
import { Button } from "../components/Button";
import { cn } from "../utils/cn";

interface PackagesProps {
  onSelectPackage: (packageId: string) => void;
}

export const Packages = ({ onSelectPackage }: PackagesProps) => {
  const { packages } = landingPageContent;

  const handleWhatsAppInquiry = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/966500000000?text=${encoded}`, "_blank");
  };

  const badgeIcons = [
    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />,
    <Sparkles className="w-4 h-4 text-amber-500" />,
    <Shield className="w-4 h-4 text-emerald-500 fill-emerald-100" />,
  ];

  const badges = [
    "الأكثر تفضيلاً للأزواج وعن تجربة",
    "رفاهية ملكية متكاملة",
    "باقة مخصصة",
  ];

  return (
    <section
      className="py-24 bg-[#0A0A0B] text-stone-300 relative select-none"
      dir="rtl"
      id="packages-experiences-section"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider bg-luxury-brand/10 border border-luxury-brand/20 rounded-full px-4 py-1.5 inline-block mb-4 text-luxury-brand font-headline font-semibold">
            تجاربنا المختارة بعناية للأزواج
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F2ED] font-headline mb-4">
            تجارب زوجية مصممة لبناء ذكريات خالدة
          </h2>

          <p className="text-sm text-stone-400 max-w-xl mx-auto font-sans">
            نحن لا نبيع فنادق أو مقاعد طائرات.. نحن نصمم فصولاً في قصة حبكما
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            const visualBadge = badges[idx] || "باقة مخصصة";
            const visualBadgeIcon = badgeIcons[idx] || (
              <Sparkles className="w-4 h-4" />
            );

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group bg-[#141416] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                {/* Image and Top Badges Section */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-900">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-[6s] ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#141416] via-[#141416]/25 to-transparent" />

                  {/* Top Right Badge */}
                  <div className="absolute top-4 right-4 bg-[#141416]/90 backdrop-blur-md border border-white/10 py-1 px-3 rounded-full flex items-center gap-1 text-[10px] text-white font-sans">
                    {visualBadgeIcon}
                    <span>{visualBadge}</span>
                  </div>

                  {/* Duration Left Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-[10px] text-luxury-brand font-headline font-bold">
                    {pkg.duration}
                  </div>

                  {/* Title and Vibe Overlay */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-[10px] text-luxury-brand uppercase block font-headline font-bold tracking-wider mb-0.5">
                      {pkg.vibe}
                    </span>
                    <h3 className="text-white text-lg font-bold font-headline">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-get-grow flex flex-col justify-start">
                  <p className="text-[11px] text-stone-500 mb-1.5 font-headline font-medium">
                    الغاية الوجدانية للرحلة:
                  </p>

                  <p className="text-xs text-stone-200 bg-[#1C1C1E] p-3 rounded-xl mb-5 font-sans leading-relaxed border-r-2 border-luxury-brand/40 pr-3">
                    {pkg.emotionalGoal}
                  </p>

                  <ul className="space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-stone-400"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span
                          className={cn(
                            "font-sans leading-relaxed text-stone-300",
                            feat.isPremiumHighlight &&
                              "text-white font-semibold",
                          )}
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer and Actions */}
                <div className="p-6 border-t border-white/5 bg-[#111112]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-stone-500 font-sans">
                      القيمة التقديرية للاستثمار:
                    </span>
                    <span className="text-xs text-luxury-brand font-bold font-headline">
                      {pkg.pricingPlaceholder}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="whatsapp"
                      size="md"
                      onClick={() => handleWhatsAppInquiry(pkg.whatsappMessage)}
                      className="w-full text-xs font-semibold py-3"
                      rightIcon={<MessageCircle className="w-4 h-4 ml-1.5" />}
                    >
                      استشارة مخصصة عبر واتساب
                    </Button>

                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => onSelectPackage(pkg.id)}
                      className="w-full text-xs border-white/10 text-stone-300 hover:bg-white hover:text-black transition-colors py-3"
                    >
                      احجز أو عدّل مسار هذه الباقة
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
