import React from "react";
import facebook from "../../public/logo/facebook.svg";
import instagram from "../../public/logo/instagram.svg";
import XIcon from "../../public/logo/x.svg";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const logo_images = [
    {
        logo: facebook,
        name: "Facebook",
    },
    {
        logo: instagram,
        name: "Instagram",
    },
    {
        logo: XIcon,
        name: "X",
    },
];

const quick_menu = [
    {
        title: "How It Works",
        href: "",
    },
    {
        title: "FAQ",
        href: "",
    },
    {
        title: "Pricing",
        href: "",
    },
    {
        title: "Team",
        href: "",
    },
];

const contact_data = [
    {
        icon: <MapPin className="size-3.5 shrink-0 text-white" />,
        data: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        icon: <Mail className="size-3.5 shrink-0 text-white"  />,
        data: "info@Gmail.com"
    }
]

const Footer = () => {
    return (
        <section className="bg-[#041821] flex flex-col ">
            <div className="pt-6 md:pt-10 lg:pt-14 xl:pt-17.5 px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 pb-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-1 col-span-2">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-[#FFFFFF1A] h-8 w-8 rounded-full flex justify-center items-center font-semibold leading-[100%] tracking-[0%]">
                            <div className="text-blue text-[9px]">Logo</div>
                        </div>
                        <div className="font-semibold text-[clamp(14px,1.4vw,16px)] leading-[100%] tracking-[0%] text-white">
                            EasyPix
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-gray text-[clamp(14px,1.4vw,16px)] leading-[100%] tracking-[1%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                        </div>
                        <div className="flex flex-row gap-2.5">
                            {logo_images.map((item) => (
                                <div className="bg-[#FFFFFF1A] h-8 w-8 rounded-full flex justify-center items-center font-semibold leading-[100%] tracking-[0%]">
                                    <Image src={item.logo} alt={item.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:border-l md:border-[#FFFFFF1A] md:pl-6">
                    <div className="text-white text-[clamp(16px,1.6vw,18px)] leading-[100%] tracking-[1%]">Quick Menu</div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 text-gray">
                        {quick_menu.map((item) => (
                            <Link href={item.href} key={item.title} className="text-[clamp(14px,1.4vw,16px)] leasing-[100%] tracking-[1%]">{item.title}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-5 border-l border-[#FFFFFF1A] pl-6">
                    <div className="text-white text-[clamp(16px,1.6vw,18px)] leading-[100%] tracking-[1%]">Contact Us</div>
                    <div className="flex flex-col gap-2.5 text-gray">
                        {contact_data.map((item) => (
                            <div key={item.data} className="flex flex-row gap-3 items-start justify-start">
                                {item.icon}
                                <div className="text-[clamp(14px,1.4vw,16px)] leasing-[100%] tracking-[1%]">{item.data}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-[#FFFFFF1A] py-4.5 flex justify-center items-center">
                <div className="text-gray text-[clamp(14px,1.4vw,16px)] leading-[100%] tracking-[1%] capitalize">
                    © copyright 2025. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Footer;
