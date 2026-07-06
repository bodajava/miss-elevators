"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import StickyCursor from "./components/StickyCursor";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0a0a] text-[#FAF0ED] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-[#ec4e39] selection:text-white">
      {/* Custom Sticky Cursor */}
      <StickyCursor />

      {/* Decorative vector grid representing elevator shaft lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white" />
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-white" />
        <div className="absolute left-0 right-0 top-[30%] h-[1px] bg-white" />
        <div className="absolute left-0 right-0 top-[70%] h-[1px] bg-white" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center gap-8">
        
        {/* Animated Icon / Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-[24px] bg-[#ec4e39]/10 border border-[#ec4e39]/30 flex items-center justify-center text-[#ec4e39] shadow-lg"
        >
          <svg className="w-10 h-10 fill-current animate-bounce" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2L1 21h22L12 2zm0 3.99L20.53 19H3.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z" />
          </svg>
        </motion.div>

        {/* 404 Header */}
        <div className="flex flex-col gap-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.3em] font-semibold text-[#c5a880]"
          >
            Level / الطابق 404
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4.5xl font-serif font-bold tracking-tight"
          >
            Level Not Found
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl md:text-2xl font-semibold text-[#ec4e39] font-cairo mt-1"
          >
            الطابق غير موجود
          </motion.h2>
        </div>

        {/* Descriptions */}
        <div className="flex flex-col gap-3 text-white/50 text-sm md:text-base leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The destination floor you requested does not exist or has been relocated.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-cairo"
          >
            عذراً، الطابق أو الصفحة التي طلبتها غير متوفرة حالياً أو تم نقلها.
          </motion.p>
        </div>

        {/* Nav Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#ec4e39] hover:bg-[#FAF0ED] text-[#FAF0ED] hover:text-[#0b0a0a] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md border border-[#ec4e39]"
          >
            <Home size={14} />
            <span>English Home</span>
          </Link>
          
          <Link
            href="/ar"
            className="flex items-center justify-center gap-2 border border-white/10 hover:border-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 font-cairo"
          >
            <ArrowLeft size={14} className="transform rotate-180" />
            <span>الرئيسية العربية</span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
