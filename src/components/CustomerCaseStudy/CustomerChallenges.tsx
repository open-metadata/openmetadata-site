import Image from "next/image";

interface CustomerChallengesProps {
    data: {
        image: string;
        title: string;
        description: string;
        challenges: { header: string; description: string }[];
    }[];
}

const CustomerChallenges = ({ data }: CustomerChallengesProps) => {
    return (
        <div className="max-w-[800px] mx-auto px-4">
            <div className="my-12 md:my-24">
                {data.map(item => (
                    <div key={item.title} className="text-[#292929]">
                        <div className="font-medium tracking-[-0.02em] text-[32px] leading-[38px] mt-12 mb-6 sm:mt-20 sm:mb-8 sm:text-[46px] sm:leading-[52px]">{item.title}</div>
                        <div className="sm:text-[20px] whitespace-pre-line">{item.description}</div>
                        <div className="my-8 flex flex-col gap-5 sm:my-12">
                            {item.challenges.map(challenge => (
                                <div key={challenge.header} className="sm:text-[20px]">
                                    <div className="font-bold text-[#7147E8]">{challenge.header}</div>
                                    <div className="mt-2 sm:mt-3">{challenge.description}</div>
                                </div>
                            ))}
                        </div>
                        <Image src={item.image} alt={item.title} width={1000} height={1000} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerChallenges;