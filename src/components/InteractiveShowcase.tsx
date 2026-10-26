import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from 'lucide-react';
import { Translation } from '../i18n/translations';

interface InteractiveShowcaseProps {
  t: Translation['showcase'];
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = t.slides;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const active = slides[currentSlide] || slides[0];

  return (
    <section className="py-20 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#EC4899] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto rounded-3xl bg-[#1E293B] border border-[#334155] p-6 sm:p-10 shadow-xl relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label={t.title}
        >
          {/* Top meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30">
              {active.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          {/* Quote & Body */}
          <div className="relative mb-8">
            <Quote className="w-10 h-10 text-[#334155] absolute -top-4 -left-2 -z-0 opacity-40" />
            <p className="relative z-10 text-base sm:text-xl text-[#F8FAFC] font-medium leading-relaxed">
              "{active.quote}"
            </p>
          </div>

          {/* Author & Metric row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#334155]">
            <div>
              <div className="font-heading font-bold text-base sm:text-lg text-[#F8FAFC]">
                {active.author}
              </div>
              <div className="text-xs sm:text-sm text-[#94A3B8]">{active.role}</div>
            </div>

            <div className="sm:text-right">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2563EB]">
                {active.metric}
              </div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wider">
                {active.metricLabel}
              </div>
            </div>
          </div>

          {/* Controls: Prev / Next / Indicators */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#334155]/60">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
                  aria-label={`Slide ${idx + 1}`}
                  aria-current={currentSlide === idx}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-200 ${
                      currentSlide === idx ? 'w-8 bg-[#2563EB]' : 'w-2 bg-[#334155]'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl bg-[#0F172A] border border-[#334155] hover:border-[#2563EB] text-[#F8FAFC] flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-[#0F172A] border border-[#334155] hover:border-[#2563EB] text-[#F8FAFC] flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
