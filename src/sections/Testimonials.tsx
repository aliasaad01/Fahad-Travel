/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, Quote, ChevronRight, ChevronLeft, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { landingPageContent } from "../data/content";

export const Testimonials = () => {
  const { testimonials } = landingPageContent;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.items.length) % testimonials.items.length,
    );
  };

  return (
    <section
      className="py-16 sm:py-24 bg-luxury-cream text-stone-800 relative overflow-hidden select-none"
      dir="rtl"
      id="testimonials-social-proof"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-luxury-brand/5 rounded-full filter blur-[80px] sm:blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
          id="testimonials-header"
        >
          <span className="text-luxury-brand font-headline font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-amber-50/80 border border-luxury-accent/30 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4">
            قصص نجاح من عائلاتنا
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-luxury-dark mb-3 sm:mb-4 leading-tight">
            {testimonials.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">
            {testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="max-w-4xl mx-auto" id="testimonials-slider-box">
          <div
            className="relative bg-white border border-stone-200/50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-sm min-h-88 sm:min-h-80 flex flex-col justify-between overflow-hidden"
            id="slider-body"
          >
            {/* Quote Icon Background decoration */}
            <Quote className="w-14 h-14 sm:w-20 sm:h-20 text-stone-100 absolute top-3 left-3 pointer-events-none -scale-x-100 opacity-70" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-right flex flex-col justify-between h-full grow z-10"
                id={`testimonial-slide-${currentIndex}`}
              >
                <div className="grow">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 sm:mb-5" id="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Body Text */}
                  <p className="text-stone-700 font-sans text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 italic font-medium pl-2 sm:pl-0">
                    "{testimonials.items[currentIndex].reviewText}"
                  </p>
                </div>

                {/* Couple bio metadata */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100 pt-4 sm:pt-5 mt-auto"
                  id="couple-meta-info"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-50/60 flex items-center justify-center font-headline font-bold text-sm text-luxury-brand border border-luxury-accent/20 shrink-0 uppercase">
                      {testimonials.items[currentIndex].name.trim().charAt(0) ||
                        "C"}
                    </div>
                    <div className="text-right">
                      <h4 className="font-headline font-bold text-xs sm:text-sm text-luxury-dark">
                        {testimonials.items[currentIndex].name}
                      </h4>
                      <p className="text-[10px] text-stone-400 font-sans mt-0.5">
                        {testimonials.items[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-wrap items-center gap-2 text-[9px] sm:text-[10px]"
                    id="trip-badge-info"
                  >
                    <span className="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-headline font-semibold max-w-37.5 truncate">
                      {testimonials.items[currentIndex].tripPackage}
                    </span>
                    <span className="bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full font-headline font-semibold flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500 shrink-0" />
                      <span>
                        {testimonials.items[currentIndex].durationOfMarriage}
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Control elements */}
          <div
            className="flex items-center justify-between mt-5 sm:mt-6 px-1 sm:px-4"
            id="slider-navigation-bar"
          >
            {/* Indicator dots */}
            <div className="flex gap-1.5 sm:gap-2" id="navigation-dots">
              {testimonials.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "bg-luxury-brand w-5 sm:w-6"
                      : "bg-stone-200 hover:bg-stone-300 w-2"
                  }`}
                  aria-label={`الذهاب للمراجعة رقم ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow controllers adjusted for natural RTL movement */}
            <div className="flex gap-2" id="navigation-arrows">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200/80 flex items-center justify-center hover:bg-stone-50 hover:border-luxury-brand text-stone-600 hover:text-luxury-brand transition-all cursor-pointer active:scale-95 touch-manipulation"
                id="testimonial-prev-arrow"
                aria-label="المراجعة السابقة"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200/80 flex items-center justify-center hover:bg-stone-50 hover:border-luxury-brand text-stone-600 hover:text-luxury-brand transition-all cursor-pointer active:scale-95 touch-manipulation"
                id="testimonial-next-arrow"
                aria-label="المراجعة التالية"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
