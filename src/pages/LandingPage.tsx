/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../sections/Hero";
import { Stats } from "../sections/Stats";
import { Packages } from "../sections/Packages";
import { Testimonials } from "../sections/Testimonials";
import { FAQ } from "../sections/FAQ";
import { Footer } from "../sections/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import WhyUs from "../sections/WhyUs";
import AccreditationBanner from "../sections/AccreditationBanner";
import Licenses from "../sections/Licenses";

// تعريف نوع الباقات بشكل صارم ومطابق للـ Zod Schema والفورم
type PackageIdType =
  | "pkg-memory"
  | "pkg-honeymoon"
  | "pkg-luxury"
  | "pkg-custom";

export const LandingPage = () => {
  // 1. تحديد نوع الـ State بدقة ليتوافق مع المكونات الداخلية
  const [selectedPackageId, setSelectedPackageId] =
    useState<PackageIdType>("pkg-memory");

  // 2. عمل كاستينج آمن (Type Assertion) عند استقبال الـ ID من كروت الباقات لحل إيرور الـ string
  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId as PackageIdType);

    // انتقال سلس ومريح لسكشن الفورم الختامي
    const targetElement = document.getElementById("final-closing-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // عمل فوكس تلقائي على حقل الاسم الكريم بعد انتهاء حركة السكرول لزيادة التحويل
      setTimeout(() => {
        const nameInput = document.getElementById("form-input-fullname");
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  const handleExplorePackages = () => {
    const targetElement = document.getElementById(
      "packages-experiences-section",
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenInquiryForm = () => {
    const targetElement = document.getElementById("final-closing-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      // Refactor: تم توحيد الخلفية وتعديل ألوان الـ selection لتتطابق تماماً مع ألوان الـ Quiet Luxury الجديدة للموقع
      className="min-h-screen bg-[#FAF8F5] text-[#1A1A1E] selection:bg-luxury-brand/30 selection:text-[#8A6F48] overflow-x-hidden"
      id="luxury-landing-root"
    >
      {/* Dynamic Sticky Header Navigation */}
      <Navigation
        onExplorePackages={handleExplorePackages}
        onOpenInquiry={handleOpenInquiryForm}
      />

      {/* Hero Header Presentation */}
      <Hero
        onExplorePackages={handleExplorePackages}
        onOpenInquiry={handleOpenInquiryForm}
      />

      {/* Premium Metrics panel */}
      <Stats />

      {/* Memory Package Offer Cards */}
      <Packages onSelectPackage={handleSelectPackage} />

      {/* Why Choose Us Feature Cards */}
      <WhyUs />

      {/* Trust & Accreditation Short Banner */}
      <AccreditationBanner />

      {/* Official Government Corporate Licenses */}
      <Licenses />

      {/* Warm Social Testimonial review cards */}
      <Testimonials />

      {/* Elegant Accordion Q&A list */}
      <FAQ />

      {/* Minimal professional footer */}
      <Footer />

      {/* Persistent conversational customized WhatsApp Bubble */}
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
