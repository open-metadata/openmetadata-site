import Image from "next/image";

interface CustomerTestimonialProps {
    testimonial: {
        content: string;
        name: string;
        title: string;
        logo: string;
    }
}

const CustomerTestimonial = ({ testimonial }: CustomerTestimonialProps) => {
    return (
        <div className="case-study-testimonial mt-9">
            <div className="max-w-[1440px] text-[#292929] mx-auto text-center py-24 px-4 md:px-10 xl:px-20">
                <div className="flex justify-center">
                    <Image src="/assets/carrefour-customer/quotes.svg" alt="Quotes" width={40} height={35} />
                </div>
                <div className="text-[24px] leading-[32px] tracking-[-0.02em] mt-6 mx-auto md:max-w-[75%] md:text-[32px] md:leading-[42px]">"{testimonial.content}"</div>
                <div className="mt-8 text-[18px] font-bold">{testimonial.name}</div>
                <div className="text-[18px]">{testimonial.title}</div>
                <div className="mt-8 flex justify-center">
                    <Image src={testimonial.logo} alt="Logo" width={160} height={40} />
                </div>
            </div>
        </div>
    )
}

export default CustomerTestimonial;