"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="home"
      className="relative lg:min-h-[900px] overflow-hidden bg-[#ddeaf3] max-w-[1440px] mx-auto"
      style={{
        background:
          "radial-gradient(103.62% 129.54% at 41.39% 25.47%, #FFFFFF 17.05%, #E4F6F9 100%)",
      }}
    >
      {/* Desktop background image (hidden on small screens) */}
      <Image
        src="/images/hero/hero.png"
        alt="EasyPix app mockup"
        fill
        priority
        className="object-cover hidden sm:block"
      />

      {/* Left fade so text stays readable */}
      <div
        className="absolute inset-0 z-1 pointer-events-none hidden sm:block"
        aria-hidden="true"
      />

      {/* ── Text content ── */}
      {/* Mobile: normal flow | Desktop: absolute overlay */}
      <div className="relative z-2 px-6 md:pt-[204px] pb-0 sm:absolute sm:left-[80px] sm:inset-0 sm:px-0 pt-[130px] sm:flex">
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-1">
            <span
              className="
                font-geist 
                font-semibold 
                text-[14px] 
                leading-[100%] 
                tracking-[0.01em] 
                align-middle 
                [font-variant-numeric:'lining-nums_proportional-nums'] 
                capitalize
                text-color
              "
            >
              🚀 Launching Soon
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-geist 
              lg:font-semibold 
              lg:text-[83px] 
              lg:leading-[80px] 
              lg:tracking-[-0.03em] 
              capitalize
              [font-variant-numeric:'lining-nums_proportional-nums'] 
              lg:mb-5
              mb-3
              text-[#104058]
              text-[32px] 
              leading-[100%] 
              tracking-[-0.03em] 
              font-semibold 
              align-middle 
            "
          >
            Use{" "}
            <span
              className="
            font-geist font-semibold lg:text-[83px] lg:leading-[80px] lg:tracking-[-0.03em] align-middle capitalize [font-variant-numeric:'lining-nums_proportional-nums'] text-blue
            text-[32px] 
              leading-[100%] 
              tracking-[-0.03em] 
            "
            >
              PIX
            </span>{" "}
            In {" "}
            <span className="hidden lg:block">Brazil</span>
            <span className="inline-block lg:hidden">Brazil</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              font-geist
              font-normal
              not-italic
              text-[12px]
              leading-[100%]
              tracking-[0.01em]
              align-middle
              [font-variant-numeric:'lining-nums_proportional-nums']
              capitalize
              text-gray
              mb-9
              sm:text-base
            "
          >
            No CPF Or Bank Account Needed
          </p>

          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-[420px] mb-5 bg-white border border-stroke rounded-full p-1.5 focus-within:border-blue transition-colors"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
              className="flex-1 min-w-0 pl-4 pr-2 py-2 bg-transparent text-sm text-color placeholder:text-gray outline-none"
            />
            <button
              type="submit"
              className="bg-dark-blue text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-blue transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Join The Waitlist
            </button>
          </form>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <span className="text-yellow text-[14px] lg:text-[18px] leading-none">★</span>
            <span className="text-xs lg:text-sm text-color">
              <span className="font-semibold">4.8</span>/5 On App Store &amp;
              Google Play
            </span>
          </div>
        </div>
      </div>

      {/* Mobile image + absolute cards wrapper */}
      <div className="relative block sm:hidden">
        <Image
          src="/images/hero/hero-mobile.png"
          alt="EasyPix app mockup"
          width={600}
          height={700}
          priority
          className="w-full h-auto"
        />

        {/* ── Left arrow – pointing toward bottom-left card ── */}
        <Image
          src="/images/hero/left-arrow.png"
          alt=""
          width={70}
          height={24}
          className="absolute bottom-[43%] left-[28%] z-3 pointer-events-none -translate-x-full"
          aria-hidden="true"
        />

        {/* ── Right arrow – pointing toward right card ── */}
        <Image
          src="/images/hero/right-arrow.png"
          alt=""
          width={70}
          height={24}
          className="absolute top-[25%] lg:right-[28%] right-[18%] z-3 pointer-events-none translate-x-full"
          aria-hidden="true"
        />

        {/* ── Left card – bottom left over mobile image ── */}
        <div
          className="absolute bottom-[8%] left-4 z-3 flex flex-col gap-2 py-3 px-3 bg-white rounded-2xl lg:w-[42%] w-[94px]"
          style={{ boxShadow: "0px 20px 52px 0px rgba(56, 100, 111, 0.07)" }}
        >
          <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.8414 9.77693V7.37295C20.8414 6.04712 19.7624 4.96818 18.4366 4.96818H17.4386L16.5168 1.74418C16.3228 1.06604 15.8434 0.509735 15.2022 0.217154C14.5609 -0.0754268 13.8266 -0.0722205 13.187 0.225971L3.02601 4.96818H2.40477C1.07894 4.96818 0 6.04712 0 7.37295V18.5952C0 19.9211 1.07894 21 2.40477 21H18.4366C19.7624 21 20.8414 19.9211 20.8414 18.5952V16.1897C22.1672 16.1897 23.2461 15.1107 23.2461 13.7849V12.1817C23.2461 10.8559 22.1672 9.77693 20.8414 9.77693ZM13.8659 1.67845C13.9708 1.62858 14.0854 1.6025 14.2015 1.60208C14.3176 1.60167 14.4324 1.62693 14.5377 1.67605C14.6437 1.72343 14.7379 1.79361 14.8137 1.88159C14.8895 1.96958 14.945 2.07319 14.9761 2.18506L15.7713 4.96898H6.81673L13.8659 1.67926V1.67845ZM19.2382 18.5952C19.2382 19.0369 18.8791 19.3968 18.4366 19.3968H2.40477C1.96229 19.3968 1.60318 19.0369 1.60318 18.5952V7.37295C1.60318 6.93128 1.96229 6.57136 2.40477 6.57136H18.4366C18.8791 6.57136 19.2382 6.93128 19.2382 7.37295V9.77693H17.635C16.3092 9.77693 15.2302 10.8559 15.2302 12.1817V13.7849C15.2302 15.1107 16.3092 16.1897 17.635 16.1897H19.2382V18.5952ZM21.643 13.7849C21.643 14.2266 21.2838 14.5865 20.8414 14.5865H17.635C17.1925 14.5865 16.8334 14.2266 16.8334 13.7849V12.1817C16.8334 11.74 17.1925 11.3801 17.635 11.3801H20.8414C21.2838 11.3801 21.643 11.74 21.643 12.1817V13.7849ZM19.2382 12.9833C19.2382 13.1959 19.1537 13.3998 19.0034 13.5501C18.8531 13.7004 18.6492 13.7849 18.4366 13.7849C18.224 13.7849 18.0201 13.7004 17.8698 13.5501C17.7194 13.3998 17.635 13.1959 17.635 12.9833C17.635 12.7707 17.7194 12.5668 17.8698 12.4165C18.0201 12.2662 18.224 12.1817 18.4366 12.1817C18.6492 12.1817 18.8531 12.2662 19.0034 12.4165C19.1537 12.5668 19.2382 12.7707 19.2382 12.9833Z" fill="#0D232F" />
            </svg>
          </div>
          <p className="text-[10px] font-medium text-color leading-[1.45]">
            Load Your Wallet With Your Card And Pay Like A Local In Brazil
          </p>
        </div>

        {/* ── Right card – middle right over mobile image ── */}
        <div
          className="absolute top-[40%] right-4 z-3 flex lg:flex-row flex-col gap-2 items-start py-3 px-3 bg-white rounded-2xl w-[100px] lg:w-[44%] "
          style={{ boxShadow: "0px 20px 52px 0px rgba(56, 100, 111, 0.07)" }}
        >
          <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.25 2.16667H20.5833C20.8707 2.16667 21.1462 2.05253 21.3494 1.84937C21.5525 1.6462 21.6667 1.37065 21.6667 1.08333C21.6667 0.796016 21.5525 0.520465 21.3494 0.317301C21.1462 0.114137 20.8707 0 20.5833 0H3.25C2.38805 0 1.5614 0.34241 0.951903 0.951903C0.34241 1.5614 0 2.38805 0 3.25V18.4167C0 19.2786 0.34241 20.1053 0.951903 20.7148C1.5614 21.3243 2.38805 21.6667 3.25 21.6667H8.66667C9.52862 21.6667 10.3553 21.3243 10.9648 20.7148C11.5743 20.1053 11.9167 19.2786 11.9167 18.4167V13.4485L13.3174 14.8492C13.5217 15.0466 13.7954 15.1558 14.0794 15.1533C14.3635 15.1508 14.6352 15.0369 14.8361 14.8361C15.0369 14.6352 15.1508 14.3635 15.1533 14.0794C15.1558 13.7954 15.0466 13.5217 14.8492 13.3174L11.5992 10.0674C11.4984 9.96632 11.3783 9.8864 11.2461 9.83233C10.9811 9.72279 10.6834 9.72279 10.4184 9.83233C10.2862 9.8864 10.1661 9.96632 10.0653 10.0674L6.81525 13.3174C6.61791 13.5217 6.50872 13.7954 6.51119 14.0794C6.51366 14.3635 6.62759 14.6352 6.82845 14.8361C7.02931 15.0369 7.30102 15.1508 7.58507 15.1533C7.86911 15.1558 8.14276 15.0466 8.34708 14.8492L9.75 13.4485V18.4167C9.75 18.704 9.63586 18.9795 9.4327 19.1827C9.22954 19.3859 8.95399 19.5 8.66667 19.5H3.25C2.96268 19.5 2.68713 19.3859 2.48397 19.1827C2.2808 18.9795 2.16667 18.704 2.16667 18.4167V6.30067C2.51361 6.42897 2.88011 6.49641 3.25 6.5H19.5V19.5H15.1667C14.8793 19.5 14.6038 19.6141 14.4006 19.8173C14.1975 20.0205 14.0833 20.296 14.0833 20.5833C14.0833 20.8707 14.1975 21.1462 14.4006 21.3494C14.6038 21.5525 14.8793 21.6667 15.1667 21.6667H20.5833C20.8707 21.6667 21.1462 21.5525 21.3494 21.3494C21.5525 21.1462 21.6667 20.8707 21.6667 20.5833V5.41667C21.6667 5.12935 21.5525 4.8538 21.3494 4.65063C21.1462 4.44747 20.8707 4.33333 20.5833 4.33333H3.25C2.96268 4.33333 2.68713 4.2192 2.48397 4.01603C2.2808 3.81287 2.16667 3.53732 2.16667 3.25C2.16667 2.96268 2.2808 2.68713 2.48397 2.48397C2.68713 2.2808 2.96268 2.16667 3.25 2.16667Z" fill="#0D232F" />
            </svg>
          </div>
          <p className="text-[10px] font-medium text-color leading-[1.45]">
            Top Up Your Wallet In Reals And Pay Like A Local In Seconds.
          </p>
        </div>
      </div>

      {/* ── Left arrow – beside phone left edge, pointing to bottom card ── */}
      <Image
        src="/images/hero/left-arrow.png"
        alt=""
        width={110}
        height={36}
        className="hidden lg:block absolute bottom-[25%] left-[49.5%] z-3 pointer-events-none -translate-x-full"
        aria-hidden="true"
      />

      {/* ── Right arrow – beside phone right edge, pointing to right card ── */}
      <Image
        src="/images/hero/right-arrow.png"
        alt=""
        width={110}
        height={36}
        className="hidden lg:block absolute top-[35%] right-[18%] z-3 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Floating card – left edge of phone screen ── */}
      <div
        className="hidden lg:flex absolute bottom-[10%] left-[37%] z-3 bg-white rounded-2xl shadow-xl flex-col gap-2.5 py-5 px-6"
        style={{
          boxShadow: "0px 20px 52px 0px rgba(56, 100, 111, 0.07)",
          backdropFilter: "blur(116px)",
        }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0">
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8414 9.77693V7.37295C20.8414 6.04712 19.7624 4.96818 18.4366 4.96818H17.4386L16.5168 1.74418C16.3228 1.06604 15.8434 0.509735 15.2022 0.217154C14.5609 -0.0754268 13.8266 -0.0722205 13.187 0.225971L3.02601 4.96818H2.40477C1.07894 4.96818 0 6.04712 0 7.37295V18.5952C0 19.9211 1.07894 21 2.40477 21H18.4366C19.7624 21 20.8414 19.9211 20.8414 18.5952V16.1897C22.1672 16.1897 23.2461 15.1107 23.2461 13.7849V12.1817C23.2461 10.8559 22.1672 9.77693 20.8414 9.77693ZM13.8659 1.67845C13.9708 1.62858 14.0854 1.6025 14.2015 1.60208C14.3176 1.60167 14.4324 1.62693 14.5377 1.67605C14.6437 1.72343 14.7379 1.79361 14.8137 1.88159C14.8895 1.96958 14.945 2.07319 14.9761 2.18506L15.7713 4.96898H6.81673L13.8659 1.67926V1.67845ZM19.2382 18.5952C19.2382 19.0369 18.8791 19.3968 18.4366 19.3968H2.40477C1.96229 19.3968 1.60318 19.0369 1.60318 18.5952V7.37295C1.60318 6.93128 1.96229 6.57136 2.40477 6.57136H18.4366C18.8791 6.57136 19.2382 6.93128 19.2382 7.37295V9.77693H17.635C16.3092 9.77693 15.2302 10.8559 15.2302 12.1817V13.7849C15.2302 15.1107 16.3092 16.1897 17.635 16.1897H19.2382V18.5952ZM21.643 13.7849C21.643 14.2266 21.2838 14.5865 20.8414 14.5865H17.635C17.1925 14.5865 16.8334 14.2266 16.8334 13.7849V12.1817C16.8334 11.74 17.1925 11.3801 17.635 11.3801H20.8414C21.2838 11.3801 21.643 11.74 21.643 12.1817V13.7849ZM19.2382 12.9833C19.2382 13.1959 19.1537 13.3998 19.0034 13.5501C18.8531 13.7004 18.6492 13.7849 18.4366 13.7849C18.224 13.7849 18.0201 13.7004 17.8698 13.5501C17.7194 13.3998 17.635 13.1959 17.635 12.9833C17.635 12.7707 17.7194 12.5668 17.8698 12.4165C18.0201 12.2662 18.224 12.1817 18.4366 12.1817C18.6492 12.1817 18.8531 12.2662 19.0034 12.4165C19.1537 12.5668 19.2382 12.7707 19.2382 12.9833Z"
              fill="#0D232F"
            />
          </svg>
        </div>
        <p className="text-[11.5px] font-medium text-color leading-[1.45] max-w-[137px]">
          Load Your Wallet With Your Card And Pay Like A Local In Brazil
        </p>
      </div>

      {/* ── Floating card – right edge of phone screen ── */}
      <div
        className="hidden lg:flex absolute top-[44%] right-[6%] z-3 bg-white rounded-2xl shadow-xl flex-row gap-3 items-start max-w-[275px] p-5"
        style={{
          boxShadow: "0px 20px 52px 0px rgba(56, 100, 111, 0.07)",
          backdropFilter: "blur(116px)",
        }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.25 2.16667H20.5833C20.8707 2.16667 21.1462 2.05253 21.3494 1.84937C21.5525 1.6462 21.6667 1.37065 21.6667 1.08333C21.6667 0.796016 21.5525 0.520465 21.3494 0.317301C21.1462 0.114137 20.8707 0 20.5833 0H3.25C2.38805 0 1.5614 0.34241 0.951903 0.951903C0.34241 1.5614 0 2.38805 0 3.25V18.4167C0 19.2786 0.34241 20.1053 0.951903 20.7148C1.5614 21.3243 2.38805 21.6667 3.25 21.6667H8.66667C9.52862 21.6667 10.3553 21.3243 10.9648 20.7148C11.5743 20.1053 11.9167 19.2786 11.9167 18.4167V13.4485L13.3174 14.8492C13.5217 15.0466 13.7954 15.1558 14.0794 15.1533C14.3635 15.1508 14.6352 15.0369 14.8361 14.8361C15.0369 14.6352 15.1508 14.3635 15.1533 14.0794C15.1558 13.7954 15.0466 13.5217 14.8492 13.3174L11.5992 10.0674C11.4984 9.96632 11.3783 9.8864 11.2461 9.83233C10.9811 9.72279 10.6834 9.72279 10.4184 9.83233C10.2862 9.8864 10.1661 9.96632 10.0653 10.0674L6.81525 13.3174C6.61791 13.5217 6.50872 13.7954 6.51119 14.0794C6.51366 14.3635 6.62759 14.6352 6.82845 14.8361C7.02931 15.0369 7.30102 15.1508 7.58507 15.1533C7.86911 15.1558 8.14276 15.0466 8.34708 14.8492L9.75 13.4485V18.4167C9.75 18.704 9.63586 18.9795 9.4327 19.1827C9.22954 19.3859 8.95399 19.5 8.66667 19.5H3.25C2.96268 19.5 2.68713 19.3859 2.48397 19.1827C2.2808 18.9795 2.16667 18.704 2.16667 18.4167V6.30067C2.51361 6.42897 2.88011 6.49641 3.25 6.5H19.5V19.5H15.1667C14.8793 19.5 14.6038 19.6141 14.4006 19.8173C14.1975 20.0205 14.0833 20.296 14.0833 20.5833C14.0833 20.8707 14.1975 21.1462 14.4006 21.3494C14.6038 21.5525 14.8793 21.6667 15.1667 21.6667H20.5833C20.8707 21.6667 21.1462 21.5525 21.3494 21.3494C21.5525 21.1462 21.6667 20.8707 21.6667 20.5833V5.41667C21.6667 5.12935 21.5525 4.8538 21.3494 4.65063C21.1462 4.44747 20.8707 4.33333 20.5833 4.33333H3.25C2.96268 4.33333 2.68713 4.2192 2.48397 4.01603C2.2808 3.81287 2.16667 3.53732 2.16667 3.25C2.16667 2.96268 2.2808 2.68713 2.48397 2.48397C2.68713 2.2808 2.96268 2.16667 3.25 2.16667Z"
              fill="#0D232F"
            />
          </svg>
        </div>
        <p className="text-[11.5px] font-medium text-color leading-[1.45]">
          Top Up Your Wallet In Reals And Pay Like A Local In Seconds.
        </p>
      </div>
    </section>
  );
}
