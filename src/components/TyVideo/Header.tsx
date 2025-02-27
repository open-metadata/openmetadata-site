const TyHeader = ({header, description, videoSrc}: {header: string, description: string, videoSrc: string}) => {
    return (
        <div className="text-center lg:text-left xl:col-span-2">
                        <p className="uppercase text-[#7147E8] tracking-[0.04em] text-lg font-medium md:font-bold">on demand webinar video</p>
                        <h1 className="text-[#292929] tracking-[-0.02em] font-medium mt-4 mb-3 text-5xl md:text-6xl xl:max-w-[85%]">{header}</h1>
                        <p className="text-[#292929] tracking-[-0.02em] md:text-lg">{description}</p>
                        <div className="mt-12 relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={videoSrc}
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
    )
}

export default TyHeader