"use client";

import { cn } from "@/lib/utils";

interface FooterProps {
  lang?: "en" | "ar";
}

const copy = {
  en: {
    brandDesc: "Masr Al Arabya Elevators — Elevating luxury residential and commercial vertical transportation across Cairo and Giza since 1979 with certified European safety components.",
    linksTitle: "Quick Navigation",
    productsTitle: "Elevator Solutions",
    contactTitle: "Contact Information",
    
    // Contacts
    addressLabel: "Address",
    addressValue: "12 El-Batal Ahmed Abdel Aziz St, Mohandessin, Giza, Egypt",
    phoneLabel: "Phone",
    phoneValue: "+20 2 3761 4500",
    whatsappLabel: "WhatsApp Sales",
    whatsappValue: "+20 100 123 4567",
    emailLabel: "Email",
    emailValue: "info@arabegypt-elevators.com",
    hoursLabel: "Working Hours",
    hoursValue: "Sat – Thu: 9:00 AM – 6:00 PM",
    
    emergencyTitle: "24/7 Emergency Maintenance",
    emergencyPhone: "+20 100 999 8888",
    
    linkHome: "Home",
    linkAbout: "About Us",
    linkServices: "Services",
    linkProjects: "Projects",
    linkContact: "Contact",
    
    prodPassenger: "Passenger Lifts",
    prodPanoramic: "Panoramic Glass Lifts",
    prodHome: "Home & Villa Lifts",
    prodFood: "Service & Dumbwaiters",
    prodModernization: "Elevator Modernization",
    
    standardsTitle: "Accreditations",
    stdCe: "CE European Quality Certified",
    stdEn81: "EN 81 Safety Compliant",
    stdIso: "ISO 9001:2015 Management",
    stdCivil: "Civil Defense Approved",
    
    copyright: "© 2026 Masr Al Arabya Elevators. All Rights Reserved.",
    crafted: "Crafted with Engineering Excellence."
  },
  ar: {
    brandDesc: "شركة مصر العربية للمصاعد — شركة رائدة في توريد وتركيب وصيانة المصاعد الفاخرة للفلل والمباني التجارية والسكنية في القاهرة والجيزة منذ عام ١٩٧٩ بقطع غيار إيطالية وألمانية معتمدة.",
    linksTitle: "روابط سريعة",
    productsTitle: "حلول المصاعد",
    contactTitle: "بيانات الاتصال",
    
    // Contacts
    addressLabel: "العنوان",
    addressValue: "١٢ شارع البطل أحمد عبد العزيز، المهندسين، الجيزة، مصر",
    phoneLabel: "الهاتف",
    phoneValue: "+٢٠ ٢ ٣٧٦١ ٤٥٠٠",
    whatsappLabel: "واتساب المبيعات",
    whatsappValue: "+٢٠ ١٠٠ ١٢٣ ٤٥٦٧",
    emailLabel: "البريد الإلكتروني",
    emailValue: "info@arabegypt-elevators.com",
    hoursLabel: "ساعات العمل",
    hoursValue: "السبت – الخميس: ٩:٠٠ ص – ٦:٠٠ م",
    
    emergencyTitle: "طوارئ الصيانة والإنقاذ ٢٤/٧",
    emergencyPhone: "+٢٠ ١٠٠ ٩٩٩ ٨٨٨٨",
    
    linkHome: "الرئيسية",
    linkAbout: "من نحن",
    linkServices: "خدماتنا",
    linkProjects: "مشروعاتنا",
    linkContact: "اتصل بنا",
    
    prodPassenger: "مصاعد الركاب",
    prodPanoramic: "المصاعد البانورامية",
    prodHome: "مصاعد الفلل والقصور",
    prodFood: "مصاعد الطعام والخدمات",
    prodModernization: "تحديث وتطوير المصاعد",
    
    standardsTitle: "الاعتمادات والجودة",
    stdCe: "شهادة الجودة الأوروبية CE",
    stdEn81: "مطابق لمواصفات السلامة EN 81",
    stdIso: "شهادة الجودة ISO 9001:2015",
    stdCivil: "معتمد من الدفاع المدني المصري",
    
    copyright: "© ٢٠٢٦ شركة مصر العربية للمصاعد. جميع الحقوق محفوظة.",
    crafted: "تم التطوير بأعلى المعايير الهندسية."
  }
};

export default function Footer({ lang = "en" }: FooterProps) {
  const isRTL = lang === "ar";
  const t = isRTL ? copy.ar : copy.en;

  return (
    <footer
      className="relative w-full bg-[#0b0a0a] text-[#FAF0ED] pt-16 pb-8 px-4 md:px-8 lg:px-16 border-t border-white/10 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ec4e39] filter blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              {/* Logo Symbol */}
              <div className="w-10 h-10 rounded-[12px] bg-[#ec4e39] flex items-center justify-center font-bold text-lg text-[#FAF0ED] shadow-md shrink-0">
                {isRTL ? "م" : "M"}
              </div>
              <div>
                <span className={cn("text-lg font-bold tracking-wider block", isRTL && "font-cairo")}>
                  {isRTL ? "مصر العربية للمصاعد" : "Masr Al Arabya Elevators"}
                </span>
                <span className={cn("text-[9px] uppercase tracking-widest text-[#c5a880] block mt-0.5", isRTL && "font-cairo")}>
                  {isRTL ? "الريادة منذ ١٩٧٩" : "PIONEERING SINCE 1979"}
                </span>
              </div>
            </div>
            
            <p className={cn("text-xs text-white/50 leading-relaxed max-w-sm", isRTL && "font-cairo")}>
              {t.brandDesc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-1">
              <a 
                href="https://www.facebook.com/share/19JhLUey1d/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ec4e39] hover:bg-[#ec4e39]/10 text-white/60 hover:text-[#ec4e39] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/arab_egypt_for_elevator?igsh=MXJqcnpoajB0bDlhaA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ec4e39] hover:bg-[#ec4e39]/10 text-white/60 hover:text-[#ec4e39] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className={cn("text-sm font-bold text-[#c5a880] uppercase tracking-wider", isRTL && "font-cairo")}>
              {t.linksTitle}
            </h4>
            <ul className={cn("space-y-2.5 text-xs text-white/60", isRTL && "font-cairo")}>
              <li>
                <a href="#home" className="hover:text-[#ec4e39] transition-colors">{t.linkHome}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ec4e39] transition-colors">{t.linkAbout}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ec4e39] transition-colors">{t.linkServices}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ec4e39] transition-colors">{t.linkProjects}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ec4e39] transition-colors">{t.linkContact}</a>
              </li>
            </ul>
          </div>

          {/* Products - 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className={cn("text-sm font-bold text-[#c5a880] uppercase tracking-wider", isRTL && "font-cairo")}>
              {t.productsTitle}
            </h4>
            <ul className={cn("space-y-2.5 text-xs text-white/60", isRTL && "font-cairo")}>
              <li>
                <a href="#projects" className="hover:text-[#ec4e39] transition-colors">{t.prodPassenger}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ec4e39] transition-colors">{t.prodPanoramic}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ec4e39] transition-colors">{t.prodHome}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ec4e39] transition-colors">{t.prodFood}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ec4e39] transition-colors">{t.prodModernization}</a>
              </li>
            </ul>
          </div>

          {/* Contact Information Column - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className={cn("text-sm font-bold text-[#c5a880] uppercase tracking-wider", isRTL && "font-cairo")}>
              {t.contactTitle}
            </h4>
            <ul className={cn("space-y-3 text-xs text-white/60", isRTL && "font-cairo")}>
              <li className="flex items-start gap-2">
                <span className="font-bold text-white shrink-0">{t.addressLabel}:</span>
                <span>{t.addressValue}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-white shrink-0">{t.phoneLabel}:</span>
                <a href={`tel:${t.phoneValue.replace(/\s+/g, "")}`} className="hover:text-[#ec4e39] transition-colors tracking-wide">
                  {t.phoneValue}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-white shrink-0">{t.whatsappLabel}:</span>
                <a href="https://wa.me/201001234567" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec4e39] transition-colors tracking-wide">
                  {t.whatsappValue}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-white shrink-0">{t.emailLabel}:</span>
                <a href={`mailto:${t.emailValue}`} className="hover:text-[#ec4e39] transition-colors truncate">
                  {t.emailValue}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/40">
                <span className="font-bold shrink-0">{t.hoursLabel}:</span>
                <span>{t.hoursValue}</span>
              </li>
            </ul>

            {/* Emergency & Accreditations Block */}
            <div className="mt-2 flex flex-col gap-3">
              <div className="p-3.5 rounded-[12px] border border-red-500/20 bg-red-500/5 flex flex-col gap-1">
                <span className={cn("text-[9px] uppercase tracking-widest text-[#ec4e39] font-bold", isRTL && "font-cairo")}>
                  {t.emergencyTitle}
                </span>
                <a 
                  href="tel:+201009998888" 
                  className="text-xs font-bold text-[#FAF0ED] hover:text-[#ec4e39] transition-colors tracking-wider"
                >
                  {t.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditations Badge Row */}
        <div className="py-6 border-b border-white/10 flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start items-center">
          <span className={cn("text-[9px] font-bold text-[#c5a880] uppercase tracking-widest", isRTL && "font-cairo")}>
            {t.standardsTitle}:
          </span>
          <ul className={cn("flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-white/40 font-semibold uppercase tracking-wider", isRTL && "font-cairo")}>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
              <span>{t.stdCe}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
              <span>{t.stdEn81}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
              <span>{t.stdIso}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
              <span>{t.stdCivil}</span>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] text-white/30 uppercase tracking-widest">
          <div className={cn("flex flex-col sm:flex-row gap-2 sm:items-center", isRTL && "font-cairo")}>
            <span>{t.copyright}</span>
          </div>
          <div className={cn("flex items-center gap-1", isRTL && "font-cairo")}>
            <span>{t.crafted}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
