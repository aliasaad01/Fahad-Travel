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

type PackageIdType =
  | "pkg-memory"
  | "pkg-honeymoon"
  | "pkg-luxury"
  | "pkg-custom";

export const LandingPage = () => {
  const [selectedPackageId, setSelectedPackageId] =
    useState<PackageIdType>("pkg-memory");

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId as PackageIdType);

    const targetElement = document.getElementById("final-closing-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

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
      className="min-h-screen bg-[#FAF8F5] text-[#1A1A1E] selection:bg-luxury-brand/30 selection:text-[#8A6F48] overflow-x-hidden"
      id="luxury-landing-root"
    >
      <Navigation
        onExplorePackages={handleExplorePackages}
        onOpenInquiry={handleOpenInquiryForm}
      />

      <Hero
        onExplorePackages={handleExplorePackages}
        onOpenInquiry={handleOpenInquiryForm}
      />

      <Stats />

      <Packages onSelectPackage={handleSelectPackage} />

      <WhyUs />

      <Testimonials />

      <FAQ />

      <AccreditationBanner />

      <Licenses />

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
