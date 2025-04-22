import Image from "next/image"

const ResourceGallery = ({ data }: { data: { image: string, header: string, description: string, href: string, isExternal?: boolean }[] }) => {
    return (
        <div className="mt-12">
                        <div className="text-[#292929] tracking-[-0.02em] text-2xl">You might also be interested in...</div>
                        <div className="mt-4 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
                            {data.map((item, i) => (
                                <div key={i} className="lp-card shadow-card rounded bg-white">
                                    <a href={item.href} target={item.isExternal ? '_blank' : '_self'}>
                                        <div className="grid grid-cols-5">
                                            <div className="landing-page-card relative rounded-l flex justify-center items-center col-span-2">
                                                <Image src={item.image} alt={item.header} fill className="p-3 object-contain" />
                                            </div>
                                            <div className="py-3 px-4 col-span-3">
                                                <div className="header-text text-[#474E71] text-sm sm:text-base font-medium mb-1">{item.header}</div>
                                                <div className="text-[#2E3457] text-xs sm:text-sm">{item.description}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
    )
}

export default ResourceGallery