import { StaticImageData } from "next/image";

export interface TestimonialInterface {
    image: string | StaticImageData;
    quote: string;
    description: string;
    name: string;
    role: string;
    rating: number
}