import React from "react";
import { Button } from "./ui/button";
import WhatsAppIcon from "./icons/whatsApp";
import MailIcon from "./icons/mail";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { Plus } from "lucide-react";

const faq_data = [
    {
        question: "Do I need a CPF to use EasyPix?",
        answer:
            "No. EasyPix is designed for foreigners — you only need a passport and selfie to get started.",
    },
    {
        question: "Do I need a Brazilian bank account to use EasyPix?",
        answer:
            "No. You can add funds using your international card and pay via PIX without a local account.",
    },
    {
        question: "What cards can I use?",
        answer:
            "We support most international Visa and Mastercard debit/credit cards. American Express is not supported.",
    },
    {
        question: "Can I also receive PIX?",
        answer:
            "Not right now. EasyPix currently supports sending PIX payments only.",
    },
    {
        question: "Can I use EasyPix?",
        answer:
            "Yes. Once your account is verified and you add funds, you can start making PIX payments instantly.",
    },
    {
        question: "I am a Brazilian living abroad. Can I use EasyPix?",
        answer:
            "Yes. Even without an active Brazilian bank account, you can use EasyPix to make PIX payments from abroad.",
    },
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-15 grid grid-cols-1 md:grid-cols-2 gap-6  px-4 md:px-8 xl:px-10">
            <div className="flex flex-col gap-5 justify-center items-center md:justify-start">
                <div className="flex flex-col gap-1 justify-center items-center md:items-start">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue" />
                        <p className="text-[clamp(12px,2vw,18px)] font-semibold text-blue">
                            FAQ
                        </p>
                    </div>
                    <div className="text-[#104058] font-semibold text-[clamp(28px,4vw,48px)] text-center capitalize md:text-left">
                        Frequently asked questions
                    </div>
                    <div className="text-[#545454] text-[clamp(12px,2vw,18px)] md:font-semibold leading-[100%] tracking-[1%]">
                        Do you have any other questions or feedback?
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <Button className="bg-green rounded-full h-11 flex flex-row gap-2  px-3 ">
                        <WhatsAppIcon />
                        Send via Whatsapp
                    </Button>
                    <Button className="bg-dark-blue rounded-full h-11 flex flex-row gap-2 px-3">
                        <MailIcon />
                        Send via Email
                    </Button>
                </div>
            </div>
            <Accordion type="single" collapsible>
                {faq_data.map((item) => (
                    <AccordionItem value={item.question}>
                        <AccordionTrigger>
                            <div className="flex flex-row gap-3 items-center">
                                <Plus className="size-5" />
                                {item.question}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

export default FAQSection;
