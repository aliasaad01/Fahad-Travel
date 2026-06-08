/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  MessageSquare,
  ArrowLeft,
  Heart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion"; // استخدام الحزمة المعتمدة المستقرة بمشروعنا
import { landingPageContent } from "../data/content";
import { Button } from "../components/Button";

interface HeroProps {
  onExplorePackages: () => void;
  onOpenInquiry: () => void;
}

export const Hero = ({ onExplorePackages, onOpenInquiry }: HeroProps) => {
  const { hero } = landingPageContent;

  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(
      hero.subheadline + " أود استشارة حول تنظيم رحلة فاخرة للأزواج.",
    );
    window.open(`https://wa.me/966500000000?text=${encoded}`, "_blank");
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-linear-to-b from-[#1E1A17] via-stone-900 to-luxury-dark text-white pt-24 pb-16 overflow-hidden md:px-6"
      dir="rtl"
      id="hero-travel-section"
    >
      {/* Absolute decorative backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.18),transparent_55%)] pointer-events-none"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-luxury-brand/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Verbal Messaging Right (RTL right-aligned text column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-right justify-center"
          >
            {/* Custom high-trust badge indicator */}
            <div className="inline-flex items-center gap-2 bg-luxury-brand/10 border border-luxury-brand/30 rounded-full px-4 py-1.5 self-start mb-6 text-luxury-brand shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-headline font-semibold tracking-wide">
                {hero.badge}
              </span>
            </div>

            {/* Main Headline which is highly emotional */}
            <h1
              className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-6 tracking-tight drop-shadow-sm"
              id="hero-main-title"
            >
              {hero.headline.split(" ❤️")[0]}
              <span className="text-rose-400 font-serif font-normal italic inline-block mr-2 animate-pulse">
                ❤️
              </span>
            </h1>

            {/* Subheading explaining relationships over schedules */}
            <p
              className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-sans"
              id="hero-subtitle"
            >
              {hero.subheadline}
            </p>

            {/* High-converting responsive actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="whatsapp"
                size="lg"
                shimmer
                onClick={handleWhatsAppClick}
                rightIcon={<MessageSquare className="w-5 h-5 ml-1.5" />}
                className="text-white text-sm py-4 px-8 border border-[#24c15d] shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:scale-[1.02]"
              >
                {hero.ctaPrimaryText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onExplorePackages}
                leftIcon={
                  <ArrowLeft className="w-4 h-4 mr-1.5 transform rotate-180" />
                }
                className="text-luxury-brand border-luxury-brand/30 hover:bg-luxury-brand hover:text-luxury-dark hover:border-luxury-brand text-sm"
              >
                {hero.ctaSecondaryText}
              </Button>
            </div>

            {/* Trust factors beneath the primary layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 text-stone-400 text-xs font-medium">
              <div className="flex items-center gap-2 hover:text-luxury-brand transition-colors">
                <ShieldCheck className="w-4 h-4 text-luxury-brand shrink-0" />
                <span>{hero.trustBullet1.replace("★ ", "")}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-luxury-brand transition-colors">
                <Heart className="w-4 h-4 text-luxury-brand shrink-0" />
                <span>{hero.trustBullet2.replace("★ ", "")}</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Imagery Left Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Visual background atmospheric glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-luxury-brand/20 filter blur-2xl rounded-3xl opacity-60"></div>

            {/* Frame containing the main aspirational Turkey imagery */}
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 w-full max-w-md shadow-2xl border-4 border-luxury-dark/60 shadow-black/80">
              <img
                src={hero.heroImageUrl}
                alt="الأزواج في رحلة كابادوكيا الحالمة"
                className="w-full h-full object-cover transition-transform duration-[8s] hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Subtle visual text card floating on the image */}
              <div className="absolute bottom-6 right-6 left-6 bg-luxury-dark/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-right">
                <p className="text-luxury-brand text-[10px] font-sans font-bold uppercase tracking-wider mb-0.5">
                  لحظة حية للأزواج
                </p>
                <p className="text-white font-headline text-xs font-semibold leading-relaxed">
                  بمجرد هبوط المنطاد الدافئ، كان بانتظارنا فطور تركي وورود منسقة
                  بشكل مذهل لم نكن نتخيله.
                </p>
              </div>
            </div>

            {/* Tiny stylized sticker */}
            <div className="absolute -top-4 -right-4 bg-luxury-brand text-luxury-dark text-[10px] font-headline font-bold px-3 py-1.5 rounded-xl shadow-lg border border-luxury-accent/30 rotate-12 flex items-center gap-1 select-none">
              <span>★</span>
              <span>مساحة خالية للحب والوئام</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave separator to blend seamlessly with Problem Section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-luxury-sand to-transparent pointer-events-none"></div>
    </section>
  );
};
