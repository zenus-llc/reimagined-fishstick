"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import image from '../imgs/Screenshot 2025-10-17 195023.png'
import SmartSimpleBrilliant from "../components/smart-simple-brilliant"
import YourWorkInSync from "../components/your-work-in-sync"
import EffortlessIntegration from "../components/effortless-integration-updated"
import NumbersThatSpeak from "../components/numbers-that-speak"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import PricingSection from "../components/pricing-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import Link from "next/link"

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#828387] text-sm">Customer Subscription Status and Details</div>
      case 1:
        return <div className="text-[#828387] text-sm">Analytics Dashboard - Real-time Insights</div>
      case 2:
        return <div className="text-[#828387] text-sm">Data Visualization - Charts and Metrics</div>
      default:
        return <div className="text-[#828387] text-sm">Customer Subscription Status and Details</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                      Echelon
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Product
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Pricing
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Infos
                      </div>
                    </div>
                  </div>
                </div>
               <div className="h-8 flex justify-start items-start gap-3">
      <button
        className="group relative px-4 py-1 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] rounded-full flex justify-center items-center transition-all duration-300 hover:shadow-[0px_2px_6px_rgba(55,50,47,0.15)] hover:-translate-y-[1px]"
      >
        <span className="text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans group-hover:opacity-80">
 <Link href="/sign-up">Login</Link>
        </span>
      </button>
    </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0">
                  Scale smarter, not harder
                    <br />
                    powered by Echelon
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Streamline your billing process with seamless automation
                    <br className="hidden sm:block" />
                   for every custom contract, tailored by Echelon.
                  </div>
                </div>
              </div>

             <div className="w-full max-w-[497px] flex flex-col items-center justify-center relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
  <button
    className="group relative h-12 px-10 lg:px-12 overflow-hidden rounded-full bg-[#37322F] text-white font-medium text-sm sm:text-base md:text-[15px] shadow-[0_0_0_2.5px_rgba(255,255,255,0.08)_inset] transition-all duration-300 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)]"
  >
    <span className="relative z-10">  <Link href="/sign-up">Start For Free</Link></span>
    <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff0a] to-[#00000020] mix-blend-multiply opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#9f7aea] via-[#805ad5] to-[#553c9a] opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700" />
  </button>
</div>


              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                
              </div>

              <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
<div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#F7F5F3]">
  
  {/* Header */}
  <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
    <div className="w-full max-w-[640px] px-4 sm:px-6 py-6 flex flex-col justify-center items-center gap-4 text-center">
      
      <Badge
        icon={
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
            <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
            <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
            <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
          </svg>
        }
        text="Echelon Grid"
      />

      <h2 className="text-[#37322F] text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight font-sans">
        Precision-built for clarity and effortless flow
      </h2>
      <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans">
        Simplify the complex. Echelon organizes your systems into clean, connected grids — 
        empowering confident decisions and seamless collaboration.
      </p>
    </div>
  </div>

  {/* Grid Content */}
  <div className="self-stretch flex justify-center items-start">
    
    {/* Decorative left pattern */}
    <div className="hidden lg:block w-8 relative overflow-hidden">
      <div className="absolute left-[-50px] top-[-120px] flex flex-col justify-start items-start">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
          />
        ))}
      </div>
    </div>

    {/* Bento Grid */}
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-l border-r border-[rgba(55,50,47,0.12)]">
      
      {/* Smart. Simple. Brilliant. */}
      <div className="border-b md:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-10 lg:p-12 flex flex-col gap-5">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold">Smart. Simple. Brilliant.</h3>
        <p className="text-[#605A57] text-sm md:text-base leading-relaxed">
          Your data, refined and beautifully organized. Clarity without clutter — 
          so you see what matters, instantly.
        </p>
        <div className="w-full h-[260px] rounded-lg flex items-center justify-center overflow-hidden">
          <SmartSimpleBrilliant width="100%" height="100%" theme="light" className="scale-75" />
        </div>
      </div>

      {/* Your work, in sync */}
    

      {/* Effortless Integration */}
      <div className="border-r md:border-r border-[rgba(55,50,47,0.12)] p-6 md:p-10 lg:p-12 flex flex-col gap-5">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold">Effortless integration.</h3>
        <p className="text-[#605A57] text-sm md:text-base leading-relaxed">
          Connect every essential tool you love — all working together in one elegant flow.
        </p>
        <div className="w-full h-[260px] relative flex justify-center items-center overflow-hidden">
          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Numbers that speak */}
      
    </div>

    {/* Decorative right pattern */}
    <div className="hidden lg:block w-8 relative overflow-hidden">
      <div className="absolute left-[-50px] top-[-120px] flex flex-col justify-start items-start">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
          />
        ))}
      </div>
    </div>
  </div>
</div>


              {/* Documentation Section */}
          

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* Pricing Section */}
              <PricingSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component definition inline to fix import error
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
