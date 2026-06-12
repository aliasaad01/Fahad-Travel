// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useEffect, useState } from "react";
// import { Heart, Shield, Sparkles, Check } from "lucide-react";
// import { motion } from "framer-motion";
// import { Button } from "../components/Button";
// import { FaWhatsapp } from "react-icons/fa";
// import { supabase } from "../supabaseClient";

// interface PackagesProps {
//   onSelectPackage: (packageId: string) => void;
// }

// export const Packages = ({ onSelectPackage }: PackagesProps) => {
//   const [packages, setPackages] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // جلب الباقات ديناميكياً من Supabase عند تحميل الصفحة
//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("packages")
//           .select("*")
//           .order("id", { ascending: true }); // ترتيب الباقات تصاعدياً حسب الإدخال

//         if (error) throw error;
//         if (data) setPackages(data);
//       } catch (error) {
//         console.error("Error loading luxury packages:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackages();
//   }, []);

//   const handleWhatsAppInquiry = (title: string) => {
//     const baseMsg = `مرحباً، أود الاستفسار والحصول على استشارة مخصصة حول تنظيم رحلة فاخرة للأزواج عبر: (${title}).`;
//     const encoded = encodeURIComponent(baseMsg);
//     window.open(`https://wa.me/937237163?text=${encoded}`, "_blank");
//   };
//
//   // أيقونات توضيحية فاخرة يتم توزيعها بالتناوب لحماية المظهر البصري
//   const badgeIcons = [
//     <Heart
//       key="heart"
//       className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-rose-500 text-rose-500"
//     />,
//     <Sparkles
//       key="sparkle"
//       className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500"
//     />,
//     <Shield
//       key="shield"
//       className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 fill-emerald-100/50"
//     />,
//   ];

//   if (loading) {
//     return (
//       <div className="bg-[#0A0A0B] text-stone-400 text-center py-32 font-sans tracking-wide">
//         جاري تحميل الملاذات الاستثنائية للأزواج...
//       </div>
//     );
//   }

//   return (
//     <section
//       className="py-16 sm:py-24 bg-[#0A0A0B] text-stone-300 relative select-none"
//       dir="rtl"
//       id="packages-experiences-section"
//     >
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
//           <span className="text-[10px] sm:text-xs uppercase tracking-wider bg-luxury-brand/10 border border-luxury-brand/20 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4 text-luxury-brand font-headline font-semibold">
//             تجاربنا المختارة بعناية للأزواج
//           </span>

//           <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F2ED] font-headline mb-3 sm:mb-4 leading-tight">
//             تجارب زوجية مصممة لبناء ذكريات خالدة
//           </h2>

//           <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-sans leading-relaxed">
//             نحن لا نبيع فنادق أو مقاعد طائرات.. نحن نصمم فصولاً في قصة حبكما
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {packages.map((pkg, idx) => {
//             // استخدام الأيقونة بالتناوب لحماية التصميم الجمالي
//             const visualBadgeIcon = badgeIcons[idx % badgeIcons.length];

//             return (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="group bg-[#141416] border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between md:hover:border-white/15 transition-all duration-300"
//               >
//                 {/* Image and Top Badges Section */}
//                 <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden bg-stone-900">
//                   <img
//                     src={pkg.imageUrl}
//                     alt={pkg.title}
//                     className="w-full h-full object-cover transition-transform duration-[6s] ease-out md:group-hover:scale-103"
//                     referrerPolicy="no-referrer"
//                   />

//                   <div className="absolute inset-0 bg-linear-to-t from-[#141416] via-[#141416]/30 to-transparent" />

//                   {/* الـ Badge العلوي - يسحب النص الذي يكتبه العميل مباشرة */}
//                   {pkg.badge && (
//                     <div className="absolute top-9 right-3 sm:top-12 sm:right-4 bg-[#141416]/90 backdrop-blur-md border border-white/10 py-1 px-2.5 sm:px-3 rounded-full flex items-center gap-1.5 text-[9px] sm:text-[10px] text-white font-sans max-w-[85%] sm:max-w-none truncate">
//                       {visualBadgeIcon}
//                       <span className="truncate">{pkg.badge}</span>
//                     </div>
//                   )}

//                   {/* مدة الرحلة الزاوية اليسرى إذا كانت متوفرة بالجدول */}
//                   {pkg.duration && (
//                     <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] text-luxury-brand font-headline font-bold">
//                       {pkg.duration}
//                     </div>
//                   )}

//                   {/* اسم الباقة والتصنيف الفرعي */}
//                   <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right left-3 sm:left-4">
//                     <span className="text-[9px] sm:text-[10px] text-luxury-brand uppercase block font-headline font-bold tracking-wider mb-0.5">
//                       {pkg.vibe || "ملاذ رومانسي فاخر"}
//                     </span>
//                     <h3 className="text-white text-base sm:text-lg font-bold font-headline truncate">
//                       {pkg.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-5 sm:p-6 grow flex flex-col justify-start">
//                   <p className="text-[10px] sm:text-[11px] text-stone-500 mb-1.5 font-headline font-medium">
//                     الغاية الوجدانية للرحلة:
//                   </p>

//                   <p className="text-xs text-stone-200 bg-[#1C1C1E] p-3 rounded-xl mb-4 sm:mb-5 font-sans leading-relaxed border-r-2 border-luxury-brand/40 pr-3 text-right">
//                     {pkg.description}
//                   </p>

//                   {/* قائمة الميزات الحصرية (الـ Features المنفصلة) */}
//                   <ul className="space-y-2.5 sm:space-y-3">
//                     {[pkg.feature1, pkg.feature2, pkg.feature3].map(
//                       (feat, fIdx) =>
//                         feat && (
//                           <li
//                             key={fIdx}
//                             className="flex items-start gap-2 text-xs text-stone-400 text-right justify-start"
//                           >
//                             <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
//                             <span className="font-sans leading-relaxed text-stone-300 text-[11px] sm:text-xs">
//                               {feat}
//                             </span>
//                           </li>
//                         ),
//                     )}
//                   </ul>
//                 </div>

//                 {/* Card Footer containing fixed Pricing Structure & CTA */}
//                 <div className="p-5 sm:p-6 border-t border-white/5 bg-[#111112]">
//                   <div className="flex justify-between items-center mb-4 text-xs">
//                     <span className="text-stone-500 font-sans">
//                       القيمة التعديلية للاستثمار:
//                     </span>
//                     <div
//                       className="text-luxury-brand font-bold font-headline flex items-center gap-0.5"
//                       dir="ltr"
//                     >
//                       <span className="text-xs text-luxury-brand/70 font-sans">
//                         USD
//                       </span>
//                       {/* السعر يركب برمجياً بشكل ثابت مع حماية الهيكل البصري */}
//                       <span className="text-sm sm:text-base font-extrabold">
//                         ${pkg.price_number}
//                       </span>
//                       <span className="text-[10px] text-stone-500 font-sans ml-0.5">
//                         / شخصين
//                       </span>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Button
//                       variant="whatsapp"
//                       size="md"
//                       onClick={() => handleWhatsAppInquiry(pkg.title)}
//                       className="w-full text-xs font-bold py-2.5 sm:py-3 transition-all duration-300 active:scale-[0.99]"
//                       rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
//                     >
//                       استشارة مخصصة عبر واتساب
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Packages;

//
//
//
//
//
//
//
//
//
//

// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { Heart, Shield, Sparkles, Check } from "lucide-react";
// import { motion } from "framer-motion";
// import { landingPageContent } from "../data/content";
// import { Button } from "../components/Button";
// import { cn } from "../utils/cn";
// import { FaWhatsapp } from "react-icons/fa";

// interface PackagesProps {
//   onSelectPackage: (packageId: string) => void;
// }

// export const Packages = ({ onSelectPackage }: PackagesProps) => {
//   const { packages } = landingPageContent;

//   const handleWhatsAppInquiry = (msg: string) => {
//     const encoded = encodeURIComponent(msg);
//     window.open(`https://wa.me/966567000039?text=${encoded}`, "_blank");
//   };

//   const badgeIcons = [
//     <Heart
//       key="heart"
//       className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-rose-500 text-rose-500"
//     />,
//     <Sparkles
//       key="sparkle"
//       className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500"
//     />,
//     <Shield
//       key="shield"
//       className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 fill-emerald-100/50"
//     />,
//   ];

//   const badges = [
//     "الأكثر تفضيلاً للأزواج وعن تجربة",
//     "رفاهية ملكية متكاملة",
//     "باقة مخصصة",
//   ];

//   return (
//     <section
//       className="py-16 sm:py-24 bg-[#0A0A0B] text-stone-300 relative select-none"
//       dir="rtl"
//       id="packages-experiences-section"
//     >
//       <div className="container mx-auto px-4">
//         {/* هيدر قسم الباقات والتجارب لرحلات فهد */}
//         <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
//           <span className="text-[10px] sm:text-xs uppercase tracking-wider bg-luxury-brand/10 border border-luxury-brand/20 rounded-full px-3.5 py-1 inline-block mb-3 sm:mb-4 text-luxury-brand font-headline font-semibold">
//             تجاربنا المختارة بعناية للأزواج
//           </span>

//           <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F2ED] font-headline mb-3 sm:mb-4 leading-tight">
//             تجارب زوجية مصممة لبناء ذكريات خالدة
//           </h2>

//           <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-sans leading-relaxed">
//             نحن لا نبيع فنادق أو مقاعد طائرات.. نحن نصمم فصولاً في قصة حبكما
//           </p>
//         </div>

//         {/* شبكة عرض كروت الباقات الفاخرة */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {packages.map((pkg, idx) => {
//             const visualBadge = badges[idx] || "باقة مخصصة";
//             const visualBadgeIcon = badgeIcons[idx] || (
//               <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//             );

//             return (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="group bg-[#141416] border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-white/15 transition-all duration-300"
//               >
//                 {/* الجزء البصري - الصورة والشارات العلوية المحددة */}
//                 <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden bg-stone-900">
//                   <img
//                     src={pkg.imageUrl}
//                     alt={pkg.title}
//                     className="w-full h-full object-cover transition-transform duration-[6s] ease-out group-hover:scale-103"
//                     referrerPolicy="no-referrer"
//                   />

//                   <div className="absolute inset-0 bg-linear-to-t from-[#141416] via-[#141416]/30 to-transparent" />

//                   {/* الشارة التفضيلية العلوية اليمنى */}
//                   <div className="absolute top-9 right-3 sm:top-12 sm:right-4 bg-[#141416]/90 backdrop-blur-md border border-white/10 py-1 px-2.5 sm:px-3 rounded-full flex items-center gap-1.5 text-[9px] sm:text-[10px] text-white font-sans max-w-[85%] sm:max-w-none truncate">
//                     {visualBadgeIcon}
//                     <span className="truncate">{visualBadge}</span>
//                   </div>

//                   {/* شارة مدة الرحلة اليسرى */}
//                   <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] text-luxury-brand font-headline font-bold">
//                     {pkg.duration}
//                   </div>

//                   {/* نص العنوان ونوع الأجواء المتراكبة على الصورة */}
//                   <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-right left-3 sm:left-4">
//                     <span className="text-[9px] sm:text-[10px] text-luxury-brand uppercase block font-headline font-bold tracking-wider mb-0.5">
//                       {pkg.vibe}
//                     </span>
//                     <h3 className="text-white text-base sm:text-lg font-bold font-headline truncate">
//                       {pkg.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* محتوى وتفاصيل كرت الباقة */}
//                 <div className="p-5 sm:p-6 grow flex flex-col justify-start">
//                   <p className="text-[10px] sm:text-[11px] text-stone-500 mb-1.5 font-headline font-medium">
//                     الغاية الوجدانية للرحلة:
//                   </p>

//                   <p className="text-xs text-stone-200 bg-[#1C1C1E] p-3 rounded-xl mb-4 sm:mb-5 font-sans leading-relaxed border-r-2 border-luxury-brand/40 pr-3">
//                     {pkg.emotionalGoal}
//                   </p>

//                   <ul className="space-y-2.5 sm:space-y-3">
//                     {pkg.features.map((feat, fIdx) => (
//                       <li
//                         key={fIdx}
//                         className="flex items-start gap-2 text-xs text-stone-400"
//                       >
//                         <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
//                         <span
//                           className={cn(
//                             "font-sans leading-relaxed text-stone-300 text-[11px] sm:text-xs",
//                             feat.isPremiumHighlight &&
//                               "text-white font-semibold",
//                           )}
//                         >
//                           {feat.text}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* تذييل الكرت وأزرار الحجز والتحويل */}
//                 <div className="p-5 sm:p-6 border-t border-white/5 bg-[#111112]">
//                   <div className="flex justify-between items-center mb-4 text-xs">
//                     <span className="text-stone-500 font-sans">
//                       القيمة التقديرية للاستثمار:
//                     </span>
//                     <span className="text-luxury-brand font-bold font-headline">
//                       {pkg.pricingPlaceholder}
//                     </span>
//                   </div>

//                   <div className="space-y-2">
//                     <Button
//                       variant="whatsapp"
//                       size="md"
//                       onClick={() => handleWhatsAppInquiry(pkg.whatsappMessage)}
//                       className="w-full text-xs font-bold py-2.5 sm:py-3 transition-all duration-300 active:scale-[0.99]"
//                       rightIcon={<FaWhatsapp className="w-5 h-5 text-white" />}
//                     >
//                       استشارة مخصصة عبر واتساب
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Packages;
