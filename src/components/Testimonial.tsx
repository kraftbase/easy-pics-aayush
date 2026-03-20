"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialInterface } from "@/types/testimonial";
import testimonial_one from "../../public/images/testimonial/testimonial_one.jpg";
import testimonial_two from "../../public/images/testimonial/testimonial_two.jpg"

export const testimonials: TestimonialInterface[] = [
    {
        image: testimonial_one,
        quote:
            "Some Restaurants Only Took PIX. With EasyPix, I Paid Instantly Using My U.S. Card. Total Lifesaver!",
        description:
            "Pay like a local using QR codes or PIX keys. Whether it’s rent, restaurants, or daily purchases, sending money is instant, secure, and hassle-free.",
        name: "Sally W.",
        role: "Tourist",
        rating: 5,
    },
    {
        image: testimonial_two,
        quote:
            "I Finally Paid My Rent Without Bugging My Landlord Or Opening A Bank Account.",
        description:
            "Héctor tops up his wallet in BRL and pays rent, food, and campus expenses via PIX—no CPF or bank account required.",
        name: "Héctor S.",
        role: "Exchange Student",
        rating: 5,
    }
];

const Testimonial = () => {
    const [active, setActive] = useState(0);
    const visibleCount = 2;

    const visibleTestimonials = Array.from(
        { length: visibleCount },
        (_, i) => testimonials[(active + i) % testimonials.length]
    );

    return (
        <section
            id="testimonial"
            className="bg-[#F8FAFB] py-10 flex flex-col gap-6 px-4 sm:px-10 md:px-20"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-1 lg:gap-2 justify-center md:justify-start items-center md:items-start lg:col-span-2">
                    <div className="flex items-center gap-3 justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue" />
                        <p className="text-[clamp(12px,2vw,18px)] font-semibold text-blue">
                            Testimonials
                        </p>
                    </div>
                    <div className="text-[#104058] font-semibold text-[clamp(28px,4vw,48px)] text-center max-w-75 sm:max-w-70 md:max-w-max capitalize md:text-left">
                        How EasyPix makes life easier.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end items-center md:items-end">
                    <div className="font-semibold text-[clamp(20px,3vw,38px)] leading-[100%] tracking-[1%] text-[#0D232F]">
                        4.8
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center md:items-start">
                        <div className="flex flex-row gap-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    fill="#FFC107"
                                    className="text-[#FFC107] w-4 h-4 lg:w-5.5 lg:h-5.5"
                                />
                            ))}
                        </div>
                        <div className="text-[#0D232F] capitalize text-[clamp(12px,1.5vw,14px)] leading-[100%] tracking-[1%]">
                            rating on App Store & Google Play
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex sm:hidden flex-col items-center gap-6 px-10">
                <TestimonialCard
                    testimonial={testimonials[active]}
                    className="w-full min-w-[320px]"
                />
                {/* dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={cn(
                                "h-2 w-2 rounded-full transition-all",
                                active === i ? "bg-black w-4" : "bg-gray-400"
                            )}
                        />
                    ))}
                </div>
            </div>
            <div className="hidden sm:flex flex-col items-center gap-6 px-10">
                <div className="flex gap-2">
                    {visibleTestimonials.map((item, i) => (
                        <TestimonialCard
                            key={i}
                            testimonial={item}
                            className="w-full min-w-[320px]"
                        />
                    ))}
                </div>
                {/* dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={cn(
                                "h-2.5 w-2.5 rounded-full transition-all",
                                active === i ? "bg-[#1C4564] w-15.5" : "bg-[#808E9330]"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
