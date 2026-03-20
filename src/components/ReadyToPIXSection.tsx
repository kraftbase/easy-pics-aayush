import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import ready_to_pix from "../../public/images/ready_to_pix.webp";
import Link from "next/link";
import apple from "../../public/logo/apple.svg";
import play_Store from "../../public/logo/PlayStore.svg";

const ReadyToPIXSection = () => {
  return (
    <section className="bg-[linear-gradient(159.7deg,#CBE3ED_24.33%,#E2EEF4_67.82%,#B4D0D9_105.82%)] pt-10.5 flex flex-col gap-8 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-2 justify-center items-center sm:justify-start px-14 sm:px-0">
          <div className="font-semibold text-[clamp(28px,4vw,48px)] leading-[100%] -tracking-[3%] text-center sm:text-left capitalize max-w-lg">
            Ready to PIX like a local?
          </div>

        </div>
        <div className="flex flex-col gap-2 md:gap-4 xl:gap-8.5 justify-center items-center sm:items-start">
          <div className="text-center sm:text-left text-[clamp(12px,1.6vw,18px)] leading-5 tracking-[1%] text-[#545454] max-w-lg">
            Join foreigners, travelers, students, and expats using EasyPix in
            Brazil.
          </div>
          <div className="flex flex-wrap sm:flex-row gap-2 justify-center sm:justify-start w-full">
            <GetItOnButton type="App Store" href="href" />
            <GetItOnButton type="Google Play" href="href" />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center">
        <Image src={ready_to_pix} alt="Ready to Pix" className="" />
      </div>
    </section>
  );
};

export default ReadyToPIXSection;

type GetItOnButtonProps = {
  type: string;
  href: string;
};

const GetItOnButton = ({ href, type }: GetItOnButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-[#292929] py-1.5 px-3 h-12 xl:h-14 rounded-[10px] flex flex-row gap-2 items-center justify-center text-[#FDFDFD]"
    >
      <Image
        src={type == "App Store" ? apple : play_Store}
        alt={type}
        className="h-6.5 w-6.5 md:h-9 md:w-9"
      />
      <div className="flex flex-col">
        <div className="text-[clamp(7px,0.9vw,12px)] leading-[100%] tracking-[0%]">
          Get it on
        </div>
        <div className="font-semibold text-[clamp(10px,1.2vw,16px)]]">
          {type}
        </div>
      </div>
    </Link>
  );
};
