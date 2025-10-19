"use client"

import type React from "react"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
      <div className="w-[14px] h-[14px] flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function CustomerFeedback() {
  const feedback = {
    quote:
      "Echelon has completely changed how we manage chat automations. Connecting Messenger, Instagram, and Facebook took minutes — and our engagement skyrocketed instantly!",
    name: "Sophia Nguyen",
    company: "Marketing Director, PulseSocial",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Bc9a9X-UDTou99SlBll0OAHaHa?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#FAFAF9]">
      <div className="w-full max-w-6xl px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="flex-shrink-0 ">
          <img
            src={feedback.image}
            alt={feedback.name}
            className="w-52 h-52 md:w-60 md:h-60 rounded-2xl object-cover shadow-[0px_1px_3px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* Quote Block */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex flex-col gap-3">
            <Badge
              icon={
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
                  alt="Facebook"
                  className="w-[12px] h-[12px]"
                />
              }
              text="Verified Customer"
            />
          </div>

          <p className="text-[#49423D] text-2xl md:text-[30px] leading-[40px] font-medium font-sans tracking-tight">
            “{feedback.quote}”
          </p>

          <div className="flex flex-col">
            <span className="text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px] font-sans">
              {feedback.name}
            </span>
            <span className="text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px] font-sans">
              {feedback.company}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
