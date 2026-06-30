/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
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
      className="py-16 bg-[#FAF8F5] text-[#111112] relative overflow-hidden select-none border-y border-[#D6CFC4]/50"
      dir="rtl"
      id="testimonials-social-proof"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
          id="testimonials-header"
        >
          <span className="text-[#4A3A25] font-headline font-bold text-xs bg-[#8A6F48]/15 border border-[#8A6F48]/40 rounded-full px-4 py-1 inline-block mb-3 sm:mb-4">
            قصص نجاح من أزواجنا وعائلاتنا
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-[#111112] mb-3 sm:mb-4 leading-tight tracking-tight">
            {testimonials.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#333338] font-sans font-medium max-w-xl mx-auto leading-relaxed">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto" id="testimonials-slider-box">
          <div
            className="relative bg-white border border-[#D6CFC4] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-md min-h-40 flex flex-col justify-between overflow-hidden"
            id="slider-body"
          >
            <Quote className="w-14 h-14 sm:w-20 sm:h-20 text-[#EBE5D8] absolute top-3 left-3 pointer-events-none -scale-x-100" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-right flex flex-col justify-between h-full grow z-10"
              >
                <div className="grow">
                  <div className="flex gap-1 mb-4 sm:mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#8A6F48] text-[#8A6F48]"
                      />
                    ))}
                  </div>

                  <p className="text-[#111112] font-sans text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 font-bold pl-2 sm:pl-0">
                    "{testimonials.items[currentIndex].reviewText}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#D6CFC4] pt-4 sm:pt-5 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8A6F48] flex items-center justify-center font-headline font-bold text-sm text-white shrink-0 uppercase">
                      {testimonials.items[currentIndex].name.trim().charAt(0) ||
                        "C"}
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-extrabold text-sm text-[#111112]">
                        {testimonials.items[currentIndex].name}
                      </p>
                      <p className="text-xs text-[#333338] font-sans font-bold mt-0.5">
                        {testimonials.items[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="bg-[#FAF8F5] text-[#111112] border border-[#8A6F48]/40 px-3 py-1 rounded-full font-headline font-bold shadow-3xs">
                      {testimonials.items[currentIndex].tripPackage}
                    </span>
                    <span className="bg-rose-100 border border-rose-300 text-rose-900 px-3 py-1 rounded-full font-headline font-extrabold flex items-center gap-1 shadow-3xs">
                      <Heart className="w-3 h-3 fill-rose-700 text-rose-700 shrink-0" />
                      <span>
                        {testimonials.items[currentIndex].durationOfMarriage}
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-5 sm:mt-6 px-1 sm:px-4">
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "bg-[#8A6F48] w-8"
                      : "bg-[#D6CFC4] w-4"
                  }`}
                  aria-label="slider-btn"
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-[#8A6F48] flex items-center justify-center text-[#8A6F48] hover:bg-[#8A6F48] hover:text-white transition-all cursor-pointer"
                aria-label="pervious btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-[#8A6F48] flex items-center justify-center text-[#8A6F48] hover:bg-[#8A6F48] hover:text-white transition-all cursor-pointer"
                aria-label="next btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
