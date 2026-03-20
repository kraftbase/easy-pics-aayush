import { TestimonialInterface } from '@/types/testimonial'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import QuoteIcon from './icons/quote';

type TestimonialCardProps = {
    testimonial: TestimonialInterface;
    className?: string
}

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
    return (
        <div className={cn('bg-white p-4 md:p-10 rounded-[16px] flex flex-col gap-4 md:gap-8 flex-1 relative', className)}>
            <QuoteIcon className='absolute' />
            <div className='flex flex-col gap-3.5 md:gap-6 px-1.5 justify-center items-center'>
                <Avatar className='size-12.5 md:size-17'>
                    <AvatarImage
                        src={
                            typeof testimonial.image === "string"
                                ? testimonial.image
                                : testimonial.image.src
                        }
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col gap-3'>
                    <div className='text-[#0D232F] font-semibold text-[clamp(14px,2vw,19px)] leading-5.25 tracking-[1%] text-center'>{testimonial.quote}</div>
                    <div className='text-gray text-[clamp(12px,1.8vw,18px)] leading-[100%] tracking-[1%] text-center'>{testimonial.description}</div>
                </div>
            </div>
            <div className='pt-3.5 md:pt-4 flex flex-col gap-0.5 md:gap-4 justify-center items-center border-t border-[#0000001A]'>
                <div className='font-semibold text-[#0D232F] text-[clamp(14px,2vw,19px)] leading-[100%] tracking-[1%]'>{testimonial.name}</div>
                <div className='text-gray text-[clamp(12px,1.8vw,18px)] leading-[100%] tracking-[1%]'>{testimonial.role}</div>
            </div>
        </div>
    )
}

export default TestimonialCard