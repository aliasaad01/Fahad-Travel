/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Calendar,
  User,
  Phone,
  Sparkles,
  Heart,
  Shield,
  Landmark,
} from "lucide-react";
import { Button } from "./Button";
import { cn } from "../utils/cn";

// ==========================================
// 1. البيانات الثابتة والـ Schema لرحلات فهد
// ==========================================

const PACKAGES_INFO = {
  "pkg-memory": "باقة ذِكرى المتوازنة والمريحة",
  "pkg-honeymoon": "باقة شهر العسل (خصوصية تامة وإحساس البدايات)",
  "pkg-luxury": "باقة فهد الخاصة (رفاهية مطلقة ونخبوية)",
  "pkg-custom": "أرغب بتصميم باقة مخصصة بالكامل حسب رغبتنا",
} as const;

const SURPRISE_OPTIONS = [
  {
    value: "roses",
    label:
      "تزيين الجناح الخاص بالورود والشموع والترتيبات الرومانسية عند الوصول",
  },
  { value: "yacht", label: "حجز يخت خاص مع عشاء فاخر وعازف كمان عند الغروب" },
  { value: "spa", label: "جلسة مساج وعلاج صحي VIP متكاملة للزوجين معاً" },
  {
    value: "photography",
    label: "جلسة تصوير احترافية خاصة لتخليد لحظات التقارب والود للذكرى",
  },
] as const;

const inquirySchema = z.object({
  fullName: z
    .string()
    .min(3, "فضلاً، يرجى كتابة اسمكم الكريم (٣ أحرف على الأقل)")
    .max(50, "الاسم طويل جداً"),
  whatsappNumber: z
    .string()
    .min(9, "يرجى كتابة رقم الجوال/الواتساب بشكل صحيح (مثال: 050xxxxxxx)")
    .regex(
      /^[+]?[0-9\s-]{9,18}$/,
      "صيغة الرقم غير صحيحة، يرجى التأكد من الأرقام",
    ),
  preferredPackage: z.enum([
    "pkg-memory",
    "pkg-honeymoon",
    "pkg-luxury",
    "pkg-custom",
  ]),
  approximateDate: z
    .string()
    .min(2, "يرجى توضيح الموعد التقريبي لراحتنا في الترتيب"),
  specialRequests: z.array(z.string()).optional(),
  privacyNeeds: z.string().optional(),
  notes: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  initialPackageId?: keyof typeof PACKAGES_INFO;
  onSuccessSubmit?: (data: InquiryFormData) => void;
}

// ==========================================
// 2. مكون فرعي لصفحة النجاح المتجاوبة
// ==========================================
const SuccessPanel = ({
  data,
  selectedRequests,
}: {
  data: InquiryFormData;
  selectedRequests: string[];
}) => {
  const handleWhatsAppRedirect = () => {
    const msg = `مرحباً رحلات فهد للأزواج، قمت بإرسال طلبي للرحلة الخاصة بالاسم: ${data.fullName}. أرغب بمناقشة باقة: (${PACKAGES_INFO[data.preferredPackage]}) الآن وتنسيق البرنامج المخصص.`;
    window.open(
      `https://wa.me/966567000039?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      className="bg-white border border-luxury-accent/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center shadow-xl max-w-xl mx-auto touch-manipulation"
      dir="rtl"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-luxury-brand border-2 border-luxury-brand/50 animate-bounce">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-luxury-brand text-luxury-brand" />
      </div>

      <h3 className="font-headline font-bold text-xl sm:text-2xl text-luxury-dark mb-2 sm:mb-3 px-2">
        شكراً لثقتكم الغالية، {data.fullName} ❤️
      </h3>

      <p className="text-xs sm:text-sm text-stone-600 mb-5 sm:mb-6 leading-relaxed px-1">
        لقد استلمنا رغباتكم بخصوص تصميم{" "}
        <span className="font-headline font-bold text-luxury-brand">
          {PACKAGES_INFO[data.preferredPackage]}
        </span>
        . أنتما على بعد خطوة واحدة لميلاد فصل رومانسي مذهل مليء بالانسجام
        والرفاهية. يقوم الآن مستشار تجارب الأزواج بمراجعة طلبكم وسنتواصل معكم
        مباشرة في أقل من ساعتين.
      </p>

      <div className="bg-stone-50 border border-stone-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-right mb-5 sm:mb-6">
        <h4 className="text-[10px] sm:text-xs font-bold text-stone-400 font-sans mb-2">
          ملخص تطلعات رحلتكم مع رحلات فهد:
        </h4>
        <ul className="space-y-1.5 text-[11px] sm:text-xs text-stone-700">
          <li className="truncate">
            <strong>الباقة المطلوبة:</strong>{" "}
            {PACKAGES_INFO[data.preferredPackage]}
          </li>
          <li className="truncate">
            <strong>الموعد المقترح:</strong> {data.approximateDate}
          </li>
          {data.privacyNeeds && (
            <li className="truncate">
              <strong>الخصوصية:</strong> {data.privacyNeeds}
            </li>
          )}
          {selectedRequests.length > 0 && (
            <li className="truncate">
              <strong>الترتيبات الخاصة:</strong>{" "}
              {selectedRequests
                .map(
                  (r) =>
                    SURPRISE_OPTIONS.find(
                      (o) => o.value === r,
                    )?.label.substring(0, 15) + "...",
                )
                .join("، ")}
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-col gap-2.5 justify-center px-1">
        <Button
          variant="whatsapp"
          className="w-full text-xs sm:text-sm py-3"
          onClick={handleWhatsAppRedirect}
        >
          نقل النقاش للواتساب فوراً تسريعاً للتصميم والحجز
        </Button>
        <span className="text-[9px] sm:text-[10px] text-stone-400 font-sans">
          أو انتظر اتصال مستشار النخبة بنا على الرقم: {data.whatsappNumber}
        </span>
      </div>
    </div>
  );
};

// ==========================================
// 3. المكون الأساسي (الفورم) لرحلات فهد
// ==========================================
export const InquiryForm = ({
  initialPackageId = "pkg-memory",
  onSuccessSubmit,
}: InquiryFormProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      whatsappNumber: "",
      preferredPackage: initialPackageId,
      approximateDate: "",
      specialRequests: [],
      privacyNeeds: "",
      notes: "",
    },
  });

  const selectedPackage = watch("preferredPackage");
  const selectedRequests = watch("specialRequests") || [];

  const handleCheckboxChange = (value: string) => {
    const updatedRequests = selectedRequests.includes(value)
      ? selectedRequests.filter((item) => item !== value)
      : [...selectedRequests, value];

    setValue("specialRequests", updatedRequests, { shouldValidate: true });
  };

  const onSubmit = (data: InquiryFormData) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSubmittedData(data);

      try {
        const saved = localStorage.getItem("fahad_trips_inquiries");
        const currentInquiries = saved ? JSON.parse(saved) : [];
        currentInquiries.push({
          ...data,
          dateSubmitted: new Date().toISOString(),
        });
        localStorage.setItem(
          "fahad_trips_inquiries",
          JSON.stringify(currentInquiries),
        );
      } catch (e) {
        console.error("LocalStorage write failed", e);
      }

      if (onSuccessSubmit) onSuccessSubmit(data);
    }, 1500);
  };

  if (success && submittedData) {
    return (
      <SuccessPanel data={submittedData} selectedRequests={selectedRequests} />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-stone-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl text-right relative overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r from-luxury-brand via-luxury-accent to-luxury-brand" />

      <div className="mb-5 sm:mb-6">
        <h3 className="font-headline font-bold text-lg sm:text-xl text-luxury-dark flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-brand shrink-0 animate-pulse" />
          <span>صمّم ملاذكما الآمن وحجزكما المرتب مجانًا</span>
        </h3>
        <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
          استقطع دقيقتين فقط لإخبارنا برؤيتك لتجربتكما القادمة، ولندع نحن
          التخطيط المجهد يذوب تمامًا.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* الاسم الكامل */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-luxury-brand shrink-0" />
            <span>الاسم الكريم (المضيف) *</span>
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="مثال: صالح التميمي"
            className={cn(
              "w-full bg-stone-50 border border-stone-200 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-luxury-brand/20",
              errors.fullName && "border-rose-400 focus:ring-rose-100",
            )}
          />
          {errors.fullName?.message && (
            <p className="text-[10px] sm:text-[11px] text-rose-500 mt-1 font-sans font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* رقم الواتساب */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-luxury-brand shrink-0" />
            <span>رقم جوال الواتساب للتواصل الفوري *</span>
          </label>
          <input
            type="text"
            {...register("whatsappNumber")}
            placeholder="مثال: 0505123456"
            className={cn(
              "w-full bg-stone-50 border border-stone-200 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-luxury-brand/20 text-right",
              errors.whatsappNumber && "border-rose-400 focus:ring-rose-100",
            )}
          />
          <span className="text-[10px] text-stone-400 font-sans mt-1 block leading-tight">
            سيتواصل معك فريقنا بسرية تامة لتقديم المقترحات والمسارات المتاحة
            للأزواج.
          </span>
          {errors.whatsappNumber?.message && (
            <p className="text-[10px] sm:text-[11px] text-rose-500 mt-1 font-sans font-medium">
              {errors.whatsappNumber.message}
            </p>
          )}
        </div>

        {/* خيارات الباقات */}
        <div>
          <label className="block text-xs font-headline font-bold text-stone-700 mb-2">
            باقات الرفاهية والانسجام المقترحة أو المبدئية:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(PACKAGES_INFO).map(([key, name]) => (
              <label
                key={key}
                className={cn(
                  "flex items-start gap-2 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-[11px] sm:text-xs cursor-pointer transition-all duration-200 bg-stone-50/50 border-stone-200 hover:bg-stone-50 text-stone-600 active:scale-[0.99] touch-manipulation",
                  selectedPackage === key &&
                    "bg-amber-50/40 border-luxury-brand shadow-sm text-luxury-dark font-medium",
                )}
              >
                <input
                  type="radio"
                  value={key}
                  {...register("preferredPackage")}
                  className="mt-0.5 accent-luxury-brand shrink-0"
                />
                <span className="font-headline leading-tight">{name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* موعد الرحلة */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-luxury-brand shrink-0" />
            <span>الموعد التقريبي المأمول للرحلة والمدة *</span>
          </label>
          <input
            type="text"
            {...register("approximateDate")}
            placeholder="مثال: منتصف أغسطس القادم - لمدة ٧ أيام"
            className={cn(
              "w-full bg-stone-50 border border-stone-200 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-luxury-brand/20",
              errors.approximateDate && "border-rose-400 focus:ring-rose-100",
            )}
          />
          {errors.approximateDate?.message && (
            <p className="text-[10px] sm:text-[11px] text-rose-500 mt-1 font-sans font-medium">
              {errors.approximateDate.message}
            </p>
          )}
        </div>

        {/* متطلبات الخصوصية */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-luxury-brand shrink-0" />
            <span>
              هل لديكم متطلبات خصوصية اجتماعية معينة للأزواج؟ (اختياري)
            </span>
          </label>
          <input
            type="text"
            {...register("privacyNeeds")}
            placeholder="مثال: مسبح مغلق تماماً، فيلا معزولة، شواطئ مغطاة"
            className="w-full bg-stone-50 border border-stone-200 focus:ring-luxury-brand/20 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4"
          />
        </div>

        {/* المفاجآت الرومانسية */}
        <div>
          <label className="block text-xs font-headline font-bold text-stone-700 mb-2 leading-tight">
            هل تحبون تضمين مفاجآت وترتيبات رومانسية استثنائية صامتة من فريقنا؟
            (اختياري)
          </label>
          <div className="space-y-1.5">
            {SURPRISE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex items-start gap-2 p-2 rounded-xl border text-[11px] sm:text-xs cursor-pointer transition-all bg-stone-50/20 border-transparent text-stone-600 hover:bg-stone-50 active:scale-[0.99] touch-manipulation",
                  selectedRequests.includes(opt.value) &&
                    "bg-amber-50/20 border-luxury-accent/30 text-luxury-dark font-medium",
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedRequests.includes(opt.value)}
                  onChange={() => handleCheckboxChange(opt.value)}
                  className="mt-0.5 accent-luxury-brand shrink-0"
                />
                <span className="leading-tight">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* زر الإرسال التفاعلي */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="secondary"
            className="w-full shadow-md text-amber-950 text-xs sm:text-sm py-3"
            isLoading={loading}
            shimmer
          >
            إرسال وتصميم برنامجي المعتمد لقرّة العين ✨
          </Button>
          <div className="flex items-start gap-1.5 mt-3 text-[9px] sm:text-[10px] text-stone-400 font-sans justify-center px-1 text-center">
            <Landmark className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-luxury-brand shrink-0 mt-0.5" />
            <span className="leading-tight">
              الطلب يعتبر استشارة مجانية وسرية مبدئية ولا يترتب عليه أي التزام
              مالي عبر رحلات فهد للأزواج
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InquiryForm;
