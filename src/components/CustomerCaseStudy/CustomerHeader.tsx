import Image from "next/image";
import ParamLink from "../ParamLink";

interface CustomerHeaderProps {
    customerHeader: {
        title: string;
        description: string;
        industry: string;
        technologies: string;
        videoUrl?: string;
        image?: string;
        blog?: {
            url: string;
            text: string;
        }
    },
    highlights: {
        id: number;
        count: string;
        description: string;
    }[];
}

const CustomerHeader = ({ customerHeader, highlights }: CustomerHeaderProps) => {
    return (
        <div className="max-w-[1440px] mx-auto py-24 md:py-20 px-4 md:px-10 xl:px-20">
            <div className="grid gap-12 lg:gap-3 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                    <p className="text-[#7147E8] tracking-[0.04em] uppercase font-bold text-[16px] sm:text-[20px]">Community Case Study</p>
                    <h1 className="text-[#292929] tracking-[-0.02em] font-medium my-4 text-[40px] leading-[48px] sm:text-[46px] sm:leading-[54px] xl:text-[52px] xl:leading-[62px]">{customerHeader.title}</h1>
                    <div className={`grid gap-4 mt-5 sm:grid-cols-${highlights.length}`}>
                        {highlights.map(item => (
                            <div className="text-[#292929]" key={item.id}>
                                <div className="text-[26px] font-bold text-[#7147E8]">{item.count}</div>
                                <p className="text-[18px]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="justify-self-center self-center w-full max-w-[560px]">
                    {customerHeader?.image ? (
                        <Image
                            src={customerHeader.image}
                            alt={customerHeader.title}
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                ) : (
                        <div className="relative w-full aspect-video">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${customerHeader.videoUrl}`}
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid gap-y-12 mt-[40px] text-[#292929] text-[18px] sm:text-[20px] sm:grid-cols-2 lg:gap-y-0 lg:gap-3 lg:grid-cols-5">
                <div className="sm:col-span-2 lg:col-span-3 relative">
                    <div className="whitespace-pre-line">{customerHeader.description}</div>
                    {customerHeader?.blog && (
                        <ParamLink 
                            href={customerHeader?.blog?.url} 
                            name={customerHeader?.blog?.text} 
                            className="relative top-5 text-[#7147E8] hover:underline" 
                        />
                    )}
                </div>
                <div className="lg:justify-self-center">
                    <div className="font-bold uppercase">Industry</div>
                    <p className="text-[18px] mt-2">{customerHeader.industry}</p>
                </div>
                <div className="lg:justify-self-center">
                    <div className="font-bold uppercase">Technologies</div>
                    <p className="text-[18px] mt-2">{customerHeader.technologies}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerHeader;