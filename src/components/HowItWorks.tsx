import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-20 lg:py-40 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Section header ── */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-[7px] h-[7px] rounded-full bg-blue shrink-0" />
          <span className="text-blue text-[13px] font-medium tracking-wide">
            How It Works
          </span>
        </div>
        <h2 className="text-[38px] sm:text-[52px] lg:text-[58px] font-bold text-color leading-tight tracking-tight">
          PIX For Foreigners
        </h2>
      </div>

      {/* ── Cards grid ── */}
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4 lg:px-20 px-4">
        {/* Row 1 – two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ── Step 01 ── */}
          <div className="bg-[#F8FAFB] rounded-[28px] p-4 md:p-8 flex flex-row md:flex-col gap-2 md:gap-0 overflow-hidden">
            <div className="w-[171px] shrink-0 md:w-auto flex flex-col">
              <span className="text-[16px] md:text-[15px] font-bold leading-none md:leading-normal tracking-[0.01em] text-gray mb-3 md:mb-4">
                01
              </span>
              <h3 className="text-[16px] md:text-[22px] lg:text-[24px] font-bold text-color mb-2 leading-none md:leading-snug tracking-[0.01em]">
                Create Your Account Easily
              </h3>
              <p className="text-[12px] md:text-[14px] font-medium text-gray leading-[20px] md:leading-relaxed tracking-[0.01em]">
                Sign up in minutes using just your passport and a selfie. No CPF
                or Brazilian bank account required
              </p>
            </div>
            <div className="flex-1 self-stretch -mt-4 -mb-4 -mr-4 md:m-0 md:mt-6 md:flex-none overflow-hidden">
              <Image
                src="/images/how-it-works/step-1.png"
                alt="Passport upload screen"
                width={800}
                height={600}
                className="w-full h-full object-contain md:h-auto"
              />
            </div>
          </div>

          {/* ── Step 02 ── */}
          <div className="bg-[#F8FAFB] rounded-[28px] p-4 md:p-8 flex flex-row md:flex-col gap-2 md:gap-0 overflow-hidden">
            <div className="w-[171px] shrink-0 md:w-auto flex flex-col">
              <span className="text-[16px] md:text-[15px] font-bold leading-none md:leading-normal tracking-[0.01em] text-gray mb-3 md:mb-4">
                02
              </span>
              <h3 className="text-[16px] md:text-[22px] lg:text-[24px] font-bold text-color mb-2 leading-none md:leading-snug tracking-[0.01em]">
                Add BRL Instantly
              </h3>
              <p className="text-[12px] md:text-[14px] font-medium text-gray leading-[20px] md:leading-relaxed tracking-[0.01em]">
                Link your credit card to top up your EasyPix wallet in BRL and pay
                instantly via PIX anywhere in Brazil.
              </p>
            </div>
            <div className="flex-1 self-stretch -mt-4 -mb-4 -mr-4 md:m-0 md:mt-6 md:flex-none overflow-hidden">
              <Image
                src="/images/how-it-works/step-2.png"
                alt="Wallet balance screen"
                width={800}
                height={600}
                className="w-full h-full object-contain md:h-auto"
              />
            </div>
          </div>
        </div>

        {/* ── Step 03 – full width ── */}
        <div className="bg-[#F8FAFB] rounded-[28px] p-7 sm:p-8 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            {/* Left text */}
            <div className="lg:w-[34%] shrink-0">
              <span className="text-[15px] font-semibold text-gray mb-4 block">
                03
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-color mb-2 leading-snug">
                Make PIX Payments Seamlessly
              </h3>
              <p className="text-[14px] text-gray leading-relaxed">
                Pay like a local using QR codes or PIX keys. Whether it&apos;s
                rent, restaurants, or daily purchases, sending money is instant,
                secure, and hassle-free.
              </p>
            </div>

            {/* Right image */}
            <div className="flex-1 w-full">
              <Image
                src="/images/how-it-works/step-3.png"
                alt="PIX payment confirmation screen"
                width={1200}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
