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
import { cn } from "../utils/cn"; // دالة الدمج المعتمدة بمشروعنا

// ==========================================
// 1. البيانات الثابتة والـ Schema (خارج المكون تماماً)
// ==========================================

const PACKAGES_INFO = {
  "pkg-memory": "باقة تجديد الوصال (كابادوكيا الحالمة)",
  "pkg-honeymoon": "باقة الميثاق الأبدي (شهر العسل الملكي)",
  "pkg-luxury": "باقة النخبة المطلقة (الفيلا واليخت الخاص)",
  "pkg-custom": "أرغب بتصميم باقة خاصة مبنية فقط على رغباتنا",
} as const;

const SURPRISE_OPTIONS = [
  {
    value: "roses",
    label: "تزيين الجناح الخاص بالحقائب والورود والشموع الطبيعية عند الوصول",
  },
  { value: "yacht", label: "حجز يخت خاص مع عشاء فاخر وعازف كمان عند الغروب" },
  { value: "spa", label: "جلسة مساج وعلاج صحي VIP متكاملة للزوجين معاً" },
  {
    value: "photography",
    label: "جلسة تصوير احترافية خاصة لتخليد لحظات التقارب والود",
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
  specialRequests: z.array(z.string()).optional(), // التعديل هنا: استبدل .default([]) بـ .optional()
  privacyNeeds: z.string().optional(),
  notes: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  initialPackageId?: keyof typeof PACKAGES_INFO;
  onSuccessSubmit?: (data: InquiryFormData) => void;
}

// ==========================================
// 2. مكون فرعي لصفحة النجاح لتبسيط الملف الأساسي
// ==========================================
const SuccessPanel = ({
  data,
  selectedRequests,
}: {
  data: InquiryFormData;
  selectedRequests: string[];
}) => {
  const handleWhatsAppRedirect = () => {
    const msg = `مرحباً تآلُف، قمت بإرسال طلبي للرحلة الخاصة بالاسم: ${data.fullName}. أرغب بمناقشة باقة: (${PACKAGES_INFO[data.preferredPackage]}) الآن.`;
    window.open(
      `https://wa.me/966500000000?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div
      className="bg-white border border-luxury-accent/30 rounded-3xl p-8 text-center shadow-xl max-w-xl mx-auto"
      dir="rtl"
    >
      <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-luxury-brand border-2 border-luxury-brand/50 animate-bounce">
        <Heart className="w-8 h-8 fill-luxury-brand text-luxury-brand" />
      </div>

      <h3 className="font-headline font-bold text-2xl text-luxury-dark mb-3">
        شكراً لثقتكم الغالية، {data.fullName} ❤️
      </h3>

      <p className="text-sm text-stone-600 mb-6 leading-relaxed">
        لقد استلمنا رغباتكم بخصوص تصميم{" "}
        <span className="font-headline font-bold text-luxury-brand">
          {PACKAGES_INFO[data.preferredPackage]}
        </span>
        . أنتما على بعد خطوة واحدة لميلاد فصل رومانسي مذهل بتركيا. يقوم الآن
        مستشار تجارب الأزواج لدينا بمراجعة طلبكم وسنتواصل معكم مباشرة عبر
        الواتساب في أقل من ساعتين.
      </p>

      <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4 text-right mb-6">
        <h4 className="text-xs font-bold text-stone-400 font-sans mb-2">
          ملخص تطلعات رحلتكم:
        </h4>
        <ul className="space-y-1.5 text-xs text-stone-700">
          <li>
            • <strong>الباقة المطلوبة:</strong>{" "}
            {PACKAGES_INFO[data.preferredPackage]}
          </li>
          <li>
            • <strong>الموعد المقترح:</strong> {data.approximateDate}
          </li>
          {data.privacyNeeds && (
            <li>
              • <strong>الخصوصية:</strong> {data.privacyNeeds}
            </li>
          )}
          {selectedRequests.length > 0 && (
            <li>
              • <strong>الترتيبات الشاعرية:</strong>{" "}
              {selectedRequests
                .map(
                  (r) =>
                    SURPRISE_OPTIONS.find(
                      (o) => o.value === r,
                    )?.label.substring(0, 20) + "...",
                )
                .join("، ")}
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-col gap-3 justify-center">
        <Button
          variant="whatsapp"
          className="w-full"
          onClick={handleWhatsAppRedirect}
        >
          نقل النقاش للواتساب فوراً تسريعاً للتصميم
        </Button>
        <span className="text-[10px] text-stone-400 font-sans">
          أو انتظر اتصال مستشار النخبة بنا على الرقم: {data.whatsappNumber}
        </span>
      </div>
    </div>
  );
};

// ==========================================
// 3. المكون الأساسي (الفورم)
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

  // دالة تحديث الـ Checkboxes تم تبسيطها بالكامل وتأمينها
  const handleCheckboxChange = (value: string) => {
    const updatedRequests = selectedRequests.includes(value)
      ? selectedRequests.filter((item) => item !== value)
      : [...selectedRequests, value];

    setValue("specialRequests", updatedRequests, { shouldValidate: true });
  };

  const onSubmit = (data: InquiryFormData) => {
    setLoading(true);

    // محاكاة الاتصال بالسيرفر
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSubmittedData(data);

      try {
        const saved = localStorage.getItem("taaluf_inquiries");
        const currentInquiries = saved ? JSON.parse(saved) : [];
        currentInquiries.push({
          ...data,
          dateSubmitted: new Date().toISOString(),
        });
        localStorage.setItem(
          "taaluf_inquiries",
          JSON.stringify(currentInquiries),
        );
      } catch (e) {
        console.error("LocalStorage write failed", e);
      }

      if (onSuccessSubmit) onSuccessSubmit(data);
    }, 1500);
  };

  // عرض صفحة النجاح في حال إتمام الطلب بنجاح
  if (success && submittedData) {
    return (
      <SuccessPanel data={submittedData} selectedRequests={selectedRequests} />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-8 shadow-xl text-right relative overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-l from-luxury-brand via-luxury-accent to-luxury-brand" />

      <div className="mb-6">
        <h3 className="font-headline font-bold text-xl text-luxury-dark flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-luxury-brand animate-pulse" />
          <span>صمّم ملاذكما الآمن مجانًا</span>
        </h3>
        <p className="text-xs text-stone-500">
          استقطع دقيقتين فقط لإخبارنا برؤيتك، ولندع نحن التخطيط المجهد يذوب
          تمامًا.
        </p>
      </div>

      <div className="space-y-5">
        {/* الاسم الكامل */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-4 h-4 text-luxury-brand" />
            <span>الاسم الكريم (المضيف) *</span>
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="مثال: صالح التميمي"
            className={cn(
              "w-full bg-stone-50 border border-stone-200 rounded-2xl py-3 px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-luxury-brand/30",
              errors.fullName && "border-rose-400 focus:ring-rose-200",
            )}
          />
          {errors.fullName?.message && (
            <p className="text-[11px] text-rose-500 mt-1 font-sans font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* رقم الواتساب */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-luxury-brand" />
            <span>رقم جوال الواتساب تواصل فوري *</span>
          </label>
          <input
            type="text"
            {...register("whatsappNumber")}
            placeholder="مثال: 0505123456"
            className={cn(
              "w-full bg-stone-50 border border-stone-200 rounded-2xl py-3 px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-luxury-brand/30 text-right",
              errors.whatsappNumber && "border-rose-400 focus:ring-rose-200",
            )}
          />
          <span className="text-[10px] text-stone-400 font-sans mt-1 block">
            سيتواصل معك فريقنا بسرية تامة لتقديم المقترحات والأسعار والمسارات
            المتاحة.
          </span>
          {errors.whatsappNumber?.message && (
            <p className="text-[11px] text-rose-500 mt-1 font-sans font-medium">
              {errors.whatsappNumber.message}
            </p>
          )}
        </div>

        {/* خيارات الباقات */}
        <div>
          <label className="block text-xs font-headline font-bold text-stone-700 mb-2">
            باقات الرفاهية المقترحة أو المبدئية:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {Object.entries(PACKAGES_INFO).map(([key, name]) => (
              <label
                key={key}
                className={cn(
                  "flex items-start gap-2.5 p-3 rounded-2xl border text-xs cursor-pointer transition-all duration-300 bg-stone-50/50 border-stone-200 hover:bg-stone-50 text-stone-600",
                  selectedPackage === key &&
                    "bg-amber-50/40 border-luxury-brand shadow-sm text-luxury-dark",
                )}
              >
                <input
                  type="radio"
                  value={key}
                  {...register("preferredPackage")}
                  className="mt-0.5 accent-luxury-brand"
                />
                <span className="font-headline font-semibold">{name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* موعد الرحلة */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-luxury-brand" />
            <span>الموعد التقريبي المأمول للرحلة والمدة *</span>
          </label>
          <input
            type="text"
            {...register("approximateDate")}
            placeholder="مثال: منتصف أغسطس القادم أو بعد أسبوعين - لمدة ٧ أيام"
            className={cn(
              "w-full bg-stone-50 border border-stone-200 rounded-2xl py-3 px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-luxury-brand/30",
              errors.approximateDate && "border-rose-400 focus:ring-rose-200",
            )}
          />
          {errors.approximateDate?.message && (
            <p className="text-[11px] text-rose-500 mt-1 font-sans font-medium">
              {errors.approximateDate.message}
            </p>
          )}
        </div>

        {/* متطلبات الخصوصية */}
        <div>
          <label className="text-xs font-headline font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-luxury-brand" />
            <span>هل لديكم متطلبات خصوصية اجتماعية معينة؟ (اختياري)</span>
          </label>
          <input
            type="text"
            {...register("privacyNeeds")}
            placeholder="مثال: مسبح مغلق تماماً، فيلا معزولة، سائق وطاقم بقمة الحشمة"
            className="w-full bg-stone-50 border border-stone-200 focus:ring-luxury-brand/30 rounded-2xl py-3 px-4 text-sm text-stone-800 transition-all outline-none focus:bg-white focus:ring-4"
          />
        </div>

        {/* المفاجآت الرومانسية */}
        <div>
          <label className="block text-xs font-headline font-bold text-stone-700 mb-2">
            هل تحبون تضمين مفاجآت وترتيبات رومانسية استثنائية صامتة؟ (اختياري)
          </label>
          <div className="space-y-2">
            {SURPRISE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex items-start gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-all bg-stone-50/20 border-transparent text-stone-600 hover:bg-stone-50",
                  selectedRequests.includes(opt.value) &&
                    "bg-amber-50/20 border-luxury-accent/50 text-luxury-dark",
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedRequests.includes(opt.value)}
                  onChange={() => handleCheckboxChange(opt.value)}
                  className="mt-0.5 accent-luxury-brand"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* زر الإرسال */}
        <div className="pt-3">
          <Button
            type="submit"
            variant="secondary"
            className="w-full shadow-md text-amber-950 text-sm py-3"
            isLoading={loading}
            shimmer
          >
            إرسال وتصميم برنامجي المعتمد لقرّة العين ✨
          </Button>
          <div className="flex items-center gap-1.5 mt-3 text-[10px] text-stone-400 font-sans justify-center">
            <Landmark className="w-3.5 h-3.5" />
            <span>
              الطلب يعتبر استشارة مجانية وسرية مبدئية ولا يترتب عليه أي التزام
              مالي
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
