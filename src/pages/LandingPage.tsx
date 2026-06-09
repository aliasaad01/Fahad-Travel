/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../sections/Hero";
import { Problem } from "../sections/Problem";
import { Storytelling } from "../sections/Storytelling";
import { Stats } from "../sections/Stats";
import { Packages } from "../sections/Packages";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { FearRemoval } from "../sections/FearRemoval";
import { Testimonials } from "../sections/Testimonials";
import { FAQ } from "../sections/FAQ";
import { FinalCTA } from "../sections/FinalCTA";
import { Footer } from "../sections/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

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
      className="min-h-screen bg-luxury-sand text-stone-800 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden"
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

      {/* Empathy-centered Problem Context */}
      <Problem />

      {/* Emotional Connection Storytelling */}
      <Storytelling />

      {/* Dark Premium Metrics panel */}
      <Stats />

      {/* Memory Package Offer Cards */}
      <Packages onSelectPackage={handleSelectPackage} />

      {/* Values & Trust Pillars */}
      <WhyChooseUs />

      {/* Security Protection / Fear Removal Tab Board */}
      <FearRemoval />

      {/* Warm Social Testimonial review cards */}
      <Testimonials />

      {/* Elegant Accordion Q&A list */}
      <FAQ />

      {/* Closing Interactive customized lead Customizer form */}
      {/* <FinalCTA
        selectedPackageId={selectedPackageId}
        onSuccessSubmit={(data) => {
          console.log("Elite travel lead customized:", data);
        }}
      /> */}

      {/* Minimal professional footer */}
      <Footer />

      {/* Persistent conversational customized WhatsApp Bubble */}
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
