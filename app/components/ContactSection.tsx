"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  AlertCircle, 
  CheckCircle2,
  PhoneCall,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

interface ContactSectionProps {
  lang?: "en" | "ar";
}

const copy = {
  en: {
    tagline: "Contact Us",
    sectionNum: "04 / GET IN TOUCH",
    title: "Let's Elevate Your Next Project",
    desc: "Our engineering and customer support team is ready to design, install, and maintain the safest and most luxurious elevator systems in Egypt.",
    
    // Cards
    addressTitle: "Headquarters Address",
    addressValue: "12 El-Batal Ahmed Abdel Aziz St, Mohandessin, Giza, Egypt",
    
    hoursTitle: "Office Hours",
    hoursValue: "Saturday – Thursday: 9:00 AM – 6:00 PM (Friday Off)",
    
    emergencyTitle: "24/7 Emergency Maintenance",
    emergencySubtitle: "For urgent elevator breakdowns and rescue operations",
    emergencyPhone: "+20 100 999 8888",
    
    phoneTitle: "Direct Phone Numbers",
    whatsappTitle: "WhatsApp Sales & Inquiries",
    emailTitle: "Official Email Addresses",
    
    socialTitle: "Follow Our Journey",
    socialDesc: "Connect with us on social media for project updates, safety tips, and announcements.",
    
    // Form Labels
    formTitle: "Send a Secure Inquiry",
    formSubtitle: "Fill out the form below and an engineer will contact you within 2 hours.",
    labelName: "Full Name",
    labelCompany: "Company (Optional)",
    labelPhone: "Phone Number",
    labelEmail: "Email Address",
    labelCountry: "Country",
    labelProjectType: "Project Type",
    labelMessage: "Detailed Message",
    
    placeholderName: "John Doe",
    placeholderCompany: "Elevate Real Estate",
    placeholderPhone: "+20 100 123 4567",
    placeholderEmail: "john@example.com",
    placeholderCountry: "Egypt",
    placeholderMessage: "Describe your project dimensions, stops, cabin preferences...",
    
    selectPlaceholder: "Select project type...",
    optionPassenger: "Passenger Elevator",
    optionPanoramic: "Panoramic Glass Lift",
    optionHome: "Home / Villa Lift",
    optionFood: "Food / Dumbwaiter Lift",
    optionMaintenance: "Maintenance & Service Contract",
    optionModernization: "Elevator Modernization",
    
    btnSubmit: "Submit Secure Inquiry",
    btnSubmitting: "Encrypting & Sending...",
    
    // Feedback
    successTitle: "Inquiry Sent Successfully",
    successMsg: "Thank you for contacting Arab Egypt for Elevators. An engineer has been assigned to your request and will call you shortly.",
    errorTitle: "Submission Failed",
    errorMsg: "Please check the form inputs for errors and try again.",
    validationRequired: "This field is required",
    validationEmail: "Please enter a valid email address",
    validationPhone: "Please enter a valid phone number",
  },
  ar: {
    tagline: "تواصل معنا",
    sectionNum: "٠٤ / اتصل بنا",
    title: "دعنا نرتقي بمشروعك القادم",
    desc: "فريقنا الهندسي وخدمة العملاء على أتم استعداد لتصميم وتوريد وتركيب وصيانة أنظمة المصاعد الأكثر أماناً وفخامة في مصر.",
    
    // Cards
    addressTitle: "عنوان المقر الرئيسي",
    addressValue: "١٢ شارع البطل أحمد عبد العزيز، المهندسين، الجيزة، جمهورية مصر العربية",
    
    hoursTitle: "أوقات العمل الرسمية",
    hoursValue: "السبت – الخميس: ٩:٠٠ صباحاً – ٦:٠٠ مساءً (الجمعة عطلة رسمية)",
    
    emergencyTitle: "صيانة طوارئ المصاعد ٢٤/٧",
    emergencySubtitle: "للبلاغات العاجلة وحالات تعطل المصاعد والإنقاذ السريع",
    emergencyPhone: "+٢٠ ١٠٠ ٩٩٩ ٨٨٨٨",
    
    phoneTitle: "أرقام الهاتف المباشرة",
    whatsappTitle: "واتساب المبيعات والاستفسارات",
    emailTitle: "البريد الإلكتروني الرسمي",
    
    socialTitle: "تابع مسيرتنا",
    socialDesc: "تواصل معنا عبر وسائل التواصل الاجتماعي لمتابعة تحديثات مشروعاتنا وإرشادات السلامة.",
    
    // Form Labels
    formTitle: "إرسال طلب استشارة آمن",
    formSubtitle: "يرجى ملء النموذج أدناه وسيقوم أحد مهندسينا بالتواصل معك في غضون ساعتين.",
    labelName: "الاسم الكامل",
    labelCompany: "الشركة (اختياري)",
    labelPhone: "رقم الهاتف",
    labelEmail: "البريد الإلكتروني",
    labelCountry: "الدولة",
    labelProjectType: "نوع المشروع المطلوب",
    labelMessage: "تفاصيل الطلب",
    
    placeholderName: "أحمد محمد",
    placeholderCompany: "الشركة العربية للتطوير العقاري",
    placeholderPhone: "+٢٠ ١٠٠ ١٢٣ ٤٥٦٧",
    placeholderEmail: "ahmed@example.com",
    placeholderCountry: "مصر",
    placeholderMessage: "اكتب تفاصيل مشروعك، عدد الوقفات، حمولة الكابينة المطلوبة...",
    
    selectPlaceholder: "اختر نوع المشروع...",
    optionPassenger: "مصعد ركاب سكني/تجاري",
    optionPanoramic: "مصعد بانوراما زجاجي",
    optionHome: "مصعد فيلا منزلي",
    optionFood: "مصعد طعام / خدمات",
    optionMaintenance: "عقد صيانة دورية للمصعد",
    optionModernization: "تحديث وتطوير مصعد قديم",
    
    btnSubmit: "إرسال الطلب الآن",
    btnSubmitting: "جاري التشفير والإرسال...",
    
    // Feedback
    successTitle: "تم إرسال طلبك بنجاح",
    successMsg: "نشكرك على تواصلك مع شركة مصر العربية للمصاعد. تم تعيين مهندس مختص لمراجعة طلبك وسيتصل بك قريباً جداً.",
    errorTitle: "فشل في إرسال الطلب",
    errorMsg: "يرجى التحقق من صحة البيانات المدخلة والمحاولة مرة أخرى.",
    validationRequired: "هذا الحقل مطلوب",
    validationEmail: "يرجى إدخال بريد إلكتروني صحيح",
    validationPhone: "يرجى إدخال رقم هاتف صحيح",
  }
};

export default function ContactSection({ lang = "en" }: ContactSectionProps) {
  const isRTL = lang === "ar";
  const t = isRTL ? copy.ar : copy.en;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    country: isRTL ? "مصر" : "Egypt",
    projectType: "",
    message: "",
    botField: "" // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const formRef = useRef<HTMLFormElement>(null);

  // Simple validation helper
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) tempErrors.name = t.validationRequired;
    if (!formData.phone.trim()) {
      tempErrors.phone = t.validationRequired;
    } else if (!/^\+?[\d\s-]{8,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = t.validationPhone;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = t.validationRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = t.validationEmail;
    }
    
    if (!formData.country.trim()) tempErrors.country = t.validationRequired;
    if (!formData.projectType) tempErrors.projectType = t.validationRequired;
    if (!formData.message.trim()) tempErrors.message = t.validationRequired;

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Honeypot spam check
    if (formData.botField) {
      // Quietly mock success to spam bots
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
      }, 1000);
      return;
    }

    try {
      // Simulate API submit latency
      await new Promise(resolve => setTimeout(resolve, 1800));
      
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        country: isRTL ? "مصر" : "Egypt",
        projectType: "",
        message: "",
        botField: ""
      });
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-8 lg:px-16 bg-[var(--c-bg)] text-[var(--c-text)] overflow-hidden transition-colors duration-500 rounded-t-[32px] md:rounded-t-[40px] lg:rounded-t-[48px] shadow-[0_-30px_60px_rgba(0,0,0,0.1)] z-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-8 md:left-16 w-[1px] bg-gradient-to-b from-black via-black/40 to-transparent dark:from-white" />
        <div className="absolute top-0 bottom-0 right-8 md:right-16 w-[1px] bg-gradient-to-b from-black via-black/40 to-transparent dark:from-white" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Intro */}
        <div className="pb-12 border-b border-[var(--c-border)]/30">
          <span className={cn("inline-block text-[#ec4e39] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold select-none", isRTL && "font-cairo")}>
            {t.tagline}
          </span>
          <span className={cn("text-[var(--c-text)]/40 text-[10px] md:text-xs tracking-wider mt-1.5 block select-none", isRTL && "font-cairo")}>
            {t.sectionNum}
          </span>
          
          <h2 className={cn("font-serif text-[clamp(2.0rem,4.2vw,3.8rem)] leading-[1.1] text-[var(--c-text)] max-w-4xl tracking-tight mt-6 font-bold", isRTL && "font-cairo leading-tight")}>
            {t.title}
          </h2>

          <p className={cn("text-[var(--c-text)]/60 text-sm md:text-base lg:text-lg max-w-2xl mt-6 leading-relaxed select-text", isRTL && "font-cairo")}>
            {t.desc}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
          
          {/* LEFT AREA: Bento Cards (Info & Map) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            
            {/* Quick Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: 24/7 Emergency Maintenance (RED ACCENT) */}
              <div className="md:col-span-2 rounded-[24px] border border-[#ec4e39]/30 bg-red-500/5 backdrop-blur-md p-6 lg:p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-[#ec4e39]/50 transition-all duration-300">
                <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 opacity-[0.03] text-red-500 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <PhoneCall size={180} />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ec4e39] text-[#FAF0ED] flex items-center justify-center animate-pulse">
                    <PhoneCall size={20} />
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-wider text-[#ec4e39]", isRTL && "font-cairo")}>
                    {t.emergencyTitle}
                  </span>
                </div>
                <div>
                  <h4 className={cn("text-lg font-semibold text-[var(--c-text)]", isRTL && "font-cairo")}>
                    {t.emergencySubtitle}
                  </h4>
                  <a 
                    href={`tel:${t.emergencyPhone.replace(/\s+/g, "").replace(/\+/g, "")}`}
                    className="text-2xl lg:text-3xl font-bold text-[#ec4e39] hover:underline mt-2 block tracking-wider"
                  >
                    {t.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* Card 2: Phone Numbers */}
              <div className="rounded-[24px] border border-[var(--c-border)]/20 bg-white/5 dark:bg-[#141313]/60 backdrop-blur-md p-6 flex flex-col justify-between gap-4 group hover:border-[#c5a880]/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-wider text-[#c5a880]", isRTL && "font-cairo")}>
                    {t.phoneTitle}
                  </span>
                </div>
                <div>
                  <a href="tel:+20237614500" className="text-lg font-bold text-[var(--c-text)] hover:text-[#ec4e39] block transition-colors tracking-wide">
                    +20 2 3761 4500
                  </a>
                  <a href="tel:+201001234567" className="text-base text-[var(--c-text)]/70 hover:text-[#ec4e39] block mt-1 transition-colors tracking-wide">
                    +20 100 123 4567
                  </a>
                </div>
              </div>

              {/* Card 3: WhatsApp Sales */}
              <div className="rounded-[24px] border border-[var(--c-border)]/20 bg-white/5 dark:bg-[#141313]/60 backdrop-blur-md p-6 flex flex-col justify-between gap-4 group hover:border-green-500/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                    {/* WhatsApp Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005  5.311 5.316.002 11.82.002c3.152.001 6.115 1.232 8.345 3.466 2.23 2.234 3.458 5.201  3.457 8.356-.005 6.51-5.316 11.82-11.82 11.82-2.003-.001-3.972-.51-5.729-1.48L0  24h.057zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.452 5.263 0 9.545-4.282 9.55-9.55.002-2.553-.993-4.953-2.797-6.757C16.42 2.502 14.025 1.5 11.47 1.5 6.208  1.5 1.925 5.782 1.92 11.047c-.001 1.765.461 3.488 1.34 5.007L2.247  21.36l5.4-1.417-.999-.789zm9.953-6.52c-.287-.144-1.702-.84-1.965-.936-.264-.096-.456-.144-.648.144-.191.288-.742.936-.909 1.128-.168.19-.335.216-.622.072-.288-.144-1.215-.447-2.316-1.43-.856-.764-1.433-1.706-1.6-1.993-.168-.288-.018-.444.126-.587.129-.129.287-.335.43-.503.144-.168.191-.288.287-.48.096-.19.048-.36-.024-.503-.072-.144-.648-1.56-.888-2.136-.233-.56-.47-.482-.648-.49-.168-.009-.36-.01-.552-.01-.191 0-.503.072-.767.36-.264.287-1.007.983-1.007 2.398s1.03 2.782 1.173 2.974c.144.192 2.027 3.096 4.91 4.343.686.296 1.22.474 1.637.607.69.219 1.319.19 1.815.115.553-.083 1.702-.696 1.942-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.551-.336z"/>
                    </svg>
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-wider text-green-500", isRTL && "font-cairo")}>
                    {t.whatsappTitle}
                  </span>
                </div>
                <div>
                  <a 
                    href="https://wa.me/201001234567" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-bold text-[var(--c-text)] hover:text-green-500 block transition-colors tracking-wide"
                  >
                    +20 100 123 4567
                  </a>
                  <span className="text-xs text-[var(--c-text)]/40 mt-1 block">
                    {isRTL ? "اضغط لبدء محادثة فورية" : "Click to chat directly"}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map Bento Card */}
            <div className="rounded-[24px] overflow-hidden border border-[var(--c-border)]/20 bg-white/5 dark:bg-[#141313]/60 backdrop-blur-md p-4 flex flex-col gap-4 flex-grow min-h-[350px] group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ec4e39]/15 text-[#ec4e39] flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className={cn("text-xs font-bold uppercase tracking-wider text-[var(--c-text)]/45 block", isRTL && "font-cairo")}>
                      {t.addressTitle}
                    </span>
                    <span className={cn("text-sm font-semibold text-[var(--c-text)] block mt-0.5", isRTL && "font-cairo")}>
                      {t.addressValue}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Map Iframe Wrapper with premium layout */}
              <div className="relative w-full flex-grow rounded-[18px] overflow-hidden border border-[var(--c-border)]/15">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6496357065963!2d31.2016335!3d30.0468984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413165b4c107%3A0xc3b86060c5a880!2s12%20El-Batal%20Ahmed%20Abdel%20Aziz%20St%2C%20Ad%20Doqi%20A%2C%20Dokki%2C%20Giza%20Governorate%2012611!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Masr Al Arabya Elevators Headquarters Map"
                  className="absolute inset-0 w-full h-full object-cover dark:opacity-80"
                />
              </div>
            </div>

            {/* Working Hours & Social Media */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hours */}
              <div className="rounded-[24px] border border-[var(--c-border)]/20 bg-white/5 dark:bg-[#141313]/60 backdrop-blur-md p-6 flex flex-col justify-between gap-4 hover:border-[#c5a880]/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-wider text-[#c5a880]", isRTL && "font-cairo")}>
                    {t.hoursTitle}
                  </span>
                </div>
                <p className={cn("text-sm font-semibold text-[var(--c-text)]/80 leading-relaxed", isRTL && "font-cairo")}>
                  {t.hoursValue}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-[24px] border border-[var(--c-border)]/20 bg-white/5 dark:bg-[#141313]/60 backdrop-blur-md p-6 flex flex-col justify-between gap-4 hover:border-[#ec4e39]/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ec4e39]/15 text-[#ec4e39] flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-wider text-[#ec4e39]", isRTL && "font-cairo")}>
                    {t.emailTitle}
                  </span>
                </div>
                <div>
                  <a href="mailto:info@arabegypt-elevators.com" className="text-sm font-bold text-[var(--c-text)] hover:text-[#ec4e39] block transition-colors truncate">
                    info@arabegypt-elevators.com
                  </a>
                  <a href="mailto:sales@arabegypt-elevators.com" className="text-xs text-[var(--c-text)]/70 hover:text-[#ec4e39] block mt-1 transition-colors truncate">
                    sales@arabegypt-elevators.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT AREA: Interactive Secure Form - 5 cols */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] border border-[var(--c-border)]/35 bg-white dark:bg-[#0c0c0c] p-6 md:p-8 lg:p-10 shadow-2xl relative h-full flex flex-col justify-between">
              
              <div>
                <h3 className={cn("text-xl md:text-2xl font-serif font-bold text-[var(--c-text)]", isRTL && "font-cairo")}>
                  {t.formTitle}
                </h3>
                <p className={cn("text-xs text-[var(--c-text)]/50 mt-1 leading-relaxed", isRTL && "font-cairo")}>
                  {t.formSubtitle}
                </p>

                {/* Form Tag */}
                <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
                  
                  {/* Honeypot Spam Protection (Invisible to humans) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botField">Leave this field blank</label>
                    <input
                      type="text"
                      id="botField"
                      name="botField"
                      value={formData.botField}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                      {t.labelName} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.placeholderName}
                      autoComplete="name"
                      className={cn(
                        "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300",
                        errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500",
                        isRTL && "font-cairo"
                      )}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      required
                    />
                    {errors.name && (
                      <span id="name-error" className={cn("text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5", isRTL && "font-cairo")}>
                        <AlertCircle size={10} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                      {t.labelCompany}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t.placeholderCompany}
                      autoComplete="organization"
                      className={cn(
                        "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300",
                        isRTL && "font-cairo"
                      )}
                    />
                  </div>

                  {/* Phone & Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                        {t.labelPhone} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.placeholderPhone}
                        autoComplete="tel"
                        className={cn(
                          "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300",
                          errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500",
                          isRTL && "font-cairo"
                        )}
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        required
                      />
                      {errors.phone && (
                        <span id="phone-error" className={cn("text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5", isRTL && "font-cairo")}>
                          <AlertCircle size={10} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                        {t.labelEmail} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.placeholderEmail}
                        autoComplete="email"
                        className={cn(
                          "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300",
                          errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500",
                          isRTL && "font-cairo"
                        )}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        required
                      />
                      {errors.email && (
                        <span id="email-error" className={cn("text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5", isRTL && "font-cairo")}>
                          <AlertCircle size={10} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Country & Project Type row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Country */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="country" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                        {t.labelCountry} *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder={t.placeholderCountry}
                        autoComplete="country-name"
                        className={cn(
                          "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300",
                          errors.country && "border-red-500 focus:border-red-500 focus:ring-red-500",
                          isRTL && "font-cairo"
                        )}
                        required
                      />
                      {errors.country && (
                        <span className={cn("text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5", isRTL && "font-cairo")}>
                          <AlertCircle size={10} /> {errors.country}
                        </span>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projectType" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                        {t.labelProjectType} *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300 appearance-none bg-no-repeat",
                          errors.projectType && "border-red-500 focus:border-red-500 focus:ring-red-500",
                          isRTL && "font-cairo"
                        )}
                        style={{
                          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")",
                          backgroundPosition: isRTL ? "left 12px center" : "right 12px center",
                          backgroundSize: "20px"
                        }}
                        required
                      >
                        <option value="" disabled>{t.selectPlaceholder}</option>
                        <option value="passenger">{t.optionPassenger}</option>
                        <option value="panoramic">{t.optionPanoramic}</option>
                        <option value="home">{t.optionHome}</option>
                        <option value="food">{t.optionFood}</option>
                        <option value="maintenance">{t.optionMaintenance}</option>
                        <option value="modernization">{t.optionModernization}</option>
                      </select>
                      {errors.projectType && (
                        <span className={cn("text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5", isRTL && "font-cairo")}>
                          <AlertCircle size={10} /> {errors.projectType}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className={cn("text-xs font-bold text-[var(--c-text)]/60 uppercase tracking-widest", isRTL && "font-cairo")}>
                      {t.labelMessage} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.placeholderMessage}
                      className={cn(
                        "w-full px-4 py-3.5 rounded-[16px] border border-[var(--c-border)]/20 bg-[var(--c-bg)] text-[var(--c-text)] text-sm focus:border-[#ec4e39] focus:ring-1 focus:ring-[#ec4e39] outline-none transition-all duration-300 resize-none",
                        errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500",
                        isRTL && "font-cairo"
                      )}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      required
                    />
                    {errors.message && (
                      <span id="message-error" className={cn("text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5", isRTL && "font-cairo")}>
                        <AlertCircle size={10} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Feedback Status */}
                  <AnimatePresence mode="wait">
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-[16px] bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 flex items-start gap-3"
                      >
                        <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                        <div>
                          <h4 className={cn("text-sm font-bold", isRTL && "font-cairo")}>{t.successTitle}</h4>
                          <p className={cn("text-xs mt-1 leading-relaxed", isRTL && "font-cairo")}>{t.successMsg}</p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-[16px] bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-start gap-3"
                      >
                        <AlertCircle className="shrink-0 mt-0.5" size={18} />
                        <div>
                          <h4 className={cn("text-sm font-bold", isRTL && "font-cairo")}>{t.errorTitle}</h4>
                          <p className={cn("text-xs mt-1 leading-relaxed", isRTL && "font-cairo")}>{t.errorMsg}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Magnetic>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-[#ec4e39] hover:bg-[#FAF0ED] text-[#FAF0ED] hover:text-[#0b0a0a] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-102 border border-[#ec4e39] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                          isRTL && "font-cairo"
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={14} />
                            <span>{t.btnSubmitting}</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} className="transform rtl:rotate-180" />
                            <span>{t.btnSubmit}</span>
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>

                </form>
              </div>

              {/* Bottom Social Links & Corporate Text */}
              <div className="pt-6 border-t border-[var(--c-border)]/20 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className={cn("text-[10px] text-[var(--c-text)]/40 uppercase tracking-widest", isRTL && "font-cairo")}>
                  {isRTL ? "اتصال مشفر آمن" : "Secure SSL Connection"}
                </span>
                
                {/* Social media connections */}
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.facebook.com/share/19JhLUey1d/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--c-text)]/60 hover:text-[#ec4e39] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/arab_egypt_for_elevator?igsh=MXJqcnpoajB0bDlhaA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--c-text)]/60 hover:text-[#ec4e39] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
