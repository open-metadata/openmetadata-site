import FooterDev from "@/components/FooterDev/FooterDev";
import NavbarDev from "@/components/NavbarDev/NavbarDev.component"
import NavbarStrip from "@/components/NavbarDev/NavbarStrip.component"
import { CUSTOMER_GALLERY, HEADER_CUSTOMERS, INDUSTRY_LIST } from "@/constants/CustomerGallery.constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CaseStudiesPage = () => {
    const router = useRouter();
    const [activeIndustry, setActiveIndustry] = useState<string>('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [customers, setCustomers] = useState(CUSTOMER_GALLERY);
    const [inputValue, setInputValue] = useState<string>('');
        
    const handleTryOpenMetadataClick = () => {
        router.push('/#try-openmetadata');
    };

    const handleIndustryFilter = (industry: string) => {
        setActiveIndustry(industry);
        if (industry === 'All') {
            setCustomers(CUSTOMER_GALLERY);
        } else {
            const filteredCustomers = CUSTOMER_GALLERY.filter((customer) => customer.industry === industry);
            setCustomers(filteredCustomers);
        }
    };

    const handleInputChange = (value: string) => {
        setInputValue(value);
        const filteredCustomers = CUSTOMER_GALLERY.filter((customer) => 
            customer.company.toLowerCase().includes(value.toLowerCase()) || 
            customer.customerName.toLowerCase().includes(value.toLowerCase()) ||
            customer.customerDesignation.toLowerCase().includes(value.toLowerCase())
        );
        setCustomers(filteredCustomers);
    };

    return (
        <div>
            <div className="mx-auto fixed top-0 w-full z-[1030]">
                <NavbarDev onClick={handleTryOpenMetadataClick} />
                <NavbarStrip />
            </div>
            <div className="mt-20 md:mt-24 lg:mt-32">
                <div className="case-study-page">
                    <div className="max-w-[1440px] mx-auto py-28 md:py-20 px-5 md:px-10 xl:px-20">
                        <h1 className="font-medium text-[#292929] tracking-[-0.02em] text-4xl md:text-5xl">Success Stories & Case Studies</h1>
                        <div className="text-black mt-4 md:text-lg md:max-w-[72%]">With over 2000+ enterprise deployments, OpenMetadata is transforming how data teams work together and manage their data assets. From self-service analytics at Fortune 500 enterprises to data readiness for AI at innovative startups, explore how our community is leveraging the OpenMetadata.</div>
                        <div className="mt-12 grid sm:grid-cols-6 gap-4">
                            {HEADER_CUSTOMERS.map((customer, index) => (
                                <div key={customer.title} className={`bg-white rounded-[10px] p-3 card-shadow ${index < 2 ? 'sm:col-span-3' : 'sm:col-span-3 lg:col-span-2'}`}>
                                    <div className="relative">
                                        <Image 
                                            src={customer.backgroundImage} 
                                            alt={customer.title} width={100}
                                            height={100} 
                                            className={`w-full object-cover rounded-lg h-[150px] ${index > 1 ? 'md:h-[200px]' : 'md:h-[300px]'}`}
                                        />
                                        <Image 
                                            src={customer.logo} 
                                            alt={customer.title} width={100}
                                            height={100} 
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[45%]"
                                        />
                                    </div>
                                    <div className={`mt-4 font-medium text-black tracking-[-0.02em] px-2 text-2xl ${index > 1 ? 'lg:text-2xl' : 'lg:text-3xl'}`}>{customer.title}</div>
                                    <Link href={customer.url}>
                                        <div className="mt-5 mb-2 rounded-[3px] font-medium tracking-[-0.02em] mx-2 border-2 border-[#7147E8] max-w-fit px-4 py-2 text-[#7147E8]">
                                            {customer.buttonText}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto py-16 md:py-20 px-5 md:px-10 xl:px-20">
                    <div className="flex items-center gap-2 w-full lg:justify-between">
                        <div className="hidden gap-3 lg:flex">
                            {INDUSTRY_LIST.map((industry) => (
                                <button 
                                    key={industry} 
                                    className={`xl:text-lg tracking-[-0.02em] px-4 py-2 rounded-[3px] cursor-pointer ${activeIndustry === industry ? 'bg-[#7147E8] text-white' : 'text-[#767676] bg-[#EEEEEE]'}`} 
                                    onClick={() => handleIndustryFilter(industry)}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                        <div className="relative lg:hidden">
                            <button className="p-2 border border-[#C7C7C7] rounded-[3px]" onClick={() => setIsDropdownOpen(prev => !prev)}>
                                <Image src={`/assets/customer-gallery/filter.svg`} alt="Filter icon" width={20} height={20} />
                            </button>
                            <div className={`py-2 absolute top-10 left-0 w-[150px] flex flex-col gap-1 items-start bg-white shadow-lg ${!isDropdownOpen && 'hidden'}`}>
                                {INDUSTRY_LIST.map((industry) => (
                                    <button 
                                        key={industry} 
                                        className={`tracking-[-0.02em] px-4 py-1 rounded-[3px] cursor-pointer ${activeIndustry === industry ? 'text-[#7147E8]' : 'text-[#767676]'}`}
                                        onClick={() => handleIndustryFilter(industry)}
                                    >
                                        {industry}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex relative w-full sm:w-auto">
                            <Image src={`/assets/customer-gallery/search.svg`} alt="search" width={20} height={20} className="absolute top-1/2 left-3 -translate-y-1/2" />
                            <input 
                                className="border border-[#C7C7C7] outline-none rounded-[3px] pr-2 pl-10 py-[5px] sm:py-2 w-full sm:w-[300px]" 
                                value={inputValue}
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {customers.map((customer) => (
                                <div key={customer.company} className="bg-white rounded-[10px] px-4 py-5 card-shadow">
                                    <div className="min-h-[100px]">
                                        <Image
                                            className='mb-8'
                                            width={customer.imgSize.width}
                                            height={customer.imgSize.height}
                                            src={customer.logo}
                                            alt={customer.company}
                                            priority
                                        />
                                    </div>
                                    <div className="tracking-[-0.02em] sm:text-lg text-black min-h-[250px]">"{customer.testimonial}"</div>
                                    <div className="text-black mt-4">- {customer.customerName}, {customer.customerDesignation}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-[#DCECF8]">
                    <div className="max-w-[1440px] mx-auto py-8 md:py-16 px-5 md:px-10 xl:px-20">
                        <div className="text-black text-2xl md:text-4xl font-medium tracking-[-0.02em] md:max-w-[70%]">Stay up to date on company updates, product announcements, and other important news</div> 
                        <script src="https://js.hsforms.net/forms/embed/21369141.js" defer></script>
                        <div className="hs-form-frame" data-region="na1" data-form-id="160a8eb9-911f-4d26-abe4-2e4821755a5a" data-portal-id="21369141"></div>
                    </div>
                </div>
            </div>
            <FooterDev />
        </div>
    )
}

export default CaseStudiesPage